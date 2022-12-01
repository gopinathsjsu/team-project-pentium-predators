const Carousel = require('./../models/carouselModel');
const Flight = require('./../models/flightModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.addCarousel = catchAsync(async (req, res, next) => {
    const carousel = await Carousel.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            carousel,
        },
    });
});
