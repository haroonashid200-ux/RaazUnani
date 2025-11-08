import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#0a0f0c]/90 backdrop-blur-md border-b border-[#FFD700]/20 shadow-[0_0_20px_rgba(255,215,0,0.15)] font-[JetBrains_Mono,monospace]">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-white tracking-wider transition-all duration-300 hover:text-[#FFD700] hover:drop-shadow-[0_0_15px_#FFD700]"
        >
          Raaz Unani Dawakhana
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-bold">
          <GlowLink to="/" end>
            Home
          </GlowLink>
          <GlowLink to="/about">About</GlowLink>
          <GlowLink to="/treatments">Treatments</GlowLink>
          <GlowLink to="/gallery">Gallery</GlowLink>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function GlowLink({ to, end, children }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        isActive
          ? "text-[#FFD700] font-bold drop-shadow-[0_0_15px_#FFD700]"
          : "text-white font-bold hover:text-[#FFD700] hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300"
      }
    >
      {children}
    </NavLink>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative font-[JetBrains_Mono,monospace]">
      {/* Hamburger / Close button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white hover:text-[#FFD700] hover:drop-shadow-[0_0_12px_#FFD700] transition-all duration-300"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 py-4 px-5 bg-[#0a0f0c] rounded-xl shadow-lg w-56 border border-[#FFD700]/20 animate-fadeIn text-lg font-bold">
          {["Home", "About", "Treatments", "Gallery"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={handleClose}
              className="block py-2 text-white hover:text-[#FFD700] hover:drop-shadow-[0_0_12px_#FFD700] transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
