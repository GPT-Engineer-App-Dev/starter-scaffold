import { Package2 } from "lucide-react";
import { NavItem } from "./NavItem";
import { UserMenu } from "./UserMenu";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="flex items-center justify-between w-full">
    <div className="flex items-center gap-5 lg:gap-6 text-lg font-medium md:text-sm">
      <NavItem
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span>MyApp</span>
      </NavItem>
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.title}
        </NavItem>
      ))}
    </div>
    <UserMenu />
  </nav>
);