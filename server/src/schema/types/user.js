const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { getUserPosts } = require("../../controllers/postControllers");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    name: { type: GraphQLString },
    _id: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    confirmPassword: { type: GraphQLString },
    accessToken: { type: GraphQLString },
    profileImage: { type: GraphQLString },
    city: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    profession: { type: GraphQLString },
    hobbies: { type: new GraphQLList(GraphQLString) },
    posts: {
      type: new GraphQLList(require("./postType")),
      resolve: getUserPosts,
    },
    followers:{
      type: new GraphQLList(UserType)
    },
    following:{
      type: new GraphQLList(UserType)
    },
  }),
});

module.exports = UserType;
