"use client";

import { FiPhone, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <section id="contact" className="w-full mt-20 text-white">
      <div className="max-w-5xl mb-12">
        <h2 className="text-4xl font-extrabold text-green-400 drop-shadow-lg">
          Other Ways To Contact Me
        </h2>
        <p className="text-gray-300 mt-2">
          Feel free to reach out anytime — I’m always open to new opportunities!
        </p>
      </div>

      {/* Glass Card */}
      <div
        className="
        max-w-4xl mx-auto 
        backdrop-blur-xl bg-white/10 
        border border-white/20 
        rounded-2xl shadow-2xl 
        p-10 sm:p-14 
        space-y-8
      "
      >
        {/* Phone */}
        <a
          href="tel:+8801859068689"
          className="flex items-center gap-5 text-xl group"
        >
          <div
            className="p-3 rounded-xl bg-green-400/20 backdrop-blur-md 
              border border-green-400/30 group-hover:bg-green-400/30 transition"
          >
            <FiPhone className="text-green-400 text-3xl" />
          </div>
          <span className="group-hover:text-green-400 transition">
            +880 1859068689
          </span>
        </a>

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mdaribhasan00@gmail.com&body=Hi%20Arib,"
          target="_blank"
          className="flex items-center gap-5 text-xl group"
        >
          <div
            className="p-3 rounded-xl bg-green-400/20 backdrop-blur-md 
      border border-green-400/30 group-hover:bg-green-400/30 transition"
          >
            <FiMail className="text-green-400 text-3xl" />
          </div>
          <span className="group-hover:text-green-400 transition">
            mdaribhasan00@gmail.com
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/mohammadaribhasan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 text-xl group"
        >
          <div
            className="p-3 rounded-xl bg-green-400/20 backdrop-blur-md 
              border border-green-400/30 group-hover:bg-green-400/30 transition"
          >
            <FaGithub className="text-green-400 text-3xl" />
          </div>
          <span className="group-hover:text-green-400 transition">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/mohammadaribhasan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 text-xl group"
        >
          <div
            className="p-3 rounded-xl bg-green-400/20 backdrop-blur-md 
              border border-green-400/30 group-hover:bg-green-400/30 transition"
          >
            <FaLinkedin className="text-green-400 text-3xl" />
          </div>
          <span className="group-hover:text-green-400 transition">
            LinkedIn
          </span>
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/mdaribhasan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 text-xl group"
        >
          <div
            className="p-3 rounded-xl bg-green-400/20 backdrop-blur-md 
              border border-green-400/30 group-hover:bg-green-400/30 transition"
          >
            <FaTwitter className="text-green-400 text-3xl" />
          </div>
          <span className="group-hover:text-green-400 transition">
            X (Twitter)
          </span>
        </a>
      </div>
    </section>
  );
}
