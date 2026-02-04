
import React from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'blog' | 'contact') => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#FAF8F6]/80 backdrop-blur-md px-10 py-10 flex justify-between items-center transition-all duration-300">
      <div 
        onClick={() => onNavigate('home')}
        className="text-xl md:text-2xl serif-font tracking-tight font-medium text-[#4D5842] cursor-pointer hover:opacity-70 transition-opacity"
      >
        Lilac Template
      </div>
      <nav className="flex gap-10 text-[11px] uppercase tracking-[0.3em] font-medium text-[#333333]">
        <button 
          onClick={() => onNavigate('blog')}
          className={`hover:text-[#4D5842] transition-colors ${currentPage === 'blog' ? 'text-[#4D5842] border-b border-[#4D5842]' : ''}`}
        >
          Blog
        </button>
        <button 
          onClick={() => onNavigate('contact')}
          className={`hover:text-[#4D5842] transition-colors ${currentPage === 'contact' ? 'text-[#4D5842] border-b border-[#4D5842]' : ''}`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
