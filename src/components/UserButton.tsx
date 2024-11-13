"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExitIcon } from "@radix-ui/react-icons";

const UserButton = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-gray-900 rounded-full outline-none">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>TA</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuItem className="cursor-pointer">
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer">
            <ExitIcon />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
