import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar text-white fixed z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <a>DESTINATIONS</a>
              </li>
              <li>
                <a>FOOD</a>
              </li>
              <li>
                <a>WELL BEING</a>
              </li>
              <li>
                <a>SPORT</a>
              </li>
              <li>
                <a>FAMILY</a>
              </li>
              <li>
                <a>LIFESTYLE</a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold">Traveler</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>DESTINATIONS</a>
            </li>
            <li>
              <a>FOOD</a>
            </li>
            <li>
              <a>WELL BEING</a>
            </li>
            <li>
              <a>SPORT</a>
            </li>
            <li>
              <a>FAMILY</a>
            </li>
            <li>
              <a>LIFESTYLE</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="bg-black py-2 px-4 text-white rounded-md hover:text-gray-200 cursor-pointer">
            Get your 120$ christmas gift
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
