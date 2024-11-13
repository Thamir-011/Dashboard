import { SideNavContext } from "@/providers/SideNavProvider";
import { useContext } from "react";

const useSideNavContext = () => {
  const sideNavContext = useContext(SideNavContext);

  if (sideNavContext === undefined) {
    throw new Error("SideNavContext must be used inside SideNavProvider!");
  }

  return sideNavContext;
};

export default useSideNavContext;
