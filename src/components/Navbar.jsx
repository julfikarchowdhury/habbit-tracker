import React, { useState } from "react";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  const location = useLocation();
  console.log(location);

  return (
    <div className="navbar">
      <h1 className="header">Habit Tracker</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Home
        </NavLink>
        &nbsp;|&nbsp;
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Analytics
        </NavLink>
      </nav>
      <button className="toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "🌞"}
      </button>
    </div>
  );
};

export default Navbar;
