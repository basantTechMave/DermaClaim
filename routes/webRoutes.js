// routes/setupRoutes.js
const userRoutes = require('./web/userRoutes');
const volunteerRoutes = require('./web/volunteerRoutes');
const productRoutes = require('./web/productRoutes');
const companyRoute = require('./web/companyRoute');
const assessmentRoutes = require('./web/assessmentRoutes');
const appointmentRoutes = require('./web/appointmentRoutes');
const authRoutes = require('./web/authRoutes');

module.exports = function (app) {
    // Use the user routes
    // app.use('/user', userRoutes);
    app.use('/volunteer', volunteerRoutes);
    app.use('/product', productRoutes);
    app.use('/company', companyRoute);
    app.use('/assessment', assessmentRoutes);
    app.use('/appointment', appointmentRoutes);
    app.use('/auth', authRoutes);
};
