import React from "react";
import SendIcon from "@mui/icons-material/Send";
function AddComment({userId,userProfile}) {
  return (
    <>
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700">
          <img src={userProfile} className="size-8" alt="" />
        </div>
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-blue-400"
        />
        <button className="flex-shrink-0 w-9 h-9 bg-gray-300 rounded-md dark:bg-gray-700">
          <SendIcon
            className="-rotate-[35deg] justify-center -mt-2.5 ml-1.5"
            fontSize="small"
          />
        </button>
      </div>
    </>
  );
}

export default AddComment;
