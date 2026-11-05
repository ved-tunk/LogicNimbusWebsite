"use client";
import { ThemeProvider as NextThemes } from "next-themes";
import type { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <NextThemes attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>{children}</NextThemes>;
}
