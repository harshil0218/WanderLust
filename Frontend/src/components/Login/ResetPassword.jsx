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
function ResetPassword({ email, onBack, onReset }) {
  const [newPassword, setNewPassword] = useState(""); // New password state
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password state
  const [message, setMessage] = useState(""); // Response message

  // const resetPasswordMutation = useMutation(resetPassword, {
  //   onSuccess: (data) => {
  //     setMessage("Password reset successfully!");
  //   },
  //   onError: () => setMessage("Error resetting password."),
  // });

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    resetPasswordMutation.mutate({ email, newPassword });
  };
  return (

    <div className="justify-center  items-center content-center flex  bg-gray-100/30 dark:bg-gray-800/30">
      <div className=" place-content-center w-screen  md:w-[40vb] lg:w-[55vb] content-center rounded-lg  bg-gray-100/30 p-4 sm:p-6 md:p-8  dark:bg-gray-800/30">
        <form className="space-y-6" onSubmit={handlePasswordReset}>
          <button
            onClick={onBack}
            className="focus:outline-none"
            style={{ zIndex: 100 }}
          >
            <span className="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200">
              &larr; Back
            </span>
          </button>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Reset Password
          </h5>
          <div>
            <label
              htmlFor="password1"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
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
            <label
              htmlFor="password2"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
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
            onClick={onReset}
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Reset
          </button>
          {message && (
            <p className="mt-4 text-center text-sm text-gray-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
