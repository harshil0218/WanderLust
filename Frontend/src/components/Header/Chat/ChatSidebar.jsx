import React from 'react'
import UserChatPreview from './UserChatPreview'

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
  ];
function ChatSidebar() {
  return (
    <div className={`p-4 h-full dark:bg-gray-900 bg-gray-50`}>
      <h2 className={`text-lg font-bold mb-4 dark:text-white text-black`}>
        Chats
      </h2>
      <div className="space-y-3">
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
  )
}

export default ChatSidebar