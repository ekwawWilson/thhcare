"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/who-we-serve", label: "Who We Serve" },
    { href: "/appointments", label: "Appointments" },
    { href: "/careers", label: "Careers" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-32 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center relative mx-auto lg:mx-0"
          >
            {/* Logo - floats with container on all screens */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 h-36 w-[13.5rem] md:-top-16 md:h-44 md:w-[18rem] lg:-top-10 lg:left-0 lg:translate-x-0 lg:h-32 lg:w-36 bg-white rounded-lg shadow-2xl border-primary-200 overflow-hidden transform hover:scale-105 transition-transform duration-300 z-10">
              <Image
                src="/images/logolon2.jpg"
                alt="Transformation Home Health LLC"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
            {/* Spacer to prevent overlap with nav items */}
            <div className="w-[13.5rem] md:w-[18rem] lg:w-36 h-1"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 absolute right-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
