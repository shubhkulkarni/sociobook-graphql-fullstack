const Comment = require("../models/commentModel");
const Post = require("../models/postModel");
const { catchAsync } = require("../utils/catchAsync");
const { checkAuthStatus } = require("../utils/checkAuthStatus");

exports.createComment = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  const { postId, text } = args;
  const { user } = req;
  const post = await Post.findById(postId);
  if (!post) {
    throw new AppError("Post does not exist");
  }
  const comment = await Comment.create({ text, createdBy: user._id, postId });
  const { comments } = post;
  comments.push(comment._id);
  post.comments = comments;
  await post.save({ validateBeforeSave: false });
  return { ...comment._doc };
});

exports.likeUnlikeComment = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  const { commentId } = args;
  const { user } = req;
  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new AppError("Comment does not exist");
  }
  const { likedBy } = comment;
  if (!likedBy.includes(user._id)) {
    likedBy.push(user._id);
    comment.likedBy = likedBy;
    return await comment.save({ validateBeforeSave: false });
  }

  return await Comment.update(
    { _id: commentId },
    { $pull: { likedBy: user._id } }
  );
});

exports.deleteComment = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  const { user } = req;
  const { commentId } = args;
  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new AppError("Comment does not exist");
  }
  if (comment.createdBy !== user._id) {
    throw new AppError(
      "Access denied . you cannot delete comment created by others ."
    );
  }
  await Post.update(
    { _id: comment.postId },
    { $pull: { comments: commentId } }
  );
  return await Comment.findByIdAndDelete(commentId);
});

exports.replyComment = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  const { user } = req;
  const { commentId, text } = args;
  const comment = await Post.findById(commentId);
  if (!comment) {
    throw new AppError("Comment does not exist");
  }
  const reply = await Comment.create({
    text,
    createdBy: user._id,
    isReply: true,
  });
  const { replies } = comment;
  replies.push(reply._id);
  comment.replies = comments;
  await comment.save({ validateBeforeSave: false });
  return { ...comment._doc };
});
