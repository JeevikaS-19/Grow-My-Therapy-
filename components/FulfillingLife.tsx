import React from 'react';

interface Props {
  onNavigate: () => void;
}

const FulfillingLife: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-10 px-10 bg-[#FAF8F6]">
      <div className="flex flex-col md:flex-row min-h-[450px]">
        <div className="w-full md:w-1/2 bg-[#F1EBE4] flex flex-col items-center">
          <div className="flex-grow flex flex-col justify-center px-12 md:px-24 py-16">
            <h2 className="text-3xl md:text-5xl text-[#4D5842] mb-8 serif-font leading-tight font-light italic">Live a fulfilling life.</h2>
            <div className="max-w-md space-y-10 text-[#333333]/80 font-light leading-[1.8] text-lg">
              <p>
                Life can be challenging—especially when you're trying to balance your personal and professional life.
              </p>
              <p>
                It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
              </p>
            </div>
          </div>
          <div className="w-full border-t border-[#4D5842]/20 py-10 flex justify-center">
            <button
              onClick={onNavigate}
              className="text-[11px] uppercase tracking-[0.4em] font-semibold text-[#4D5842] hover:opacity-60 transition-opacity flex items-center gap-2"
            >
              GET IN TOUCH →
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[500px] bg-[#E8E2D9] flex items-center justify-center">
          <span className="text-4xl text-[#4D5842]/20 serif-font italic">img2</span>
        </div>
      </div>
    </section>
  );
};

export default FulfillingLife;