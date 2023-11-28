// controllers/companyController.js
exports.index = (req, res) => {
    res.render("assessment/list");
  };
  
  exports.add = (req, res) => {
    res.render("assessment/add");
  };
  
  exports.edit = (req, res) => {
    res.render("assessment/edit");
  };
  
  exports.view = (req, res) => {
    res.render("assessment/view");
  };
  