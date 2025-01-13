// postApi.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// API Base URL
const API_BASE_URL = "https://your-api-url.com/api/posts"; // Replace with your API URL

/**
 * Fetch all posts.
 * @returns {Promise<Array>} List of posts.
 */
const fetchPosts = async () => {
  const response = await fetch(API_BASE_URL, { method: "GET" });
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
};

/**
 * Create a new post.
 * @param {Object} postData - The data for the new post.
 * @returns {Promise<Object>} Created post.
 */
const createPost = async (postData) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  if (!response.ok) throw new Error("Failed to create post");
  return response.json();
};

/**
 * Update an existing post.
 * @param {Object} params - Parameters containing `id` and `updateData`.
 * @returns {Promise<Object>} Updated post.
 */
const updatePost = async ({ id, updateData }) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });
  if (!response.ok) throw new Error("Failed to update post");
  return response.json();
};

/**
 * Delete a post.
 * @param {number} id - The ID of the post to delete.
 * @returns {Promise<void>}
 */
const deletePost = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete post");
  return response.json();
};

// React Query Hooks

/**
 * Hook to fetch posts.
 * @returns {QueryResult} React Query result object.
 */
export const useFetchPosts = () => {
  return useQuery("posts", fetchPosts, {
    retry: 2, // Retry failed requests twice
    refetchOnWindowFocus: false, // Do not refetch on window focus
    staleTime: 300000, // Cache data for 5 minutes
  });
};

/**
 * Hook to create a post.
 * @returns {MutationResult} React Query mutation object.
 */
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(createPost, {
    onSuccess: () => {
      // Invalidate and refetch posts after creating a post
      queryClient.invalidateQueries("posts");
    },
  });
};

/**
 * Hook to update a post.
 * @returns {MutationResult} React Query mutation object.
 */
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePost, {
    onSuccess: () => {
      // Invalidate and refetch posts after updating a post
      queryClient.invalidateQueries("posts");
    },
  });
};

/**
 * Hook to delete a post.
 * @returns {MutationResult} React Query mutation object.
 */
export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePost, {
    onSuccess: () => {
      // Invalidate and refetch posts after deleting a post
      queryClient.invalidateQueries("posts");
    },
  });
};

// Export the API functions
export { fetchPosts, createPost, updatePost, deletePost };