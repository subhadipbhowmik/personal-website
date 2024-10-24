"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React, { forwardRef, Ref } from "react";

// Define the props type (optional, but good for clarity)
interface ModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// Wrap the component with forwardRef
export const ModeToggle = forwardRef<HTMLButtonElement, ModeToggleProps>((props, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...props} // Spread any additional props
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});

// Ensure to export the component
export default ModeToggle;
