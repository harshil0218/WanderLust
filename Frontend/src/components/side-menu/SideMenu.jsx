import React from "react";
import MenuBtn from "./MenuBtn";
function SideMenu() {
  return (
    <aside
      id="default-sidebar"
      class="fixed top-0 left-0  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li><MenuBtn/></li>
          <li><MenuBtn/></li>
          <li><MenuBtn/></li>
          <li><MenuBtn/></li>
        </ul>
      </div>
    </aside>
  );
}

export default SideMenu;
