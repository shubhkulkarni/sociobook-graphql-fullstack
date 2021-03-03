const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { getLikes } = require("../../controllers/postControllers");
const UserType = require("./user");

const PostType = new GraphQLObjectType({
  name: "PostType",
  fields: () => ({
    _id: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    image: { type: GraphQLString },
    text: { type: GraphQLString },
    likedBy: { type: new GraphQLList(UserType) },
    createdAt: { type: GraphQLString },
  }),
});

module.exports = PostType;
