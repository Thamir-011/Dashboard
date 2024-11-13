import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import React from "react";

const EmployeeAction = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <DotsVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default EmployeeAction;
