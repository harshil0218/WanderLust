import React from "react";
import { ProfileCmpt } from "../components";
import { Header, SideMenu } from "../components";

function Profile() {
  return (
    // <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 no-scrollbar overflow-hidden">
    //   <header className="text-white fixed w-full top-0 z-20">
    //     <Header />
    //   </header>
    //   <div className="flex-1 flex pt-16 pb-16">
    //     <aside className="hidden lg:block p-4 no-scrollbar h-[95vh] bg-gray-100 dark:bg-gray-900 overflow-y-auto">
    //       <SideMenu />
    //     </aside>
    //     <main>
    //       <ProfileCmpt />
    //     </main>
    //   </div>
    // </div>

    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <header className="text-white fixed w-full top-0 z-20">
        <Header />
      </header>
      <div className="flex-1 flex pt-16 pb-16 overflow-hidden">
        <aside className="  no-scrollbar h-[95vh] bg-gray-100 dark:bg-gray-900 overflow-y-auto">
          <SideMenu />
        </aside>
        <main className="flex-1 flex justify-center items-center  overflow-y-auto">
          <div className="w-max no-scrollbar h-full overflow-y-auto">
            <ProfileCmpt />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
