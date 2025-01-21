import {React,useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from "../context/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function Layout() {
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
    <>
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
    <QueryClientProvider client={queryClient}>
    <Outlet/>
    </QueryClientProvider>
    </ThemeProvider>
          
    
    </>
  )
}

export default Layout