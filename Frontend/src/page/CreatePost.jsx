import {React,useState} from 'react'
import { Header,SideMenu ,AddPost} from '../components'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function CreatePost() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (

    
    // <div className="min-h-screen flex flex-col">
    //   <header className="text-white fixed w-full top-0 z-10">
    //     <Header />
    //   </header>

    //   <div className="flex flex-1 pt-16">
    //     <aside className="p-4 fixed bg-gray-100 dark:bg-gray-800">
    //       <SideMenu />
    //     </aside>

    //     <main className="flex-1 flex justify-center items-center p-0 bg-white dark:bg-gray-900">
    //       <button
    //         onClick={openModal}
    //         className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
    //       >
    //         Create Post
    //       </button>

    //       {isModalOpen && (
    //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    //           <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-0 w-screen max-w-4xl relative">
    //             <button
    //               onClick={closeModal}
    //               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
    //             >
    //               <CloseOutlinedIcon fontSize='medium' />
    //             </button>
    //             <AddPost />
    //           </div>
    //         </div>
    //       )}
    //     </main>
    //   </div>
    // </div>

    // <div className="min-h-screen flex flex-col">
    //   <header className="text-white fixed w-full top-0 z-10">
    //     <Header />
    //   </header>

    //   <div className="flex flex-1 pt-16">
    //     <aside className="p-4 fixed bg-gray-100 dark:bg-gray-800">
    //       <SideMenu />
    //     </aside>

    //     <main className="flex-1 flex justify-center items-center p-0 bg-white dark:bg-gray-900">
    //       <button
    //         onClick={openModal}
    //         className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
    //       >
    //         Create Post
    //       </button>

    //       {isModalOpen && (
    //         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    //           <button
    //             onClick={closeModal}
    //             className="absolute top-5 right-5 text-white hover:text-gray-300 z-60"
    //           >
    //             <CloseOutlinedIcon fontSize='large' />
    //           </button>
    //           <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-0 w-screen max-w-4xl relative">
    //             <AddPost />
    //           </div>
    //         </div>
    //       )}
    //     </main>
    //   </div>
    // </div>

    <div className="min-h-screen flex flex-col">
  <header className="text-white  fixed w-full top-0 z-10">
    <Header />
  </header>

  <div className="flex flex-1 pt-16">
    <aside className="p-4 fixed bg-gray-100 dark:bg-gray-800">
      <SideMenu />
    </aside>

    <main className="flex-1 flex justify-center items-center p-0 bg-white dark:bg-gray-900">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
      >
        Create Post
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white hover:text-gray-300 z-60"
          >
            <CloseOutlinedIcon fontSize='large' />
          </button>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4 w-full md:max-w-[65vb] lg:max-w-[65vb] relative">
            <AddPost />
          </div>
        </div>
      )}
    </main>
  </div>
</div>


   
  );
}

export default CreatePost