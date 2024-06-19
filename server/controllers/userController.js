import { User } from "../models/User.js";
import catchAsync from "../utils/catchAsync.js";

// Function to get currently logged-in user information.
export const getCurrentUser = catchAsync(async (req, res) => {
  res.status(200).json(req.user); // Responds with the user object from the request object.
});

// export const updateUserInfo = catchAsync(async (req, res) => {
//   res.status(200).json(req.user); // Responds with the user object from the request object.
// });

// Function to get all users except the currently logged-in one.
export const getUsersExceptCurrent = catchAsync(async (req, res) => {
  const loggedInUserId = req.user._id; // Extracts logged-in user's ID.
  const filteredUsers = await User.find({
    _id: { $ne: loggedInUserId },
  }).select("-password"); // Finds all users excluding the logged-in user and excludes password field.
  res.status(200).json(filteredUsers); // Responds with the filtered user list.
});

// Function to get a specific user by their ID.
export const findUserById = catchAsync(async (req, res) => {
  const userId = req.params.id; // Extracts user ID from request parameters.
  const user = await User.findById(userId); // Finds the user by ID.

  res.status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
  }); // Responds with user's ID, username, and email (excluding password).
});

export const profileUpdate = catchAsync(async(req, res)=>{})