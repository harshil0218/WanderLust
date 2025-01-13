import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchChats,
  fetchChatMessages,
  sendMessage,
  markMessagesAsRead,
  deleteChat,
} from "../api/chatApi";

export const useFetchChats = () => useQuery("chats", fetchChats);

export const useFetchChatMessages = (chatId) =>
  useQuery(["messages", chatId], () => fetchChatMessages(chatId));

export const useSendMessage = (chatId) => {
  const queryClient = useQueryClient();
  return useMutation((messageData) => sendMessage(chatId, messageData), {
    onSuccess: () => {
      queryClient.invalidateQueries(["messages", chatId]);
      queryClient.invalidateQueries("chats");
    },
  });
};

export const useMarkMessagesAsRead = (chatId) => {
  const queryClient = useQueryClient();
  return useMutation((userId) => markMessagesAsRead(chatId, userId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["messages", chatId]);
      queryClient.invalidateQueries("chats");
    },
  });
};

export const useDeleteChat = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteChat, {
    onSuccess: () => {
      queryClient.invalidateQueries("chats");
    },
  });
};
