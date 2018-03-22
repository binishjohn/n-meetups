const express = require('express');
const meetupRoute = require('./meetup.route.js');

const router = express.Router();
router.use("/meetups",meetupRoute);


module.exports = router;
