const AppError = require("../utils/AppError");

exports.getUsers = (parent, args, req) => {
  if (!req.auth) throw new AppError("Unauthorized", 401);
  return [{ name: "Shubham" }];
};
