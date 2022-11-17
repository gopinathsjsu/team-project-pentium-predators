const Employee = require('./../models/employeeModel');
const catchAsync = require('./../utils/catchAsync');

exports.addEmployee = catchAsync(async (req, res, next) => {
    const newEmployee = await Employee.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        airline: req.body.airline,
    });

    res.status(201).json({
        status: 'success',
        data: {
            employee: newEmployee,
        },
    });
});

exports.deleteEmployee = catchAsync(async (req, res, next) => {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    res.status(201).json({
        status: 'success',
        data: {
            employee: deletedEmployee,
        },
    });
});
