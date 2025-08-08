import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Film, Linkedin, Github, Instagram, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("kollywood");
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Kollywood", path: "kollywood" },
    { name: "Mollywood", path: "mollywood" },
    { name: "Hollywood", path: "hollywood" },
    { name: "Anime", path: "anime" },
    { name: "Web Series", path: "webseries" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hariswaran-venkatesh/",
      hoverColor: "hover:text-blue-500",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/hariswaran-v",
      hoverColor: "hover:text-gray-300",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/hariswaran.venkatesh/",
      hoverColor: "hover:text-pink-500",
      label: "Instagram",
    },
  ];

  const handleNavClick = (path) => {
    setActiveLink(path);
    navigate(`/${path}`);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <Film className="text-red-500 w-8 h-8 group-hover:text-red-400 transition-colors duration-300" />
              <div className="absolute -inset-1 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                MovieMania
              </span>
              <div className="text-xs text-gray-400 font-medium tracking-wider">
                BLOG
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                  activeLink === item.path
                    ? "text-red-400 bg-red-500/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-white/5 ${social.hoverColor} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-700/50">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeLink === item.path
                    ? "text-red-400 bg-red-500/10 border-l-4 border-red-500"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700/50 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white/5 ${social.hoverColor} transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
