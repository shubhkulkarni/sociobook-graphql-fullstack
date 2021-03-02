const { isEmail } = require("validator");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const { getJWT } = require("../utils/getToken");

exports.signup = async (parent, args, req) => {
  const { name, email, password, confirmPassword } = args;
  try {
    const user = await User.create({ name, email, password, confirmPassword });

    const token = await getJWT({ id: user._id });

    return { ...user._doc, accessToken: token };
  } catch (err) {
    throw err;
  }
};
