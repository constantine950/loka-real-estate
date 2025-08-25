"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-600">LOKA</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-800 font-medium">
            Home
          </Link>
          <Link href="/listings" className="text-teal-600 font-medium">
            Listings
          </Link>
          <Link href="/property" className="text-teal-600 font-medium">
            Property
          </Link>
          <Link href="/gallery" className="text-teal-600 font-medium">
            Gallery
          </Link>
          <Link href="/blog" className="text-teal-600 font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-teal-600 font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-8 h-8 text-teal-600 border border-teal-300" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          <Link href="/" className="block text-teal-600">
            Home
          </Link>
          <Link href="/listings" className="block text-teal-600">
            Listings
          </Link>
          <Link href="/property" className="block text-teal-600">
            Property
          </Link>
          <Link href="/gallery" className="block text-teal-600">
            Gallery
          </Link>
          <Link href="/blog" className="block text-teal-600">
            Blog
          </Link>
          <Link href="/contact" className="block text-teal-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
