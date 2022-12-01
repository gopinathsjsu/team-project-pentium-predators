const Flight = require('./../models/flightModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.addFlight = catchAsync(async (req, res, next) => {
    const flight = await Flight.create({
        flightNumber: req.body.flightNumber,
        airline: req.user.airline,
        flightType: req.body.flightType,
        destination: req.body.destination,
        time: req.body.time,
    });

    res.status(201).json({
        status: 'success',
        data: {
            flight,
        },
    });
});

exports.deleteFlight = catchAsync(async (req, res, next) => {
    const flight = await Flight.findById(req.params.id);
    let deletedFlight;
    if (flight.airline === req.user.airline) {
        deletedFlight = await Flight.findByIdAndDelete(req.params.id);
    } else {
        return next(
            new AppError(
                'You do not have permission to remove this flight',
                400
            )
        );
    }

    res.status(201).json({
        status: 'success',
        data: {
            deletedFlight,
        },
    });
});

exports.getAllFlights = catchAsync(async (req, res, next) => {
    const flights = await Flight.find({});

    res.status(201).json({
        status: 'success',
        data: {
            flights,
        },
    });
});
