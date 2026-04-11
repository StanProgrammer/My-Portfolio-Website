"use client";

import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { theme, toggleTheme } = useTheme();

  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
<nav className="fixed top-0 w-full z-50 border-b border-(--color-border) bg-(--color-ink)/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)]">     
<div className="container flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-display italic text-(--color-gold) tracking-wide"
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-(--color-ash) transition"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-(--color-gold)" />
            ) : (
              <MoonIcon className="h-5 w-5 text-(--color-mist)" />
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-(--color-ash)"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5 text-(--color-gold)" />
            ) : (
              <MoonIcon className="h-5 w-5 text-(--color-mist)" />
            )}
          </button>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 rounded hover:bg-(--color-ash)"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-(--color-paper)" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-(--color-paper)" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-(--color-border) bg-(--color-ink) px-4 py-4 animate-fade-in">
          <div className="space-y-4">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block nav-link py-2 ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;