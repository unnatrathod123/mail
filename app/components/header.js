"use client";

import Link from "next/link";
import { useState } from "react";
import ContactPage from "@/app/contact/page"
import AboutPage from "@/app/about/page"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Vinayak Venture
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-400 transition"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-3 text-sm">
          <Link
            href="/"
            className="block hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block hover:text-blue-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
