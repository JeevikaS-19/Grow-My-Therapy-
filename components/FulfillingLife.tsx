import React from 'react';

interface Props {
  onNavigate: () => void;
}

const FulfillingLife: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-10 bg-[#e8ebed]">
      <div className="flex flex-col md:flex-row min-h-[450px]">
        <div className="w-full md:w-1/2 bg-white flex flex-col items-center">
          <div className="flex-grow flex flex-col justify-center px-12 md:px-24 py-16">
            <h2 className="text-3xl md:text-5xl text-[#2c3f70] mb-8 serif-font leading-tight font-bold transition-colors">Live a fulfilling life.</h2>
            <div className="max-w-md space-y-10 text-[#2c3f70]/80 font-normal leading-[1.8] text-lg">
              <p>
                Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
              </p>
              <p>
                I help entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress find a path back to clarity and regulation.
              </p>
            </div>
          </div>
          <div className="w-full border-t border-[#2c3f70]/10 py-10 flex justify-center">
            <button
              onClick={onNavigate}
              className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2c3f70] hover:text-[#a5231c] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              GET IN TOUCH →
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[500px] bg-gray-200">
          <img
            src="/assets/images/live_a_ful_life.jpg"
            alt="Live a Fulfilling Life"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FulfillingLife;