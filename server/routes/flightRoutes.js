const express = require('express');
const flightController = require('./../controllers/flightController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .post(
        '/addFlight',
        authController.protect,
        authController.restrictTo('employee'),
        flightController.addFlight
    )
    .delete(
        '/deleteFlight/:id',
        authController.protect,
        authController.restrictTo('employee'),
        flightController.deleteFlight
    )
    .get('/getAllFlights', flightController.getAllFlights);

module.exports = router;
