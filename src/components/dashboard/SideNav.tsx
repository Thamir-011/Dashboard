"use client";

import { sideNavLinks } from "@/data/constants";
import SideNavLinkWrapper from "@/components/dashboard/SideNavLinkWrapper";
import Image from "next/image";
import useSideNavContext from "@/hooks/useSideNavContext";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowLeftIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const SideNav = () => {
  const { isOpen, setIsOpen } = useSideNavContext();

  return (
    <div
      className={`bg-sideNav text-sideNav-foreground w-[250px] z-20 transition-[left] duration-500 md:flex-1 h-full py-2 px-4 absolute md:static ${
        isOpen ? "left-0" : "left-[-250px]"
      }`}
    >
      <div className="flex justify-between">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 mb-12 select-none"
        >
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={35}
            height={35}
            className="whiteSVG"
          />
        </Link>
        <Button
          variant={"ghost"}
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowLeftIcon width={20} height={25} />
        </Button>
      </div>
      <ul>
        {sideNavLinks.map((link) => (
          <li key={link.title}>
            <SideNavLinkWrapper data={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
