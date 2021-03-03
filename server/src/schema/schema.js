const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require("graphql");

const { getUsers } = require("../controllers/userController");
const {
  signup_mutation,
  login_mutation,
} = require("./mutations/authMutations");
const {
  create_comment,
  like_comment,
  delete_comment,
} = require("./mutations/commentMutations");
const {
  create_post,
  like_post,
  delete_post,
} = require("./mutations/postMutations");
const { get_all_posts } = require("./queries/postQueries");
const UserType = require("./types/user");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    posts: get_all_posts,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: signup_mutation,
    login: login_mutation,
    createPost: create_post,
    likePost: like_post,
    deletePost: delete_post,
    createComment: create_comment,
    likeComment: like_comment,
    deleteComment: delete_comment
  },
});

module.exports = new GraphQLSchema({
  mutation: Mutation,
  query: RootQuery,
});
