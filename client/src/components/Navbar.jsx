import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ThemeChangeSwitch from "./theme/ThemeChangeSwitch";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-center border-b-2 border-custom z-50">
        <div className="max-w-11/12 w-10/12">
          <div className="flex items-center justify-between p-3 sm:p-4 md:p-5 lg:p-6">
            <div>
              <h1 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] font-black font-mono tracking-widest">
                Code Pilot
              </h1>
            </div>
            <div className="flex text-[1.5rem] gap-4 sm:text-[1.8rem] sm:gap-5 md:text-[2rem] md:gap-6 lg:text-[2.5rem] lg:gap-8">
              <span>
                <a
                  href="https://www.linkedin.com/in/himanshumaharshi/"
                  target="black"
                >
                  <FaLinkedin className="" />
                </a>
              </span>
              <span>
                <a href="https://github.com/himanshumaharshi" target="black">
                  <FaGithub />
                </a>
              </span>
              <span>
                <ThemeChangeSwitch />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
