import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5 text-2xl ">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movie
      </NavLink>

      <NavLink
        to="/toprated"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Upcoming
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        About
      </NavLink>
    </header>
  );
};

export default Header;
