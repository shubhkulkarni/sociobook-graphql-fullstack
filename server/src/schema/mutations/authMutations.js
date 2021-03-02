const { signup, login } = require("../../controllers/authController")
const {

    GraphQLString,
    GraphQLNonNull,
    
  } = require("graphql");
const UserType = require("../types/user");


exports.signup_mutation = {
    type: UserType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      confirmPassword: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: signup,
  }

  exports.login_mutation = {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: login,
  }

  