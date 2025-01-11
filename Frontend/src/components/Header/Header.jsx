import React from 'react'
import ChatBtn from './Chat/ChatBtn'
import ThemeBtn from './ThemeBtn'
import Search from './Search'
import Logo from './Logo'
function Header() {
  return (
    
    <header className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center space-x-2">
        <Logo  />

      </div>
      <div className="flex-1 mx-4 items-center">
        <Search  />
      </div>
      <div className="flex items-center space-x-4 ">
        <ChatBtn  messageCount={10} />
        <ThemeBtn  />
      </div>
    </header>
  )
}

export default Header