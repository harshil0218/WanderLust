import React from "react";
import { Header, SideMenu, Post } from "../components";
function Home() {
  return (
    <div class="min-h-screen flex flex-col">
      <header class=" text-white  fixed w-full top-0 z-10">
        <Header />
      </header>

      <div class="flex flex-1 pt-16">
        <aside class=" p-4 fixed bg-gray-100 dark:bg-gray-800 ">
          <SideMenu />
        </aside>

        <main class="flex-1 p-0 justify-items-center rounded-lg  bg-white  dark:bg-gray-900">
          <div class="space-y-4">
            <div class="p-2 mb-2  rounded shadow-sm dark:bg-gray-900 bg-gray-50">
              <Post />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
