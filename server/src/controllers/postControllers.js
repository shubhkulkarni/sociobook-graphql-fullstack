const Post = require("../models/postModel");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const { checkAuthStatus } = require("../utils/checkAuthStatus");

exports.createPost = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  const { text, image } = args;

  const { user } = req;

  return await Post.create({ text, image, createdBy: user._id });
});

exports.getAllPosts = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);

  return await Post.find({}).populate("likedBy");
});

exports.likeUnLikePost = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);

  const { postId } = args;
  const post = await Post.findById(postId);
  if (!post) {
    throw new AppError("Post does not exist");
  }
  const { likedBy } = post;
  if (!likedBy.includes(user._id)) {
    likedBy.push(user._id);
    post.likedBy = likedBy;
    return await post.save({ validateBeforeSave: false });
  }

  return await Post.update({ _id: postId }, { $pull: { likedBy: user._id } });
});

exports.deletePost = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  const { user } = req;
  const { postId } = args;
  const post = await Post.findById(postId);
  if (!post) {
    throw new AppError("Post does not exist");
  }
  if (post.createdBy !== user._id) {
    throw new AppError(
      "Access denied . you cannot delete post created by others ."
    );
  }

  return await Post.findByIdAndDelete(postId);
});
