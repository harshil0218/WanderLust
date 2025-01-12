import { React, useState } from "react";
import { useMutation } from "@tanstack/react-query";

// API call to reset password (replace with actual endpoint)
const resetPassword = async (email, newPassword) => {
  const response = await fetch("/api/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, newPassword }),
  });
  const data = await response.json();
  return data;
};
function ResetPassword({email}) {
  const [newPassword, setNewPassword] = useState(""); // New password state
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password state
  const [message, setMessage] = useState(""); // Response message

  const resetPasswordMutation = useMutation(resetPassword, {
    onSuccess: (data) => {
      setMessage("Password reset successfully!");
    },
    onError: () => setMessage("Error resetting password."),
  });

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    resetPasswordMutation.mutate({ email, newPassword });
  };
  return (
    // <div className="justify-center items-center content-center flex h-screen bg-gray-100 dark:bg-gray-900">
    //   <div className="w-full max-w-sm place-content-center content-center rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800">
    //     <form className="space-y-6" action="#">
    //       <h5 className="text-xl font-medium text-gray-900 dark:text-white">
    //         Reset Password
    //       </h5>
    //       <div>
    //         <label
    //           for="password1"
    //           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    //         >
    //           Password
    //         </label>
    //         <input
    //           type="text"
    //           name="password1"
    //           id="password1"
    //           class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
    //           placeholder="New Password"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label
    //           for="password2"
    //           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    //         >
    //           Confirm Password
    //         </label>
    //         <input
    //           type="password"
    //           name="password2"
    //           id="password2"
    //           class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
    //           placeholder="Confrim Password"
    //           required
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Confirm
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="justify-center items-center content-center flex h-screen bg-gray-100 dark:bg-gray-900">
       
        <div className="w-full max-w-sm place-content-center content-center rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800">
          <form className="space-y-6" onSubmit={handlePasswordReset}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Reset Password</h5>
            <div>
              <label htmlFor="password1" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                New Password
              </label>
              <input
                type="password"
                id="password1"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="password2" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirm
            </button>
            {message && <p className="mt-4 text-center text-sm text-gray-500">{message}</p>}
          </form>
        </div>
      
    </div>
  );
}

export default ResetPassword;
