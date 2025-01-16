import axios from 'axios'

const API_BASE_URL = "https://your-api-url.com/api";

// return user ids of user with whom the current user has chatted
export const fetchChats = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/chats`);
  return response.data;
};

// return messages of a chat
export const fetchChatMessages = async (senderId,recieverId) => {
  const response = await axios.get(`${API_BASE_URL}/chats/${chatId}/messages`);
  return response.data;
};

// send a message to a chat
export const sendMessage = async (chatId, messageData) => {
  const response = await axios.post(`${API_BASE_URL}/chats/${chatId}/messages`, messageData);
  return response.data;
};

// mark all messages as read
export const markMessagesAsRead = async (chatId, userId) => {
  const response = await axios.patch(`${API_BASE_URL}/chats/${chatId}/messages/mark-read`, { userId });
  return response.data;
};

// delete whole chat
export const deleteChat = async (chatId) => {
  const response = await axios.delete(`${API_BASE_URL}/chats/${chatId}`);
  return response.data;
};
