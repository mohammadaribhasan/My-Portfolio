"use client";

import { motion } from "framer-motion";
import { USER } from "../data/user";

interface Branch {
  title: string;
  text: string;
}

const branches: Branch[] = [
  {
    title: "Programming Journey",
    text: "I began with small static pages, then built dynamic apps using React + Firebase. I enjoy learning backend basics so I can ship features end-to-end.",
  },
  {
    title: "What I Enjoy",
    text: "I love building polished interfaces, adding smooth animations, and improving accessibility. Solving layout and state challenges is my idea of fun.",
  },
  {
    title: "Hobbies & Interests",
    text: "Outside coding, I enjoy photography, cycling, and sketching UI ideas. I also follow community events and occasionally teach peers.",
  },
  {
    title: "Personality",
    text: "Curious, pragmatic, and collaborative — I enjoy teamwork, continuous learning, and growing through constructive feedback.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 
                 bg-custom/90 backdrop-blur-md text-custom relative 
                 bg-gradient-to-tr from-[#00110b] via-[#00221a] to-[#05221b]"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
          About Me
        </h2>
        <p className="text-custom text-lg">
          Hello — I&apos;m{" "}
          <span className="font-semibold text-primary drop-shadow-[0_0_8px_#ed80a8]">
            {USER.name}
          </span>
          . I build interactive, performance-driven, and visually appealing web
          experiences.
        </p>
      </motion.div>

      {/* Vertical Tree Container */}
      <div className="relative flex flex-col items-center space-y-20 w-full max-w-xl">
        {/* If you want trunk line uncomment this */}
        {/* <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-accent rounded-full shadow-[0_0_15px_#3de447] -translate-x-1/2"></div> */}

        {branches.map(({ title, text }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
            className={`relative w-80 
                        bg-custom/40 backdrop-blur-xl border-2 border-accent rounded-xl p-6
                        shadow-[0_0_20px_#3de447]
                        ${idx % 2 === 0 ? "self-start" : "self-end"}`}
          >
            <h3 className="text-2xl font-semibold mb-2 text-accent drop-shadow-[0_0_8px_#3de447]">
              {title}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
