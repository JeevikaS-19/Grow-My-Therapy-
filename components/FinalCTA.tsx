import React from 'react';

interface Props {
  onNavigate: () => void;
}

const FinalCTA: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-10 bg-[#e8ebed] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl serif-font mb-8 leading-[1.05] font-bold text-[#2c3f70]">Get started today.</h2>
        <p className="text-xl md:text-2xl font-normal mb-20 leading-relaxed opacity-90 max-w-2xl mx-auto text-[#2c3f70]">
          Ready to take the first step towards internal steady ground?
          Contact me to book your first session. I look forward to starting this
          journey with you.
        </p>
        <button
          onClick={onNavigate}
          className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2c3f70] hover:text-[#a5231c] hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          GET IN TOUCH →
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;