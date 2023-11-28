// controllers/companyController.js
exports.index = (req, res) => {
    res.render("company/list");
  };
  
  exports.add = (req, res) => {
    res.render("company/add");
  };
  
  exports.edit = (req, res) => {
    res.render("company/edit");
  };
  
  exports.view = (req, res) => {
    res.render("company/view");
  };
  