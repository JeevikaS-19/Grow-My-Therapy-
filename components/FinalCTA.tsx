import React from 'react';

interface Props {
  onNavigate: () => void;
}

const FinalCTA: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-10 bg-[#E0E5E9] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-[4.5rem] serif-font mb-8 leading-[1.05] font-light text-[#2D3339]">Get started today.</h2>
        <p className="text-xl md:text-2xl font-light mb-20 leading-relaxed opacity-90 max-w-2xl mx-auto text-[#2D3339]">
          Ready to take the first step towards internal steady ground?
          Contact me to book your first session. I look forward to starting this
          journey with you.
        </p>
        <button
          onClick={onNavigate}
          className="px-12 py-5 bg-[#C28E7E] text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#2D3339] transition-all duration-500 rounded-sm shadow-sm"
        >
          GET IN TOUCH →
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;