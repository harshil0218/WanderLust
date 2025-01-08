import {React,useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
function Search() {
  const [search, setSearch] = useState("");
  return (
    <form class="flex items-center max-w-lg mx-auto">
      <label for="voice-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full ">
        <div class="absolute inset-y-0  flex items-center   ps-3">
          {/* Search */}
          <button className="text-gray-600 dark:text-gray-200 hover:text-gray-900 ">
            <SearchIcon className="" />
          </button>
        </div>
        <input
          type="text"
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos, Design Templates..."
          required
        />
        <button
          type="button"
          class="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
      </div>
      
    </form>
  );
}

export default Search;
