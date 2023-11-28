// controllers/companyController.js
exports.index = (req, res) => {
    res.render("appointments/list");
  };
  
  exports.agenda = (req, res) => {
    res.render("appointments/agenda");
  };
  
  exports.upcoming = (req, res) => {
    res.render("appointments/upcoming");
  };
  
  