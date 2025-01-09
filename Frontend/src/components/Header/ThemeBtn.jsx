import { React, useState, useEffect } from "react";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import useTheme from "../../context/theme";
function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const isDark = themeMode === "dark";
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <div className="flex items-center space-x-1">
      {isDark ? ( <LightModeOutlinedIcon className="text-gray-800 dark:text-gray-200" />):(<LightModeIcon className="text-gray-800 dark:text-gray-200" />) }
      

      <label
        htmlFor="AcceptConditions"
        className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-500"
      >
        <input
          type="checkbox"
          id="AcceptConditions"
          className="peer sr-only"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
      </label>
      {isDark ? (<Brightness3Icon className="text-gray-800 dark:text-gray-200 rotate-[25deg]"/>):(<Brightness3OutlinedIcon className="text-gray-800 dark:text-gray-200 rotate-[25deg]" />)}
      
    </div>
  );
}

export default ThemeBtn;
