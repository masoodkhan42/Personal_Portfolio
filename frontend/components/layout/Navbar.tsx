"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" }
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("About");

  return (
    <header className="w-full bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl text-gray-900 tracking-tight">
          <span>Muhamad Masood</span>
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 inline-block" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`relative py-1 text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500 hover:text-gray-900 font-medium"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Contact Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-sm"
          >
            <span>Contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

         
         
        </div>
      </div>
    </header>
  );
}