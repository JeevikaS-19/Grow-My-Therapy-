
import React from 'react';

interface Props {
  onNavigate: () => void;
}

const AboutSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-10 bg-[#e8ebed] max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-24 md:gap-32">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-6xl serif-font mb-8 text-[#2c3f70] font-bold leading-tight">Grounded in Science, Led by Empathy.</h2>
        <div className="space-y-8 text-[#2c3f70]/80 font-normal leading-[1.8] text-lg max-w-lg mb-12">
          <p>
            Hi, I’m Dr. Maya Reynolds. I work with entrepreneurs, creatives, and professionals in Santa Monica who are tired of just "getting through the day." My approach is collaborative and no-nonsense. We won't just sit and talk about your childhood for years; we will look at the physiological and psychological patterns keeping you stuck today, so you can start living with intention again.
          </p>
        </div>
        <button
          onClick={onNavigate}
          className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2c3f70] hover:text-[#a5231c] hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          LET'S CHAT →
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center py-20">
        <div className="relative">
          {/* Main Arched Frame */}
          <div className="w-full md:w-[450px] aspect-[4.5/6.5] arched-image overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] relative z-10 bg-white border border-[#2c3f70]/5">
            <img
              src="/assets/images/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Circle Frame */}
          <div className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-20 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[15px] md:border-[24px] border-[#e8ebed] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 bg-white flex items-center justify-center">
            <img
              src="/assets/images/img_8.jpg"
              alt="Dr. Maya Reynolds Professional Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
