"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "about", href: "/" },
    { name: "lab", href: "/lab" },
    { name: "hiring", href: "/hiring" },
    { name: "teaching", href: "/teaching" },
    { name: "talks/podcasts", href: "/talks" },
    { name: "publications", href: "/publications" },
  ];

  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            Toggle navigation
          </button>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-primary no-underline hover:underline ${
                  index === 0 ? "font-semibold" : ""
                }`}
              >
                {item.name}
                {index === 0 && " (current)"}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-gray-700 hover:text-primary no-underline hover:underline ${
                  index === 0 ? "font-semibold" : ""
                }`}
              >
                {item.name}
                {index === 0 && " (current)"}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

