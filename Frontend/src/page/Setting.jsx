import { React, useState } from "react";
import { SettingCmpt, Header, SideMenu } from "../components";
function Setting() {
  return (
    <div class="h-screen flex flex-col bg-white">
      <header class=" text-white  fixed w-full top-0 z-10">
        <Header />
      </header>

      <div class="flex flex-1 ">
        <aside className=" no-scrollbar h-[95vh] bg-gray-100 dark:bg-gray-800 overflow-y-auto">
          <SideMenu />
        </aside>

        <main class="flex-1 justify-items-center rounded-lg  bg-gray-50  dark:bg-gray-900">
          <SettingCmpt />
        </main>
      </div>
    </div>
  );
}

export default Setting;
