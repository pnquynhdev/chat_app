import express from "express";
import { getAllGroups,
    getGroup,
    newGroup,
    updateGroup,
    deleteGroup,
    deleteGroupMember,
    addMemberToGroup,
    leaveGroupUser,
    updateGroupAdmin, } from "../controllers/groupController.js";
import authenticateUser from "../middleware/authenticateUser.js"
const router = express.Router();


router.post("/newgroup", authenticateUser, newGroup)
router.get("/groups", authenticateUser, getAllGroups)
router.get("/:group_id", authenticateUser, getGroup)
router.post("/:group_id/update", authenticateUser, updateGroup)
router.delete("/:group_id/delete", authenticateUser, deleteGroup)
router.post("/:group_id/addmember", authenticateUser, addMemberToGroup)
router.delete("/:group_id/deletemember", authenticateUser, deleteGroupMember)
router.get("/:group_id/leave/:user_id", authenticateUser, leaveGroupUser)
router.post("/:group_id/admin",authenticateUser, updateGroupAdmin )


export default router;