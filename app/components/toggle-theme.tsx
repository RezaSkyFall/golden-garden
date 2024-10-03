"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant='outline'
      className='items-center gap-2'
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme == "dark" ? (
        <Moon className=' h-[1.2rem] w-[1.2rem]  scale-0 transition-all dark:scale-100' />
      ) : (
        <Sun className='h-[1.2rem] w-[1.2rem]  scale-100 transition-all  dark:scale-0' />
      )}
      <span>{theme == "dark" ? "تاریک" : "روشن"}</span>
    </Button>
  );
}
