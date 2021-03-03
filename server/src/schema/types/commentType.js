const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const UserType = require("./user");

const CommentType = new GraphQLObjectType({
  name: "CommentType",
  fields: () => ({
    _id: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    postId: { type: GraphQLString },
    text: { type: GraphQLString },
    likedBy: { type: new GraphQLList(UserType) },
    createdAt: { type: GraphQLString },
  }),
});

module.exports = CommentType;
