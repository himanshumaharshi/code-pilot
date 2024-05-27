import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeChangeSwitch = () => {
  const initialTheme = localStorage.getItem("theme") === "dark";
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    (() => {
      isDarkMode ? setDarkMode() : setLightMode();
    })();
  }, [isDarkMode]);

  return (
    <div onClick={() => setIsDarkMode(!isDarkMode)} className="select-none">
      {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
    </div>
  );
};

export default ThemeChangeSwitch;
