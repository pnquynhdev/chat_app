import { User } from "../models/User.js"; // Import the User model for interacting with user data
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

// Import helper functions from utils directory
import generateTokenAndSetCookie from "../utils/generateToken.js";
import catchAsync from "../utils/catchAsync.js";
import ExpressError from "../utils/ExpressError.js";

// **signup** function with error handling using catchAsync
export const signup = catchAsync(async (req, res) => {
  const { username = "", email, password, confirmPassword } = req.body;

  // **Password Confirmation Check**
  if (password !== confirmPassword) {
    throw new ExpressError("Passwords don't match", 400);
  }
  // **Existing User Check**
  let existingUserQuery;
  if (username !== "") {
    existingUserQuery = { $or: [{ email }, { username }] }; // Check for both email and username
  } else {
    existingUserQuery = { email }; // Check only for email if no username provided
  }

  const existingUser = await User.find(existingUserQuery);
  if (existingUser.length > 0) {
    for (const user of existingUser) {
      if (user.email === email) {
        throw new ExpressError(`Email "${email}" already exists`, 400);
      } else {
        throw new ExpressError(`Username "${username}" already exists`, 400);
      }
    }
  }

  // **Password Hashing**
  const salt = await bcrypt.genSalt(10); // Generate a salt for secure password hashing
  const hashedPassword = await bcrypt.hash(password, salt); // Hash the password using the generated salt

  // **Create New User**
  const newUser = new User({
    email,
    password: hashedPassword, // Store the hashed password
    username: username,
  });

  // **Save User and Generate Token**
  if (newUser) {
    await newUser.save(); // Save the new user to the database
    generateTokenAndSetCookie(newUser._id, res); // Generate a JWT token and set it in a cookie

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    }); // Responds with user's ID, username, and email (excluding password).
  } else {
    throw new ExpressError("Invalid user data", 400);
  }
});

// **signin** function with error handling using catchAsync
export const signin = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }); // Find a user by email
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password || ""
  ); // Compare entered password with hashed password (nullish coalescing for optional chaining)

  if (!user || !isPasswordCorrect) {
    throw new ExpressError("Invalid username or password", 400);
  }

  generateTokenAndSetCookie(user._id, res); // Generate a JWT token and set it in a cookie

  res.status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
  });
});

// **logout** function with cookie removal
export const logout = catchAsync(async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 }); // Set the JWT cookie to expire immediately
  res.status(200).json({ message: "Logged out successfully" });
});

// FUTURE
export const isOnline = catchAsync(async (req, res) => {});
