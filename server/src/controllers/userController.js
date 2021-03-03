const User = require("../models/user");
const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const { checkAuthStatus } = require("../utils/checkAuthStatus");

exports.getAllUsers = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  return await User.find({}).select("-password -createdAt -updatedAt");
});

exports.getUser = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  const { userId } = args;
  return await User.findById(userId).select("-password -createdAt -updatedAt");
});

exports.updateUserProfile = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);

  const { _id } = req.user;
  return await User.findByIdAndUpdate(_id, { ...args }).select(
    "-password -createdAt -updatedAt"
  );
});

exports.followUnfollow = catchAsync(async (parent, args, req) => {
  checkAuthStatus(req);
  const { user } = req;
  const { personId } = args;
  if (user._id == personId) {
    throw new AppError("You cannot follow yourself, follow others :)");
  }

  const person = await User.findById(personId);
  if (!person) {
    throw new AppError("User does not exist");
  }
  const { followers } = person;
  if (!followers.includes(user._id)) {
    followers.push(user._id);
    person.followers = followers;
    await person.save({ validateBeforeSave: false });
    const foundUser = await User.findById(user._id);
    const { following } = foundUser;
    following.push(personId);
    foundUser.following = following;
    return await foundUser.save({ validateBeforeSave: false });
  }

  await User.update({ _id: personId }, { $pull: { followers: user._id } });
  return await User.update(
    { _id: user._id },
    { $pull: { following: personId } }
  );
});
