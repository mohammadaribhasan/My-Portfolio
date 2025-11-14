"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Define the Project type
interface Project {
  id: string;
  name: string;
  description: string;
  challenges: string;
  improvements: string;
  image: string;
  stack: string[];
  live: string;
  clientRepo: string;
}

interface ProjectDetailProps {
  projects: Project[];
}

export default function ProjectDetail({ projects }: ProjectDetailProps) {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const project = projects.find((p) => p.id === params?.id);

  if (!project) {
    return (
      <div className="p-8 text-center text-red-500 font-semibold">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => router.back()}
          className="text-sm underline text-green-400 hover:text-green-500"
        >
          ← Back
        </button>

        <div className="mt-4 bg-gray-900/60 p-6 rounded-xl border border-green-500 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://via.placeholder.com/800x400?text=Project+Image";
                }}
              />
              <h1 className="mt-4 text-2xl font-bold text-green-400">
                {project.name}
              </h1>
              <p className="mt-3 text-gray-300">{project.description}</p>

              <div className="mt-6">
                <h4 className="font-semibold text-green-400">
                  Challenges Faced
                </h4>
                <p className="text-sm mt-2 text-gray-300">
                  {project.challenges}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-green-400">
                  Potential Improvements & Future Plans
                </h4>
                <p className="text-sm mt-2 text-gray-300">
                  {project.improvements}
                </p>
              </div>
            </div>

            <aside className="p-4 bg-gray-800/70 rounded-xl border border-green-500">
              <h4 className="font-semibold text-green-400">Tech Stack</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="inline-block px-3 py-1 rounded-full border border-green-500 text-xs text-green-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center px-3 py-2 rounded-md bg-green-500 text-black font-semibold hover:bg-green-600 transition"
                >
                  View Live
                </a>
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center px-3 py-2 rounded-md border border-green-500 text-green-300 hover:bg-green-700 transition"
                >
                  View GitHub (Client)
                </a>
              </div>
            </aside>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
