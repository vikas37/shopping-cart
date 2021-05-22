const isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash(
      "error",
      "please log in first with a valid username and password"
    );
    return res.redirect("/login");
  }
  next();
};

module.exports = {
  isLoggedin,
};
