import { React, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
function Login({ onSignup, onForgotPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // React Query Mutation for login
  // const loginMutation = useMutation(
  //   async (credentials) => {
  //     const response = await fetch("/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(credentials),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message || "Login failed");
  //     }

  //     return response.json();
  //   },
  //   {
  //     onSuccess: (data) => {
  //       // Save JWT token to localStorage or cookies (secure implementation recommended)
  //       localStorage.setItem("token", data.token);
  //       alert("Login successful!");
  //     },
  //     onError: (error) => {
  //       setError(error.message);
  //     },
  //   }
  // );

  // Mock API call

  const mockLoginApi = async (credentials) => {
    // Mimic API delay using setTimeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate login success/failure
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "password"
        ) {
          resolve({ token: "mock-jwt-token" });
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1500); // Delay of 1.5 seconds
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic client-side validation
    if (!email || !password) {
      setError("Email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await mockLoginApi({ email, password });
      // Save the mock token (you can use localStorage or cookies here)

      navigate("/home");
      localStorage.setItem("token", response.token);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="justify-center   items-center content-center flex bg-gray-100/30 dark:bg-gray-800/30">
      <div className=" place-content-center w-screen  md:w-[40vb] lg:w-[55vb] content-center rounded-lg  bg-gray-100/30  sm:p-6 md:p-8  dark:bg-gray-800/30">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in
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
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm font-medium">{error}</div>
          )}

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  value={false}
                  class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              onClick={onForgotPassword}
              class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>

          {/* Signup Redirect */}
          <div className="text-sm font-medium text-gray-800 dark:text-gray-300">
            Not registered?{" "}
            <button
              onClick={onSignup}
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </button>
          </div>
        </form>

        <fieldset class="border-t border-slate-500 dark:border-slate-600 my-3">
          <legend class="mx-auto px-4 text-gray-900 dark:text-gray-400 text-md italic">
            or continue with
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

export default Login;
