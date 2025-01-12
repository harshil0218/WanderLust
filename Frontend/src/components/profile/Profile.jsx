import React from "react";

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

function Profile() {
  const userName = "Hritik Roshan";
  const bio = "I love mountain vibes";
  return (
    // <div className="mx-4 max-w-sm rounded-lg bg-white text-gray-900 shadow-xl sm:mx-auto">
    //   {/* Cover Image */}
    //   <div className="h-32 overflow-hidden rounded-t-lg">
    //     <img
    //       className="w-full object-cover object-top"
    //       src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    //       alt="Mountain"
    //     />
    //   </div>

    //   {/* Profile Picture */}
    //   <div className="relative mx-auto -mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-white">
    //     <img
    //       className="h-32 object-cover object-center"
    //       src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    //       alt="User"
    //     />
    //   </div>

    //   {/* Basic Info */}
    //   <div className="mt-2 text-center space-y-1">
    //     <h2 className="text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
    //     <p className="text-sm text-gray-500">
    //       Age: {user.age}{" "}
    //       {user.gender === "Male"
    //         ? "👨"
    //         : user.gender === "Female"
    //         ? "👩"
    //         : "⚧️"}
    //     </p>
    //     <p className="text-sm text-gray-500">{user.location}</p>
    //     <p className="text-sm italic">{user.bio}</p>
    //   </div>
    //   {/* Action Button */}
    //   <div className="mx-8 mt-3 border-t p-4">
    //     <button className="mx-auto block w-full rounded-full bg-gray-900 px-6 py-2 font-semibold text-white hover:shadow-lg">
    //       Message
    //     </button>
    //   </div>
    //   {/* Contact Info */}
    //   <div className="mx-8 mt-4 space-y-2">
    //     {user.mobileNo && (
    //       <div className="flex items-center gap-2 text-sm text-gray-600">
    //         <span>📞</span>
    //         <span>{user.mobileNo}</span>
    //       </div>
    //     )}
    //     {user.email && (
    //       <div className="flex items-center gap-2 text-sm text-gray-600">
    //         <span>✉️</span>
    //         <span>{user.email}</span>
    //       </div>
    //     )}
    //   </div>

    //   {/* Interests */}
    //   <div className="mx-8 mt-4 space-y-2">
    //     <h3 className="text-sm font-semibold">Interests</h3>
    //     <div className="flex flex-wrap gap-2">
    //       {user.interests.map((interest, index) => (
    //         <span
    //           key={index}
    //           className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 shadow-sm"
    //         >
    //           {interest}
    //         </span>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Social Links */}
    //   <div className="mx-8 mt-4 flex justify-center gap-4 text-gray-500">
    //     {user.socialLinks.instagram && (
    //       <a
    //         href={user.socialLinks.instagram}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    //           alt="Instagram"
    //           className="h-6 w-6"
    //         />
    //       </a>
    //     )}
    //     {user.socialLinks.facebook && (
    //       <a
    //         href={user.socialLinks.facebook}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
    //           alt="Facebook"
    //           className="h-6 w-6"
    //         />
    //       </a>
    //     )}
    //     {user.socialLinks.snapchat && (
    //       <a
    //         href={user.socialLinks.snapchat}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1200px-Snapchat_logo.svg.png"
    //           alt="Snapchat"
    //           className="h-6 w-6"
    //         />
    //       </a>
    //     )}
    //     {user.socialLinks.twitter && (
    //       <a
    //         href={user.socialLinks.twitter}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
    //           alt="Twitter"
    //           className="h-6 w-6"
    //         />
    //       </a>
    //     )}
    //   </div>

    //   {/* Rating */}
    //   <div className="mx-8 mt-4 text-center">
    //     <p className="text-sm">Rating:</p>
    //     <div className="flex justify-center space-x-1 text-yellow-400">
    //       {Array.from({ length: Math.floor(user.rating) }, (_, index) => (
    //         <span key={index}>⭐</span>
    //       ))}
    //     </div>
    //   </div>

    //   <div class="flex h-12 items-center justify-center bg-gray-100 dark:bg-gray-900">
    //     <div class="flex w-full max-w-md justify-around border-b border-gray-200 dark:border-gray-700">
    //       {/* <!-- Posts Tab --> */}
    //       <button class="flex flex-col items-center space-y-1 px-4 py-2 text-indigo-600 dark:text-indigo-300 border-b-2 border-indigo-500 focus:outline-none">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M4 16s1.5-2 8-2 8 2 8 2M4 10s1.5-2 8-2 8 2 8 2M4 6s1.5-2 8-2 8 2 8 2"
    //           />
    //         </svg>
    //         <span class="text-sm">Posts</span>
    //       </button>

    //       {/* <!-- Saved Tab --> */}
    //       <button class="flex flex-col items-center space-y-1 px-4 py-2 text-gray-700 dark:text-white border-b-2 border-transparent hover:text-indigo-500 dark:hover:text-indigo-300 hover:border-indigo-500 focus:outline-none">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M5 5m0 2a2 2 0 012-2h10a2 2 0 012 2v14l-7-3.5-7 3.5V7z"
    //           />
    //         </svg>
    //         <span class="text-sm">Saved</span>
    //       </button>

    //       {/* <!-- Photos Tab --> */}
    //       <button class="flex flex-col items-center space-y-1 px-4 py-2 text-gray-700 dark:text-white border-b-2 border-transparent hover:text-indigo-500 dark:hover:text-indigo-300 hover:border-indigo-500 focus:outline-none">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M15 10l4.553-2.276A2 2 0 0020 5.553V4a2 2 0 00-2-2H6a2 2 0 00-2 2v1.553a2 2 0 00.447 1.171L9 10l-4.553 2.276A2 2 0 004 13.447V15a2 2 0 002 2h12a2 2 0 002-2v-1.553a2 2 0 00-.447-1.171L15 10z"
    //           />
    //         </svg>
    //         <span class="text-sm">Photos</span>
    //       </button>

    //       {/* <!-- Notifications Tab --> */}
    //       <button class="flex flex-col items-center space-y-1 px-4 py-2 text-gray-700 dark:text-white border-b-2 border-transparent hover:text-indigo-500 dark:hover:text-indigo-300 hover:border-indigo-500 focus:outline-none">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //           />
    //         </svg>
    //         <span class="text-sm">Notifications</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="mx-0 max-w-md rounded-lg bg-white text-gray-900 shadow-xl sm:mx-auto dark:bg-gray-900 dark:text-gray-100">
      {/* Cover Image */}
      <div className="h-40 overflow-hidden rounded-t-lg relative">
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
          {user.age} years old |{" "}
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
        <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 shadow-lg transition-all">
          Message
        </button>
      </div>

      {/* Contact Info */}
      {/* <div className="mx-8 mt-6 space-y-2">
    {user.mobileNo && (
      <div className="flex items-center gap-2 text-sm">
        <span>📞</span>
        <span>{user.mobileNo}</span>
      </div>
    )}
    {user.email && (
      <div className="flex items-center gap-2 text-sm">
        <span>✉️</span>
        <span>{user.email}</span>
      </div>
    )}
  </div> */}

      {/* Interests */}
      <div className="mx-8 mt-4">
        <h3 className="text-sm font-semibold">Interests</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {user.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 shadow-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mx-8 mt-4 flex justify-center gap-4 text-gray-500 dark:text-gray-400">
        {user.socialLinks.instagram && (
          <a
            href={user.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
        )}
        {user.socialLinks.facebook && (
          <a
            href={user.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
        )}
        {user.socialLinks.snapchat && (
          <a
            href={user.socialLinks.snapchat}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1200px-Snapchat_logo.svg.png"
              alt="Snapchat"
              className="h-6 w-6"
            />
          </a>
        )}
        {user.socialLinks.twitter && (
          <a
            href={user.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
              alt="Twitter"
              className="h-6 w-6"
            />
          </a>
        )}
      </div>

      {/* Tabs Section */}
      <div className="flex justify-around mt-6 border-t border-gray-200 dark:border-gray-700">
        <button className="flex flex-col items-center py-2 text-indigo-600 dark:text-indigo-300 border-b-2 border-indigo-500 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 16s1.5-2 8-2 8 2 8 2M4 10s1.5-2 8-2 8 2 8 2M4 6s1.5-2 8-2 8 2 8 2" />
          </svg>
          <span className="text-xs">Posts</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-700 dark:text-gray-400 hover:text-indigo-500 hover:border-indigo-500 dark:hover:text-indigo-300 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 5m0 2a2 2 0 012-2h10a2 2 0 012 2v14l-7-3.5-7 3.5V7z" />
          </svg>
          <span className="text-xs">Saved</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-700 dark:text-gray-400 hover:text-indigo-500 hover:border-indigo-500 dark:hover:text-indigo-300 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 10l4.553-2.276A2 2 0 0020 5.553V4a2 2 0 00-2-2H6a2 2 0 00-2 2v1.553a2 2 0 00.447 1.171L9 10l-4.553 2.276A2 2 0 004 13.447V15a2 2 0 002 2h12a2 2 0 002-2v-1.553a2 2 0 00-.447-1.171L15 10z" />
          </svg>
          <span className="text-xs">Photos</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-700 dark:text-gray-400 hover:text-indigo-500 hover:border-indigo-500 dark:hover:text-indigo-300 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="text-xs">Notifications</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
