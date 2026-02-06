import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-10 pb-16 px-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
      <div className="w-full md:w-1/2 flex justify-center animate-fade-in order-2 md:order-1">
        <div className="relative w-full max-w-[480px] aspect-[4/6] arched-image overflow-hidden shadow-[0_30px_90px_-15px_rgba(0,0,0,0.12)] bg-[#E8E2D9] border border-[#4D5842]/10 flex items-center justify-center text-center">
          <span className="text-4xl text-[#4D5842]/20 serif-font italic">img1</span>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-3xl md:text-[4.5rem] serif-font text-[#4D5842] leading-[1.1] mb-8 italic font-light">
          Live your life <br />
          in full bloom
        </h1>
        <p className="text-lg md:text-xl font-light text-[#333333]/70 mb-12 tracking-wide">
          Therapy for Adults in Minneapolis, MN.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="px-10 py-4 border border-[#4D5842]/30 text-[9px] uppercase tracking-[0.4em] font-semibold text-[#4D5842] hover:bg-[#4D5842] hover:text-white transition-all duration-500 rounded-sm">
            CONNECT WITH ME →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;