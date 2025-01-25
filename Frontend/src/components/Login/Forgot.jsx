import {React,useState} from "react";

function Forgot({ onBack,onSendOtp }) {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // mutation.mutate(email); // Trigger the mutation to send OTP
      sendOtp(email).then((data) => setMessage(data.message));
    }
  };

  return (

    <div className="justify-center items-center content-center flex  bg-gray-100/30 dark:bg-gray-800/30">
      <div className=" place-content-center w-screen  md:w-[40vb] lg:w-[55vb] content-center rounded-lg bg-gray-100/30 sm:p-6 md:p-8 dark:bg-gray-800/30">
      
        <form className="space-y-6" onSubmit={handleSubmit}>
        <button
        onClick={onBack}
        className=" focus:outline-none"
        style={{ zIndex: 100 }}
      >
        <span className="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 ">&larr; Back</span>
      </button>
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
            onClick={onSendOtp}
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
