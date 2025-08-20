"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // "light" | "dark"

export default function useTheme() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState("light");

    // Initialize from localStorage or system preference
    useEffect(() => {
        const root = document.documentElement;
        const stored = localStorage.getItem(STORAGE_KEY);
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = stored || (systemPrefersDark ? "dark" : "light");

        root.classList.toggle("dark", initial === "dark");
        setTheme(initial);
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        const root = document.documentElement;
        root.classList.toggle("dark", next === "dark");
        setTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
    };

    return { theme, toggleTheme, mounted };
}
