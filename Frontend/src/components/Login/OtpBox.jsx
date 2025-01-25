import { React, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

// API Call to send OTP (using react-query mutation)
// const sendOtp = async (email) => {
//   const response = await fetch("/api/send-otp", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email }),
//   });
//   const data = await response.json();
//   return data;
// };

// API Call to verify OTP (using react-query mutation)
// const verifyOtp = async (email, otp) => {
//   const response = await fetch("/api/verify-otp", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, otp }),
//   });
//   const data = await response.json();
//   return data;
// };
function OtpBox({onBack, onVerify}) {
  const [otp, setOtp] = useState(Array(6).fill("")); // OTP state, an array to store individual digits
  const [otpTimeLeft, setOtpTimeLeft] = useState(120); // OTP validity in seconds (2 minutes)
  const [resendTimeLeft, setResendTimeLeft] = useState(0); // Resend timer (5 minutes)
  const [email, setEmail] = useState(""); // User email
  const [message, setMessage] = useState(""); // Response message to show success or error

  // React Query Mutation to send OTP
  // const sendOtpMutation = useMutation(sendOtp, {
  //   onSuccess: (data) => {
  //     localStorage.setItem("otpStartTime", Date.now());
  //     localStorage.setItem("otp", data.otp); // Store OTP in localStorage
  //     setMessage("OTP sent successfully!");
  //   },
  //   onError: () => {
  //     setMessage("Failed to send OTP. Please try again.");
  //   },
  // });

  // React Query Mutation to verify OTP
  // const verifyOtpMutation = useMutation(verifyOtp, {
  //   onSuccess: (data) => {
  //     setMessage("OTP verified successfully!");
  //     // Proceed with the next action (e.g., password reset)
  //   },
  //   onError: () => {
  //     setMessage("Incorrect OTP. Please try again.");
  //   },
  // });

  // Effect to manage OTP and resend timers
  useEffect(() => {
    const storedOtpStartTime = localStorage.getItem("otpStartTime");
    const storedResendStartTime = localStorage.getItem("resendStartTime");

    if (storedOtpStartTime) {
      const elapsedOtp = Math.floor((Date.now() - storedOtpStartTime) / 1000);
      const remainingOtp = Math.max(120 - elapsedOtp, 0);
      setOtpTimeLeft(remainingOtp);

      if (remainingOtp === 0 && storedResendStartTime) {
        const elapsedResend = Math.floor(
          (Date.now() - storedResendStartTime) / 1000
        );
        const remainingResend = Math.max(300 - elapsedResend, 0);
        setResendTimeLeft(remainingResend);
      }
    } else {
      localStorage.setItem("otpStartTime", Date.now());
    }
  }, []);

  useEffect(() => {
    let otpTimer;
    if (otpTimeLeft > 0) {
      otpTimer = setInterval(() => {
        setOtpTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(otpTimer);
  }, [otpTimeLeft]);

  useEffect(() => {
    let resendTimer;
    if (resendTimeLeft > 0) {
      resendTimer = setInterval(() => {
        setResendTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(resendTimer);
  }, [resendTimeLeft]);

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join(""); // Convert OTP array to string
    const storedOtp = localStorage.getItem("otp"); // Get OTP from localStorage

    // Simulating API verification
    if (enteredOtp === storedOtp) {
      // Call actual API for OTP verification using react-query mutation
      verifyOtpMutation.mutate({ email, otp: enteredOtp });
    } else {
      setMessage("Incorrect OTP. Please try again.");
    }
  };

  const handleResendClick = () => {
    setOtp(Array(6).fill("")); // Reset OTP input
    setOtpTimeLeft(120); // Reset OTP timer
    setResendTimeLeft(0); // Reset resend timer
    localStorage.setItem("otpStartTime", Date.now());
    localStorage.removeItem("resendStartTime");
    sendOtpMutation.mutate(email); // Trigger resend OTP using react-query
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
 

    <div className="justify-center  items-center content-center flex  bg-gray-100/30 dark:bg-gray-800/30">
      <div className=" place-content-center w-screen  md:w-[40vb] lg:w-[55vb] content-center rounded-lg  bg-gray-100/30 p-4 sm:p-6 md:p-8  dark:bg-gray-800/30">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <button
                onClick={onBack}
                className="focus:outline-none"
                style={{ zIndex: 100 }}
            >
                <span className="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200">&larr; Back</span>
            </button>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Enter OTP
            </h5>
            <p className="text-sm text-gray-800 dark:text-gray-300">
                Please enter the 6-digit OTP sent to your email. OTP is valid for{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                    {formatTime(otpTimeLeft)}
                </span>
                .
            </p>

            <div className="flex justify-between space-x-2">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-12 h-12 text-center text-lg font-medium rounded-lg border border-gray-300 bg-gray-50 p-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    />
                ))}
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="button"
                    className="text-sm text-blue-800 hover:underline dark:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleResendClick}
                    disabled={otpTimeLeft > 0 || resendTimeLeft > 0}
                >
                    Resend OTP (
                    {resendTimeLeft > 0
                        ? formatTime(resendTimeLeft)
                        : otpTimeLeft > 0
                        ? formatTime(otpTimeLeft)
                        : "Ready"}
                    )
                </button>
                <button
                    onClick={onVerify}
                    type="submit"
                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Verify OTP
                </button>
            </div>
        </form>
        {message && (
            <p className="mt-4 text-center text-sm text-gray-500">{message}</p>
        )}
    </div>
</div>

  );
}

export default OtpBox;
