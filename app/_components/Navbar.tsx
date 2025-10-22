"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // `event.target` can be any kind of node, so we cast it to Node for safety
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => setIsOpen(false);

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
        <div
          ref={menuRef}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4"
        >
          {["Home", "Listings", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              onClick={handleLinkClick}
              className={`${
                path ===
                `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`
                  ? "text-teal-600"
                  : "text-gray-700"
              } hover:text-teal-600 block font-medium transition`}
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
