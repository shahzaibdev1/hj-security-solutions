"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "../mobile-menu/MobileMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "Careers", href: "/careers" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant/40 shadow-sm shadow-[#1b1c19]/04">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-5">
        <Link className="text-2xl font-headline-md font-bold text-primary tracking-tighter" href="#">
          HJ Security Solutions
        </Link>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                className={`relative pb-1 font-body-md text-sm font-medium active:scale-95 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-primary after:transition-transform after:duration-1000 after:ease-in-out after:origin-center ${
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "text-on-surface-variant hover:text-primary after:scale-x-0"
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <button className="hidden lg:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded text-sm font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors font-body-md">
          Request Quote
        </button>
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
