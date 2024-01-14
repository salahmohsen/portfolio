"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      name="toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <MdLightMode className="scale-100 origin-center hover:scale-125 transition-transform duration-200 ease-in-out " />
    </button>
  );
};
