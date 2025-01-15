import { React, useState } from "react";
import { Header, SideMenu, ChatSidebar, MessageArea } from "../components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
const conversation = [
  {
    message: "Hi, how can I help you?",
    time: "10:30 AM",
    sender: true,
    seen: true,
    avatar:
      "https://images.pexels.com/photos/20117720/pexels-photo-20117720/free-photo-of-woman-in-spaghetti-strap-dress-standing-in-corner.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    message: "Sure, I can help with that.",
    time: "10:31 AM",
    sender: false,
    seen: true,
    avatar: "https://picsum.photos/50/50",
  },
  {
    message: "Let me check that for you.",
    time: "10:32 AM",
    sender: false,
    avatar: "https://picsum.photos/50/50",
    seen: false, // Custom field for seen status
  },
  {
    message: "Thank you",
    time: "10:33 AM",
    sender: true,
    seen: true,
    avatar:
      "https://images.pexels.com/photos/20117720/pexels-photo-20117720/free-photo-of-woman-in-spaghetti-strap-dress-standing-in-corner.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function Chat() {
  const [isMessageAreaOpen, setIsMessageAreaOpen] = useState(false);
  const [showMessageArea, setShowMessageArea] = useState(false);
  

  return (
    // <div className="min-h-screen flex flex-col">
      
    //   <header className="text-white fixed w-full top-0 z-20 bg-blue-500 p-0">
        
    //     <Header />
    //   </header>
    //   <div className="flex-1 flex pt-16">
        
    //     <aside className="p-4 bg-gray-100 dark:bg-gray-800 h-full overflow-y-auto hidden md:block">
          
    //       <SideMenu />
    //     </aside>
    //     <div
    //       className={`${
    //         showMessageArea ? "hidden" : "block md:block"
    //       } flex-grow bg-gray-200 dark:bg-gray-700`}
    //     >
          
    //       <ChatSidebar onUserClick={() => setShowMessageArea(true)} />
    //     </div>
    //     <div
    //       className={`${
    //         showMessageArea ? "block" : "hidden md:block"
    //       } flex-grow bg-white dark:bg-gray-900`}
    //     >
          
    //       <button
    //         className="md:hidden p-2 text-white bg-blue-500"
    //         onClick={() => setShowMessageArea(false)}
    //       >
            
    //         Back
    //       </button>
    //       <MessageArea />
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen flex dark:bg-gray-900 overflow-hidden no-scrollbar">
      
      <header className="text-white fixed w-full top-0 z-20 ">
        
        <Header />
      </header>
      <div className="flex-1 flex pt-16">
        
        <aside className="p-4 bg-gray-100 dark:bg-gray-800 h-full overflow-y-auto hidden md:block">
          
          <SideMenu />
        </aside>
        <div
          className={`overflow-y-auto scroll-auto ${
            showMessageArea ? "hidden" : "block md:block"
          } flex-grow bg-gray-200 dark:bg-gray-700`}
        >
          
          <ChatSidebar onUserClick={() => setShowMessageArea(true)} />
        </div>
        <div
          className={`${
            showMessageArea ? "block" : "hidden md:block"
          } flex-grow bg-white dark:bg-gray-900`}
        >
          
          <button
            className="md:hidden p-2 text-white bg-blue-500"
            onClick={() => setShowMessageArea(false)}
          >
            
            Back
          </button>
          <MessageArea />
        </div>
      </div>
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
    </div>
  );
}

export default Chat;
