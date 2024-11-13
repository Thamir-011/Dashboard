import React from "react";
import Nav from "@/components/dashboard/Nav";
import SideNav from "@/components/dashboard/SideNav";
import SideNavProvider from "@/providers/SideNavProvider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SideNavProvider>
      <div className="flex h-screen font-roboto">
        <SideNav />
        <div className="flex flex-col w-full md:flex-[4]">
          <Nav />
          <div className="flex-1 bg-surface-primary p-5 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </SideNavProvider>
  );
};

export default layout;
