const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

//get the signup form
router.get("/register", async (req, res) => {
  res.render("auth/signup");
});

router.post("/register", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
    });
    const newUser = await User.register(user, req.body.password);
    //console.log(newUser);
    req.flash("success", "User registered successfully");
    res.redirect("/products");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
});

//get the login form
router.get("/login", async (req, res) => {
  res.render("auth/login");
});

//for login the user
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", `Welcome Back ${req.user.username} !!`);
    res.redirect("/products");
  }
);

// to logout the user
router.get("/logout", (req, res) => {
  req.logOut();
  req.flash("success", "Logged Out Successfully");
  res.redirect("/login");
});

module.exports = router;
