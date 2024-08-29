// src/components/NavBar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu open/close

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <nav className="h-[140px] w-full flex justify-between items-center p-6 bg-body text-font relative">
      <div className="text-xl font-bold">
        <Link to="/">
          <img src="/assets/kevin_logo.png" alt="Kevin Logo" className="h-32 md:h-64 w-auto" />
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6 text-font"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex items-center space-x-8 mr-10">
        <Link
          to="/"
          className={`font-bold mr-0 ${selected === '/' ? 'text-primary underline' : 'text-font'}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`font-bold ${selected === '/about' ? 'text-primary underline' : 'text-font'} mr-8`}
          >
          About
        </Link>
        <a
          href="https://wa.me/972533045773"
          className="font-bold text-white bg-primary px-4 py-2 rounded hover:bg-hoverContact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>

      {/* Side Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-body text-font transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button onClick={() => setMenuOpen(false)} className="flex items-center justify-end p-4">
          {/* Close Icon */}
          <svg
            className="w-6 h-6 text-font"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className={`font-bold ${selected === '/' ? 'text-primary underline' : 'text-font'}`}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-bold ${selected === '/about' ? 'text-primary underline' : 'text-font'}`}
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            About
          </Link>
          <a
            href="https://wa.me/972533045773"
            className="font-bold text-white bg-primary px-4 py-2 rounded hover:bg-hoverContact w-max"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
