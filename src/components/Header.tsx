"use client";

import { useState } from "react";
import { Phone, Menu, Car, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Početna", href: "/" },
    { name: "Usluge", href: "/services" },
    { name: "Vozni park", href: "/fleet" },
    { name: "Cjenik", href: "/pricing" },
    { name: "Kontakt", href: "/contact" },
  ];

  const text = {
    companyName: "TAXI PRINC",
    slogan: "24/7 Brza vožnja",
    phoneNumber: "+385 95 569 0132",
    phoneLink: "+385955690132",
    whatsappNumber: "+385955690132",
    whatsappMessage: "Pozdrav, trebam taxi!",
    Info: "Dostupni 24/7",
  };

  // Generira WhatsApp link
  const whatsappLink = `https://wa.me/${
    text.whatsappNumber
  }?text=${encodeURIComponent(text.whatsappMessage)}`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            onClick={closeMenu}
          >
            <div className="bg-yellow-500 p-2 rounded-lg">
              <Car className="h-8 w-8 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-yellow-500">
                {text.companyName}
              </h1>
              <p className="text-sm text-gray-300">{text.slogan}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-yellow-500 transition-colors duration-300 font-medium ${
                  pathname === item.href ? "text-yellow-500" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-bold"
              title="Pišite nam na WhatsApp"
            >
              <Image
                src="/icon/whatsapp.png"
                width={48}
                height={48}
                alt="Whatsapp"
              />

              <span>{text.phoneNumber}</span>
            </a>

            {/* Phone Button */}
            <a
              href={`tel:${text.phoneLink}`}
              className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-bold"
              title="Nazovite nas"
            >
              <Phone className="h-5 w-5" />
              <span>{text.phoneNumber}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-8 w-8 text-yellow-500" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? " opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-3 py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`py-3 px-4 rounded-lg text-lg font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "bg-yellow-500 text-black"
                    : "hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact Buttons in Mobile Menu */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300"
              >
              <Image
                src="/icon/whatsapp.png"
                width={32}
                height={32}
                alt="Whatsapp"
              />
                <span className="text-lg">{text.whatsappNumber}</span>
              </a>

              {/* Phone Button */}
              <a
                href={`tel:${text.phoneLink}`}
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg">{text.phoneNumber}</span>
              </a>

              {/* Working Hours Info */}
              <p className="text-center text-gray-400 text-sm mt-2">
                {text.Info}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
