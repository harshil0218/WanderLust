import React from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
function SideMenu() {
  // return (
  //   <aside
  //     id="default-sidebar"
  //     class="fixed top-0 left-0  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
  //     aria-label="Sidebar"
  //   >
  //     <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
  //       <ul class="space-y-2 font-medium">
  //         <li><MenuBtn/></li>
  //         <li><MenuBtn/></li>
  //         <li><MenuBtn/></li>
  //         <li><MenuBtn/></li>
  //       </ul>
  //     </div>
  //   </aside>
  // );
  return (
    // <aside>
    //   {/* Large Devices - Left Sidebar */}
    //   <div className="hidden lg:flex z-40 h-screen  bg-gray-100 dark:bg-gray-800 shadow-lg">
    //     <div className="h-full mx-3 py-2 flex flex-col">

    //       <button className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    //         <HomeOutlinedIcon fontSize="medium" className="mr-3" />
    //         <span>Home</span>
    //       </button>

    //       <button className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    //         <ChatOutlinedIcon fontSize="medium" className="mr-3" />
    //         <span>Messages</span>
    //       </button>

    //       <button className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    //         <AccountCircleOutlinedIcon fontSize="medium" className="mr-3" />
    //         <span>Profile</span>
    //       </button>

    //       <button className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    //         <SettingsOutlinedIcon fontSize="medium" className="mr-3" />
    //         <span>Settings</span>
    //       </button>

    //       <div className="mt-80 bottom-0 text-center text-gray-500 dark:text-gray-400 text-sm hover:text-gray-800 dark:hover:text-gray-200 hover:cursor-pointer">
    //         © 2025 TravelMate. All Rights Reserved.
    //       </div>
    //     </div>
    //   </div>
    //   {/* Small & Medium Devices - Bottom Navbar */}
    //   <div className="lg:hidden fixed bottom-0 left-0 z-40 w-full bg-gray-100 dark:bg-gray-800">
    //     <div className="flex justify-evenly px-4 py-1 w-full">
    //       <button className="flex items-center py-3 px-4 rounded-lg  text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    //         <HomeOutlinedIcon fontSize="large" c />
    //       </button>

    //       <button className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    //         <ChatOutlinedIcon fontSize="large" />
    //       </button>

    //       <button className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    //         <AccountCircleOutlinedIcon fontSize="large" />
    //       </button>

    //       <button className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
    //         <SettingsOutlinedIcon fontSize="large" />
    //       </button>
    //     </div>
    //   </div>

    // </aside>

    <aside>
      
      {/* Large Devices - Left Sidebar */}
      <div className="hidden lg:flex z-40 flex-l h-screen bg-gray-100 dark:bg-gray-800 shadow-lg">
        
        <div className="h-full mx-3 py-2 flex flex-col">
          
          {/* Navigation Buttons */}
          <button className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            
            <HomeOutlinedIcon fontSize="medium" className="mr-3" />
            <span>Home</span>
          </button>
          <button className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            
            <ChatOutlinedIcon fontSize="medium" className="mr-3" />
            <span>Messages</span>
          </button>
          <button className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            
            <AccountCircleOutlinedIcon
              fontSize="medium"
              className="mr-3"
            />
            <span>Profile</span>
          </button>
          <button className="flex items-center w-full py-4 px-3 my-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            
            <SettingsOutlinedIcon fontSize="medium" className="mr-3" />
            <span>Settings</span>
          </button>
          {/* Footer */}
          <div className=" text-center text-gray-500 dark:text-gray-400 text-sm hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
            
            © 2025 TravelMate. All Rights Reserved.
          </div>
        </div>
      </div>
      {/* Small & Medium Devices - Bottom Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 z-40 w-full bg-gray-100 dark:bg-gray-800">
        
        <div className="flex justify-evenly px-4 py-1 w-full">
          
          <button className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            
            <HomeOutlinedIcon fontSize="large" />
          </button>
          <button className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            
            <ChatOutlinedIcon fontSize="large" />
          </button>
          <button className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            
            <AccountCircleOutlinedIcon fontSize="large" />
          </button>
          <button className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            
            <SettingsOutlinedIcon fontSize="large" />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SideMenu;
