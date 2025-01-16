const API_BASE_URL =''

// Fetch user details by ID
export const fetchUserById = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user details");
  }

  return response.json();
};

// Update user profile
export const updateUserProfile = async ({ userId, userData }) => {
  const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to update user profile");
  }

  return response.json();
};
// Fetch all users
export const fetchAllUsers = async () => {
    const response = await fetch(API_BASE_URL, {
      method: "GET",
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
  
    return response.json();
  };
  
  // Fetch specific fields for users (userName, profilePicture, bio)
  export const fetchUserFields = async (userId) => {
    const response = await fetch(`${API_BASE_URL}?fields=userName,profilePicture,bio`, {
      method: "GET",
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch specific user fields");
    }
  
    return response.json();
  };
  
  // Delete a user
  export const deleteUser = async (userId) => {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
  
    return response.json();
  };