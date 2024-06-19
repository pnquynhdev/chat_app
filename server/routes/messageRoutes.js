import express from "express";
import { getMessages, sendMessage, unreadMessages, deleteMessage, hideMessagesFrom } from "../controllers/messageController.js";
import authenticateUser from "../middleware/authenticateUser.js"

const router = express.Router();

router.post("/send/:user_id", authenticateUser, sendMessage);
router.get("/messages/:user_id", authenticateUser, getMessages);
router.get("/messages/unread", authenticateUser, unreadMessages);
router.delete("/delete/:message_id", authenticateUser, deleteMessage);
router.post("/messages/:user_id/delete", authenticateUser, hideMessagesFrom);

export default router;