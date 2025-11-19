"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { USER } from "../data/user";
import Icon from "./Icon";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="bg-[#071014]/60 backdrop-blur sticky top-0 z-40 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://i.ibb.co/fWV1FVC/unnamed-removebg-preview.png"
              alt="logo"
              width={100}
              height={100}
              className="h-20 w-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className="hover:text-emerald-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}

            <Link
              href={USER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-md hover:border-emerald-200"
            >
              <Icon name="linkedin" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md"
          >
            <Icon name="menu" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div ref={menuRef} className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 text-sm">
              {sections.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className="hover:text-emerald-600 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}

              <Link
                href={USER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm pt-2"
                onClick={() => setOpen(false)}
              >
                <Icon name="linkedin" />
                LinkedIn
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
