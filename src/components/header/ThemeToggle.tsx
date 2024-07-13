"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../../../public/images";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  //
  const handleThemeToggle = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  //
  return (
    <button onClick={() => handleThemeToggle()}>
      <span className="hidden dark:block">{<SunIcon />}</span>
      <span className="block dark:hidden">{<MoonIcon />}</span>
      <span className="sr-only">
        {isMounted && resolvedTheme === "light" ? (
          "Theme Toggle: Currently light theme"
        ) : (
          "Theme Toggle: Currently dark theme"
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
