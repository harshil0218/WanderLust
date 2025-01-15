import { React, useState,useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

function ChatSearch() {
    const [search, setSearch] = useState("");
  return (
    <form class="flex items-center sticky top-0 ">
      <label for="voice-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full">
        <div class="absolute inset-y-0  flex items-center ps-3">
          {/* Search */}
          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white ">
            <SearchIcon className="" />
          </button>
        </div>
        <input
          type="text"
          value={search}
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search "
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        {search.length > 0 && (
          <button
            type="button"
            class="absolute inset-y-0 end-3 flex items-center ps-3"
            onClick={() => setSearch("")}
          >
            <ClearIcon className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </button>
        )}
        
      </div>
    </form>
  )
}

export default ChatSearch