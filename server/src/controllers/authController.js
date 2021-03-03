const { isEmail } = require("validator");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const { getJWT } = require("../utils/getToken");

exports.signup = catchAsync(async (parent, args, req) => {
  const { name, email, password, confirmPassword } = args;

  const user = await User.create({ name, email, password, confirmPassword });

  const token = await getJWT({ id: user._id });
  const obj = {};
  obj.email = user.email;
  obj.name = user.name;

  return { ...obj, accessToken: token };
});

exports.login = catchAsync(async (parent, args, req) => {
  const { email, password } = args;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new AppError("User does not exist", 500);
  }
  const isValidUser = await user.matchPasswords(password, user.password);
  if (!isValidUser) {
    throw new AppError("Incorrect email or password", 500);
  }
  const token = await getJWT({ id: user._id });
  const obj = {};
  obj.email = user.email;
  obj.name = user.name;
  return { ...obj, accessToken: token };
});

