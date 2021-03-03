const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require("graphql");

const {
  signup_mutation,
  login_mutation,
} = require("./mutations/authMutations");
const {
  create_comment,
  like_comment,
  delete_comment,
  reply_comment,
} = require("./mutations/commentMutations");
const {
  create_post,
  like_post,
  delete_post,
} = require("./mutations/postMutations");
const { update_user_profile } = require("./mutations/userMutation");
const { get_all_posts } = require("./queries/postQueries");
const { get_all_users, get_user } = require("./queries/userQueries");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    posts: get_all_posts,
    users: get_all_users,
    user: get_user,
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
    deleteComment: delete_comment,
    replyComment: reply_comment,
    updateUserProfile: update_user_profile,
  },
});

module.exports = new GraphQLSchema({
  mutation: Mutation,
  query: RootQuery,
});
