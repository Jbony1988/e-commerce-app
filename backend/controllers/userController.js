import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth User & get token
//  @route GET api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// @desc Register User
//  @route POST api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc Logout user / clear cookie
//  @route POST api/users
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc Get User Profile
//  @route GET api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send(" get user profile");
});

// @desc Update User Profile & token will be used instead of id, because user will only have access to their profile
//  @route PUT api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send(" update user profile");
});

// @desc Get Users
//  @route GET api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send(" get users profile");
});

// @desc Get User by ID
//  @route GET api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send(" get user by id");
});

// @desc Get User by ID
//  @route PUT api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
// @desc Delete Users
//  @route DELETE api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send(" delete users");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
