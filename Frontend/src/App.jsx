import { useState,useEffect,React } from 'react'
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
import ThemeBtn from './components/Header/ThemeBtn'
import Search from './components/Header/Search'
import ChatBtn from './components/Header/ChatBtn'
import { ThemeProvider } from './context/theme'
import Chatter from './components/Header/Chatter'
import ChatSearch from './components/Header/ChatSearch'
// import SpeechDemo from './components/SpeechDemo'
import 'regenerator-runtime/runtime';
import Header from './components/Header/Header'
function App() {
  const [count, setCount] = useState(0)
  const [themeMode, setThemeMode] = useState(0);
  useEffect(() => {
    const html =document.querySelector('html')
    html.classList.remove('dark','light')
    html.classList.add(themeMode)
  },[themeMode])
  const lightTheme =() => {
    setThemeMode('light')
  }
  const darkTheme = () =>{
    setThemeMode('dark')

  }

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <ThemeBtn/>
      <Chatter />
    </ThemeProvider>
  )
}

export default App
