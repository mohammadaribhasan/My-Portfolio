"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Project = {
  id: string;
  name: string;
  image: string;
  stack: string[];
  description: string;
  live: string;
  clientRepo: string;
  challenges: string;
  improvements: string;
};

const PROJECTS: Project[] = [
  {
    id: "ServeCicle",
    name: "ServCicle — Volunteer Platform",
    image: "https://i.ibb.co.com/Nn6ZbwJt/11.png",
    stack: ["React", "Tailwind", "Express", "Firebase Auth", "MongoDB"],
    description:
      "An event creation and joining platform with past-event archival, filters, and user dashboards. I focused on UX for mobile-first interactions.",
    live: "https://assignment-11-2e54a.web.app/",
    clientRepo: "https://github.com/mohammadaribhasan/ServeCircle-client",
    challenges:
      "Ensuring data integrity when moving past events and preventing duplicate joins.",
    improvements: "Add calendar sync.",
  },
  {
    id: "JobTrack",
    name: "JobTrack — Job Listing Platform",
    image: "https://i.ibb.co.com/bRD9TJSd/12.png",
    stack: ["React", "Tailwind", "Firebase Auth", "Express", "MongoDB"],
    description:
      "A job listing and application platform with company dashboards, dynamic routes, admin permission, comment report, admin review, and role-based access. Built with responsiveness and accessibility in mind.",
    live: "https://assignment-12-1f976.web.app/",
    clientRepo: "https://github.com/mohammadaribhasan/jobtreck-client",
    challenges:
      "Handling authentication state across routes, pagination in lists, and optimizing image-heavy pages.",
    improvements:
      "Add admin role management, more robust search, and interview scheduling.",
  },
  {
    id: "TaskCrowd",
    name: "TaskCrowd — Hiring platform",
    image: "https://i.ibb.co.com/qMCfcjh4/10.png",
    stack: ["React", "Tailwind", "Firebase Auth", "Express", "MongoDB"],
    description:
      "A job hiring and application platform with company dashboards, dynamic routes, and role-based access. Built with responsiveness and accessibility in mind.",
    live: "https://assaignment-10-e8240.web.app/",
    clientRepo:
      "https://github.com/mohammadaribhasan/finance-task-marketplace-client?tab=readme-ov-file",
    challenges:
      "Handling authentication state across routes, pagination in lists, and optimizing image-heavy pages.",
    improvements:
      "Add server-side rendering for better SEO, more robust search, and interview scheduling.",
  },
];

export default function ProjectList() {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-[#00110b] via-[#00221a] to-[#05221b] text-white px-6 relative"
    >
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-semibold text-green-400 mb-12">
          Projects
        </h2>

        <div className="flex flex-col items-center space-y-20 relative">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: idx * 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
              className={`relative w-80 bg-gray-900 border border-green-500 rounded-xl shadow-[0_0_20px_#3de447] p-6 ${
                idx % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              {/* Connector line */}
              <motion.span
                className="absolute top-1/2 h-1 bg-green-500 rounded"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: idx % 2 === 0 ? "100%" : "auto",
                  right: idx % 2 !== 0 ? "100%" : "auto",
                  width: 0,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: "48px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={250}
                className="w-full rounded mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/projects/${project.id}`)}
                  className="inline-block bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded font-semibold text-black"
                >
                  View Details
                </button>
                <Link
                  href={project.live}
                  target="_blank"
                  className="inline-block bg-gray-700 hover:bg-gray-600 transition px-4 py-2 rounded font-semibold text-white"
                >
                  Live Site
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
