"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { USER } from "../data/user";
import Icon from "./Icon";

export default function Hero() {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/Mohammad_Arib_Hasan_Resume.pdf"; // must be inside /public folder
    link.download = "Mohammad_Arib_Hasan_Resume.pdf";
    link.click();
  };

  return (
    <header
      id="home"
      className="bg-gradient-to-br from-[#00110b] via-[#00221a] to-[#05221b] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col lg:flex-row items-center gap-8">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden flex-shrink-0"
        >
          <Image
            src={USER.photo}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://i.ibb.co.com/TB6h4CMd/a-professional-studio-portrait-of-a-youn-Jwoi-Pq-UCT2-GOGHHU4-S1-Tdg-Wss-S1bf-IR6-Wq-C9-O1-WUWeo-Q.jpg";
            }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 flex-1 text-center lg:text-left"
        >
          <p className="text-emerald-400 font-medium text-sm sm:text-base">
            Hi, I am
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            {USER.name}
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            {USER.designation} focused on building accessible, performant, and
            beautiful user interfaces. I love turning ideas into products.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
            <button
              onClick={handleDownloadClick}
              className="inline-flex cursor-pointer items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow transition-transform hover:scale-[1.02]"
            >
              Download Resume
            </button>

            <a
              href={USER.portfolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 transition"
            >
              Visit Portfolio
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center lg:justify-start items-center gap-3">
            <a
              href={USER.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2 rounded-md border border-white/30 hover:bg-white/10 transition"
            >
              <Icon name="github" />
            </a>
            <a
              href={USER.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="p-2 rounded-md border border-white/30 hover:bg-white/10 transition"
            >
              <Icon name="linkedin" />
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
