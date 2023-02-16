import React from "react";
import { NavLink } from "react-router-dom";
import hinh1 from "../../img/wr.png";
const Header2 = () => {
  return (
    <div className="py-5">
      <nav class=" border-gray-200 px-4 py-2.5 mb-5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img src={hinh1} className="w-full h-[200px]" alt="SjnMovie Logo" />
          </a>

          <div
            className="justify-between items-center  lg:flex lg:w-auto lg:order-1 text-white text-xl gap-x-6"
            id="mobile-menu-2"
          >
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
              to="/upcoming"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Upcoming
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
