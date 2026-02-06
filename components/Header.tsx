<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
=======
import React from 'react';
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c

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
<<<<<<< HEAD
    <header className={`fixed top-0 left-0 w-full z-[100] bg-[#FAF8F6]/80 backdrop-blur-md px-10 py-10 flex justify-between items-center transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Link
        to="/"
        className="text-2xl md:text-3xl serif-font tracking-tight font-medium text-[#4D5842] cursor-pointer hover:opacity-70 transition-opacity"
      >
        Lilac Template
      </Link>
      <nav className="flex gap-10 text-[13px] uppercase tracking-[0.3em] font-medium text-[#333333]">
        <NavLink
          to="/blog"
          className={({ isActive }) => `hover:text-[#4D5842] transition-colors ${isActive ? 'text-[#4D5842] border-b border-[#4D5842]' : ''}`}
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `hover:text-[#4D5842] transition-colors ${isActive ? 'text-[#4D5842] border-b border-[#4D5842]' : ''}`}
=======
    <header className="absolute top-0 left-0 w-full z-[100] px-8 md:px-16 py-10 flex justify-between items-end">
      <div 
        onClick={() => onNavigate('home')}
        className="text-2xl md:text-[34px] serif-font tracking-tight text-[#4D5842] cursor-pointer hover:opacity-70 transition-opacity font-medium leading-none"
      >
        Lilac Template
      </div>
      <nav className="flex gap-8 md:gap-14 text-[15px] font-normal text-[#333333] leading-none mb-1">
        <button 
          onClick={() => onNavigate('blog')}
          className={`hover:opacity-60 transition-opacity ${currentPage === 'blog' ? 'text-[#4D5842]' : ''}`}
        >
          Blog
        </button>
        <button 
          onClick={() => onNavigate('contact')}
          className={`hover:opacity-60 transition-opacity ${currentPage === 'contact' ? 'text-[#4D5842]' : ''}`}
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;