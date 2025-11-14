"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { USER } from "../data/user";
import Icon from "./Icon";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/arib-img.jpeg";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sections: string[] = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="bg-[#071014]/60 backdrop-blur sticky top-0 z-40 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={img}
              alt="Professional portrait"
              width={500}
              height={500}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className="hover:text-emerald-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
            <Link
              href={USER.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-md hover:border-emerald-200"
            >
              <Icon name="linkedin" />{" "}
              <span className="hidden sm:inline">LinkedIn</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="menu"
              className="p-2 rounded-md"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div ref={menuRef} className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 text-sm">
              {sections.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className="hover:text-emerald-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(false)} // close on link click
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
