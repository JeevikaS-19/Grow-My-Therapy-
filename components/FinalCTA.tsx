
import React from 'react';

interface Props {
  onNavigate: () => void;
}

const FinalCTA: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-10 px-10 bg-[#FAF8F6] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-[4.5rem] serif-font mb-8 leading-[1.05] italic font-light">Get started today.</h2>
        <p className="text-xl md:text-2xl font-light mb-20 leading-relaxed opacity-90 max-w-2xl mx-auto">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>
        <button
          onClick={onNavigate}
          className="border border-[#FAF8F6] px-16 py-6 text-[10px] uppercase tracking-[0.5em] font-semibold hover:bg-[#FAF8F6] hover:text-[#4D5842] transition-all duration-500 ease-in-out"
        >
          GET IN TOUCH →
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
