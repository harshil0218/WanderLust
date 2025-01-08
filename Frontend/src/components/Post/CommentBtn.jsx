import { React, useState } from "react";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
function CommentBtn({showComments, setShowComments}) {
    // const [showComments, setShowComments] = useState(false);
    const [commentCount, setCommentCount] = useState(0);
  return (
    <button
      onClick={() => setShowComments(!showComments)}
      className={` ${
        showComments ? "text-blue-600" : "text-gray-500"
      } flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400`}
    >
      <CommentOutlinedIcon fontSize="small" />
      <p>Comments {commentCount}</p>
    </button>
  );
}

export default CommentBtn;
