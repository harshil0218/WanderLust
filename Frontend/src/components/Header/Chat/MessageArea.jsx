import { React, useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
];
function MessageArea({ conversation = [], userId=2 ,onBack}) {
  
  const user = users.find((u) => u.id === Number(userId)) || {};
  console.log(user);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="flex flex-col h-screen">
    <div className="sticky top-0 z-10 p-4 mt-3 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={onBack} // Call the onBack function when clicked
        >
          <ArrowBackIcon />
        </button>
        <a href="#" className="block shrink-0">
          <img
            alt="Avatar"
            src={user.profilePicture}
            className="w-8 h-8 rounded-lg object-cover"
          />
        </a>
        <h3 className="font-medium text-sm">
          <a href="#" className="hover:underline">
            {user.name}
          </a>
        </h3>
      </div>
      <div className="relative -mt-2">
        <button
          className="text-lg font-medium text-gray-900 dark:text-white tracking-[2.5px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ...
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-10">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => console.log("View Profile clicked")}
                >
                  View Profile
                </button>
              </li>
              <li>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => console.log("Delete chat clicked")}
                >
                  Delete Chat
                </button>
              </li>
              <li>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => console.log("Mark as unread clicked")}
                >
                  Mark as Unread
                </button>
              </li>
              <li>
                <button
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => console.log("Report clicked")}
                >
                  Report
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    <div className="flex-1 p-4 space-y-4 no-scrollbar overflow-y-auto bg-gray-200 dark:bg-gray-800">
      {conversation.map((msg, index) => (
        <div
          key={index}
          className={`flex items-center ${msg.sender ? "" : "justify-end"}`}
        >
          {msg.sender && (
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={msg.avatar}
              alt="User Avatar"
            />
          )}
          <div
            className={`${
              msg.sender
                ? "bg-white dark:bg-gray-700 dark:text-gray-200"
                : "bg-blue-500 dark:bg-blue-700 text-white"
            } rounded-lg p-2 shadow max-w-sm relative`}
          >
            <p>{msg.message}</p>
            <span
              className={`text-xs ${
                msg.sender
                  ? "text-gray-400 dark:text-gray-400"
                  : "text-gray-200 dark:text-gray-300"
              }`}
            >
              {msg.time}
            </span>
            {!msg.sender && (
              <span className="absolute bottom-0 right-0 m-2 flex items-center space-x-0.5">
                {!msg.seen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-200 dark:text-white"
                  >
                    <path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41L9 16.17z" />
                  </svg>
                )}
                {msg.seen && <DoneAllIcon className="w-3 h-3 ml-2" />}
              </span>
            )}
          </div>
          {!msg.sender && (
            <img
              className="w-8 h-8 rounded-full ml-2"
              src={msg.avatar}
              alt="User Avatar"
            />
          )}
        </div>
      ))}
    </div>
    <div className="sticky bottom-[4rem] lg:bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
      <div className="flex items-center w-full max-w-screen-lg mx-auto">
        <input
          className="flex-grow border rounded-full py-2 px-4 mr-2 dark:bg-gray-600 dark:text-white dark:border-gray-500 border-gray-300"
          type="text"
          placeholder="Type your message..."
        />
        <button className="py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  </main>
  );
}

export default MessageArea;
