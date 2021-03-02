const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    confirmPassword: { type: GraphQLString },
    accessToken: { type: GraphQLString },
    profileImage: { type: GraphQLString },
    city: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    profession: { type: GraphQLString },
    hobbies: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = UserType;
