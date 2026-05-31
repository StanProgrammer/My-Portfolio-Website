"use client";

import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      bg-(--color-ash)
      text-(--color-mist)
      border-t border-(--color-border)
    "
    >
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="
                text-xl font-semibold
                text-(--color-paper)
                tracking-tight
                hover:text-(--color-gold)
                transition
              "
            >
              Portfolio ™
            </Link>

            <p className="text-sm text-(--color-mist) mt-2">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/StanProgrammer"
              target="_blank"
              aria-label="GitHub Profile"
              className="
                p-3 rounded-full
                bg-(--color-border)
                text-(--color-paper)
                hover:bg-(--color-gold)
                hover:text-black
                transition-all duration-300
                hover:scale-105
                focus:outline-none
                focus:ring-2 focus:ring-(--color-gold)
              "
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-(--color-border)" />

        {/* Bottom */}
        <div className="mt-6 text-center text-xs text-(--color-mist)">
          Built with Next.js, Tailwind CSS, and modern web technologies.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
