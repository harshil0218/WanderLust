import { React, useState, useEffect } from "react";
import UserChatPreview from "./UserChatPreview";
import "../../../../src/App.css";
import ChatSearch from "./ChatSearch";
import { useFetchChats } from "../../../hooks/useChat";
import { useFetchUserFields } from "../../../hooks/useUser";
let users = [
  {
    id: 1,
    profilePicture:
      "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "2:15 PM",
    unreadCount: 3,
  },
  {
    id: 2,
    profilePicture: 'https://images.pexels.com/photos/30224866/pexels-photo-30224866/free-photo-of-serene-woman-relaxing-in-a-pool-with-red-bikini.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Jane Smith",
    lastMessage: "I'll call you later.",
    lastMessageTime: "1:10 PM",
    unreadCount: 0,
  },
  {
    id: 3,
    profilePicture:'https://images.pexels.com/photos/14629394/pexels-photo-14629394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Mike Ross",
    lastMessage: "Can you share the document?",
    lastMessageTime: "12:45 PM",
    unreadCount: 5,
  },
  {
    id: 4,
    profilePicture: 'https://images.pexels.com/photos/19686255/pexels-photo-19686255/free-photo-of-woman-wearing-orange-jacket-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Tony Stark",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "2:15 PM",
    unreadCount: 1,
  },
  {
    id: 5,
    profilePicture:'https://images.pexels.com/photos/20891103/pexels-photo-20891103/free-photo-of-young-woman-in-white-dress-walking-up-the-stairs-on-a-ship.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Natasha Romanoff",
    lastMessage: "I'll call you later.",
    lastMessageTime: "1:10 PM",
    unreadCount: 4,
  },
  {
    id: 6,
    profilePicture:'https://images.pexels.com/photos/30056440/pexels-photo-30056440/free-photo-of-chic-woman-in-black-coat-with-designer-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Bruce Banner",
    lastMessage: "Can you share the document?",
    lastMessageTime: "12:45 PM",
    unreadCount: 0,
  },
  {
    id: 7,
    profilePicture:'https://images.pexels.com/photos/14629394/pexels-photo-14629394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Mike Ross",
    lastMessage: "Can you share the document?",
    lastMessageTime: "12:45 PM",
    unreadCount: 5,
  },
  {
    id: 8,
    profilePicture: 'https://images.pexels.com/photos/19686255/pexels-photo-19686255/free-photo-of-woman-wearing-orange-jacket-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Tony Stark",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "2:15 PM",
    unreadCount: 1,
  },
  {
    id: 9,
    profilePicture:'https://images.pexels.com/photos/20891103/pexels-photo-20891103/free-photo-of-young-woman-in-white-dress-walking-up-the-stairs-on-a-ship.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Natasha Romanoff",
    lastMessage: "I'll call you later.",
    lastMessageTime: "1:10 PM",
    unreadCount: 4,
  },
  {
    id: 10,
    profilePicture:'https://images.pexels.com/photos/30056440/pexels-photo-30056440/free-photo-of-chic-woman-in-black-coat-with-designer-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Bruce Banner",
    lastMessage: "Can you share the document?",
    lastMessageTime: "12:45 PM",
    unreadCount: 0,
  },
  {
    id: 10,
    profilePicture:'https://images.pexels.com/photos/14629394/pexels-photo-14629394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    name: "Mike Ross",
    lastMessage: "Can you share the document?",
    lastMessageTime: "12:45 PM",
    unreadCount: 5,
  },
];
function ChatSidebar({ userIds = [],onChatClick }) {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  // api call
  // const {data,isLoading,isError} = useFetchUserFields(userIds)
  // const users = data;

  // Simulate API call
  useEffect(() => {
    const fetchChats = () => {
      setIsLoading(true);
      setIsError(false);

      setTimeout(() => {
        // Simulate success or failure
        const isSuccess = Math.random() > 0.// 80% success rate
        if (isSuccess) {
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      },); // Simulated delay
    };

    fetchChats();
  }, []);


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occured</div>;
  return (
    // <div className="flex h-screen  flex-col ">
    //   <div className="flex-1 overflow-hidden">
    //     <div className="flex-col overflow-y-auto no-scrollbar p-4 shrink-0 h-full dark:bg-gray-900 bg-gray-50 w-full">
    //       <div className="p-4 w-full dark:bg-gray-900 bg-gray-50 sticky top-0 left-0 right-0">
    //         <ChatSearch className=" p-3" />
    //       </div>
    //       <div className="space-y-3 overflow-y-auto flex-1">
    //         {users &&
    //           users.map((user) => (
    //             <UserChatPreview
    //               key={user.id}
    //               profilePicture={user.profilePicture}
    //               userName={user.name}
    //               lastMessage={user.lastMessage}
    //               lastMessageTime={user.lastMessageTime}
    //               unreadCount={user.unreadCount}
    //               onClick={() => onChatClick(user.id)}
    //             />
    //           ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="flex h-screen flex-col">
    //   <div className="flex-1 overflow-hidden">
    //     <div className="flex-col overflow-y-auto no-scrollbar p-4 h-full dark:bg-gray-900 bg-gray-50 w-full">
    //       {/* Sticky Search Bar */}
    //       <div className="p-4 w-full dark:bg-gray-900 bg-gray-50 sticky top-0 left-0 right-0">
    //         <ChatSearch className="p-3" />
    //       </div>
    //       {/* User Chat Previews */}
    //       <div className="space-y-3 overflow-y-auto flex-1">
    //         {users &&
    //           users.map((user) => (
    //             <UserChatPreview
    //               key={user.id}
    //               profilePicture={user.profilePicture}
    //               userName={user.name}
    //               lastMessage={user.lastMessage}
    //               lastMessageTime={user.lastMessageTime}
    //               unreadCount={user.unreadCount}
    //               onClick={() => onChatClick(user.id)}
    //             />
    //           ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex h-screen flex-col">
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-col overflow-y-auto no-scrollbar p-4 h-full dark:bg-gray-900 bg-gray-50 w-full">
          {/* Sticky Search Bar */}
          <div className="pb-4 w-full dark:bg-gray-900 bg-gray-50 sticky top-0 left-0 right-0 z-10">
            <ChatSearch className="p-0" />
          </div>
          {/* User Chat Previews */}
          <div className="flex-1 space-y-3 overflow-y-auto">
            {users &&
              users.map((user) => (
                <UserChatPreview
                  key={user.id}
                  profilePicture={user.profilePicture}
                  userName={user.name}
                  lastMessage={user.lastMessage}
                  lastMessageTime={user.lastMessageTime}
                  unreadCount={user.unreadCount}
                  onClick={() => onChatClick(user.id)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default ChatSidebar;
