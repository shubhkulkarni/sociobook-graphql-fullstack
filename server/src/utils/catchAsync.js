exports.catchAsync = (fn) => {
  return (parent, args, req, next) => fn(parent, args, req).catch(next);
};

exports.catchAsyncMid = (fn) => {
  return (req, res, next) => fn(req, res, next).catch(next);
};
