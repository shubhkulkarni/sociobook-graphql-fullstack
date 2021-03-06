const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const CommentType = require("./commentType");
const UserType = require("./user");

const PostType = new GraphQLObjectType({
  name: "PostType",
  fields: () => ({
    _id: { type: GraphQLString },
    createdBy: { type: UserType },
    image: { type: GraphQLString },
    text: { type: GraphQLString },
    likedBy: { type: new GraphQLList(UserType) },
    createdAt: { type: GraphQLString },
    comments: { type: new GraphQLList(CommentType) },
  }),
});

module.exports = PostType;
