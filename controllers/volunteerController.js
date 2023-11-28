// controllers/volunteerController.js
exports.index = (req, res) => {
  res.render("volunteer/list");
};

exports.add = (req, res) => {
  res.render("volunteer/add");
};

exports.edit = (req, res) => {
  res.render("volunteer/edit");
};

exports.view = (req, res) => {
  res.render("volunteer/view");
};


// // controllers/volunteerController.js
// const setupORM = require('../orm/setup');
// const volunteerModel = require('../models/volunteer');

// const db = setupORM();

// const Volunteer = volunteerModel(db);

// // Create a new volunteer
// exports.createVolunteer = function (req, res) {
//   const { name, surname, email } = req.body;

//   Volunteer.create({ name, surname, email }, function (err, volunteer) {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     return res.status(201).json(volunteer);
//   });
// };

// // Get all volunteers
// exports.getAllVolunteers = function (req, res) {
//   Volunteer.find({}, function (err, volunteers) {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     return res.status(200).json(volunteers);
//   });
// };

// // Get a specific volunteer by ID
// exports.getVolunteerById = function (req, res) {
//   const { id } = req.params;

//   Volunteer.get(id, function (err, volunteer) {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     if (!volunteer) {
//       return res.status(404).json({ error: 'Volunteer not found' });
//     }

//     return res.status(200).json(volunteer);
//   });
// };

// // Update a volunteer by ID
// exports.updateVolunteer = function (req, res) {
//   const { id } = req.params;
//   const { name, surname, email } = req.body;

//   Volunteer.find({ id }, function (err, volunteers) {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     if (!volunteers || volunteers.length === 0) {
//       return res.status(404).json({ error: 'Volunteer not found' });
//     }

//     const volunteer = volunteers[0];
//     volunteer.name = name;
//     volunteer.surname = surname;
//     volunteer.email = email;

//     volunteer.save(function (err) {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }

//       return res.status(200).json(volunteer);
//     });
//   });
// };

// // Delete a volunteer by ID
// exports.deleteVolunteer = function (req, res) {
//   const { id } = req.params;

//   Volunteer.find({ id }, function (err, volunteers) {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     if (!volunteers || volunteers.length === 0) {
//       return res.status(404).json({ error: 'Volunteer not found' });
//     }

//     const volunteer = volunteers[0];

//     volunteer.remove(function (err) {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }

//       return res.status(204).send();
//     });
//   });
// };
