import express from "express";
import { signin, signup, logout } from "../controllers/authController.js";
import { validateUser } from "../middleware.js";

const router = express.Router();

router.post("/signup", validateUser, signup);
router.post("/signin", signin);
router.post("/logout", logout);

export default router;
