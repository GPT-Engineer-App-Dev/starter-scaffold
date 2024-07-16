import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";

export const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);