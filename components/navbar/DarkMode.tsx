"use client";

import { useEffect, useState } from "react";
import { TbSunHigh } from "react-icons/tb";
import { RxMoon } from "react-icons/rx";
import { useTheme } from "next-themes";

function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="cursor-pointer w-9 h-9 rounded-sm shadow-sm border border-[#e2e8f0] flex items-center justify-center">
      </button>
    );
  }

  return (
    <div className="relative group">
      <button className="cursor-pointer w-9 h-9 rounded-sm shadow-sm border border-[#e2e8f0] flex items-center justify-center">
        {theme === "light" ? <TbSunHigh /> : <RxMoon />}
      </button>

      <div className="shadow-sm border border-border bg-card text-card-foreground transition-all rounded-sm w-30 text-sm overflow-hidden hidden group-focus-within:block absolute top-12 right-0">
        <button
          className="text-start cursor-pointer block w-full px-4 py-2 hover:bg-secondary hover:text-secondary-foreground"
          onClick={() => setTheme("light")}
        >
          Light
        </button>

        <button
          className="text-start cursor-pointer block w-full px-4 py-2 hover:bg-secondary hover:text-secondary-foreground"
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>

        <button
          className="text-start cursor-pointer block w-full px-4 py-2 hover:bg-secondary hover:text-secondary-foreground"
          onClick={() => setTheme("system")}
        >
          System
        </button>
      </div>
    </div>
  );
}

export default DarkMode;