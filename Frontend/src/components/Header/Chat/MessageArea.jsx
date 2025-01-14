import { React, useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const conversation = [
  {
    message: "Hi, how can I help you?",
    time: "10:30 AM",
    sender: true,
    seen: true,
    avatar:
      "https://images.pexels.com/photos/20117720/pexels-photo-20117720/free-photo-of-woman-in-spaghetti-strap-dress-standing-in-corner.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    message: "Sure, I can help with that.",
    time: "10:31 AM",
    sender: false,
    seen: true,
    avatar: "https://picsum.photos/50/50",
  },
  {
    message: "Let me check that for you.",
    time: "10:32 AM",
    sender: false,
    avatar: "https://picsum.photos/50/50",
    seen: false, // Custom field for seen status
  },
  {
    message: "Thank you",
    time: "10:33 AM",
    sender: true,
    seen: true,
    avatar:
      "https://images.pexels.com/photos/20117720/pexels-photo-20117720/free-photo-of-woman-in-spaghetti-strap-dress-standing-in-corner.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    message: "Hi, how can I help you?",
    time: "10:30 AM",
    sender: true,
    seen: true,
    avatar:
      "https://images.pexels.com/photos/20117720/pexels-photo-20117720/free-photo-of-woman-in-spaghetti-strap-dress-standing-in-corner.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    message: "Sure, I can help with that.",
    time: "10:31 AM",
    sender: false,
    seen: true,
    avatar: "https://picsum.photos/50/50",
  },
  {
    message: "Let me check that for you.",
    time: "10:32 AM",
    sender: false,
    avatar: "https://picsum.photos/50/50",
    seen: false, // Custom field for seen status
  },
  {
    message: "Thank you",
    time: "10:33 AM",
    sender: true,
    seen: true,
    avatar:
      "https://images.pexels.com/photos/20117720/pexels-photo-20117720/free-photo-of-woman-in-spaghetti-strap-dress-standing-in-corner.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function MessageArea() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // <main className="flex flex-col h-full">
    //   {" "}
    //   <div className="flex justify-center p-4 bg-gray-200 dark:bg-gray-700 dark:text-gray-100">
    //     {" "}
    //     <div className="flex items-center justify-between w-full max-w-screen-lg pt-3">
    //       {" "}
    //       <div className="flex items-center gap-3">
    //         {" "}
    //         <a href="#" className="block shrink-0">
    //           {" "}
    //           <img
    //             alt="Avatar"
    //             src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //             className="w-8 h-8 rounded-lg object-cover"
    //           />{" "}
    //         </a>{" "}
    //         <h3 className="font-medium text-sm">
    //           {" "}
    //           <a href="#" className="hover:underline">
    //             {" "}
    //             Question about Livewire Rendering{" "}
    //           </a>{" "}
    //         </h3>{" "}
    //       </div>{" "}
    //       <div className="relative -mt-2">
    //         {" "}
    //         <button className="text-lg font-medium text-gray-900 dark:text-white tracking-[2.5px]">
    //           {" "}
    //           ...{" "}
    //         </button>{" "}
    //       </div>{" "}
    //     </div>{" "}
    //   </div>{" "}
    //   <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
    //     {" "}
    //     {conversation.map((msg, index) => (
    //       <div
    //         key={index}
    //         className={`flex items-center ${msg.sender ? "" : "justify-end"}`}
    //       >
    //         {" "}
    //         {msg.sender && (
    //           <img
    //             className="w-8 h-8 rounded-full mr-2"
    //             src={msg.avatar}
    //             alt="User Avatar"
    //           />
    //         )}{" "}
    //         <div
    //           className={`${
    //             msg.sender
    //               ? "bg-white dark:bg-gray-700 dark:text-gray-200"
    //               : "bg-blue-500 dark:bg-blue-700 text-white"
    //           } rounded-lg p-2 shadow max-w-sm`}
    //         >
    //           {" "}
    //           <p>{msg.message}</p>{" "}
    //           <span
    //             className={`text-xs ${
    //               msg.sender
    //                 ? "text-gray-400 dark:text-gray-400"
    //                 : "text-gray-200 dark:text-gray-300"
    //             }`}
    //           >
    //             {msg.time}
    //           </span>
    //           {!msg.sender && (
    //             <span className="absolute bottom-0 right-2 text-xs flex items-center space-x-0.5">

    //               {!msg.seen && (
    //                 <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 className={`w-6 h-6 mt-1
    //                    dark:text-white

    //                     text-gray-200
    //                 `}
    //                  >
    //                   <path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41L9 16.17z" />{" "}
    //                 </svg>
    //               )}{" "}
    //               {msg.seen && <DoneAllIcon className="w-3 h-3 ml-2" />}{" "}
    //             </span>
    //           )}{" "}
    //         </div>{" "}
    //         {!msg.sender && (
    //           <img
    //             className="w-8 h-8 rounded-full ml-2"
    //             src={msg.avatar}
    //             alt="User Avatar"
    //           />
    //         )}{" "}
    //       </div>
    //     ))}{" "}
    //   </div>{" "}
    //   <div className="sticky bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
    //     {" "}
    //     <div className="flex items-center w-full max-w-screen-lg mx-auto">
    //       {" "}
    //       <input
    //         className="flex-grow border rounded-full py-2 px-4 mr-2 dark:bg-gray-600 dark:text-white dark:border-gray-500 border-gray-300"
    //         type="text"
    //         placeholder="Type your message..."
    //       />{" "}
    //       <button className="py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
    //         Send
    //       </button>{" "}
    //     </div>{" "}
    //   </div>{" "}
    // </main>

    // <main className="flex flex-col h-full">
    //   {" "}
    //   <div className="flex justify-center  p-4 bg-gray-200 dark:bg-gray-700 dark:text-gray-100">
    //     {" "}
    //     <div className="flex items-center  justify-between w-full max-w-screen-lg pt-3">
    //       {" "}
    //       <div className="flex items-center gap-3">
    //         {" "}
    //         <a href="#" className="block shrink-0">
    //           {" "}
    //           <img
    //             alt="Avatar"
    //             src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //             className="w-8 h-8 rounded-lg object-cover"
    //           />{" "}
    //         </a>{" "}
    //         <h3 className="font-medium text-sm">
    //           {" "}
    //           <a href="#" className="hover:underline">
    //             {" "}
    //             Question about Livewire Rendering{" "}
    //           </a>{" "}
    //         </h3>{" "}
    //       </div>{" "}
    //       <div className="relative -mt-2" >
    //         {" "}
    //         <button className="text-lg font-medium text-gray-900 dark:text-white tracking-[2.5px]" onClick={() => setMenuOpen(!menuOpen)}>
    //           {" "}
    //           ...{" "}
    //         </button>
    //         {menuOpen && (
    //           <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-10">
    //             <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
    //               <li>
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Share clicked")}
    //                 >
    //                   Share
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Save clicked")}
    //                 >
    //                   Save
    //                 </button>
    //               </li>
    //               <li>
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Copy link clicked")}
    //                 >
    //                   Copy Link
    //                 </button>
    //               </li>
    //             </ul>
    //           </div>
    //         )}
    //       </div>{" "}
    //     </div>{" "}
    //   </div>{" "}
    //   <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
    //     {" "}
    //     {conversation.map((msg, index) => (
    //       <div
    //         key={index}
    //         className={`flex items-center ${msg.sender ? "" : "justify-end"}`}
    //       >
    //         {" "}
    //         {msg.sender && (
    //           <img
    //             className="w-8 h-8 rounded-full mr-2"
    //             src={msg.avatar}
    //             alt="User Avatar"
    //           />
    //         )}{" "}
    //         <div
    //           className={`${
    //             msg.sender
    //               ? "bg-white dark:bg-gray-700 dark:text-gray-200"
    //               : "bg-blue-500 dark:bg-blue-700 text-white"
    //           } rounded-lg p-2 shadow max-w-sm relative`}
    //         >
    //           {" "}
    //           <p>{msg.message}</p>{" "}
    //           <span
    //             className={`text-xs ${
    //               msg.sender
    //                 ? "text-gray-400 dark:text-gray-400"
    //                 : "text-gray-200 dark:text-gray-300"
    //             }`}
    //           >
    //             {msg.time}
    //           </span>{" "}
    //           {!msg.sender && (
    //             <span className="absolute bottom-0 right-0 m-2 flex items-center space-x-0.5">
    //               {" "}
    //               {!msg.seen && (
    //                 <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 className={`w-6 h-6 mt-1
    //                    dark:text-white

    //                     text-gray-200
    //                 `}>
    //                   {" "}
    //                   <path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41L9 16.17z" />{" "}
    //                 </svg>
    //               )}{" "}
    //               {msg.seen && (
    //                 <DoneAllIcon className="w-3 h-3 ml-2" />
    //               )}{" "}
    //             </span>
    //           )}{" "}
    //         </div>{" "}
    //         {!msg.sender && (
    //           <img
    //             className="w-8 h-8 rounded-full ml-2"
    //             src={msg.avatar}
    //             alt="User Avatar"
    //           />
    //         )}{" "}
    //       </div>
    //     ))}{" "}
    //   </div>{" "}
    //   <div className="sticky bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
    //     {" "}
    //     <div className="flex items-center w-full max-w-screen-lg mx-auto">
    //       {" "}
    //       <input
    //         className="flex-grow border rounded-full py-2 px-4 mr-2 dark:bg-gray-600 dark:text-white dark:border-gray-500 border-gray-300"
    //         type="text"
    //         placeholder="Type your message..."
    //       />{" "}
    //       <button className="py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
    //         Send
    //       </button>{" "}
    //     </div>{" "}
    //   </div>{" "}
    // </main>

    // <main className="flex flex-col h-full">
    //   {" "}
    //   <div className="sticky top-0  flex justify-center p-4 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 z-10">
    //     {" "}
    //     <div className="flex items-center justify-between w-full max-w-screen-lg pt-3">
    //       {" "}
    //       <div className="flex items-center gap-3">
    //         {" "}
    //         <a href="#" className="block shrink-0">
    //           {" "}
    //           <img
    //             alt="Avatar"
    //             src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //             className="w-8 h-8 rounded-lg object-cover"
    //           />{" "}
    //         </a>{" "}
    //         <h3 className="font-medium text-sm">
    //           {" "}
    //           <a href="#" className="hover:underline">
    //             {" "}
    //             Question about Livewire Rendering{" "}
    //           </a>{" "}
    //         </h3>{" "}
    //       </div>{" "}
    //       <div className="relative -mt-2">
    //         {" "}
    //         <button
    //           className="text-lg font-medium text-gray-900 dark:text-white tracking-[2.5px]"
    //           onClick={() => setMenuOpen(!menuOpen)}
    //         >
    //           {" "}
    //           ...{" "}
    //         </button>{" "}
    //         {menuOpen && (
    //           <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-10">
    //             {" "}
    //             <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
    //               {" "}
    //               <li>
    //                 {" "}
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Share clicked")}
    //                 >
    //                   {" "}
    //                   Share{" "}
    //                 </button>{" "}
    //               </li>{" "}
    //               <li>
    //                 {" "}
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Save clicked")}
    //                 >
    //                   {" "}
    //                   Save{" "}
    //                 </button>{" "}
    //               </li>{" "}
    //               <li>
    //                 {" "}
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Copy link clicked")}
    //                 >
    //                   {" "}
    //                   Copy Link{" "}
    //                 </button>{" "}
    //               </li>{" "}
    //             </ul>{" "}
    //           </div>
    //         )}{" "}
    //       </div>{" "}
    //     </div>{" "}
    //   </div>{" "}
    //   <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
    //     {" "}
    //     {conversation.map((msg, index) => (
    //       <div
    //         key={index}
    //         className={`flex items-center ${msg.sender ? "" : "justify-end"}`}
    //       >
    //         {" "}
    //         {msg.sender && (
    //           <img
    //             className="w-8 h-8 rounded-full mr-2"
    //             src={msg.avatar}
    //             alt="User Avatar"
    //           />
    //         )}{" "}
    //         <div
    //           className={`${
    //             msg.sender
    //               ? "bg-white dark:bg-gray-700 dark:text-gray-200"
    //               : "bg-blue-500 dark:bg-blue-700 text-white"
    //           } rounded-lg p-2 shadow max-w-sm relative`}
    //         >
    //           {" "}
    //           <p>{msg.message}</p>{" "}
    //           <span
    //             className={`text-xs ${
    //               msg.sender
    //                 ? "text-gray-400 dark:text-gray-400"
    //                 : "text-gray-200 dark:text-gray-300"
    //             }`}
    //           >
    //             {" "}
    //             {msg.time}{" "}
    //           </span>{" "}
    //           {!msg.sender && (
    //             <span className="absolute bottom-0 right-0 m-2 flex items-center space-x-0.5">
    //               {" "}
    //               {!msg.seen && (
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 24 24"
    //                   fill="currentColor"
    //                   className="w-4 h-4 text-gray-200 dark:text-white"
    //                 >
    //                   {" "}
    //                   <path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41L9 16.17z" />{" "}
    //                 </svg>
    //               )}{" "}
    //               {msg.seen && <DoneAllIcon className="w-3 h-3 ml-2" />}{" "}
    //             </span>
    //           )}{" "}
    //         </div>{" "}
    //         {!msg.sender && (
    //           <img
    //             className="w-8 h-8 rounded-full ml-2"
    //             src={msg.avatar}
    //             alt="User Avatar"
    //           />
    //         )}{" "}
    //       </div>
    //     ))}{" "}
    //   </div>{" "}
    //   <div className="sticky bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
    //     {" "}
    //     <div className="flex items-center w-full max-w-screen-lg mx-auto">
    //       {" "}
    //       <input
    //         className="flex-grow border rounded-full py-2 px-4 mr-2 dark:bg-gray-600 dark:text-white dark:border-gray-500 border-gray-300"
    //         type="text"
    //         placeholder="Type your message..."
    //       />{" "}
    //       <button className="py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
    //         {" "}
    //         Send{" "}
    //       </button>{" "}
    //     </div>{" "}
    //   </div>{" "}
    // </main>

    // <main className="flex flex-col h-full">
    //   {" "}
    //   <div className="sticky top-0 flex justify-center p-4 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 z-10">
    //     {" "}
    //     <div className="flex items-center justify-between w-full max-w-screen-lg pt-3">
    //       {" "}
    //       <div className="flex items-center gap-3">
    //         {" "}
    //         <a href="#" className="block shrink-0">
    //           {" "}
    //           <img
    //             alt="Avatar"
    //             src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //             className="w-8 h-8 rounded-lg object-cover"
    //           />{" "}
    //         </a>{" "}
    //         <h3 className="font-medium text-sm">
    //           {" "}
    //           <a href="#" className="hover:underline">
    //             {" "}
    //             Question about Livewire Rendering{" "}
    //           </a>{" "}
    //         </h3>{" "}
    //       </div>{" "}
    //       <div className="relative -mt-2">
    //         {" "}
    //         <button
    //           className="text-lg font-medium text-gray-900 dark:text-white tracking-[2.5px]"
    //           onClick={() => setMenuOpen(!menuOpen)}
    //         >
    //           {" "}
    //           ...{" "}
    //         </button>{" "}
    //         {menuOpen && (
    //           <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-10">
    //             {" "}
    //             <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
    //               {" "}
    //               <li>
    //                 {" "}
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Share clicked")}
    //                 >
    //                   {" "}
    //                   Share{" "}
    //                 </button>{" "}
    //               </li>{" "}
    //               <li>
    //                 {" "}
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Save clicked")}
    //                 >
    //                   {" "}
    //                   Save{" "}
    //                 </button>{" "}
    //               </li>{" "}
    //               <li>
    //                 {" "}
    //                 <button
    //                   className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
    //                   onClick={() => console.log("Copy link clicked")}
    //                 >
    //                   {" "}
    //                   Copy Link{" "}
    //                 </button>{" "}
    //               </li>{" "}
    //             </ul>{" "}
    //           </div>
    //         )}{" "}
    //       </div>{" "}
    //     </div>{" "}
    //   </div>{" "}
    //   <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
    //     {" "}
    //     {conversation.map((msg, index) => (
    //       <div
    //         key={index}
    //         className={`flex items-center ${msg.sender ? "" : "justify-end"}`}
    //       >
    //         {" "}
    //         {msg.sender && (
    //           <img
    //             className="w-8 h-8 rounded-full mr-2"
    //             src={msg.avatar}
    //             alt="User Avatar"
    //           />
    //         )}{" "}
    //         <div
    //           className={`${
    //             msg.sender
    //               ? "bg-white dark:bg-gray-700 dark:text-gray-200"
    //               : "bg-blue-500 dark:bg-blue-700 text-white"
    //           } rounded-lg p-2 shadow max-w-sm relative`}
    //         >
    //           {" "}
    //           <p>{msg.message}</p>{" "}
    //           <span
    //             className={`text-xs ${
    //               msg.sender
    //                 ? "text-gray-400 dark:text-gray-400"
    //                 : "text-gray-200 dark:text-gray-300"
    //             }`}
    //           >
    //             {" "}
    //             {msg.time}{" "}
    //           </span>{" "}
    //           {!msg.sender && (
    //             <span className="absolute bottom-0 right-0 m-2 flex items-center space-x-0.5">
    //               {" "}
    //               {!msg.seen && (
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 24 24"
    //                   fill="currentColor"
    //                   className="w-4 h-4 text-gray-200 dark:text-white"
    //                 >
    //                   {" "}
    //                   <path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41L9 16.17z" />{" "}
    //                 </svg>
    //               )}{" "}
    //               {msg.seen && <DoneAllIcon className="w-3 h-3 ml-2" />}{" "}
    //             </span>
    //           )}{" "}
    //         </div>{" "}
    //         {!msg.sender && (
    //           <img
    //             className="w-8 h-8 rounded-full ml-2"
    //             src={msg.avatar}
    //             alt="User Avatar"
    //           />
    //         )}{" "}
    //       </div>
    //     ))}{" "}
    //   </div>{" "}
    //   <div className="sticky bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
    //     {" "}
    //     <div className="flex items-center w-full max-w-screen-lg mx-auto">
    //       {" "}
    //       <input
    //         className="flex-grow border rounded-full py-2 px-4 mr-2 dark:bg-gray-600 dark:text-white dark:border-gray-500 border-gray-300"
    //         type="text"
    //         placeholder="Type your message..."
    //       />{" "}
    //       <button className="py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
    //         {" "}
    //         Send{" "}
    //       </button>{" "}
    //     </div>{" "}
    //   </div>{" "}
    // </main>

    <main className="flex flex-col h-screen">
  <div className="sticky top-0 z-10 p-4 mt-3 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 flex justify-between items-center">
    <div className="flex items-center gap-3">
      <a href="#" className="block shrink-0">
        <img
          alt="Avatar"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          className="w-8 h-8 rounded-lg object-cover"
        />
      </a>
      <h3 className="font-medium text-sm">
        <a href="#" className="hover:underline">
          Hritik Roshan
        </a>
      </h3>
    </div>
    <div className="relative -mt-2 ">
      <button
        className="text-lg font-medium text-gray-900 dark:text-white tracking-[2.5px]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ...
      </button>
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg z-10">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => console.log("Share clicked")}
              >
                Share
              </button>
            </li>
            <li>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => console.log("Save clicked")}
              >
                Save
              </button>
            </li>
            <li>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => console.log("Copy link clicked")}
              >
                Copy Link
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>
  <div className="flex-1 p-4 space-y-4 no-scrollbar overflow-y-auto bg-gray-200 dark:bg-gray-800">
    {conversation.map((msg, index) => (
      <div key={index} className={`flex items-center ${msg.sender ? "" : "justify-end"}`}>
        {msg.sender && (
          <img className="w-8 h-8 rounded-full mr-2" src={msg.avatar} alt="User Avatar" />
        )}
        <div
          className={`${
            msg.sender
              ? "bg-white dark:bg-gray-700 dark:text-gray-200"
              : "bg-blue-500 dark:bg-blue-700 text-white"
          } rounded-lg p-2 shadow max-w-sm relative`}
        >
          <p>{msg.message}</p>
          <span
            className={`text-xs ${
              msg.sender
                ? "text-gray-400 dark:text-gray-400"
                : "text-gray-200 dark:text-gray-300"
            }`}
          >
            {msg.time}
          </span>
          {!msg.sender && (
            <span className="absolute bottom-0 right-0 m-2 flex items-center space-x-0.5">
              {!msg.seen && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-200 dark:text-white"
                >
                  <path d="M9 16.17L4.83 12 3.41 13.41 9 19l12-12-1.41-1.41L9 16.17z" />
                </svg>
              )}
              {msg.seen && <DoneAllIcon className="w-3 h-3 ml-2" />}
            </span>
          )}
        </div>
        {!msg.sender && (
          <img className="w-8 h-8 rounded-full ml-2" src={msg.avatar} alt="User Avatar" />
        )}
      </div>
    ))}
  </div>
  <div className="sticky bottom-[4rem] lg:bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600">
    <div className="flex items-center w-full max-w-screen-lg mx-auto">
      <input
        className="flex-grow border rounded-full py-2 px-4 mr-2 dark:bg-gray-600 dark:text-white dark:border-gray-500 border-gray-300"
        type="text"
        placeholder="Type your message..."
      />
      <button className="py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
        Send
      </button>
    </div>
  </div>
</main>

  );
}

export default MessageArea;
