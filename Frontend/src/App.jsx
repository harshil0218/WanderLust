import { useState, useEffect, React } from "react";
import ThemeBtn from "./components/Header/ThemeBtn";
import { ThemeProvider } from "./context/theme";
import "regenerator-runtime/runtime";
import Chat from "./components/Header/Chat/Chat";
import Profile from "./components/profile/Profile";
import { Post, Signup,Login, OtpBox ,Forgot,ResetPassword, AddPost} from "./components";

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

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
       <ThemeBtn />
      {/*<Profile /> */}
      <AddPost/>
    </ThemeProvider>
  );
}

export default App;
