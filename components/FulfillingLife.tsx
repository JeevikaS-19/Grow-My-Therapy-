
import React from 'react';

interface Props {
  onNavigate: () => void;
}

const FulfillingLife: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative w-full overflow-hidden my-24">
      <div className="flex flex-col md:flex-row min-h-[750px]">
        <div className="w-full md:w-1/2 bg-[#F1EBE4] px-12 md:px-24 py-32 flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl text-[#4D5842] mb-12 serif-font leading-tight">Live a fulfilling life.</h2>
          <div className="max-w-md space-y-10 text-[#333333]/80 font-light leading-[1.8] text-lg">
            <p>
              Life can be challenging—especially when you're trying to balance your personal and professional life.
            </p>
            <p>
              It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
            </p>
          </div>
          <div className="mt-16">
            <button 
              onClick={onNavigate}
              className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#4D5842] hover:opacity-60 transition-opacity flex items-center gap-2"
            >
              GET IN TOUCH <span className="text-lg">→</span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[500px]">
           <img 
            src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=1200" 
            alt="Office workspace" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FulfillingLife;
