import React from "react";
import chatIconLight from "../../../assets/chat1.svg";
import chatIconDark from '../../../assets/chat2.svg';
import useTheme from "../../../context/theme";
function ChatBtn({ messageCount }) {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";
  // dark:bg-gray-300 dark:hover:bg-gray-400 bg-gray-300 hover:bg-gray-400
  return (
    <div className="relative">
      <button
        className={`p-2 h-11 w-11 rounded-full shadow-lg dark:bg-gray-300 dark:hover:bg-gray-400 bg-gray-300 hover:bg-gray-400`}
      >
        <img
          src={isDark ? chatIconDark : chatIconLight}
          alt="Chat Icon"
          className="w-7 h-7"
        />
        {messageCount > 0 && (
          <span
            className={`absolute -bottom-1 -right-2 text-xs font-bold px-1.5 py-0.5 rounded-full  dark:bg-red-500 dark:text-white bg-red-600 text-white`}
          >
            {messageCount}
          </span>
        )}
      </button>
    </div>
    

  );
}

export default ChatBtn;
