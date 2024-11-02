import SideBarItems from "./SideBarItems";
import { DashBoardNavItems } from "../constants/constants";
import { motion } from "framer-motion";
import { NavigationIcon, NavigationOffIcon } from "lucide-react";
import React from "react";

interface SideBarProps {
  OnSideBarOpen: (isOpen: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ OnSideBarOpen }) => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  function handleSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
    OnSideBarOpen(!isSideBarOpen);
  }

  return (
    <aside
      className={`bg-gray-100 dark:bg-gray-950 dark:text-white text-black 
        transition-all duration-300 fixed top-0 left-0 z-10 h-screen overflow-hidden
        ${isSideBarOpen ? "sm:w-64 w-full" : "w-16"}`}
    >
      <div
        className={`flex flex-col h-full ${
          isSideBarOpen ? "py-2 px-5 justify-between" : "py-4 justify-between items-center"
        } space-y-1`}
      >
        <div className="flex flex-col w-full space-y-2 relative">
          <div className="flex justify-between items-center py-2 w-full">
            {isSideBarOpen && (
              <div className="object-cover w-32 rounded-md bg-gray-800">
                Your logo
              </div>
            )}
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={handleSideBar}
              className={`animate-pulse flex justify-center items-center ${
                isSideBarOpen ? "w-[25%]" : "w-full"
              }`}
            >
              {isSideBarOpen ? (
                <NavigationOffIcon className="text-black dark:text-white" size={32} />
              ) : (
                <NavigationIcon className="text-black dark:text-white" size={32} />
              )}
            </motion.button>
          </div>

          <div className="border-t-2 dark:border-white border-black rounded-l-2xl rounded-r-2xl py-2 w-full px-2"></div>

          <nav className={`space-y-0 w-full ${isSideBarOpen ? "px-4" : "px-1"}`}>
            {DashBoardNavItems.map((item, index) => (
              <SideBarItems
                key={index}
                index={index}
                Icon={item.Icon}
                title={item.title}
                link={item.link}
                isSideBarOpen={isSideBarOpen}
              />
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center w-full relative space-y-1">
          <div
            className={`flex ${
              isSideBarOpen ? "flex-row" : "flex-col"
            } items-center justify-start gap-2 relative w-full`}
          >
            <a href="/">
              <div className="font-bold text-xl dark:text-black dark:bg-white text-white bg-black relative">
                <img
                  alt="my-pic"
                  src="https://res.cloudinary.com/course-yuga/image/upload/v1729615601/userImages/ofe64eafmsstzlspi8op.png"
                  className="rounded-full h-12 w-12 object-cover object-center relative"
                />
              </div>
            </a>

            {isSideBarOpen && (
              <div className="text-left flex flex-col w-[60%] overflow-hidden">
                <span className="text-base font-medium">
                  utsav jaiswal
                </span>
                <span className="text-sm text-blue-500">
                  Developer@gmail.com
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default React.memo(SideBar);
