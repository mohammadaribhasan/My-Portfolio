"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type EducationItem = {
  id: number;
  title: string;
  year: string;
  description: string[];
  note?: string;
  initialX: number;
  delay: number;
};

const education: EducationItem[] = [
  {
    id: 1,
    title: "Higher Secondary Certificate (Science)",
    year: "2024",
    description: [
      "Completed HSC with a Science background, focusing on Physics, Chemistry, Biology, and Mathematics. Developed strong analytical and problem-solving skills during this period.",
      "Actively participated in science fairs and projects, nurturing my passion for technology and programming.",
    ],
    initialX: -40,
    delay: 0.15,
  },
  {
    id: 2,
    title: "Programming Hero Level 1 Course",
    year: "2025",
    description: [
      "Completed Level 1 course from Programming Hero, covering fundamentals of programming, JavaScript , HTML & CSS, and React.",
      "Gained hands-on experience building projects and interactive web pages. Strengthened skills in responsive design and component-based UI development.",
    ],
    note: "Certificate",
    initialX: 40,
    delay: 0.35,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-tr from-[#00110b] via-[#00221a] to-[#05221b] text-white px-6 flex justify-center"
    >
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-green-400 mb-10">Education</h2>

        {education.map((item) => (
          <motion.div
            key={item.id}
            className="mb-10 border-l-4 border-green-400 pl-6"
            initial={{ opacity: 0, x: item.initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: item.delay, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
            <span className="text-green-400 font-semibold">{item.year}</span>
            {item.description.map((line, idx) => (
              <p key={idx} className="mt-2 text-gray-300 leading-relaxed">
                {line}
              </p>
            ))}
            {item.note && (
              <Link
                href={
                  "https://drive.google.com/file/d/1SwDnSjLdy_QXBtmE4COGCnC0IwAJ0Yn9/view?usp=sharing"
                }
                target="_blank"
                className="mt-3 text-green-400 font-semibold italic hover:underline inline-block transform transition hover:scale-105"
              >
                {item.note}
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
