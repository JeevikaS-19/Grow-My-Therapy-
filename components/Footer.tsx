import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-[#E0E5E9]">
      {/* Top Section: Navigation and Info */}
      <div className="pt-24 pb-20 px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Left: Logo and Contact Info */}
          <div className="flex flex-col">
            <h3
              onClick={() => navigate('/')}
              className="text-3xl md:text-5xl serif-font text-[#2D3339] font-medium tracking-tight mb-10 italic cursor-pointer hover:opacity-70 transition-opacity"
            >
              Dr. Maya Reynolds
            </h3>
            <div className="space-y-4 text-sm font-light text-[#2D3339]/70 leading-relaxed">
              <p>123 Wilshire Blvd, Santa Monica, CA 90401</p>
              <div className="mt-8 space-y-2">
                <p
                  onClick={() => navigate('/contact')}
                  className="underline underline-offset-8 decoration-[#4D5842]/30 hover:decoration-[#4D5842] transition-all cursor-pointer inline-block"
                >
                  email@example.com
                </p>
                <p className="underline underline-offset-8 decoration-[#4D5842]/30">(555) 555-5555</p>
              </div>
            </div>
          </div>

          {/* Right Group: Hours and Find */}
          <div className="flex flex-col md:flex-row gap-16 md:gap-48">
            <div className="min-w-[140px]">
              <h4 className="text-xl md:text-2xl serif-font mb-8 text-[#2D3339] font-medium tracking-tight">Hours</h4>
              <div className="text-sm font-light text-[#2D3339]/70 space-y-3">
                <p>Monday – Thursday</p>
                <p>9:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="min-w-[100px]">
              <h4 className="text-xl md:text-2xl serif-font mb-8 text-[#2D3339] font-medium tracking-tight">Find</h4>
              <nav className="flex flex-col gap-4 text-sm font-light text-[#2D3339]/70">
                <button onClick={() => navigate('/')} className="text-left border-b border-transparent hover:border-[#C28E7E] transition-all w-fit pb-0.5">Home</button>
                <button onClick={() => navigate('/contact')} className="text-left border-b border-transparent hover:border-[#C28E7E] transition-all w-fit pb-0.5">Contact</button>
                <button onClick={() => navigate('/blog')} className="text-left border-b border-transparent hover:border-[#C28E7E] transition-all w-fit pb-0.5">Blog</button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links and Credits */}
      <div className="bg-[#D1D9E0] py-16 px-10">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-[#2D3339]/60 font-medium">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
            <Link to="/privacy-policy" className="border-b border-[#2D3339]/20 hover:border-[#2D3339] transition-all pb-1">Privacy & Cookies Policy</Link>
            <Link to="/good-faith-estimate" className="border-b border-[#2D3339]/20 hover:border-[#2D3339] transition-all pb-1">Good Faith Estimate</Link>
            <Link to="/terms-and-conditions" className="border-b border-[#2D3339]/20 hover:border-[#2D3339] transition-all pb-1">Website Terms & Conditions</Link>
            <Link to="/disclaimer" className="border-b border-[#2D3339]/20 hover:border-[#2D3339] transition-all pb-1">Disclaimer</Link>
          </div>

          <div className="text-center">
            <span className="border-b border-[#2D3339]/20 pb-1">Practice Platform: <a href="https://www.gobloomcreative.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C28E7E] transition-colors">Go Bloom Creative</a></span>
          </div>

          <div className="mt-4 text-[10px] tracking-[0.15em] opacity-80 text-center">
            All Rights Reserved © 2024 Dr. Maya Reynolds Therapy, LLC.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;