const express = require('express');
const airlineController = require('./../controllers/airlineController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .post(
        '/addAirline',
        authController.protect,
        authController.restrictTo('admin'),
        airlineController.addAirline
    )
    .delete(
        '/removeAirline/:id',
        authController.protect,
        authController.restrictTo('admin'),
        airlineController.removeAirline
    );

module.exports = router;
