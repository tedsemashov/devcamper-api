const advancedResults = (model, populate) => async (req, res, next) => {
  // Copy req.query
  const reqQuesry = { ...req.query };

  // Field to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFields and delete them from reqQuesry
  removeFields.forEach(param => delete reqQuesry[param]);

  // Create operators $gt, $gte etc
  // https://www.mongodb.com/docs/manual/reference/operator/query/gt/
  let query = JSON.stringify(req.query)
    .replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

  // Finding resource
  query = model.find(JSON.parse(query));

  // Select Fields (just what we need, like name, description, etc)
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields); // https://mongoosejs.com/docs/queries.html
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments(); // count all the documents

  query = query.skip(startIndex).limit(limit);

  // Populate data
  if (populate) {
    query = query.populate(populate);
  }

  // Executing query
  const results = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.advancedResults = {
    success: true,
    count: results.length,
    pagination,
    data: results,
  };

  next();
};

module.exports = advancedResults;
