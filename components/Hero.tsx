import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-10 pb-16 px-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-32">
      <div className="w-full md:w-1/2 flex justify-center animate-fade-in order-2 md:order-1">
        <div className="relative w-full max-w-[480px] aspect-[4/6] arched-image overflow-hidden shadow-[0_30px_90px_-15px_rgba(0,0,0,0.12)] bg-white border border-[#2c3f70]/5">
          <img
            src="/assets/images/img_1.jpg"
            alt="Dr. Maya Reynolds Practice"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in order-1 md:order-2" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-4xl md:text-6xl serif-font text-[#2c3f70] leading-[1.1] mb-8 font-bold tracking-[-0.01em]">
          Find Your <br />
          Steady Ground
        </h1>
        <p className="text-lg md:text-xl font-normal text-[#2c3f70]/80 mb-12 tracking-wide leading-relaxed max-w-xl">
          Anxiety and trauma therapy in Santa Monica for high-achieving adults who feel functional on the outside while quietly struggling with overthinking, tension, or a sense of always bracing for what’s next.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="px-10 py-5 bg-[#a5231c] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#8e1e18] hover:scale-105 transition-all duration-500 rounded-sm shadow-lg">
            CONNECT WITH ME →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;