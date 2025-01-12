import React from "react";

// function MenuBtn() {
//   return (
//     // <div class="w-full justify-center overflow-y-auto rounded-md bg-gray-200 px-3 py-3 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
//     //   <a
//     //     href="#"
//     //     class="group flex items-center rounded-lg p-0 text-gray-900  dark:text-white "
//     //   >
//     //     <svg
//     //       class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
//     //       aria-hidden="true"
//     //       xmlns="http://www.w3.org/2000/svg"
//     //       fill="currentColor"
//     //       viewBox="0 0 22 21"
//     //     >
//     //       <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
//     //       <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
//     //     </svg>
//     //     <span class="ms-2">Dashboard</span>
//     //   </a>
//     // </div>

//     const MenuBtn = ({ icon, label }) => {
//       return (
//         <div className="w-full flex justify-center lg:justify-start items-center overflow-y-auto rounded-md bg-gray-200 px-3 py-3 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
//           <a
//             href="#"
//             className="group flex flex-col lg:flex-row items-center lg:items-center text-gray-900 dark:text-white"
//           >
//             {/* Icon */}
//             <svg
//               className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 21"
//             >
//               {icon}
//             </svg>
    
//             {/* Label */}
//             <span className="hidden lg:inline-block ml-2 text-sm font-medium">
//               {label}
//             </span>
//           </a>
//         </div>
//       );
//     };
    
//   );
// }

const MenuBtn = ({ icon, label }) => {
  // return (
  //   <div className="flex flex-col items-center lg:items-start">
  //     {/* Icon */}
  //     <svg
  //       className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
  //       aria-hidden="true"
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="currentColor"
  //       viewBox="0 0 22 21"
  //     >
  //       {icon}
  //     </svg>
  //     {/* Label (Hidden on small/medium screens) */}
  //     <span className="hidden lg:inline-flex ml-2 text-sm font-medium">
  //       {label}
  //     </span>
  //   </div>
  // );

  return (
    <div
      
      onFocus={() => console.log(`${label} focused`)}
      className="flex w-40 items-center justify-center lg:justify-start cursor-pointer p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500 transition-all"
    >
      {/* Icon */}
      <svg
        className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 21"
      >
        {icon}
      </svg>
      {/* Label */}
      <span className="ml-2 hidden lg:inline-block text-sm font-medium text-gray-900 dark:text-white transition-all">
        {label}
      </span>
    </div>
  );
};



export default MenuBtn;
