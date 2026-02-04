
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-48 pb-32 px-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <div className="w-full md:w-1/2 flex justify-center animate-fade-in order-2 md:order-1">
        <div className="relative w-full max-w-[420px] aspect-[3/4] arched-image overflow-hidden shadow-[0_30px_90px_-15px_rgba(0,0,0,0.12)]">
          <img 
            src="https://images.unsplash.com/photo-1550592704-6c76defa9985?auto=format&fit=crop&q=80&w=800" 
            alt="Soft Lilac aesthetic portrait" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-6xl md:text-[6.5rem] leading-[1.05] text-[#4D5842] mb-12 serif-font">
          Live your life<br />
          <span className="italic font-light">in full bloom</span>
        </h1>
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] font-light text-[#333333]/60 mb-16">
          Therapy for Adults in Minneapolis, MN.
        </p>
        <button className="border border-[#4D5842] px-16 py-5 text-[10px] uppercase tracking-[0.4em] font-medium hover:bg-[#4D5842] hover:text-[#FAF8F6] transition-all duration-700 ease-in-out">
          CONNECT WITH ME →
        </button>
      </div>
    </section>
  );
};

export default Hero;
