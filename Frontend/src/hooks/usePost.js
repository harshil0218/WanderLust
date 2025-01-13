import { useMutation, useQuery } from "@tanstack/react-query";
import { createPost, fetchPosts, updatePost, deletePost } from "../api/postApi";

  // Hook to create a post
  export const useCreatePost = () => useMutation(createPost);

  // Hook to fetch all posts
  export const useFetchPosts = () => useQuery("posts", fetchPosts);

  // Hook to update a post
  export const useUpdatePost = () => useMutation(updatePost);

  // Hook to delete a post
  export const useDeletePost = () => useMutation(deletePost);



