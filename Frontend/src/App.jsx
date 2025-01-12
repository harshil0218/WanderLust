import { useState, useEffect, React } from "react";
import ThemeBtn from "./components/Header/ThemeBtn";
import { ThemeProvider } from "./context/theme";
import "regenerator-runtime/runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Chat from "./components/Header/Chat/Chat";
import Profile from "./components/profile/Profile";
import { Post, Signup,Login, OtpBox ,Forgot,ResetPassword, AddPost,SideMenu} from "./components";

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
      <ThemeBtn />
      <ResetPassword /> {/* Your SignUp component */}
    </QueryClientProvider>
       
      
     
    </ThemeProvider>
  );
}

export default App;
