import React, { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar">
      <h1 className="header">Habit Tracker</h1>
      <button className="toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "🌞"}
      </button>
    </div>
  );
};

export default Navbar;
