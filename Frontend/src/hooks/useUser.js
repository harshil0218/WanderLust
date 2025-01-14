import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchUserById, updateUserProfile,fetchAllUsers, fetchUserFields, deleteUser } from "../api/userApi";

// Fetch user details by ID using React Query
export const useFetchUser = (userId) => {
  return useQuery(["user", userId], () => fetchUserById(userId), {
    enabled: !!userId, // Ensures the query runs only when userId is available
    staleTime: 300000, // 5 minutes caching
  });
};

// Update user profile using React Query Mutation
export const useUpdateUserProfile = () => {
  return useMutation(updateUserProfile, {
    onSuccess: () => {
      console.log("User profile updated successfully");
    },
    onError: (error) => {
      console.error("Error updating user profile:", error.message);
    },
  });
};

// Hook to fetch all users
export const useFetchAllUsers = () => useQuery("allUsers", fetchAllUsers);

// Hook to fetch specific user fields
export const useFetchUserFields = () => useQuery("userFields", fetchUserFields);

// Hook to delete a user
export const useDeleteUser = () => useMutation(deleteUser);