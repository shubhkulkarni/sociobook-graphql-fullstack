const { GraphQLList ,GraphQLNonNull, GraphQLString} = require("graphql");
const { getAllUsers, getUser } = require("../../controllers/userController");
const UserType = require("../types/user");

exports.get_all_users = {
  type: new GraphQLList(UserType),
  resolve: getAllUsers,
};

exports.get_user = {
    type: UserType,
    args:{
        userId :{type:new GraphQLNonNull(GraphQLString)}
    },
    resolve:getUser
}