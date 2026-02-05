import React from 'react';

interface Props {
  onNavigate: () => void;
}

const AboutSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-8 md:px-16 max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center">
      <div className="w-full md:w-[55%]">
        <h2 className="text-5xl md:text-[6.2rem] serif-font mb-6 text-[#4D5842] leading-[1]">Hi, I'm Lilac.</h2>
        <div className="space-y-6 text-[#333333]/70 font-light leading-[1.7] text-[17px] max-w-lg">
          <p>
            I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors.
          </p>
          <p>
            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>
        </div>
        <button 
          onClick={onNavigate}
          className="mt-10 border border-[#333333]/40 px-10 py-5 text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-[#4D5842] hover:text-white hover:border-[#4D5842] transition-all"
        >
          LET'S CHAT →
        </button>
      </div>

      <div className="w-full md:w-[45%] flex justify-center">
        <div className="relative w-full max-w-[450px]">
          {/* Main Arched Placeholder - Longer aspect ratio */}
          <div className="w-full aspect-[2/3] arched-image overflow-hidden shadow-sm">
            <div className="img-placeholder">Img 7</div>
          </div>
          {/* Overlapping Round Placeholder - Now larger circle */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full overflow-hidden border-[18px] border-[#FAF8F6] shadow-md hidden md:block">
            <div className="img-placeholder text-[9px]">Img 8</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;