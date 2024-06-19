import mongoose from "mongoose";
import ExpressError from "../utils/ExpressError.js";
import catchAsync from "../utils/catchAsync.js";
import { Group } from "../models/Group.js";
import { GroupMember } from "../models/GroupMember.js";
import { User } from "../models/User.js";

export const newGroup = catchAsync(async (req, res) => {
  const adminId = req.user._id;
  const { groupname, members } = req.body;
  let memberIds = [adminId];
  for (const email of members) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ExpressError(`User with email ${email} not found`, 400);
    }
    memberIds.push(user._id);
  }

  if (memberIds.length < 3) {
    throw new ExpressError("Group must have at least 3 members", 400);
  }
  const newGroup = new Group({
    groupname,
  });

  const newGroupMember = new GroupMember({
    group: newGroup._id,
    admins: adminId,
    members: memberIds,
  });

  newGroup.save();
  newGroupMember.save();
  res.status(201).json({
    message: "Group created successfully",
    group: newGroup,
    groupMember: newGroupMember,
  });
});

export const updateGroup = catchAsync(async (req, res) => {
  const { groupid } = req.params;
  const existingGroup = await Group.findOne({ groupid });
  const { groupname, description, privacy_settings, avatar } = req.body;
  if (!existingGroup) {
    throw new ExpressError("Group not found", 404);
  }
  // Update specific fields based on provided data (prevents unnecessary updates)
  existingGroup.groupname = groupname || existingGroup.groupname;
  existingGroup.description = description || existingGroup.description;
  existingGroup.privacy_settings =
    privacy_settings || existingGroup.privacy_settings;
  existingGroup.avatar = avatar || existingGroup.avatar;

  const updateGroup = await existingGroup.save();
  res.status(201).json({
    message: " Group updated successfully",
    group: updateGroup,
  });
});

export const getAllGroups = catchAsync(async (req, res) => {
  const user = req.user._id;
  const groupMembers = await GroupMember.find({ members: user }).populate(
    "group"
  );
  const groups = groupMembers.map((groupMember) => groupMember.group);
  res.status(200).json({
    paticipatedGroups: groups,
  });
});

export const getGroup = catchAsync(async (req, res) => {
  const { groupId } = req.params;
  const group = await Group.findOne({ groupId });
  const groupMembers = await GroupMember.find({ group: group._id }).populate(
    "members",
    { password: 0 }
  ); // Exclude password field
  const group_members = groupMembers.map((groupMember) => groupMember.members);

  res.status(200).json({
    group: group,
    groupmembers: group_members,
  });
});

export const deleteGroup = catchAsync(async (req, res) => {
  const { groupId } = req.params;
  const deleteGroup = await Group.findOneAndDelete({ groupId });
  if (!deleteGroup) {
    throw new ExpressError("Group not found", 404);
  }
  res.status(200).json({
    message: "Group deleted successfully",
  });
});
export const addMemberToGroup = catchAsync(async (req, res) => {
  const { newmember } = req.body;
  const newmem = await User.findOne({ email: newmember });

  if (!newmem) {
    throw new ExpressError(`User with email ${newmember} not found`, 400);
  }

  const { group_id } = req.params;
  const groupmember = await GroupMember.findOne({ group: group_id }).populate(
    "members",
    { password: 0 }
  );

  const alreadyMember = groupmember.members.some((member) =>
    member._id.equals(newmem._id)
  );

  if (alreadyMember) {
    throw new ExpressError(
      `${newmember} is already a member of this group`,
      400
    );
  }

  const isAdmin = groupmember.admins.some((member) =>
    member._id.equals(req.user._id)
  );

  if (!isAdmin) {
    throw new ExpressError(
      "Sorry, you arent't admin, only admin can add group member",
      400
    );
  }
  groupmember.members.push(newmem);
  groupmember.save();
  res.status(200).json({
    message: "Member added to group successfully",
    group: groupmember,
  });
});

export const deleteGroupMember = catchAsync(async (req, res) => {
  const { group_id } = req.params;
  const { deleteMemberEmail } = req.body;
  const deleteMember = await User.findOne({ email: deleteMemberEmail });

  if (!deleteMember) {
    throw new ExpressError(
      `User with email ${deleteMemberEmail} not found`,
      400
    );
  }

  const group = await GroupMember.findOne({ group: group_id }).populate(
    "members",
    { password: 0 }
  );

  const isMember = group.members.some((member) =>
    member._id.equals(deleteMember._id)
  );

  if (!isMember) {
    throw new ExpressError(
      `${deleteMemberEmail} isn't a member of this group`,
      400
    );
  }

  const isAdmin = group.admins.some((member) =>
    member._id.equals(req.user._id)
  );

  if (!isAdmin) {
    throw new ExpressError(
      "Sorry, you arent't admin, only admin can delete group member",
      400
    );
  }

  const filteredMembers = group.members.filter(
    (member) => member.email !== deleteMemberEmail
  );
  group.members = filteredMembers;
  await group.save();

  res.status(200).json({
    message: "Group member deleted successfully",
    groupmember: filteredMembers,
  });
});

export const leaveGroupUser = catchAsync(async (req, res) => {
  const { group_id, user_id } = req.params;
  const leaveGroupUser = await User.findOne({ _id: user_id });

  const group = await GroupMember.findOne({ group: group_id }).populate(
    "members",
    { password: 0 }
  );

  const filteredMembers = group.members.filter(
    (member) => member.email !== leaveGroupUser.email
  );

  group.members = filteredMembers;
  await group.save();

  res.status(200).json({
    message: "You're leave group successfully",
    groupmember: filteredMembers,
  });
});
export const updateGroupAdmin = () => {};
