const AppError = require("./AppError");

exports.checkAuthStatus = (req) => {
  const { auth } = req;
  if (!auth) {
    throw new AppError("Unauthorised . Please login .");
  }
};
