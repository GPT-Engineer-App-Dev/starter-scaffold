import { Home, Info } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
];