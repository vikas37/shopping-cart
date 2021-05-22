const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Review = require("../models/review");
const { isLoggedin } = require("../middleware");

// to show all products in the page
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.render("products/index", { products });
  } catch (e) {
    console.log("Something went wrong");
    req.flash("error", "cannot find products");
    res.redirect("/error");
  }
});

// get the form to create new product
router.get("/products/new", isLoggedin, (req, res) => {
  res.render("products/new");
});

// create new product
router.post("/products", isLoggedin, async (req, res) => {
  try {
    await Product.create(req.body.product);
    req.flash("success", "Product created successfully");
    res.redirect("/products");
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot create products");
    res.redirect("/error");
  }
});

// show a particular product
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("reviews");
    res.render("products/show", { product });
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot show the product");
    res.redirect("/error");
  }
});

// to edit a product
router.get("/products/:id/edit", isLoggedin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("products/edit", { product });
  } catch (e) {
    console.log(e.message);
    req.flash("error", "Cannot Edit this Product");
    res.redirect("/error");
  }
});

//update product
router.patch("/products/:id", isLoggedin, async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body.product);
    req.flash("success", "product updated successfully");
    res.redirect(`/products/${req.params.id}`);
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot update the product");
    res.redirect("/error");
  }
});

// to delete a product
router.delete("/products/:id", isLoggedin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot delete the product");
    res.redirect("/error");
  }
});

//creating a new comment on a product
router.post("/products/:id/review", isLoggedin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const review = new Review({
      user: req.user.username,
      ...req.body,
    });

    console.log(review);
    product.reviews.push(review);
    await review.save();
    await product.save();
    res.redirect(`/products/${req.params.id}`);
  } catch (e) {
    console.log(e.message);
    req.flash("error", "cannot add comment to this product");
    res.redirect("/error");
  }
});

router.get("/error", (req, res) => {
  res.status(404).render("error");
});

module.exports = router;
