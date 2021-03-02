const Post = require("../models/postModel");
const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");

exports.createPost = catchAsync(async (parent, args, req) => {
  const { user, auth } = req;
  const { text, image } = args;
  if (!auth) {
    throw new AppError("Unauthorised . Please login .");
  }
  return await Post.create({ text, image, createdBy: user._id });
});
