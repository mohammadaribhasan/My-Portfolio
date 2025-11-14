"use client"; // শুধু future এ hooks ব্যবহার করলে দরকার হবে

import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-center text-gray-400">
      © {new Date().getFullYear()} Mohammad Arib Hasan. All rights reserved.
    </footer>
  );
}
