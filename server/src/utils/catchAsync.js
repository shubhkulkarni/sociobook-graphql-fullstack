exports.catchAsync = (fn) => {
  return (parent, args, req, next) => fn(parent, args, req).catch(next);
};
