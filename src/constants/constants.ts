
import BookmarkIcon2 from "../Icons/BookmarkIcon2";
import DashboardIcon from "../Icons/DashboardIcon";
import HistoryIcon from "../Icons/HistoryIcon";
import HomeIcon from "../Icons/HomeIcon";

interface DashBoardIconProps {
    fillColor?: string;
    size?: number;
  }
  
  interface DashboardNavItemProps {
    theme: string;
    Icon: React.ComponentType<DashBoardIconProps>;
    title: string;
    link: string;
  }

export const DashBoardNavItems: DashboardNavItemProps[] = [
    {
      theme: "dark", 
      Icon: HomeIcon,  
      title: "Homepage",
      link: "/",
    },
    {
      theme: "dark",
      Icon: DashboardIcon,  
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      theme: "dark",
      Icon: BookmarkIcon2,  
      title: "Bookmarks",
      link: "/bookmarks",
    },
    {
      theme: "dark",
      Icon: HistoryIcon,  
      title: "History",
      link: "/history",
    },
  ];