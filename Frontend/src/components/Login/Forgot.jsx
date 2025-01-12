import {React,useState} from "react";
import { useMutation } from "@tanstack/react-query";
function Forgot() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Mimic API call for sending OTP
  const sendOtp = async (email) => {
    // Mimicking API response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "OTP sent successfully to " + email,
        });
      }, 2000); // Mimicking delay
    });
  };

  // React Query mutation for the actual API call
  // const mutation = useMutation((email) => sendOtp(email), {
  //   onSuccess: (data) => {
  //     // On success, handle response, e.g., show success message
  //     setMessage(data.message);
  //   },
  //   onError: (error) => {
  //     // Handle error, e.g., show error message
  //     setMessage("Failed to send OTP. Please try again.");
  //   },
  // });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // mutation.mutate(email); // Trigger the mutation to send OTP
      sendOtp(email).then((data) => setMessage(data.message));
    }
  };

  return (
    <div className="justify-center items-center content-center flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm place-content-center content-center rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Forgot Password
          </h5>
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Success/Error message display */}
          {message && (
            <div
              className={`mt-2 text-sm ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;

   // <div className="justify-center items-center content-center flex h-screen bg-gray-100 dark:bg-gray-900">
    //   <div className="w-full max-w-sm place-content-center content-center rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800">
    //     <form className="space-y-6" action="#">
    //       <h5 className="text-xl font-medium text-gray-900 dark:text-white">
    //         Forgot Password
    //       </h5>
    //       <div>
    //         <label
    //           for="email"
    //           className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
    //         >
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           name="email"
    //           id="email"
    //           class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
    //           placeholder="name@company.com"
    //           required
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Send OTP
    //       </button>
    //     </form>
    //   </div>
    // </div>