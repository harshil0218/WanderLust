import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
function Signup({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Client-side validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    // Call the API using react-query mutation
    navigate('/chat')
    mutation.mutate({ email, password, confirmPassword });
  };

  return (
    <div className="justify-center   items-center content-center flex  bg-gray-100/30 dark:bg-gray-800/30">
      <div className=" place-content-center w-screen  md:w-[40vb] lg:w-[55vb] content-center rounded-lg  bg-gray-100/30 p-4 sm:p-6 md:p-8  dark:bg-gray-800/30">
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign Up
          </h5>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="conf_password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="conf_password"
              id="conf_password"
              placeholder="••••••••"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm font-medium">{error}</div>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>

          {/* Login Redirect */}
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
            <button
              onClick={onLogin}
              className="text-blue-700 hover:underline dark:text-blue-400"
            >
              Login
            </button>
          </div>
        </form>
        <fieldset class="border-t border-slate-500 dark:border-slate-600 my-3">
          <legend class="mx-auto px-4 text-gray-900 dark:text-gray-400 text-md italic">
            Sign up with
          </legend>
        </fieldset>

        <button
          type="submit"
          className="w-full flex items-center my-2 rounded-lg bg-gray-200 px-5 py-2.5 text-md font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-900"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/50/google-logo.png"
            alt="google-logo"
            className="flex-shrink-0"
          />
          <span className="flex-1 text-center">Google</span>
        </button>

        <button
          type="submit"
          className="w-full flex items-center my-2 rounded-lg bg-gray-200 px-5 py-2.5 text-md font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-900"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/50/facebook-new.png"
            alt="facebook-new"
            className="flex-shrink-0"
          />
          <span className="flex-1 text-center">Facebook</span>
        </button>

        <button
          type="submit"
          className="w-full flex items-center my-2 rounded-lg bg-gray-200 px-5 py-2.5 text-md font-medium text-gray-800 dark:text-gray-200 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-900"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/material-rounded/24/github.png"
            alt="github"
            className="flex-shrink-0"
          />
          <span className="flex-1 text-center">GitHub</span>
        </button>
      </div>
    </div>
  );
}

export default Signup;
