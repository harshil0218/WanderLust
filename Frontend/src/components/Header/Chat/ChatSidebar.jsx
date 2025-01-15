import {React,useState,useEffect} from 'react'
import UserChatPreview from './UserChatPreview'
import '../../../../src/App.css'
import ChatSearch from './ChatSearch';
const users = [
    {
      id: 1,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "2:15 PM",
      unreadCount: 3,
    },
    {
      id: 2,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Jane Smith",
      lastMessage: "I'll call you later.",
      lastMessageTime: "1:10 PM",
      unreadCount: 0,
    },
    {
      id: 3,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Mike Ross",
      lastMessage: "Can you share the document?",
      lastMessageTime: "12:45 PM",
      unreadCount: 5,
    },
    {
      id: 4,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Tony Stark",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "2:15 PM",
      unreadCount: 1,
    },
    {
      id: 5,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Natasha Romanoff",
      lastMessage: "I'll call you later.",
      lastMessageTime: "1:10 PM",
      unreadCount: 4,
    },
    {
      id: 6,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Bruce Banner",
      lastMessage: "Can you share the document?",
      lastMessageTime: "12:45 PM",
      unreadCount: 0,
    },
    {
      id: 1,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "2:15 PM",
      unreadCount: 3,
    },
    {
      id: 2,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Jane Smith",
      lastMessage: "I'll call you later.",
      lastMessageTime: "1:10 PM",
      unreadCount: 0,
    },
    {
      id: 3,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Mike Ross",
      lastMessage: "Can you share the document?",
      lastMessageTime: "12:45 PM",
      unreadCount: 5,
    },
    {
      id: 4,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Tony Stark",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "2:15 PM",
      unreadCount: 1,
    },
    {
      id: 5,
      profilePicture: "https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "Natasha Romanoff",
      lastMessage: "I'll call you later.",
      lastMessageTime: "1:10 PM",
      unreadCount: 4,
    },
    
  ];
function ChatSidebar() {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Simulate API call
  useEffect(() => {
    const fetchChats = () => {
      setIsLoading(true);
      setIsError(false);

      setTimeout(() => {
        // Simulate success or failure
        const isSuccess = Math.random() > 0.2; // 80% success rate
        if (isSuccess) {
          
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }, 1500); // Simulated delay
    };

    fetchChats();
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="  left-0 bg-white dark:bg-gray-800 shadow-lg flex ">
  //       <p className="text-gray-900 dark:text-gray-300">Loading chats...</p>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className=" fixed-l inset-y-0  bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
  //       <p className="text-red-500 dark:text-red-400">Failed to load chats.</p>
  //     </div>
  //   );
  // }
  // return (
  //   <div className={`flex-col overflow-y-auto p-4 shrink-0 h-full dark:bg-gray-900 bg-gray-50 w-90 `}>
  //     <div className='p-3 w-full sticky top-0 left-0 right-0'>
  //     <ChatSearch className='mt-2 p-3'/>
  //     </div>
      
  //     <div className="space-y-3 scroll-auto flex-1">
  //       {users.map((user) => (
  //         <UserChatPreview
  //           key={user.id}
  //           profilePicture={user.profilePicture}
  //           userName={user.name}
  //           lastMessage={user.lastMessage}
  //           lastMessageTime={user.lastMessageTime}
  //           unreadCount={user.unreadCount}
  //           onClick={() => onChatClick(user.id)}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // )

  if (isLoading) {
    return (
      <div className="left-0 bg-white dark:bg-gray-800 shadow-lg flex ">
        <p className="text-gray-900 dark:text-gray-300">Loading chats...</p>
      </div>
    );
  }
  
  if (isError) {
    return (
      <div className="fixed-l inset-y-0 bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
        <p className="text-red-500 dark:text-red-400">Failed to load chats.</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-screen">
      
      <div className="flex-1 overflow-hidden">
        <div className="flex-col overflow-y-auto no-scrollbar p-4 shrink-0 h-full dark:bg-gray-900 bg-gray-50 w-full">
          <div className='p-3 w-full dark:bg-gray-900 bg-gray-50 sticky top-0 left-0 right-0'>
            <ChatSearch className='mt-2 p-3' />
          </div>
          <div className="space-y-3 overflow-y-auto flex-1">
            {users.map((user) => (
              <UserChatPreview
                key={user.id}
                profilePicture={user.profilePicture}
                userName={user.name}
                lastMessage={user.lastMessage}
                lastMessageTime={user.lastMessageTime}
                unreadCount={user.unreadCount}
                onClick={() => onChatClick(user.id)}
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
  
}

export default ChatSidebar