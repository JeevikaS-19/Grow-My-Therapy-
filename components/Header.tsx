import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // Scrolling down
          setIsVisible(false);
        } else { // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] bg-[#E0E5E9]/80 backdrop-blur-md px-10 py-10 flex justify-between items-center transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Link
        to="/"
        className="text-2xl md:text-3xl serif-font tracking-tight font-medium text-[#2D3339] cursor-pointer hover:opacity-70 transition-opacity"
      >
        Dr. Maya Reynolds
      </Link>
      <nav className="flex gap-10 text-[13px] uppercase tracking-[0.3em] font-bold text-[#2D3339]">
        <NavLink
          to="/blog"
          className={({ isActive }) => `hover:text-[#C28E7E] transition-colors ${isActive ? 'text-[#C28E7E] border-b-2 border-[#C28E7E]' : ''}`}
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `hover:text-[#C28E7E] transition-colors ${isActive ? 'text-[#C28E7E] border-b-2 border-[#C28E7E]' : ''}`}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;