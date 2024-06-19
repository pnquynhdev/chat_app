import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    groupname: { type: String },
    description: { type: String },
    privacy_settings: {
      join_mode: { type: String, enum: ["public", "private", "approval"] },
      visibility: { type: String, enum: ["public", "members_only"] },
    },
    avatar: { type: String },
  },
  { timestamps: true }
);

export const Group = mongoose.model("Group", groupSchema);
