import jobTrack from "../../public/job-track.png";
import serveCircle from "../../public/serve-circle.png";
import taskCrowd from "../../public/task-crowd.png";

export const PROJECTS = [
  {
    id: "ServeCicle",
    name: "ServCicle — Volunteer Platform",
    image: serveCircle,
    stack: ["React", "Tailwind", "Express", "Firebase Auth", "MongoDB"],
    description:
      "An event creation and joining platform with past-event archival, filters, and user dashboards. I focused on UX for mobile-first interactions.",
    live: "https://assignment-11-2e54a.web.app/",
    clientRepo: "https://github.com/mohammadaribhasan/ServeCircle-client",
    challenges:
      "Ensuring data integrity when moving past events and preventing duplicate joins.",
    improvements: "Add calendar sync .",
  },
  {
    id: "JobTrack",
    name: "JobTrack — Job Listing Platform",
    image: jobTrack,
    stack: ["React", "Tailwind", "Firebase Auth", "Express", "MongoDB"],
    description:
      "A job listing and application platform with company dashboards, dynamic routes admin permission , comment report ,admin review , and role-based access. Built with responsiveness and accessibility in mind.",
    live: "https://assignment-12-1f976.web.app/",
    clientRepo: "https://github.com/mohammadaribhasan/jobtreck-client",
    challenges:
      "Handling authentication state across routes, pagination in lists, and optimizing image-heavy pages.",
    improvements:
      "Add admin , make admin, admin role, more robust search, and interview scheduling.",
  },
  {
    id: "TaskCrowd",
    name: "TaskCrowd — Hiring platform",
    image: taskCrowd,
    stack: ["React", "Tailwind", "Firebase Auth", "Express", "MongoDB"],
    description:
      "A job hiring and application platform with company dashboards, dynamic routes, and role-based access. Built with responsiveness and accessibility in mind.",
    live: "https://assaignment-10-e8240.web.app/",
    clientRepo:
      "https://github.com/mohammadaribhasan/finance-task-marketplace-client?tab=readme-ov-file",
    challenges:
      "Handling authentication state across routes, pagination in lists, and optimizing image-heavy pages.",
    improvements:
      "Add server-side rendering for, more robust search, and interview scheduling.",
  },
];
