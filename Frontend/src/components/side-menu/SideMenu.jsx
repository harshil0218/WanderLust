import {React,useState} from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
function SideMenu() {
  const navigate = useNavigate();
  return (
    <aside>
      {/* Large Devices - Left Sidebar */}
      <div className="hidden lg:flex z-40 h-[95vh] bg-gray-100 dark:bg-gray-800">
        <div className="h-full mx-3 py-2 flex flex-col">
          {/* Navigation Buttons */}
          <button 
          onClick={() => navigate("/home")}
          className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <HomeOutlinedIcon fontSize="medium" className="mr-3" />
            <span>Home</span>
          </button>
          <button 
          onClick={() => navigate("/chat")}
          className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <ChatOutlinedIcon fontSize="medium" className="mr-3" />
            <span>Messages</span>
          </button>
          <button 
          onClick={() => navigate("/createpost")}
          className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <AddCircleOutlineIcon fontSize="medium" className="mr-3" />
            <span>Create Post</span>
          </button>
          <button 
          onClick={() => navigate("/profile")}
          className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <AccountCircleOutlinedIcon fontSize="medium" className="mr-3" />
            <span>Profile</span>
          </button>
          <button 
          onClick={() => navigate("/setting")}
          className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <SettingsOutlinedIcon fontSize="medium" className="mr-3" />
            <span>Settings</span>
          </button>
          {/* Footer */}
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
            © 2025 TravelMate. All Rights Reserved.
          </div>
        </div>
        
      </div>
      {/* Small & Medium Devices - Bottom Navbar */}
      <div>
        {/* Small & Medium Devices - Bottom Navbar */}
        <div className="lg:hidden fixed bottom-0 left-0 z-40 w-full bg-gray-100 dark:bg-gray-800">
          <div className="flex justify-evenly px-4 py-1 w-full">
            <button 
            onClick={() => navigate("/home")}
            className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <HomeOutlinedIcon fontSize="large" />
            </button>
            <button 
            onClick={() => navigate("/chat")}
            className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <ChatOutlinedIcon fontSize="large" />
            </button>
            <div 
            onClick={() => navigate("/createpost")}
            className="flex  px-3 -py-4  rounded-full text-gray-800 dark:text-gray-100 bg-gray-300  dark:bg-gray-600 transition-colors">
              <button className="flex items-center  rounded-lg  transition-colors">
                <AddCircleOutlineIcon fontSize="large" />
              </button>
            </div>
            <button 
            onClick={() => navigate("/profile")}
            className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <AccountCircleOutlinedIcon fontSize="large" />
            </button>
            <button 
            onClick={() => navigate("/setting")}
            className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <SettingsOutlinedIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideMenu;
