import catchAsync from "../utils/catchAsync.js";
import ExpressError from "../utils/ExpressError.js";

export const sendMessage = catchAsync(async (req, res) => {
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  const { content } = req.body;

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new Message({
    content,
    sender: senderId,
    receiver: receiverId,
    conversation: conversation._id,
  });

  // Save the new message
  await newMessage.save();

  // Update the conversation's message array to include the new message
  conversation.messages.push(newMessage);
  await conversation.save();

  // Send a success response with the newly created message
  res.status(201).json({
    message: "Message sent successfully",
    data: newMessage,
  });
});

export const getMessages = catchAsync(async (req, res) => {
  const { id: conversationWith_UserId } = req.params;
  const senderId = req.user._id;
  // Find the conversation
  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, conversationWith_UserId] },
  }).populate("messages");

  if (!conversation) {
    throw new ExpressError("Conversation not found", 404);
  }

  const messages = conversation.messages;
  // Send the conversation details with populated messages
  res.status(200).json(messages);
});

export const unreadMessages = catchAsync(async (req, res) => {});
export const deleteMessage = catchAsync(async (req, res) => {});
export const hideMessagesFrom = catchAsync(async (req, res) => {});
