const express = require('express');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/users', userRoutes);
// Add other routes like /siteinfo, /social, etc.

module.exports = router;
