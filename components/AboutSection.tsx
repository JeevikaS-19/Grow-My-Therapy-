
import React from 'react';

interface Props {
  onNavigate: () => void;
}

const AboutSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-10 bg-[#E0E5E9] max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-24 md:gap-32">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-[4.5rem] serif-font mb-8 text-[#2D3339] font-light leading-tight">Grounded in Science, Led by Empathy.</h2>
        <div className="space-y-8 text-[#2D3339]/80 font-light leading-[1.8] text-lg max-w-lg mb-12">
          <p>
            Hi, I’m Dr. Maya Reynolds. I work with entrepreneurs, creatives, and professionals in Santa Monica who are tired of just "getting through the day." My approach is collaborative and no-nonsense. We won't just sit and talk about your childhood for years; we will look at the physiological and psychological patterns keeping you stuck today, so you can start living with intention again.
          </p>
        </div>
        <button
          onClick={onNavigate}
          className="px-12 py-5 bg-[#C28E7E] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#2D3339] transition-all duration-500 rounded-sm shadow-sm"
        >
          LET'S CHAT →
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center py-20">
        <div className="relative">
          {/* Main Arched Frame */}
          <div className="w-[380px] md:w-[450px] aspect-[4.5/6.5] arched-image overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] relative z-10 bg-[#E8E2D9] border border-[#2D3339]/10 flex items-center justify-center">
            <span className="text-6xl text-[#2D3339]/20 serif-font italic font-light">img7</span>
          </div>

          {/* Overlapping Circle Frame */}
          <div className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-20 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[15px] md:border-[24px] border-[#E0E5E9] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 bg-[#E8E2D9] flex items-center justify-center">
            <span className="text-4xl text-[#2D3339]/20 serif-font italic font-light">img8</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
