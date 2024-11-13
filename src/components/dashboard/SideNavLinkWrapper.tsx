import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Link from "next/link";

interface SideNavLinkProps {
  title: string;
  icon?: string;
  link: string;
}

interface SideNavLinkWrapperProps {
  title: string;
  icon: string;
  link: string;
  subLinks?: SideNavLinkProps[];
}

const SideNavLink = ({
  data,
  asSubLink,
}: {
  data: SideNavLinkProps;
  asSubLink?: boolean;
}) => {
  const { title, icon, link } = data;
  return (
    <Link
      href={link}
      className={`flex w-full items-center my-2 rounded-lg ${
        asSubLink
          ? "px-2 opacity-50 hover:opacity-100"
          : "h-10 p-2 hover:bg-white hover:bg-opacity-10 hover:opacity-70"
      }`}
    >
      <div className="flex gap-2 text-base">
        {icon && (
          <Image
            src={icon}
            alt={title}
            width={0}
            height={0}
            className="whiteSVG w-[21px] h-auto"
          />
        )}
        <p>{title}</p>
      </div>
    </Link>
  );
};

const SideNavLinkWrapper = ({ data }: { data: SideNavLinkWrapperProps }) => {
  const [isExpand, setIsExpand] = useState(false);
  const { title, icon, subLinks } = data;

  if (subLinks) {
    return (
      <div>
        <div
          className="flex w-full h-10 justify-between items-center p-2 my-2 rounded-lg hover:bg-white hover:bg-opacity-10 hover:opacity-70 cursor-pointer"
          onClick={() => setIsExpand(!isExpand)}
        >
          <div className="flex gap-2 text-base">
            <Image
              src={icon}
              alt={title}
              width={0}
              height={0}
              className="whiteSVG w-[21px] h-auto"
            />
            <p>{title}</p>
          </div>
          {isExpand ? (
            <CaretUpIcon width={22} height={22} />
          ) : (
            <CaretDownIcon width={22} height={22} />
          )}
        </div>
        {isExpand && (
          <div className="flex justify-center">
            <ul className="w-[85%]">
              {subLinks.map((link) => (
                <div key={link.title}>
                  <SideNavLink data={link} asSubLink />
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return <SideNavLink data={data} />;
};

export default SideNavLinkWrapper;
