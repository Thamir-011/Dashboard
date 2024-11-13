"use client";

import { createContext, useState } from "react";

export const SideNavContext = createContext<SideNavContextProps | undefined>(
  undefined
);

const SideNavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideNavContext.Provider>
  );
};

export default SideNavProvider;
