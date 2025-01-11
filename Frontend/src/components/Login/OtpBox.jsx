import { React, useEffect, useState } from "react";

function OtpBox() {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [otpTimeLeft, setOtpTimeLeft] = useState(120); // 2 minutes in seconds
    const [resendTimeLeft, setResendTimeLeft] = useState(0); // 5 minutes in seconds
    localStorage.removeItem("otpStartTime");
    localStorage.removeItem("resendStartTime");
    useEffect(() => {
      const storedOtpStartTime = localStorage.getItem("otpStartTime");
      const storedResendStartTime = localStorage.getItem("resendStartTime");
  
      if (storedOtpStartTime) {
        const elapsedOtp = Math.floor((Date.now() - storedOtpStartTime) / 1000);
        const remainingOtp = Math.max(120 - elapsedOtp, 0);
        setOtpTimeLeft(remainingOtp);
  
        if (remainingOtp === 0 && storedResendStartTime) {
          const elapsedResend = Math.floor((Date.now() - storedResendStartTime) / 1000);
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
        
        if (!localStorage.getItem("resendStartTime")) {
          localStorage.setItem("resendStartTime", Date.now());
          setResendTimeLeft(otpTimeLeft); // Start resend timer after OTP expires
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
  
    const handleResendClick = () => {
      setOtp(Array(6).fill(""));
      setOtpTimeLeft(120); // Reset OTP timer
      setResendTimeLeft(0); // Reset Resend timer
      localStorage.setItem("otpStartTime", Date.now());
      localStorage.removeItem("resendStartTime");
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };
  
    return (
      <div className="justify-center items-center content-center flex h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-sm place-content-center content-center rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Enter OTP</h5>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Please enter the 6-digit OTP sent to your email. OTP is valid for{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">{formatTime(otpTimeLeft)}</span>.
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
                className="text-sm text-blue-700 hover:underline dark:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleResendClick}
                disabled={otpTimeLeft > 0 || resendTimeLeft > 0}
              >
                Resend OTP (
                {resendTimeLeft > 0
                  ? formatTime(resendTimeLeft)
                  : otpTimeLeft > 0
                  ? "Wait for OTP to expire"
                  : "Ready"}
                )
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default OtpBox;
