import { useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "./context/theme";
import "./index.css";
import {Login,Signup,Forgot, OtpBox,ResetPassword} from "./components";
import { Home, Chat, Setting, Profile, Auth,CreatePost } from "./page";

import { Layout } from "./components";
import App from "./App";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Auth />} />
      <Route path="home" element={<Home />} />
      <Route path="setting" element={<Setting />} />
      <Route path="chat" element={<Chat />} />
      <Route path="profile" element={<Profile />} />
      <Route path="createpost" element={<CreatePost />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
      <App />
      </RouterProvider>
    </ThemeProvider>
     
    
  </StrictMode>
);
