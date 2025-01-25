import { useState, useEffect, React } from "react";
import { ThemeProvider } from "./context/theme";
import "regenerator-runtime/runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [themeMode, setThemeMode] = useState(0);
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
    // Save the current theme mode to local storage
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  const queryClient = new QueryClient();
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeBtn /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
