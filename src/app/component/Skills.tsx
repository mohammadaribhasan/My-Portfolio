"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React from "react";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGithub,
  SiGit,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiFirebase,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode; // ✅ FIX
};

const skillsList: Skill[] = [
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-300" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "VS Code", icon: <>💻</> },
  { name: "Vercel", icon: <>🚀</> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "Framer Motion", icon: <>✨</> },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const createTreeRows = (): Skill[][] => {
    const rows: Skill[][] = [];
    let index = 0,
      rowLength = 1;
    while (index < skillsList.length) {
      rows.push(skillsList.slice(index, index + rowLength));
      index += rowLength;
      rowLength++;
    }
    return rows;
  };

  const rows = createTreeRows();

  return (
    <section
      ref={ref}
      id="skills"
      className="min-h-screen bg-gradient-to-br from-[#00110b] via-[#00221a] to-[#05221b] text-white relative overflow-hidden px-4"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-6 left-6 text-3xl sm:text-4xl font-bold text-green-400"
      >
        Skills
      </motion.div>

      <div className="flex flex-col mb-5 items-center justify-center gap-10 sm:gap-12 relative flex-1 pt-20">
        {/* Branch SVG */}
        <svg
          className="absolute w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {rows.map((row, rowIndex) => {
            if (rowIndex === rows.length - 1) return null;
            const nextRow = rows[rowIndex + 1];
            return row.map((_, i) => {
              const startX = (100 / (row.length + 1)) * (i + 1);
              return nextRow.map((__, j) => {
                const endX = (100 / (nextRow.length + 1)) * (j + 1);
                return (
                  <path
                    key={`${rowIndex}-${i}-${j}`}
                    d={`M ${startX}% ${(rowIndex * 100) / (rows.length - 1)}%
                       C ${startX}% ${
                      ((rowIndex + 0.5) * 100) / (rows.length - 1)
                    }%,
                         ${endX}% ${
                      ((rowIndex + 0.5) * 100) / (rows.length - 1)
                    }%,
                         ${endX}% ${
                      ((rowIndex + 1) * 100) / (rows.length - 1)
                    }%`}
                    stroke="#00ff88"
                    strokeWidth="3"
                    strokeOpacity="0.6"
                    fill="none"
                    style={{ filter: "drop-shadow(0 0 4px #00ff88)" }}
                  />
                );
              });
            });
          })}
        </svg>

        {/* Tree Layout */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6 sm:gap-8">
            {row.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={inView ? { x: 0, y: 0, scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: (rowIndex + index) * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                className="flex flex-col items-center text-center"
                style={{ transformOrigin: "center" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                  }}
                  className="text-3xl sm:text-4xl p-3 rounded-full border-2 border-green-400 shadow-[0_0_15px_#00ff88]"
                >
                  {skill.icon}
                </motion.div>
                <p className="text-xs sm:text-sm mt-1">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
