const { GraphQLNonNull, GraphQLString } = require("graphql");
const { createPost } = require("../../controllers/postControllers");
const PostType = require("../types/postType");

exports.create_post = {
  type: PostType,
  args: {
    text: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLString },
  },
  resolve: createPost,
};
