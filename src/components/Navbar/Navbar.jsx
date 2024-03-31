import React, { useState } from "react";
import { Avatar } from "@nextui-org/react";
import CustomTooltip from "../Common/Tooltip";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 shadow-sm border-b-1.5 bg-gray-50 bg-opacity-95 backdrop-blur-sm h-[90px] z-9000">
      <div className="container flex items-center justify-between h-full px-10 mx-auto lg:px-20">
        <CustomTooltip title={"Ayyoob Ajward"}>
          <Avatar
            isBordered
            color="primary"
            src={"public/img/ayyoob-ajward.png"}
            size="xl"
            className="cursor-pointer"
          />
        </CustomTooltip>

        <div className="flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  className="transition-all duration-300 delay-150"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  className="transition-all duration-300 delay-150"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className={`${isMenuOpen ? "flex" : ""}`}>
            <ul className={`lg:flex hidden items-center space-x-16`}>
              <li className="text-lg font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">Projects</li>
              <li className="text-lg font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">About</li>
              <li className="text-lg font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">Contact</li>
              <CustomTooltip title="Hire Me">
                <button className="btn">Hire Me</button>
              </CustomTooltip>
            </ul>


            {/* Navigation bar for small screens */}
          {isMenuOpen && (
            <ul className="absolute left-0 right-0 flex flex-col px-4 py-4 mt-1 space-y-4 shadow-md lg:hidden top-full bg-gray-50 bg-opacity-95">
              <li className="text-lg font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">Projects</li>
              <li className="text-lg font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">About</li>
              <li className="text-lg font-medium text-black transition-colors delay-100 cursor-pointer hover:text-blue-600">Contact</li>
              <CustomTooltip title="Hire Me">
                <button className="btn">Hire Me</button>
              </CustomTooltip>
            </ul>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
