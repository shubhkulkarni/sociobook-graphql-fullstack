const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} = require("graphql");
const UserType = require("./user");

const CommentType = new GraphQLObjectType({
  name: "CommentType",
  fields: () => ({
    _id: { type: GraphQLString },
    createdBy: { type: UserType },
    postId: { type: GraphQLString },
    text: { type: GraphQLString },
    likedBy: { type: new GraphQLList(UserType) },
    createdAt: { type: GraphQLString },
    replies: { type: new GraphQLList(CommentType) },
    isReply: { type: GraphQLBoolean },
  }),
});

module.exports = CommentType;
