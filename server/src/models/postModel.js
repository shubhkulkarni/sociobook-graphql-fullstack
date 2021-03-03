const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    text: { type: String, required: [true, "post is empty"], minLength: 1 },
    image: {
      type: String,

      trim: true,
      lowercase: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likedBy: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
