import { motion } from "framer-motion";
import React from "react";

interface DashBoardIconProps {
  fillColor?: string;
  size?: number;
}

interface SideBarItemsProps {
  index: number;
  Icon: React.ComponentType<DashBoardIconProps>;
  title: string;
  link: string;
  isSideBarOpen: boolean;
}

const SideBarItems: React.FC<SideBarItemsProps> = ({
  index,
  Icon,
  title,
  link,
  isSideBarOpen,
}) => {
  return (
    <motion.div
      key={index}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [50, 0], opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className={`relative overflow-hidden w-full group flex items-center 
        ${isSideBarOpen ? "justify-start" : "justify-center"} 
        space-x-3 py-2 dashboard_li_item `}
    >
      <a
        href={link}
        className="flex items-center space-x-2 relative overflow-hidden w-full"
      >
        <span
          className={`group-hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer`}
        >
        <Icon fillColor="white" size={24} />
        </span>
        {isSideBarOpen && (
          <span
            className="text-base font-medium font-ubuntu text-center 
              dark:text-white text-black group-hover:text-black/80 
              group-hover:dark:text-white/80"
          >
            {title}
          </span>
        )}
      </a>
    </motion.div>
  );
};

export default React.memo(SideBarItems);
