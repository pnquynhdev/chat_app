import express from "express";
import { signin, signup, logout , isOnline} from "../controllers/authController.js";
import validateUser from "../middleware/validateUser.js";

const router = express.Router();

router.post("/signup", validateUser, signup);
router.post("/logout", logout);
router.post("/signin", signin);
router.get("/online", isOnline)
export default router;
