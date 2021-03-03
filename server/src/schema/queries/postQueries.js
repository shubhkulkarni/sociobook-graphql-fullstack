const { GraphQLList } = require("graphql");
const { getAllPosts } = require("../../controllers/postControllers");
const PostType = require("../types/postType");

exports.get_all_posts = {
  type: new GraphQLList(PostType),
  resolve: getAllPosts,
};
