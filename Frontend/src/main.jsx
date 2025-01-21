import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/theme.js";
import { Home, Chat, Setting,Profile } from "./page";

import { ProfileCmpt,Login,Signup,Forgot,OtpBox,Layout} from "./components";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="setting" element={<Setting />} />
      <Route path="chat" element={<Chat />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgotpassword" element={<Forgot />} />
      <Route path="forgototp" element={<OtpBox />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
    
    
  </StrictMode>
);
