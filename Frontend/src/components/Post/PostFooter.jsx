import React from "react";
import { useState } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import CommentSection from "./Comment";
import ShareBtn from "./ShareBtn";
import AddComment from "./AddComment";


const commentsData = [
  {
    name: "John Doe",
    time: "2h ago",
    comment: "This is the first comment.",
    likes:10,
    replies: [
      { name: "Jane Doe", comment: "Thanks for sharing!" ,likes:3},
      { name: "Mike Ross", comment: "Very insightful.",likes:0 },
      { name: "Bob Brown", comment: "Me too!",likes:0 },
      { name: "Charlie Black", comment: "Great point!",likes:0 },
      
    ],
  },
  {
    name: "Alice Smith",
    time: "1h ago",
    likes:70,
    comment: "I totally agree with this.",
    replies: [
      { name: "Bob Brown", comment: "Me too!" ,likes:1},
      { name: "Charlie Black", comment: "Great point!" ,likes:1},
    ],
  },
  {
    name: "Chris Green",
    time: "3h ago",
    likes:10,
    comment: "Can you provide more details?",
    replies: [],
  },
  {
    name: "Chris Green",
    time: "3h ago",
    likes:15,
    comment: "Can you provide more details?",
    replies: [],
  },
  {
    name: "Chris Green",
    time: "3h ago",
    likes:17,
    comment: "Can you provide more details?",
    replies: [],
  },
  {
    name: "Chris Green",
    time: "3h ago",
    likes:0,
    comment: "Can you provide more details?",
    replies: [],
  },
];

function PostFooter({ likes = 0, comments = [] ,}) {
  const [showComments, setShowComments] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMoreComments = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };
  return (
    <>
      <div className="flex justify-center">
        <article className="w-96 p-0 bg-white dark:bg-gray-900 dark:text-gray-100">
          {/* Footer Section */}
          <div className="flex justify-between px-4 py-2 border-t border-gray-300 dark:border-gray-700">
            <LikeBtn likeCount={likes} />
            <CommentBtn
              showComments={showComments}
              setShowComments={setShowComments}
              commentCount={commentsData.length}
            />
            <ShareBtn />
          </div>

          {/* Comment Section */}
          {showComments && (
            <div className="px-4 py-2">
              <div className="space-y-4">
                {/* Single Comment */}

                {/* {commentsData && commentsData.map((comment, index) => (
                  <Comment key={index} data={comment} />
                ))} */}

                <CommentSection comments={commentsData} />

                {/* Add Comment */}
                <AddComment />
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
}

export default PostFooter;
