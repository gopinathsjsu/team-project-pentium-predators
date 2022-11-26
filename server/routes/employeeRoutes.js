const express = require('express');
const employeeController = require('./../controllers/employeeController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .post(
        '/addEmployee',
        authController.protect,
        authController.restrictTo('admin'),
        employeeController.addEmployee
    )
    .get('/login', authController.login)
    .delete(
        '/deleteEmployee/:id',
        authController.protect,
        authController.restrictTo('admin'),
        employeeController.deleteEmployee
    );

module.exports = router;
