import axios from "axios";

const API_BASE_URL = "https://your-api-url.com/api";

export const fetchChats = async () => {
  const response = await axios.get(`${API_BASE_URL}/chats`);
  return response.data;
};

export const fetchChatMessages = async (chatId) => {
  const response = await axios.get(`${API_BASE_URL}/chats/${chatId}/messages`);
  return response.data;
};

export const sendMessage = async (chatId, messageData) => {
  const response = await axios.post(`${API_BASE_URL}/chats/${chatId}/messages`, messageData);
  return response.data;
};

export const markMessagesAsRead = async (chatId, userId) => {
  const response = await axios.patch(`${API_BASE_URL}/chats/${chatId}/messages/mark-read`, { userId });
  return response.data;
};

export const deleteChat = async (chatId) => {
  const response = await axios.delete(`${API_BASE_URL}/chats/${chatId}`);
  return response.data;
};
