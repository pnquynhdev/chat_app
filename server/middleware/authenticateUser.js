import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import ExpressError from "../utils/ExpressError.js";
import catchAsync from "../utils/catchAsync.js";

/**
 * Middleware function to authenticate a user based on a JWT token in the request cookie.
 *
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 * @param {function} next - The next middleware function in the chain.
 * @throws {ExpressError} with appropriate status code (401 or 404) on error.
 */

const authenticateUser = catchAsync(async (req, res, next) => {
  // 1. Extract JWT token from cookie:
  const token = req.headers.cookie?.split("jwt=")[1]; // Handle potential missing cookie

  if (!token) {
    throw new ExpressError("Unauthorized - No Token Provided", 401);
  }
  // 2. Verify JWT token:
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    throw new ExpressError("Unauthorized - Invalid Token", 401);
  }

  // 3. Fetch user data from database (excluding password):
  const user = await User.findById(decoded.userId).select("-password");

  if (!user) {
    throw new ExpressError("User not found", 404);
  }
  // 4. Attach authenticated user to request object:
  req.user = user;
  // 5. Proceed to next middleware in the chain:
  next();
});
export default authenticateUser;
