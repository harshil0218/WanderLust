import { React, useState } from "react";
import { Header, SideMenu, AddPost } from "../components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-white  fixed w-full top-0 z-10">
        <Header />
      </header>

      <div className="flex flex-1 pt-16">
        <aside className=" no-scrollbar h-[95vh] bg-gray-100 dark:bg-gray-800 overflow-y-auto">
          <SideMenu />
        </aside>

        <main className="flex-1 flex justify-center items-center  bg-white dark:bg-gray-900">
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-white hover:text-gray-300 z-60"
              >
                <CloseOutlinedIcon fontSize="large" />
              </button>
              <div className="bg-gray-100 mx-3 dark:bg-gray-800 rounded-lg shadow p-4 w-full md:max-w-[65vb] lg:max-w-[65vb] relative">
                <AddPost />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default CreatePost;
