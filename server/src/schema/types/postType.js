const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const UserType = require("./user");

const PostType = new GraphQLObjectType({
  name: "PostType",
  fields: () => ({
    createdBy: { type: GraphQLString },
    image: { type: GraphQLString },
    text: { type: GraphQLString },
    // likes: { type: new GraphQLList(UserType) },
    createdAt: { type: GraphQLString },
  }),
});

module.exports = PostType;
