import React from "react";
import SendIcon from "@mui/icons-material/Send";
function ShareBtn() {
  return (
    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
      <SendIcon className="-rotate-[35deg]" fontSize="small" />
      <p>Share</p>
    </button>
  );
}

export default ShareBtn;
