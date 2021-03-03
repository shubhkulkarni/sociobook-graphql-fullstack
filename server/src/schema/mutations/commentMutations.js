const { GraphQLNonNull, GraphQLString } = require("graphql");
const { createComment, likeUnlikeComment, deleteComment } = require("../../controllers/commentsController");
const CommentType = require("../types/commentType");

exports.create_comment = {
  type: CommentType,
  args: {
    postId: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: createComment,
};

exports.like_comment = {
  type: CommentType,
  args: {
    commentId: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: likeUnlikeComment,
};

exports.delete_comment = {
    type: CommentType,
    args: {
      commentId: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: deleteComment,
}