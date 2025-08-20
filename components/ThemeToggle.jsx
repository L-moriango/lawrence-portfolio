"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "./useTheme";

export default function ThemeToggle({ className = "" }) {
    const { theme, toggleTheme, mounted } = useTheme();

    // Avoid hydration mismatch
    if (!mounted) return null;

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full border border-secondary/20 bg-white hover:bg-gray-50 ark:bg-primary
            dark:text-white dark:border-white/10 hover:dark:bg-primary/90
            shadow-custom flex items-center justify-center transition-colors ${className}`}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
            {theme === "dark" ? (
                <FiSun className="text-lg" />
            ) : (
                <FiMoon className="text-lg" />
            )}
        </button>
    );
}
