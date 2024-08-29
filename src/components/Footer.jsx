// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="w-full bg-body text-font py-4 flex flex-col md:flex-row items-center justify-between px-6">
      {/* Left side: Text */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p>Copyright © 2024 ∙ Kevin Chami</p>
        <div className="flex justify-center md:justify-start space-x-4 mt-2">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Right side: Icons */}
      <div className="flex space-x-4">
        <a href="https://github.com/kevinchami" target="_blank" rel="noopener noreferrer" className="text-font hover:text-primary">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kevinchami" target="_blank" rel="noopener noreferrer" className="text-font hover:text-primary">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:kevin.chami98@gmail.com" className="text-font hover:text-primary">
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
