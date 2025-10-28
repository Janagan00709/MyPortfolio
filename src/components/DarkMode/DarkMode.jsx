import { useEffect } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  
  const setLightMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  
  // Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    const checkbox = document.getElementById("darkmode-toggle");
    
    if (savedTheme === "dark") {
      setDarkMode();
      if (checkbox) checkbox.checked = true;
    } else {
      setLightMode();
      if (checkbox) checkbox.checked = false;
    }
  }, []);
  
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="" className="sun"/>
        <img src={Moon} alt="" className="moon"/>
      </label>
    </div>
  );
};

export default DarkMode;