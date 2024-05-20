import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";

import catchAsync from "../utils/catchAsync.js";
import ExpressError from "../utils/ExpressError.js";


export const signup = catchAsync(async (req, res) => {
  // Destructure with default value
  const { username, email, password, confirmPassword } = req.body;

  // Check password confirmation
  if (password !== confirmPassword) {
    throw new ExpressError("Passwords don't match", 400);
  }

  let existingUserQuery;
  if (username !== "") {
    existingUserQuery = { $or: [{ email }, { username }] };
  } else {
    existingUserQuery = { email };
  }
  const existingUser = await User.find(existingUserQuery);

  if (existingUser.length > 0) {
    // Check for existing email or username
    for (const user of existingUser) {
      // Loop through all found users
      if (user.email === email) {
        throw new ExpressError(`Email "${email}" already exists`, 400);
      } else if (user.username === username) {
        throw new ExpressError(`Username "${username}" already exists`, 400);
      }
    }
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    email,
    password: hashedPassword,
    username: username,
  });

  if (newUser) {
    // Save user and generate token
    await newUser.save();
    generateTokenAndSetCookie(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    });
  } else {
    throw new ExpressError("Invalid user data", 400);
  }
});

export const signin = () => {};
export const logout = () => {};
