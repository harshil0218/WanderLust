import React from "react";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
function Logo() {
  const navigate = useNavigate();
  return (
    <button 
    onClick={() => navigate("/home")}
    className="flex items-center space-x-2 bg-gray-300 dark:bg-slate-700 p-2">
      <img src={logo} className="size-9" />
      <span className="hidden sm:inline text-xl font-bold text-gray-800 dark:text-gray-200">
        WanderLust
      </span>
    </button>
  );
}

export default Logo;
