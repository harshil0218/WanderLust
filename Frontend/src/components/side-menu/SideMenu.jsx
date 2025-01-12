import React from "react";
import MenuBtn from "./MenuBtn";
function SideMenu() {
  // return (
  //   <aside
  //     id="default-sidebar"
  //     class="fixed top-0 left-0  z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
  //     aria-label="Sidebar"
  //   >
  //     <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
  //       <ul class="space-y-2 font-medium">
  //         <li><MenuBtn/></li>
  //         <li><MenuBtn/></li>
  //         <li><MenuBtn/></li>
  //         <li><MenuBtn/></li>
  //       </ul>
  //     </div>
  //   </aside>
  // );
  return (
    <aside>
      {/* Large Devices - Left Sidebar */}
      <div className="hidden lg:flex fixed top-0 left-0 z-40 w-auto h-screen bg-gray-100 dark:bg-gray-800">
        <div className="h-full  mx-6 py-4 overflow-y-auto">
          <ul className="space-y-4 ">
            <li>
              <MenuBtn
                icon={
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                }
                label="Dashboard"
              />
            </li>
            <li>
              <MenuBtn
                icon={
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                }
                label="Reports"
              />
            </li>
            <li>
              <MenuBtn
                icon={
                  <path d="M8 1l8 8-8 8V1Z" />
                }
                label="Settings"
              />
            </li>
            <li>
              <MenuBtn
                icon={
                  <path d="M6 2h4v4H6zm0 8h4v4H6z" />
                }
                label="Support"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Small & Medium Devices - Bottom Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 z-40 w-full bg-gray-100 dark:bg-gray-800">
        <div className="flex justify-between px-4 py-3 w-full">
          <MenuBtn 
            icon={
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
            }
            label="Dashboard"
          />
          <MenuBtn
            icon={
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            }
            label="Reports"
          />
          <MenuBtn
            icon={
              <path d="M8 1l8 8-8 8V1Z" />
            }
            label="Settings"
          />
          <MenuBtn
            icon={
              <path d="M6 2h4v4H6zm0 8h4v4H6z" />
            }
            label="Support"
          />
        </div>
      </div>
    </aside>
  );

}

export default SideMenu;
