const express = require("express");
const router = express.Router();
const { isLoggedin } = require("../middleware");
const Product = require("../models/product");
const User = require("../models/user");

router.get("/user/:userId/cart", isLoggedin, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("cart");
    res.render("cart/showCart", { userCart: user.cart });
  } catch (e) {
    req.flash("error", "Cannot add this product to the cart");
    res.render("error");
  }
});

router.post("/user/:id/cart/", isLoggedin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const user = req.user;
    user.cart.push(product);
    await user.save();
    req.flash("success", "Product added to the cart");
    res.redirect(`/user/${req.user._id}/cart`);
  } catch (e) {
    req.flash("error", "Unable to get the cart at the moment");
    res.render("error");
  }
});

router.delete("/user/:userId/cart/:id", async (req, res) => {
  const { userId, id } = req.params;
  await User.findByIdAndUpdate(userId, { $pull: { cart: id } });
  res.redirect(`/user/${req.user._id}/cart`);
});

router.get("/cart/payment", (req, res) => {
  res.render("payment/payment");
});

module.exports = router;
