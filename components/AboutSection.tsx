
import React from 'react';

interface Props {
  onNavigate: () => void;
}

const AboutSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-10 px-10 bg-[#FAF8F6] max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-24 md:gap-32">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-[4.5rem] serif-font mb-8 text-[#4D5842] font-light italic">Hi, I'm Lilac.</h2>
        <div className="space-y-6 text-[#333333]/70 font-light leading-[1.8] text-lg max-w-lg mb-12">
          <p>
            I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors.
          </p>
          <p>
            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>
        </div>
        <button
          onClick={onNavigate}
          className="px-10 py-5 border border-[#4D5842]/30 text-[10px] uppercase tracking-[0.4em] font-semibold text-[#4D5842]/80 hover:bg-[#4D5842] hover:text-white transition-all duration-500 rounded-sm"
        >
          LET'S CHAT →
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center py-20">
        <div className="relative">
          {/* Main Arched Frame */}
          <div className="w-[380px] md:w-[450px] aspect-[4.5/6.5] arched-image overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] relative z-10 bg-[#E8E2D9] border border-[#4D5842]/10 flex items-center justify-center">
            <span className="text-6xl text-[#4D5842]/20 serif-font italic">img7</span>
          </div>

          {/* Overlapping Circle Frame */}
          <div className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-20 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[15px] md:border-[24px] border-[#FAF8F6] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 bg-[#E8E2D9] flex items-center justify-center">
            <span className="text-4xl text-[#4D5842]/20 serif-font italic">img8</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
