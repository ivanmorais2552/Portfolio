"use client";

import { useEffect } from "react";

export function ThemeProvider() {
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const theme = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  }, []);

  return null;
}
