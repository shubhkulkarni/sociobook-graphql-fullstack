const { GraphQLList, GraphQLString } = require("graphql");
const { updateUserProfile, followUnfollow } = require("../../controllers/userController");
const UserType = require("../types/user");

exports.update_user_profile = {
  type: UserType,
  args: {
    name: { type: GraphQLString },

    email: { type: GraphQLString },

    profileImage: { type: GraphQLString },
    city: { type: GraphQLString },
    birthDate: { type: GraphQLString },
    profession: { type: GraphQLString },
    hobbies: { type: new GraphQLList(GraphQLString) },
  },
  resolve: updateUserProfile,
};

exports.follow_unfollow = {
    type: UserType,
    args: {
        personId: { type: GraphQLString },

    },resolve:followUnfollow
}