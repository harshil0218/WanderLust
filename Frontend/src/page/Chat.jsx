import { React, useState, useEffect } from "react";
import { Header, SideMenu, ChatSidebar, MessageArea } from "../components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { useFetchChats } from "../hooks/useChat";
// import { useFetchChatMessages } from "../hooks/useChat";
const conversations = [
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
// mimic function
function useFetchChatMessages(userId) {
  // Mimic API function to fetch chat messages
  return new Promise((resolve) => {
    console.log("Fetching chat messages for user ID:", userId);

    setTimeout(() => {
      resolve(conversations); // Return mock data
    }, 1000); // Simulate API delay
  });
}
function Chat() {
  // api call
  // const { data, isLoading, isError } = useFetchChats();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showMessageArea, setShowMessageArea] = useState(false);
  const userIds = [1, 2, 3, 4, 5, 6];

  const onBack = () => {
    setShowMessageArea(false);
  };
  useEffect(() => {
    if (selectedUserId) {
      setIsLoading(true);
      setIsError(false);
      useFetchChatMessages(selectedUserId)
        .then((data) => {
          setConversation(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching chat messages:", error);
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [selectedUserId]);
  const handleChatClick = (userId) => {
    setSelectedUserId(userId);
    setShowMessageArea(true); // For mobile view, show the message area };
  };
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  if (isError)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Error occured</p>
      </div>
    );
  return (


    // <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 overflow-hidden">
    //   <header className="text-white fixed w-full top-0 z-20">
    //     <Header />
    //   </header>
    //   <div className="flex-1 flex pt-16">
    //     <aside className="hidden lg:block p-4 h-[95vh] bg-gray-100 dark:bg-gray-900 overflow-y-auto">
    //       <SideMenu />
    //     </aside>
    //     <div
    //       className={`overflow-y-auto no-scrollbar ${
    //         showMessageArea ? 'hidden sm:block' : 'block'
    //       } flex-grow bg-gray-200 dark:bg-gray-900`}
    //     >
    //       <ChatSidebar onChatClick={handleChatClick} userIds={userIds} />
    //     </div>
    //     <div
    //       className={`${
    //         showMessageArea ? 'block' : 'hidden sm:block'
    //       } flex-grow bg-white dark:bg-gray-900`}
    //     >
    //       {selectedUserId ? (
    //         <MessageArea
    //           conversation={conversation}
    //           userId={selectedUserId}
    //           onBack={onBack}
    //         />
    //       ) : (
    //         <div className="flex items-center justify-center h-full">
    //           <p className="text-gray-500">Select a user to start chatting</p>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   {/* Small & Medium Devices - Bottom Navbar */}
    //   <div className="lg:hidden fixed -bottom-1 left-0 z-40 w-full bg-gray-100 dark:bg-gray-800">
    //     <SideMenu />
    //   </div>
    // </div>

    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 no-scrollbar overflow-hidden">
      <header className="text-white fixed w-full top-0 z-20">
        <Header />
      </header>
      <div className="flex-1 flex pt-16 pb-16">
        <aside className="hidden lg:block p-4 no-scrollbar h-[95vh] bg-gray-100 dark:bg-gray-900 overflow-y-auto">
          <SideMenu />
        </aside>
        <div
          className={`overflow-y-auto no-scrollbar ${
            showMessageArea ? 'hidden sm:block' : 'block'
          } flex-grow bg-gray-200 dark:bg-gray-900`}
        >
          <ChatSidebar onChatClick={handleChatClick} userIds={userIds} />
        </div>
        <div
          className={`${
            showMessageArea ? 'block' : 'hidden sm:block'
          } flex-grow bg-white dark:bg-gray-900`}
        >
          {selectedUserId ? (
            <MessageArea
              conversation={conversation}
              userId={selectedUserId}
              onBack={onBack}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a user to start chatting</p>
            </div>
          )}
        </div>
      </div>
      {/* Small & Medium Devices - Bottom Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 z-40 w-full bg-gray-100 dark:bg-gray-800">
        <SideMenu />
      </div>
    </div>
  );
}

export default Chat;
