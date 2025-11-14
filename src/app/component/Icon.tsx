import React from "react";

type IconName = "menu" | "github" | "linkedin";

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({
  name,
  className = "w-5 h-5 inline-block",
}: IconProps) {
  switch (name) {
    case "menu":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      );

    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0.5C5.73 0.5 0.5 5.73 0.5 12.02c0 5.12 3.29 9.46 7.86 10.99.58.1.79-.25.79-.55v-2.16c-3.2.69-3.87-1.39-3.87-1.39-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.68 5.41-5.24 5.69.41.36.77 1.07.77 2.16v3.21c0 .3.21.66.8.55a11.52 11.52 0 0 0 7.86-10.99C23.5 5.73 18.27 0.5 12 0.5z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v14h-4v-14zM8.5 8.5h3.83v1.9h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05v8.1h-4v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8v7.34h-4v-14z" />
        </svg>
      );

    default:
      return null;
  }
}
