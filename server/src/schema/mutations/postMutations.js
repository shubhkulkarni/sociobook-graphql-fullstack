const { GraphQLNonNull, GraphQLString } = require("graphql");
const {
  createPost,
  likeUnLikePost,
  deletePost,
} = require("../../controllers/postControllers");
const PostType = require("../types/postType");

exports.create_post = {
  type: PostType,
  args: {
    text: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLString },
  },
  resolve: createPost,
};

exports.like_post = {
  type: PostType,
  args: {
    postId: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: likeUnLikePost,
};

exports.delete_post = {
  type: PostType,
  args: {
    postId: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: deletePost,
};
