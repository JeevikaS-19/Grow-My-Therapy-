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
        <h1 className="text-3xl md:text-[4.5rem] md:text-[5.5rem] serif-font text-[#2D3339] leading-[1.1] mb-8 font-light">
          Find Your <br />
          Steady Ground
        </h1>
        <p className="text-lg md:text-xl font-light text-[#2D3339]/80 mb-12 tracking-wide leading-relaxed max-w-xl">
          Anxiety and Trauma Therapy in Santa Monica for high-achieving adults who feel functional on the outside but internally exhausted.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="px-10 py-5 bg-[#C28E7E] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#2D3339] transition-all duration-500 rounded-sm shadow-sm">
            CONNECT WITH ME →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;