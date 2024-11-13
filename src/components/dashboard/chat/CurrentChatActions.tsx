import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import React from "react";

const CurrentChatActions = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <DotsHorizontalIcon width={21} height={21} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CurrentChatActions;
