import { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import MenuBtn from './components/side-menu/MenuBtn'
import PostHeader from './components/Post/PoatHeader'
import Post from './components/Post/Post'
import PostFooter from './components/Post/PostFooter'
import LikeBtn from './components/Post/LikeBtn'
import Comment from './components/Post/Comment'
import AddComment from './components/Post/AddComment'
import ShareBtn from './components/Post/ShareBtn'
import SideMenu from './components/side-menu/SideMenu'
import Logo from './components/Header/Logo'
import Search from './components/Header/Search'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search/>
    </>
  )
}

export default App
