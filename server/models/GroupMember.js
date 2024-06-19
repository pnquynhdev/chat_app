import mongoose from "mongoose";

const GroupMemberSchema = new mongoose.Schema({
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
  admins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" },],
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" },]
},
{ timestamps: true });

export const GroupMember = mongoose.model("GroupMember", GroupMemberSchema);
