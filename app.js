// app.js
const express = require('express');
const app = express();
const path = require('path');
const setupORM = require('./models/orm');
const webRoutes = require('./routes/webRoutes');
const apiRoutes = require('./routes/apiRoutes');

// const expressLayouts = require('express-ejs-layouts');

const volunteerModel = require('./models/model/volunteer');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts middleware
// app.use(expressLayouts);

// Middleware
app.use(express.urlencoded({ extended: true }));
// Serve static files (images, CSS, etc.) from the 'public' directory
app.use((req, res, next) => {
  const basePath = req.baseUrl === '/' ? '' : req.baseUrl;
  express.static(path.join(__dirname, 'public', basePath))(req, res, next);
});

// Setup routes
webRoutes(app);
apiRoutes(app);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
