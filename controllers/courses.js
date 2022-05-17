const Course = require('../models/Course');
// const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get cources
// @route   GET /api/v1/cources
// @route   GET /api/v1/bootcamps/:bootcampId/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res) => {
  let query;

  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Course.find().populate({ path: 'bootcamp', select: 'name description' }); // Populate data method
  }

  const cources = await query;

  res.status(200).json({
    success: true,
    count: cources.length,
    data: cources,
  });
});
