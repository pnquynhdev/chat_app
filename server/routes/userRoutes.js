import express from "express";
import {
  getUsersExceptCurrent,
  getCurrentUser,
  findUserById, profileUpdate
} from "../controllers/userController.js";
import authenticateUser from "../middleware/authenticateUser.js";

const router = express.Router();

router.get("/me",authenticateUser, getCurrentUser);
// router.post("/user/update",authenticateUser, updateUserInfo);
router.get("/users", authenticateUser, getUsersExceptCurrent);
router.get("/find/:user_id", authenticateUser, findUserById);
router.post("/me/profile_update",authenticateUser, profileUpdate)
export default router;
