import { useState, useEffect, React } from "react";
import { ThemeProvider } from "./context/theme";
import "regenerator-runtime/runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header,Post, Signup,Login, OtpBox ,Forgot,ResetPassword, AddPost,SideMenu, PostHeader, PostContent, PostFooter, UserChatPreview, ChatSidebar, MessageArea} from "./components";
import { Home ,Chat} from "./page";
function App() {
  const [count, setCount] = useState(0);
  const [themeMode, setThemeMode] = useState(0);
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
  }, [themeMode]);
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const queryClient = new QueryClient()
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <QueryClientProvider client={queryClient}>
      {/* <ThemeBtn /> */}
      <Chat /> 
      
    </QueryClientProvider>
       
      
     
    </ThemeProvider>
  );
}

export default App;
