"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState<boolean>();
  const { setTheme, resolvedTheme, theme } = useTheme();
  const [savedColor, setSavedColor] = useState("dark");

  const changeTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const setColor = resolvedTheme;
    setColor === "dark" ? setIsDark(true) : setIsDark(false);
  }, [savedColor]);

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Button
        onClick={changeTheme}
        size={"icon"}
        variant={"ghost"}
        className="transition-none"
      >
        {resolvedTheme === "dark" ? (
          <SunIcon width={20} height={20} />
        ) : (
          <MoonIcon width={20} height={20} />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitch;
