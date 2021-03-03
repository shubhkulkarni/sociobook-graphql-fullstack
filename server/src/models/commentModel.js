const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    text: { type: String, required: [true, "comment is empty"], minLength: 1 },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    likedBy: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    replies: [
      {
        type: Schema.ObjectId,
        ref: "Comment",
      },
    ],
    isReply: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
