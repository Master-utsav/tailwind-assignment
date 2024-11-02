import React from "react"
import SideBar from "./components/SideBar"
import { motion } from "framer-motion";
import DashboardSection from "./components/HeroSection";


const DashBoardPageVariants = {
  hidden: { opacity: 0.2, x: "-100vw", filter: "blur(15px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0.2, x: "100vw", filter: "blur(15px)" },
};

const App: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  function handleSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <div className="h-screen flex">
    <main className="flex-1 overflow-auto p-4 bg-white dark:bg-gray-900">
      <SideBar OnSideBarOpen={handleSideBar}/>
      <motion.section
      className={`flex-1 transition-all duration-300 
        ${isSideBarOpen ? "ml-64" : "ml-16"}
        bg-white dark:bg-gray-900`}
      variants={DashBoardPageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "spring", stiffness: 500, damping: 50, duration: 0.4 }}
    >
      <DashboardSection/>
    </motion.section>
    </main>
    </div>
  )
}

export default App
