import { setRef } from "@mui/material";
import { React, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import XIcon from "@mui/icons-material/X";
function SettingCmpt() {
  const [activeSection, setActiveSection] = useState("main");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [likeCommentNotif, setLikeCommentNotif] = useState(false);
  const [messageNotif, setMessageNotif] = useState(false);
  const [recommendationNotif, setRecommendationNotif] = useState(false);
  const [theme, setTheme] = useState("light");
  const [appLanguage, setAppLanguage] = useState("English");
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState({});
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [otherText, setOtherText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);
  const [isSocialLinksDropdownOpen, setIsSocialLinksDropdownOpen] = useState(
    false
  );
  const [socialLinkedStatus, setSocialLinkedStatus] = useState({
    instagram: false,
    facebook: false,
    snapchat: false,
    x: false,
  });

  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "Our return policy lasts 30 days...",
    },
    {
      id: 2,
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number...",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries...",
    },
  ];

  const toggleSocialLinks = () => {
    setIsSocialLinksDropdownOpen(!isSocialLinksDropdownOpen);
  };

  const toggleSocialLinksStatus = (account) => {
    setLinkedStatus((prevStatus) => ({
      ...prevStatus,
      [account]: !prevStatus[account],
    }));
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value !== "Other") {
      setOtherText("");
    }
  };

  const handleIssueSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
    setSelectedOption("");
    setOtherText("");
    setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
  };
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };
  const toggleReportIssue = () => {
    setIsReportIssueOpen(!isReportIssueOpen);
  };
  const toggleFAQ = () => {
    setIsFAQOpen(!isFAQOpen);
    setActiveQuestions({});
  };

  const toggleQuestion = (id) => {
    setActiveQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handleAppLanguageChange = (e) => {
    setAppLanguage(e.target.value);
    // Add logic to apply the language change to your application
  };
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    // Add logic to apply the theme change to your application
  };
  // Function to handle navigation
  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleLogout = () => {
    console.log("Logout");

    // Add logic to handle logout
  };

  // Main Menu Options
  const menuOptions = [
    { id: "account", name: "Account Settings" },
    { id: "notifications", name: "Notification Settings" },
    { id: "app", name: "App Settings" },
    { id: "help", name: "Help & Support" },
  ];
  return (
    <div className="h-screen  w-screen sm:max-w-sm flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-sm w-full bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700 ">
          {activeSection !== "main" && (
            <button
              onClick={() => handleNavigation("main")}
              className="mr-4 text-gray-600 dark:text-gray-300 "
            >
              ←
            </button>
          )}
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {activeSection === "main" && "Settings"}
            {activeSection === "account" && "Account Settings"}
            {activeSection === "notifications" && "Notification Settings"}
            {activeSection === "app" && "App Settings"}
            {activeSection === "help" && "Help & Support"}
          </h2>
        </div>

        {/* Content */}
        <div className="p-4 text-gray-700 dark:text-gray-300 mb-4 ">
          {activeSection === "main" && (
            <ul className="space-y-4">
              {menuOptions.map((option) => (
                <li key={option.id}>
                  <button
                    onClick={() => handleNavigation(option.id)}
                    className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    {option.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}

          {activeSection === "account" && (
            <div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  <button className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                    Change Password
                  </button>
                </li>
                
                <li>
                  <button
                    className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={toggleSocialLinks}
                  >
                    Linked Accounts <span className="text-lg">{isSocialLinksDropdownOpen ? "-" : "+"}</span>
                  </button>
                  {isSocialLinksDropdownOpen && (
                    // <ul className="pl-4">
                    //   {[
                    //     { name: "Instagram", key: "instagram", logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                    //         <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                    //       </svg> },
                    //     { name: "Facebook", key: "facebook", logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                    //         <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                    //       </svg> },
                    //     { name: "Snapchat", key: "snapchat", logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                    //         <linearGradient id="s9~sBE_MLsUutFtX7i6Pra_KrtKMa6Fduil_gr1" x1="20.601" x2="27.399" y1="4.721" y2="43.279" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"></stop><stop offset="1" stop-color="#ffd000"></stop></linearGradient><path fill="url(#s9~sBE_MLsUutFtX7i6Pra_KrtKMa6Fduil_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path d="M14.613,20.505c-0.168,0-0.342,0.039-0.503,0.12c-0.265,0.132-0.463,0.36-0.557,0.641	c-0.151,0.453,0.004,0.95,0.386,1.236l3.676,2.296l-0.143,0.382c-0.066,0.179-1.67,4.403-4.703,6.057	c-0.161,0.088-0.264,0.206-0.274,0.317c-0.011,0.112,0.078,0.213,0.155,0.277c0.656,0.549,1.334,0.939,2.685,1.187l0.409,0.075	l0.001,0.416c0.002,0.608,0.195,1.251,0.375,1.251c0.893,0,2.751,0,4.608,0.928c1.03,0.515,2.472,0.823,3.271,0.823	s2.241-0.308,3.271-0.823c1.856-0.928,3.715-0.928,4.608-0.928c0.181,0,0.374-0.643,0.375-1.251l0.001-0.416l0.409-0.075	c1.351-0.247,2.029-0.637,2.686-1.187c0.077-0.064,0.166-0.165,0.155-0.277c-0.011-0.111-0.114-0.229-0.274-0.317	c-3.032-1.654-4.636-5.878-4.703-6.057l-0.143-0.382l3.71-2.32c0.347-0.263,0.502-0.759,0.351-1.212	c-0.093-0.281-0.291-0.508-0.556-0.641c-0.264-0.133-0.564-0.153-0.846-0.06l-2.546,1.042V18.1c0-3.636-2.914-6.594-6.496-6.594	c-3.586,0-6.5,2.958-6.5,6.594v3.508l-2.576-1.053C14.828,20.522,14.722,20.505,14.613,20.505z" opacity=".07"></path><path fill="none" stroke="#1d1d1b" stroke-width="2" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875 c1.751-0.875,3.509-0.875,4.384-0.875c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295 c0.531-0.445,0.407-1.085-0.201-1.416c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0 c-0.281-0.843-1.193-1.298-2.035-1.016l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0 c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771c-0.843-0.282-1.754,0.173-2.035,1.016l0,0 c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793c-0.608,0.331-0.732,0.972-0.201,1.416 c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875C21.613,36.689,23.132,37.011,24,37.011" opacity=".05"></path><path fill="none" stroke="#000" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875 c1.751-0.875,3.509-0.875,4.384-0.875c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295 c0.531-0.445,0.407-1.085-0.201-1.416c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0 c-0.281-0.843-1.193-1.298-2.035-1.016l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0 c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771c-0.843-0.282-1.754,0.173-2.035,1.016l0,0 c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793c-0.608,0.331-0.732,0.972-0.201,1.416 c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875C21.613,36.689,23.132,37.011,24,37.011" opacity=".07"></path><path fill="#fff" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875c1.751-0.875,3.509-0.875,4.384-0.875	c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295c0.531-0.445,0.407-1.085-0.201-1.416	c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0c-0.281-0.843-1.193-1.298-2.035-1.016	l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771	c-0.843-0.282-1.754,0.173-2.035,1.016l0,0c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793	c-0.608,0.331-0.732,0.972-0.201,1.416c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875	C21.613,36.689,23.132,37.011,24,37.011"></path>
                    //       </svg> },
                    //     { name: "X", key: "x", logo: <XIcon className=""/> },
                    //   ].map((account) => (
                    //     <li
                    //       key={account.key}
                    //       className="flex items-center justify-between p-2"
                    //     >
                    //       <span className="flex items-center">
                    //         <span className="mr-2">{account.logo}</span>
                    //         {account.name}
                    //       </span>
                    //       <button
                    //         className="text-blue-500 hover:underline"
                    //         onClick={() => toggleSocialLinksStatus(account.key)}
                    //       >
                    //         {socialLinkedStatus[account.key] ? "Unlink" : "Link"}
                    //       </button>
                    //     </li>
                    //   ))}
                    // </ul>
                    <ul className="pl-4">
                      {[
                        {
                          name: "Instagram",
                          key: "instagram",
                          logo: (
                            <svg
                            className="-ml-1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="35"
                              height="35"
                              viewBox="0 0 48 48"
                            >
                              <radialGradient
                                id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                                cx="19.38"
                                cy="42.035"
                                r="44.899"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stopColor="#fd5"></stop>
                                <stop offset=".328" stopColor="#ff543f"></stop>
                                <stop offset=".348" stopColor="#fc5245"></stop>
                                <stop offset=".504" stopColor="#e64771"></stop>
                                <stop offset=".643" stopColor="#d53e91"></stop>
                                <stop offset=".761" stopColor="#cc39a4"></stop>
                                <stop offset=".841" stopColor="#c837ab"></stop>
                              </radialGradient>
                              <path
                                fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                              ></path>
                              <radialGradient
                                id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                                cx="11.786"
                                cy="5.54"
                                r="29.813"
                                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stopColor="#4168c9"></stop>
                                <stop
                                  offset=".999"
                                  stopColor="#4168c9"
                                  stopOpacity="0"
                                ></stop>
                              </radialGradient>
                              <path
                                fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                              ></path>
                              <circle
                                cx="31.5"
                                cy="16.5"
                                r="1.5"
                                fill="#fff"
                              ></circle>
                              <path
                                fill="#fff"
                                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                              ></path>
                            </svg>
                          ),
                        },
                        {
                          name: "Facebook",
                          key: "facebook",
                          logo: (
                            <svg className="-ml-1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="35"
                              height="35"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#039be5"
                                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                              ></path>
                            </svg>
                          ),
                        },
                        {
                          name: "Snapchat",
                          key: "snapchat",
                          logo: (
                            <svg 
                                className="-ml-2"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="45"
                              height="45"
                              viewBox="0 0 48 48"
                            >
                              <linearGradient
                                id="s9~sBE_MLsUutFtX7i6Pra_KrtKMa6Fduil_gr1"
                                x1="20.601"
                                x2="27.399"
                                y1="4.721"
                                y2="43.279"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stopColor="#fede00"></stop>
                                <stop offset="1" stopColor="#ffd000"></stop>
                              </linearGradient>
                              <path
                                fill="url(#s9~sBE_MLsUutFtX7i6Pra_KrtKMa6Fduil_gr1)"
                                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                              ></path>
                              <path
                                d="M14.613,20.505c-0.168,0-0.342,0.039-0.503,0.12c-0.265,0.132-0.463,0.36-0.557,0.641	c-0.151,0.453,0.004,0.95,0.386,1.236l3.676,2.296l-0.143,0.382c-0.066,0.179-1.67,4.403-4.703,6.057	c-0.161,0.088-0.264,0.206-0.274,0.317c-0.011,0.112,0.078,0.213,0.155,0.277c0.656,0.549,1.334,0.939,2.685,1.187l0.409,0.075	l0.001,0.416c0.002,0.608,0.195,1.251,0.375,1.251c0.893,0,2.751,0,4.608,0.928c1.03,0.515,2.472,0.823,3.271,0.823	s2.241-0.308,3.271-0.823c1.856-0.928,3.715-0.928,4.608-0.928c0.181,0,0.374-0.643,0.375-1.251l0.001-0.416l0.409-0.075	c1.351-0.247,2.029-0.637,2.686-1.187c0.077-0.064,0.166-0.165,0.155-0.277c-0.011-0.111-0.114-0.229-0.274-0.317	c-3.032-1.654-4.636-5.878-4.703-6.057l-0.143-0.382l3.71-2.32c0.347-0.263,0.502-0.759,0.351-1.212	c-0.093-0.281-0.291-0.508-0.556-0.641c-0.264-0.133-0.564-0.153-0.846-0.06l-2.546,1.042V18.1c0-3.636-2.914-6.594-6.496-6.594	c-3.586,0-6.5,2.958-6.5,6.594v3.508l-2.576-1.053C14.828,20.522,14.722,20.505,14.613,20.505z"
                                opacity=".07"
                              ></path>
                              <path
                                fill="none"
                                stroke="#1d1d1b"
                                strokeWidth="2"
                                d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875 c1.751-0.875,3.509-0.875,4.384-0.875c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295 c0.531-0.445,0.407-1.085-0.201-1.416c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0 c-0.281-0.843-1.193-1.298-2.035-1.016l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0 c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771c-0.843-0.282-1.754,0.173-2.035,1.016l0,0 c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793c-0.608,0.331-0.732,0.972-0.201,1.416 c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875C21.613,36.689,23.132,37.011,24,37.011"
                                opacity=".05"
                              ></path>
                              <path
                                fill="none"
                                stroke="#000"
                                d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875 c1.751-0.875,3.509-0.875,4.384-0.875c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295 c0.531-0.445,0.407-1.085-0.201-1.416c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0 c-0.281-0.843-1.193-1.298-2.035-1.016l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0 c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771c-0.843-0.282-1.754,0.173-2.035,1.016l0,0 c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793c-0.608,0.331-0.732,0.972-0.201,1.416 c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875C21.613,36.689,23.132,37.011,24,37.011"
                                opacity=".07"
                              ></path>
                              <path
                                fill="#fff"
                                d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875c1.751-0.875,3.509-0.875,4.384-0.875	c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295c0.531-0.445,0.407-1.085-0.201-1.416	c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0c-0.281-0.843-1.193-1.298-2.035-1.016	l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771	c-0.843-0.282-1.754,0.173-2.035,1.016l0,0c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793	c-0.608,0.331-0.732,0.972-0.201,1.416c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875	C21.613,36.689,23.132,37.011,24,37.011"
                              ></path>
                            </svg>
                          ),
                        },
                        {
                          name: "X",
                          key: "x",
                          logo: <XIcon className="w-8 h-8 " />, // Adjust size as needed
                        },
                      ].map((account) => (
                        <li
                          key={account.key}
                          className="flex items-center justify-between p-2"
                        >
                          <span className="flex items-center space-x-2">
                            <span>{account.logo}</span>
                            <span>{account.name}</span>
                          </span>
                          <button
                            className="text-blue-500 hover:underline"
                            onClick={() => toggleSocialLinksStatus(account.key)}
                          >
                            {socialLinkedStatus[account.key]
                              ? "Unlink"
                              : "Link"}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                    Privacy Settings
                  </button>
                </li>
              </ul>
            </div>
          )}

          {activeSection === "notifications" && (
            <div>
              <ul className="w-full space-y-4 text-gray-700 dark:text-gray-300 mb-4">
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      New Chat Messages
                    </span>
                    <input
                      type="checkbox"
                      checked={messageNotif}
                      className="sr-only peer"
                      onChange={(e) => setMessageNotif(e.target.checked)}
                    />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </li>
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Likes/Comments Notifications
                    </span>
                    <input
                      type="checkbox"
                      checked={likeCommentNotif}
                      className="sr-only peer"
                      onChange={(e) => setLikeCommentNotif(e.target.checked)}
                    />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </li>
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Travel Buddy Recommendations
                    </span>
                    <input
                      type="checkbox"
                      checked={recommendationNotif}
                      className="sr-only peer"
                      onChange={(e) => setRecommendationNotif(e.target.checked)}
                    />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </li>
              </ul>
            </div>
          )}

          {activeSection === "app" && (
            <div>
              <ul className="w-full space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Theme
                    </span>
                    <select
                      value={theme}
                      onChange={handleThemeChange}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded p-2"
                    >
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                    </select>
                  </label>
                </li>
                <li className="bg-gray-100 dark:bg-gray-800 p-3 rounded border-b-[2px] dark:border-gray-700 border-gray-300">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      Language
                    </span>
                    <select
                      value={appLanguage}
                      onChange={handleAppLanguageChange}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300 rounded p-2"
                    >
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="gujarati">Gujarati</option>
                    </select>
                  </label>
                </li>
              </ul>
            </div>
          )}

          {activeSection === "help" && (
            <div>
              <ul className="w-full space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  <button
                    className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={toggleFAQ}
                  >
                    FAQ <span className="text-lg">{isFAQOpen ? "-" : "+"}</span>
                  </button>
                  {isFAQOpen && (
                    <ul className="pl-4">
                      {faqs.map((faq) => (
                        <li key={faq.id}>
                          <button
                            className="w-full text-left p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                            onClick={() => toggleQuestion(faq.id)}
                          >
                            {faq.question} {activeQuestions[faq.id] ? "-" : "+"}
                          </button>
                          {activeQuestions[faq.id] && (
                            <div className="pl-4 p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={toggleContact}
                  >
                    Contact Support{" "}
                    <span className="text-lg">{isContactOpen ? "-" : "+"}</span>
                  </button>
                  {isContactOpen && (
                    <ul className="pl-4 ">
                      <li className="flex items-center m-2 hover:scale-105 hover:cursor-pointer">
                        <FaEnvelope className="text-gray-800 dark:text-gray-200 mr-2" />
                        <span>Email: support@example.com</span>
                      </li>
                      <li className="flex items-center m-2 hover:scale-105 hover:cursor-pointer">
                        <FaPhone className="text-gray-800 dark:text-gray-200 mr-2 rotate-90" />
                        <span>Phone: +1 (123) 456-7890</span>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="w-full text-left p-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-b-[2px] dark:border-gray-800 border-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={toggleReportIssue}
                  >
                    Report Issue{" "}
                    <span className="text-lg">
                      {isReportIssueOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isReportIssueOpen && (
                    <li>
                      <form onSubmit={handleIssueSubmit} className="space-y-4">
                        <ul className="w-full space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                          <li>
                            <label className="block text-gray-700 dark:text-gray-300 ml-3 my-2">
                              Select an issue:
                            </label>
                            <ul className="pl-4">
                              <li>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="issue"
                                    value="bug"
                                    checked={selectedOption === "bug"}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                  />
                                  Bug
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="issue"
                                    value="feature request"
                                    checked={
                                      selectedOption === "feature request"
                                    }
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                  />
                                  Feature Request
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="issue"
                                    value="other"
                                    checked={selectedOption === "other"}
                                    onChange={handleOptionChange}
                                    className="mr-2"
                                  />
                                  Other
                                </label>
                                {selectedOption === "other" && (
                                  <input
                                    type="text"
                                    value={otherText}
                                    onChange={(e) =>
                                      setOtherText(e.target.value)
                                    }
                                    placeholder="Please specify"
                                    className="mt-2 p-2 border line-clamp-2 border-gray-300 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                  />
                                )}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <button
                          type="submit"
                          className=" text-left p-3 bg-blue-500  text-white  rounded hover:bg-blue-600 "
                        >
                          Submit
                        </button>
                      </form>
                      {showSuccess && (
                        <div className="mt-4 p-3 bg-green-500 text-white rounded ">
                          Issue reported successfully!
                        </div>
                      )}
                    </li>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingCmpt;
