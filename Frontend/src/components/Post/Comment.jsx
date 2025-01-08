import { React, useState } from "react";
import LikeBtn from "./LikeBtn";
import AddComment from "./AddComment";

// function Comment({ data, isReply = false }) {
//   const [showReplies, setShowReplies] = useState(false);
//   return (
//     <div className={`space-y-2 ${isReply ? "ml-8" : ""}`}>
//       <div className="flex items-start space-x-3">
//         <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700"></div>
//         <div className="flex-1">
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
//               {data.name}
//             </span>
//             {data.time && (
//               <span className="text-xs text-gray-500 dark:text-gray-400">
//                 {data.time}
//               </span>
//             )}
//           </div>
//           <p className="text-sm text-gray-700 dark:text-gray-300">
//             {data.comment}
//           </p>
//           <div className="flex space-x-4 mt-1">
//             <LikeBtn />
//             {data.replies && data.replies.length > 0 && (
//               <button
//                 onClick={() => setShowReplies(!showReplies)}
//                 className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
//               >
//                 {showReplies ? "Hide Replies" : "Reply"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Replies */}
//       {showReplies &&
//         data.replies &&
//         data.replies.map((reply, index) => (
//           <Comment key={index} data={reply} isReply={true} />
//         ))}
//     </div>
//   );
// }

function Comment({ data, isReply = false }) {
  const [showReplies, setShowReplies] = useState(false);
  const [visibleReplies, setVisibleReplies] = useState(3);

  const handleLoadMoreReplies = () => {
    setVisibleReplies((prevCount) => prevCount + 10);
  };

  return (
    <div className={`space-y-2 ${isReply ? "ml-8" : ""}`}>
      {/* Main Comment */}
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {data.name}
            </span>
            {data.time && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {data.time}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {data.comment}
          </p>
          <div className="flex space-x-4 mt-1">
            <LikeBtn />
            {data.replies && data.replies.length > 0 && (
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {showReplies
                  ? "Hide Replies"
                  : `Reply (${data.replies.length})`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Replies Section */}
      {showReplies && data.replies && (
        <div className="mt-2">
          {data.replies.slice(0, visibleReplies).map((reply, index) => (
            <Comment key={index} data={reply} isReply={true} />
          ))}
          {visibleReplies < data.replies.length && (
            <button
              onClick={handleLoadMoreReplies}
              className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Load more replies
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function CommentSection({ comments }) {
  const [visibleComments, setVisibleComments] = useState(3);

  const handleLoadMoreComments = () => {
    setVisibleComments((prevCount) => prevCount + 10);
  };

  return (
    <div className="space-y-4">
      {comments.slice(0, visibleComments).map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}

      {visibleComments < comments.length && (
        <button
          onClick={handleLoadMoreComments}
          className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Load more comments
        </button>
      )}
    </div>
  );
}

export default CommentSection;
