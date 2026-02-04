
import React from 'react';

interface Props {
  onNavigate: () => void;
}

const AboutSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-48 px-10 max-w-[1300px] mx-auto flex flex-col md:flex-row-reverse items-center gap-24 md:gap-32">
      <div className="w-full md:w-1/2 flex justify-center">
         <div className="relative">
          <div className="w-full max-w-[380px] aspect-[3/4] arched-image overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=800" 
              alt="Portrait" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full overflow-hidden border-[18px] border-[#FAF8F6] shadow-2xl z-20">
            <img 
               src="https://images.unsplash.com/photo-1464333182101-71329a67a80b?auto=format&fit=crop&q=80&w=400" 
               alt="Flower" 
               className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-6xl md:text-[6rem] serif-font mb-12 text-[#4D5842] font-light italic">Hi, I'm Lilac.</h2>
        <div className="space-y-10 text-[#333333]/70 font-light leading-[1.85] text-xl max-w-lg">
          <p>
            I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors.
          </p>
          <p>
            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>
        </div>
        <button 
          onClick={onNavigate}
          className="mt-16 border border-[#4D5842] px-16 py-5 text-[10px] uppercase tracking-[0.4em] font-medium hover:bg-[#4D5842] hover:text-[#FAF8F6] transition-all duration-500 ease-in-out"
        >
          LET'S CHAT →
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
