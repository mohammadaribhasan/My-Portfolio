import Image from "next/image";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiGithub,
  SiGit,
  SiExpress,
} from "react-icons/si";

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38b2ac" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#fff" },
      {
        name: "VS Code",
        icon: () => (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
            alt="VS Code"
            className="w-12 h-12"
            style={{ filter: "drop-shadow(0 0 5px #0078d7)" }}
          />
        ),
        color: "#0078d7",
      },
      { name: "Git", icon: SiGit, color: "#f05032" },
    ],
  },
];
