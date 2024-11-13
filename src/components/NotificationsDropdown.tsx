"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { notifications } from "@/data/constants";
import { BellIcon } from "@radix-ui/react-icons";
import moment from "moment";

const NotificationsDropdown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-surface-primary p-2 rounded-full outline-none">
          <BellIcon height={17} width={17} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[280px] p-0 rounded-none">
          <DropdownMenuLabel className="m-2 tracking-wide">
            Notifications
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="m-0 p-0" />
          <ul className="h-[280px] overflow-y-scroll">
            {notifications.map((notification, i) => (
              <li key={i}>
                <DropdownMenuItem className="flex flex-col items-start py-2 rounded-none border-b cursor-pointer">
                  <p className="text-xs">{notification.content}</p>
                  <p className="text-xs opacity-30">
                    {moment(notification.at).fromNow()}
                  </p>
                </DropdownMenuItem>
              </li>
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NotificationsDropdown;
