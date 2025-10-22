"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-teal-600">
          LOKA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Listings", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className={`${
                path ===
                `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`
                  ? "text-teal-600"
                  : "text-gray-700"
              } hover:text-teal-600 font-medium transition`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 border border-teal-300 rounded-lg text-teal-600"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          {["Home", "Listings", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="block text-teal-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
