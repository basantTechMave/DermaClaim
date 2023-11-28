// routes/setupRoutes.js
const authApiRoutes = require('./apis/authRoutes');
const userApiRoutes = require('./apis/userRoutes');

module.exports = function (app) {
  // API Routes
  app.use('/api/auth', authApiRoutes);
  app.use('/api/user', userApiRoutes);

};
