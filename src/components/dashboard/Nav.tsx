"use client";

import { Button } from "@/components/ui/button";
import useSideNavContext from "@/hooks/useSideNavContext";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import NotificationsDropdown from "../NotificationsDropdown";
import UserButton from "../UserButton";
import { Input } from "../ui/input";
import dynamic from "next/dynamic";

// to fix (Prop d did not match. Server:)
const ThemeSwitch = dynamic(() => import("@/components/theme/ThemeSwitch"));

const Nav = () => {
  const { isOpen, setIsOpen } = useSideNavContext();

  return (
    <div className="bg-surface-secondary flex items-center px-3 py-3 z-10 shadow-md">
      <div className="flex flex-1">
        <Button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <HamburgerMenuIcon width={20} height={25} />
        </Button>
        <div className="hidden items-center gap-2 md:flex md:flex-1 mx-3">
          <MagnifyingGlassIcon width={27} height={27} />
          <Input
            name="search"
            placeholder="Search"
            className="outline-none border-none w-full focus-visible:ring-0"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeSwitch />
        <NotificationsDropdown />
        <UserButton />
      </div>
    </div>
  );
};

export default Nav;
