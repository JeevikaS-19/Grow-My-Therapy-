import React from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'blog' | 'contact') => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
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
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;