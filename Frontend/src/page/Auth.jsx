import { React, useState } from "react";
import { Login, Signup, Forgot, OtpBox,ResetPassword } from "../components";
import bg from '../assets/img-1.jpg'
function Modal({ children, onClose }) {
  
  return (
    <div
    className="fixed inset-0 z-30 flex items-center justify-center"
    style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="bg-gray-100/30 dark:bg-gray-800/30  rounded-lg shadow-lg">
      {children}
    </div>
  </div>
  
  );
}
function Auth() {
  const [currentView, setCurrentView] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const renderComponent = () => {
    switch (currentView) {
      case "login":
        return (
          <Login
            onSignup={() => setCurrentView("signup")}
            onForgotPassword={() => setCurrentView("forgotPassword")}
          />
        );
      case "signup":
        return <Signup onLogin={() => setCurrentView("login")} />;
      case "forgotPassword":
        return <Forgot onBack={() => setCurrentView("login")} onSendOtp={() => setCurrentView("otpbox")}/>;
      case "otpbox":
        return (
          <OtpBox
            onBack={() => setCurrentView("forgotPassword")}
            onVerify={() => setCurrentView("resetPassword")}
          />
        );
      case "resetPassword":
        return (
          <ResetPassword
            onBack={() => setCurrentView("otpbox")}
            onReset={() => setCurrentView("login")}
          />
        );
      default:
        return null;
    }
  };

  const handleGetStartedClick = () => {
    if (!isLoggedIn) {
      setCurrentView("login"); // Open login modal if not logged in
    } else {
      // Proceed with the "Get Started" action for logged-in users
      console.log("Proceeding with Get Started");
    }
  };
  return (
    <div className="dark:bg-gray-800">
      {currentView && (
        <Modal >{renderComponent()}</Modal>
      )}
    </div>
  );
}

export default Auth;
