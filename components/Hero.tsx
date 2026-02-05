import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-16 pb-4">
      <div className="section-container flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
        {/* Left: Arched Image Placeholder - Shifted lower with mt-12 */}
        <div className="w-full md:w-[45%] flex justify-center order-2 md:order-1 md:mt-16">
          <div className="relative w-full max-w-[500px] aspect-[4/5] arched-image overflow-hidden shadow-sm">
            <div className="img-placeholder">Img 1</div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
          <h1 className="text-[3.8rem] md:text-[5.5rem] lg:text-[7.2rem] leading-[0.98] text-[#4D5842] mb-6 serif-font">
            Live your life<br />
            in full bloom
          </h1>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[14px] md:text-[16px] font-normal text-[#4D5842] tracking-wide mb-8">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <button className="border border-[#4D5842] px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold text-[#4D5842] hover:bg-[#4D5842] hover:text-white transition-all flex items-center gap-3">
              CONNECT WITH ME <span className="text-base font-light">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;