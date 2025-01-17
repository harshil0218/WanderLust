import { React, useEffect, useState } from "react";
import Post from "./Post";


const trialPosts = [
  {
    id: 1,
    user_id: 101,

    name: "Rahul Sharma",
    profile_image:
      "https://images.pexels.com/photos/29702314/pexels-photo-29702314/free-photo-of-woman-in-polka-dot-dress-with-cat-in-lush-green-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    bio: "Traveler. Adventure seeker. Nature lover.",
    captions: "Exploring the beautiful mountains of Himachal Pradesh!",
    time: "2025-01-10T10:30:00Z",
    location: "Himachal Pradesh, India",
    likes: 154,
    comments: [
      {
        name: "John Doe",
        time: "2h ago",
        comment: "This is the first comment.",
        replies: [
          { name: "Jane Doe", comment: "Thanks for sharing!" },
          { name: "Mike Ross", comment: "Very insightful." },
          { name: "Bob Brown", comment: "Me too!" },
          { name: "Charlie Black", comment: "Great point!" },
        ],
      },
      {
        name: "Alice Smith",
        time: "1h ago",
        comment: "I totally agree with this.",
        replies: [
          { name: "Bob Brown", comment: "Me too!" },
          { name: "Charlie Black", comment: "Great point!" },
        ],
      },
      {
        name: "Chris Green",
        time: "3h ago",
        comment: "Can you provide more details?",
        replies: [],
      },
      {
        name: "Chris Green",
        time: "3h ago",
        comment: "Can you provide more details?",
        replies: [],
      },
      {
        name: "Chris Green",
        time: "3h ago",
        comment: "Can you provide more details?",
        replies: [],
      },
      {
        name: "Chris Green",
        time: "3h ago",
        comment: "Can you provide more details?",
        replies: [],
      },
    ],
    trip_duration: "3 days",
    preference: "Adventure",
    budget_type: "Medium",
    budget: 20000,
    hashtags: ["#mountains", "#adventure", "#travel"],
    images: [
      "https://images.pexels.com/photos/29871529/pexels-photo-29871529/free-photo-of-beautiful-cherry-blossom-trees-in-tokyo-during-spring.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/13551533/pexels-photo-13551533.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
  },
  {
    id: 2,
    user_id: 102,

    name: "Priya Desai",
    profile_image:
      "https://images.pexels.com/photos/18036690/pexels-photo-18036690/free-photo-of-a-woman-in-a-pink-dress-holding-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    bio: "Beach enthusiast and foodie!",
    captions: "A serene evening by the beach.",
    time: "2025-01-11T18:45:00Z",
    location: "Goa, India",
    likes: 289,
    comments: [
      {
        name: "John Doe",
        time: "2h ago",
        comment: "This is the first comment.",
        replies: [
          { name: "Jane Doe", comment: "Thanks for sharing!" },
          { name: "Mike Ross", comment: "Very insightful." },
          { name: "Bob Brown", comment: "Me too!" },
          { name: "Charlie Black", comment: "Great point!" },
        ],
      },
      {
        name: "Alice Smith",
        time: "1h ago",
        comment: "I totally agree with this.",
        replies: [
          { name: "Bob Brown", comment: "Me too!" },
          { name: "Charlie Black", comment: "Great point!" },
        ],
      },
      {
        name: "Chris Green",
        time: "3h ago",
        comment: "Can you provide more details?",
        replies: [],
      },
      {
        name: "Michael Johnson",
        time: "30m ago",
        comment: "I have a similar opinion. Can you clarify your point on X?",
        replies: [{ name: "Alice Smith", comment: "Sure, let me explain." }],
      },
      {
        name: "Emma Davis",
        time: "10m ago",
        comment: "I disagree with the statement. Here's why...",
        replies: [
          { name: "John Doe", comment: "Interesting perspective!" },
          { name: "Chris Green", comment: "Care to elaborate?" },
        ],
      },
    ],

    trip_duration: "1 week",
    preference: "Relaxation",
    budget_type: "Luxury",
    budget: 80000,
    hashtags: ["#beach", "#relaxation", "#vacation"],
    images: [
      "https://images.pexels.com/photos/19013592/pexels-photo-19013592/free-photo-of-city-street-lined-with-apartment-buildings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/29940733/pexels-photo-29940733/free-photo-of-serene-mountain-stream-in-rocky-valley-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/28277464/pexels-photo-28277464/free-photo-of-a-mountain-covered-in-snow-and-clouds-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
  },
  {
    id: 3,
    user_id: 103,

    name: "Amit Gupta",
    profile_image:
      "https://images.pexels.com/photos/7392368/pexels-photo-7392368.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    bio: "History buff. Exploring India's rich heritage.",
    captions: "Cultural vibes in Rajasthan!",
    time: "2025-01-09T14:20:00Z",
    location: "Jaipur, Rajasthan",
    likes: 412,
    comments: [
      {
        name: "John Doe",
        time: "2h ago",
        comment: "This is the first comment.",
        replies: [
          { name: "Jane Doe", comment: "Thanks for sharing!" },
          { name: "Mike Ross", comment: "Very insightful." },
          { name: "Bob Brown", comment: "Me too!" },
          { name: "Charlie Black", comment: "Great point!" },
        ],
      },
      {
        name: "Alice Smith",
        time: "1h ago",
        comment: "I totally agree with this.",
        replies: [
          { name: "Bob Brown", comment: "Me too!" },
          { name: "Charlie Black", comment: "Great point!" },
        ],
      },
      {
        name: "Chris Green",
        time: "3h ago",
        comment: "Can you provide more details?",
        replies: [],
      },
      {
        name: "Michael Johnson",
        time: "30m ago",
        comment: "I have a similar opinion. Can you clarify your point on X?",
        replies: [{ name: "Alice Smith", comment: "Sure, let me explain." }],
      },
      {
        name: "Emma Davis",
        time: "10m ago",
        comment: "I disagree with the statement. Here's why...",
        replies: [
          { name: "John Doe", comment: "Interesting perspective!" },
          { name: "Chris Green", comment: "Care to elaborate?" },
        ],
      },
      {
        name: "Sophia Lee",
        time: "5m ago",
        comment: "This is exactly what I was looking for, thank you!",
        replies: [{ name: "Chris Green", comment: "Glad it helped!" }],
      },
    ],

    trip_duration: "5 days",
    preference: "Cultural",
    budget_type: "Budget",
    budget: 15000,
    hashtags: ["#rajasthan", "#culture", "#heritage"],
    images: [
      "https://images.pexels.com/photos/16726301/pexels-photo-16726301/free-photo-of-photo-of-cherry-blossoms.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/19570321/pexels-photo-19570321/free-photo-of-white-trees-in-winter-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/28435500/pexels-photo-28435500/free-photo-of-misty-mountain-peaks-in-gangtok-india.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/30118135/pexels-photo-30118135/free-photo-of-scenic-view-of-arthur-s-seat-in-edinburgh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/30012995/pexels-photo-30012995/free-photo-of-dense-green-grass-with-wildflowers-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/25853775/pexels-photo-25853775/free-photo-of-photo-of-a-campsite-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
  },
];
function Posttab({ posts = [] }) {
  const [showAll, setShowAll] = useState(false);

  // Determine the posts to display based on the showAll state
  let postsToDisplay= showAll ? posts : posts.slice(0, 2);

  return (
    // used when API will be connected
    // <div className="mt-6">
    //   {postsToDisplay &&
    //     postsToDisplay.map((post,index) => (
    //       <Post key={index} content={post} />
    //     ))}
    //   {!showAll && posts.length > 2 && (
    //     <button
    //       onClick={() => setShowAll(true)}
    //       className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none"
    //     >
    //       Show All Posts
    //     </button>
    //   )}
    //   {showAll && posts.length > 2 && (
    //     <button
    //       onClick={() => setShowAll(false)}
    //       className="mt-4 w-full px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none"
    //     >
    //       See Less
    //     </button>
    //   )}
    // </div>

    // used when API is not connected
    <Post/>
  );
}

export default Posttab;
