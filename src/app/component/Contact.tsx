"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-tr from-[#00110b] via-[#00221a] to-[#05221b] text-white px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-green-400 mb-8">Contact Me</h2>
        <ContactForm />
        <ContactDetails />
      </motion.div>
    </section>
  );
}
