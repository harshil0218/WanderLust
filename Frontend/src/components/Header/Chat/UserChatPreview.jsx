import React from "react";

const UserChatPreview = ({
  profilePicture,
  userName,
  lastMessage,
  lastMessageTime,
  unreadCount,
  onClick,
  isDarkMode,
}) => {
  return (
    // <div
    //   onClick={onClick}
    //   className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-opacity-80 ${
    //     isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-black hover:bg-gray-100"
    //   }`}
    // >
    //   {/* Profile Picture */}
    //   <img
    //     src={profilePicture}
    //     alt={`${userName} profile`}
    //     className="w-12 h-12 rounded-full object-cover mr-3"
    //   />

    //   {/* Chat Details */}
    //   <div className="flex-grow">
    //     <div className="flex justify-between items-center">
    //       {/* Username */}
    //       <h3 className="font-semibold text-sm">{userName}</h3>
    //       {/* Unread Message Count */}
    //       {unreadCount > 0 && (
    //         <div
    //           className="ml-3 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold text-white bg-red-500"
    //         >
    //           {unreadCount}
    //         </div>
    //       )}
    //       {/* Last Message Time */}
    //       <span className="text-xs text-gray-500">{lastMessageTime}</span>
    //     </div>
    //     {/* Last Message */}
    //     <p className="text-sm text-gray-400 truncate">{lastMessage}</p>
    //   </div>
    // </div>

    <div
      onClick={onClick}
      className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-opacity-80 
         dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 bg-white text-black hover:bg-gray-100
      `}
    >
      {/* Profile Picture */}
      <img
        src={profilePicture}
        alt={`${userName} profile`}
        className="w-12 h-12 rounded-full object-cover mr-3"
      />

      {/* Chat Details */}
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          {/* Username */}
          <h3 className="font-semibold text-sm">{userName}</h3>
          <div className="flex items-center space-x-2">
            {/* Unread Message Count */}
            {unreadCount > 0 && (
              <div
                className="w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold text-white bg-red-500"
              >
                {unreadCount}
              </div>
            )}
            {/* Last Message Time */}
            <span className="text-xs text-gray-500">{lastMessageTime}</span>
          </div>
        </div>
        {/* Last Message */}
        <p className="text-sm text-gray-400 truncate">{lastMessage}</p>
      </div>
    </div>
  );
};

export default UserChatPreview;
