const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { catchAsyncMid } = require("../utils/catchAsync");

exports.checkAuthentication = catchAsyncMid(async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer")) {
    req.auth = false;
    return next();
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    req.auth = false;
    return next();
  }

  const isTokenValid = await new Promise((resolve, reject) => {
    resolve(jwt.verify(token, process.env.JWT_SECRET));
  });
  const foundUser = await User.findById(isTokenValid.id);
  if (!isTokenValid || !foundUser) {
    req.auth = false;
    return next();
  }

  req.user = foundUser;
  req.auth = true;
  next();
});
