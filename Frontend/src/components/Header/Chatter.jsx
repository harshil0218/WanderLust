import { React, useState } from "react";

function Chatter() {
    const [menuOpen, setMenuOpen] = useState(false);
  const time = "1h";
  const userName = 'Hritik Roshan';
  const lastMessage = "See you in gym!!";
  return (
    <div className="flex justify-center  ">
      <article className=" w-full pb-2 border-gray-300 bg-slate-300 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-start gap-1 p-0 ml-2 mt-2">
          <a href="#" className="block shrink-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="size-12 rounded-xl object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium mt-1 ml-2 text-sm/3">
              <a href="#" className="hover:underline">
                <p>{userName} &middot; {time}</p>
              </a>
            </h3>

            <p className=" mt-2 text-xs/3 ml-2 text-gray-700 dark:text-gray-100">
              {lastMessage}
            </p>
          </div>
          <div className="content-end ml-12 mt-1">{/* Menu Toggle */}
          <div className="relative  mt-0">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-lg font-medium text-gray-900 dark:text-white tracking-[2.5px]"
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
                        Pin chat
                      </button>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => console.log("Share clicked")}
                      >
                        Mark as Read
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => console.log("Save clicked")}
                      >
                        Block
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => console.log("Copy link clicked")}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Chatter;
