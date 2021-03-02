const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");
const { signup, login } = require("../controllers/authController");
const { getUsers } = require("../controllers/userController");
const {
  signup_mutation,
  login_mutation,
} = require("./mutations/authMutations");
const UserType = require("./types/user");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: getUsers,
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: signup_mutation,
    login: login_mutation,
  },
});

module.exports = new GraphQLSchema({
  mutation: Mutation,
  query: RootQuery,
});
