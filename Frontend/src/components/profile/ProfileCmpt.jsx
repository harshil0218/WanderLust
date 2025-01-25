import { React, useState, useEffect } from "react";
import { useFetchPosts } from "../../api/postApi";
import { useFetchUser } from "../../hooks/useUser";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import Posttab from "../Post/Posttab";
import PhotoGallery from "./PhotoGallery";
import XIcon from '@mui/icons-material/X';
import { Book } from "@mui/icons-material";
const user = {
  id: 1,
  bio:
    "Passionate traveler and photographer. Exploring the world one frame at a time.",
  firstName: "Ananya",
  lastName: "Sharma",
  dob: "1990-05-15",
  gender: "Female",
  mobileNo: "9876543210",
  email: "ananya.sharma@example.com",
  interests: ["Photography", "Traveling", "Reading", "Cooking"],
  socialLinks: {
    instagram: "https://www.instagram.com/ananya.sharma",
    facebook: "https://www.facebook.com/ananya.sharma",
    snapchat: "",
    twitter: "https://twitter.com/ananya_sharma",
  },
  location: "Delhi, India",
  rating: 4.5,
};
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
const savedPosts = [
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
const photoLinks = [
  'https://images.pexels.com/photos/19210626/pexels-photo-19210626/free-photo-of-a-woman-laying-on-the-ground-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/16876966/pexels-photo-16876966/free-photo-of-young-woman-in-a-dress-holding-a-bouquet-and-standing-by-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/30238700/pexels-photo-30238700/free-photo-of-woman-enjoying-a-latte-in-a-cozy-cafe.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/14629394/pexels-photo-14629394.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1816225/pexels-photo-1816225.jpeg?auto=compress&cs=tinysrgb&w=600'
  // Add more links as needed
];
function ProfileCmpt() {
  const [postTab, setPostTab] = useState(true);
  const [savedTab, setSavedTab] = useState(false);
  const [photoTab, setPhotoTab] = useState(false);

  // const { data : posts, isLoading : postsLoading, isError : postsError } = useFetchPosts();
  // const { data: user, isLoading: userLoading, isError: userError } = useFetchUser(1);
  // if (userLoading) return <p>Loading user...</p>;
  // if (userError) return <p>Error loading user: {userError.message}</p>;
  return (
    //     
    <div className="mx-auto max-w-md rounded-lg bg-gray-100 text-gray-900 shadow-xl sm:mx-auto dark:bg-gray-800 dark:text-gray-100">
      {/* Cover Image */}
      <div className="h-36 overflow-hidden rounded-t-lg relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
          alt="Cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      {/* Profile Picture */}
      <div className="relative mx-auto -mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-white dark:border-gray-800">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
          alt="User"
        />
      </div>
      {/* User Info */}
      <div className="mt-2 text-center space-y-2">
        <h2 className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Age : {user.age} {" "}
          {user.gender === "Male"
            ? "👨"
            : user.gender === "Female"
            ? "👩"
            : "⚧️"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {user.location}
        </p>
        <p className="text-sm italic">{user.bio}</p>
      </div>
      {/* Follow and Message Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-all">
          Follow
        </button>
        <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 shadow-lg transition-all">
          Message
        </button>
      </div>
      {/* Contact Info */}
      <div className="mx-8 mt-6 space-y-2">
        {user.mobileNo && (
          <div className="flex items-center gap-2 text-sm cursor-pointer hover:scale-105">
            <span className="hover:scale-110">📞</span>
            <span className="hover:underline">{user.mobileNo}</span>
          </div>
        )}
        {user.email && (
          <div className="flex items-center gap-2 text-sm cursor-pointer hover:scale-105">
            <span className="">✉️</span>
            <span className="hover:underline">{user.email}</span>
          </div>
        )}
      </div>
      {/* Interests */}
      <div className="mx-8 mt-4">
        <h3 className="text-sm font-semibold">Interests</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {user.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 shadow-sm cursor-pointer"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
      {/* Social Links */}
      <div className="mx-8 mt-4 flex justify-center gap-4 text-gray-700 dark:text-gray-400">
        {user.socialLinks.instagram && (
          <a
            href={user.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform "
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
              <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
            </svg>
          </a>
        )}
        {user.socialLinks.facebook && (
          <a
            href={user.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
            </svg>
          </a>
        )}
        {user.socialLinks.snapchat && (
          <a
            href={user.socialLinks.snapchat}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
              <linearGradient id="s9~sBE_MLsUutFtX7i6Pra_KrtKMa6Fduil_gr1" x1="20.601" x2="27.399" y1="4.721" y2="43.279" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"></stop><stop offset="1" stop-color="#ffd000"></stop></linearGradient><path fill="url(#s9~sBE_MLsUutFtX7i6Pra_KrtKMa6Fduil_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path d="M14.613,20.505c-0.168,0-0.342,0.039-0.503,0.12c-0.265,0.132-0.463,0.36-0.557,0.641	c-0.151,0.453,0.004,0.95,0.386,1.236l3.676,2.296l-0.143,0.382c-0.066,0.179-1.67,4.403-4.703,6.057	c-0.161,0.088-0.264,0.206-0.274,0.317c-0.011,0.112,0.078,0.213,0.155,0.277c0.656,0.549,1.334,0.939,2.685,1.187l0.409,0.075	l0.001,0.416c0.002,0.608,0.195,1.251,0.375,1.251c0.893,0,2.751,0,4.608,0.928c1.03,0.515,2.472,0.823,3.271,0.823	s2.241-0.308,3.271-0.823c1.856-0.928,3.715-0.928,4.608-0.928c0.181,0,0.374-0.643,0.375-1.251l0.001-0.416l0.409-0.075	c1.351-0.247,2.029-0.637,2.686-1.187c0.077-0.064,0.166-0.165,0.155-0.277c-0.011-0.111-0.114-0.229-0.274-0.317	c-3.032-1.654-4.636-5.878-4.703-6.057l-0.143-0.382l3.71-2.32c0.347-0.263,0.502-0.759,0.351-1.212	c-0.093-0.281-0.291-0.508-0.556-0.641c-0.264-0.133-0.564-0.153-0.846-0.06l-2.546,1.042V18.1c0-3.636-2.914-6.594-6.496-6.594	c-3.586,0-6.5,2.958-6.5,6.594v3.508l-2.576-1.053C14.828,20.522,14.722,20.505,14.613,20.505z" opacity=".07"></path><path fill="none" stroke="#1d1d1b" stroke-width="2" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875 c1.751-0.875,3.509-0.875,4.384-0.875c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295 c0.531-0.445,0.407-1.085-0.201-1.416c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0 c-0.281-0.843-1.193-1.298-2.035-1.016l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0 c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771c-0.843-0.282-1.754,0.173-2.035,1.016l0,0 c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793c-0.608,0.331-0.732,0.972-0.201,1.416 c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875C21.613,36.689,23.132,37.011,24,37.011" opacity=".05"></path><path fill="none" stroke="#000" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875 c1.751-0.875,3.509-0.875,4.384-0.875c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295 c0.531-0.445,0.407-1.085-0.201-1.416c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0 c-0.281-0.843-1.193-1.298-2.035-1.016l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0 c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771c-0.843-0.282-1.754,0.173-2.035,1.016l0,0 c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793c-0.608,0.331-0.732,0.972-0.201,1.416 c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875C21.613,36.689,23.132,37.011,24,37.011" opacity=".07"></path><path fill="#fff" d="M24,37.011c0.868,0,2.387-0.322,3.494-0.875c1.751-0.875,3.509-0.875,4.384-0.875	c0.875,0,0.875-1.751,0.875-1.751c1.391-0.254,2.156-0.658,2.917-1.295c0.531-0.445,0.407-1.085-0.201-1.416	c-2.903-1.583-4.474-5.793-4.474-5.793l3.364-2.104c0.554-0.415,0.779-1.138,0.561-1.795l0,0c-0.281-0.843-1.193-1.298-2.035-1.016	l-1.887,0.771V18.1c0-3.864-3.132-7.094-6.996-7.094h0h-0.004h0c-3.864,0-6.996,3.23-6.996,7.094v2.763l-1.887-0.771	c-0.843-0.282-1.754,0.173-2.035,1.016l0,0c-0.219,0.656,0.007,1.379,0.561,1.795l3.364,2.104c0,0-1.57,4.209-4.474,5.793	c-0.608,0.331-0.732,0.972-0.201,1.416c0.76,0.637,1.526,1.041,2.917,1.295c0,0,0,1.751,0.875,1.751c0.875,0,2.633,0,4.384,0.875	C21.613,36.689,23.132,37.011,24,37.011"></path>
            </svg>
          </a>
        )}
        {user.socialLinks.twitter && (
          <a
            href={user.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 mt-1 transition-transform"
          >
            <XIcon className=""/>
          </a>
        )}
      </div>
      {/* Tabs Section */}
      <div className="flex justify-around mt-6 border-t border-gray-200 dark:border-gray-700">
        <button className="flex flex-col items-center py-2 text-gray-900   dark:text-gray-200  hover:text-indigo-500 dark:hover:text-indigo-300   border-indigo-500 focus:outline-none"               
                onClick={() => {setPostTab(true); setSavedTab(false); setPhotoTab(false);}}
                >
                <svg
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 16s1.5-2 8-2 8 2 8 2M4 10s1.5-2 8-2 8 2 8 2M4 6s1.5-2 8-2 8 2 8 2" />
          </svg>
          <span className="text-xs">Posts</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-900   dark:text-gray-200  hover:text-indigo-500 hover:border-indigo-500 dark:hover:text-indigo-300 focus:outline-none"
            onClick={() => {setPostTab(false); setSavedTab(true); setPhotoTab(false);}}
            >
              <BookmarkBorderOutlinedIcon  className="h-6 w-6" />
          <span className="text-xs">Saved</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-900   dark:text-gray-200  hover:text-indigo-500 hover:border-indigo-500 dark:hover:text-indigo-300 focus:outline-none"
          onClick={() => {setPostTab(false); setSavedTab(false); setPhotoTab(true);}}
          >
       
          <PhotoSizeSelectActualOutlinedIcon className="h-6 w-6" />
          {/* <img width="30" height="30" src="https://img.icons8.com/parakeet-line/48/stack-of-photos.png" alt="stack-of-photos"/> */}
          <span className="text-xs">Photos</span>
        </button>
        
      </div>
      <div className="justify-items-center mt-4 flex">
       {postTab && (
        <div className="w-max-md mx-auto ">
          <Posttab posts={trialPosts} />
        </div>
      )}
      {savedTab && (
        <div className="w-max-md mx-auto ">
          <Posttab posts={savedPosts} />
        </div>
      )}
      {photoTab && (
        
        <PhotoGallery photos={photoLinks} />

      )}
      </div>
    </div>
  );
}

export default ProfileCmpt;
