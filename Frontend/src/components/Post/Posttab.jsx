import { React, useState } from "react";
import Post from "./Post";

function Posttab({ posts = [] }) {
  const [showAll, setShowAll] = useState(false);

  // Determine the posts to display based on the showAll state
  const postsToDisplay = showAll ? posts : posts.slice(0, 2);

  return (
    <div className="mt-6">
      {postsToDisplay &&
        postsToDisplay.map((post, index) => (
          <Post key={index} content={post} />
        ))}
      {!showAll && posts.length > 2 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none"
        >
          Show All Posts
        </button>
      )}
    </div>
  );
}

export default Posttab;
