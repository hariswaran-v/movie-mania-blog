import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Copyright */}
        <div className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()}&nbsp;
          <span className="font-semibold text-white">MovieManiaBlog</span>
          .&nbsp; All rights reserved by{" "}
          <span className="text-blue-400 font-medium">Hariswaran</span>.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://www.linkedin.com/in/hariswaran-venkatesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hariswaran-v"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/hariswaran.venkatesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
