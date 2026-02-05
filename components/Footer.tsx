import React from 'react';

interface Props {
  onNavigate: (page: 'home' | 'blog' | 'contact') => void;
}

const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#FAF8F6] pt-32 pb-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="flex flex-col">
            <h3 
              onClick={() => onNavigate('home')}
              className="text-3xl md:text-5xl serif-font text-[#4D5842] font-light mb-10 italic cursor-pointer hover:opacity-70 transition-opacity"
            >
              Lilac Template
            </h3>
            <div className="space-y-3 text-sm font-light text-[#333333]/60 leading-relaxed">
              <p>123 Example Road<br />Minneapolis, MN</p>
              <p 
                onClick={() => onNavigate('contact')}
                className="underline underline-offset-4 hover:text-[#4D5842] transition-all cursor-pointer"
              >
                email@example.com
              </p>
              <p>555-555-5555</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl md:text-2xl serif-font mb-10 text-[#4D5842] font-light">Hours</h4>
            <div className="text-sm font-light text-[#333333]/60 space-y-2">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl serif-font mb-10 text-[#4D5842] font-light">Find</h4>
            <nav className="flex flex-col gap-4 text-sm font-light text-[#333333]/60">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-[#4D5842] transition-colors">Home</button>
              <button onClick={() => onNavigate('contact')} className="text-left hover:text-[#4D5842] transition-colors">Contact</button>
              <button onClick={() => onNavigate('blog')} className="text-left hover:text-[#4D5842] transition-colors">Blog</button>
            </nav>
          </div>
        </div>

        <div className="border-t border-[#4D5842]/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.2em] text-[#333333]/40">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-[#4D5842] transition-colors">Privacy & Cookies Policy</a>
            <a href="#" className="hover:text-[#4D5842] transition-colors">Good Faith Estimate</a>
            <a href="#" className="hover:text-[#4D5842] transition-colors">Website Terms & Conditions</a>
            <a href="#" className="hover:text-[#4D5842] transition-colors">Disclaimer</a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <p>Website Template Credits: <span className="text-[#4D5842]">Go Bloom Creative</span></p>
            <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;