// controllers/authController.js
exports.login = (req, res) => {
    res.render("auth/login");
};
  
exports.register = (req, res) => {
    res.render("auth/register");
};

exports.reset = (req, res) => {
    res.render("auth/reset-password");
};

exports.index = (req, res) => {
    res.render("index");
};