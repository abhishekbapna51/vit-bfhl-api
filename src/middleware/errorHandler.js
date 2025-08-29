module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    is_success: false,
    message: 'Internal Server Error'
  });
};
