const UserModel = require('../models/UserModel');

const getAllUsers = async () => {
  const users = UserModel.find();
  return users;
};

const userExists = async (email) => {
  const user = await UserModel.findOne({ email: email });
  console.log(user);
  return user !== null;
};

module.exports = { userExists, getAllUsers };
