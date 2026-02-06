import React from 'react';

interface Props {
  onNavigate: () => void;
}

const FulfillingLife: React.FC<Props> = ({ onNavigate }) => {
  return (
<<<<<<< HEAD
    <section className="py-10 px-10 bg-[#FAF8F6]">
      <div className="flex flex-col md:flex-row min-h-[450px]">
        <div className="w-full md:w-1/2 bg-[#F1EBE4] flex flex-col items-center">
          <div className="flex-grow flex flex-col justify-center px-12 md:px-24 py-16">
            <h2 className="text-3xl md:text-5xl text-[#4D5842] mb-8 serif-font leading-tight">Live a fulfilling life.</h2>
            <div className="max-w-md space-y-10 text-[#333333]/80 font-light leading-[1.8] text-lg">
=======
    <section className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[650px]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 bg-[#F1EBE4] px-10 md:px-20 lg:px-24 py-16 flex flex-col justify-between items-start">
          <div className="w-full">
            <h2 className="text-4xl md:text-[5.8rem] text-[#4D5842] mb-10 serif-font leading-[1.02] tracking-tighter">Live a fulfilling life.</h2>
            <div className="max-w-lg space-y-8 text-[#333333] font-normal leading-[1.7] text-[17px] opacity-90">
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
              <p>
                Life can be challenging—especially when you're trying to balance your personal and professional life.
              </p>
              <p>
                It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
              </p>
            </div>
          </div>
<<<<<<< HEAD
          <div className="w-full border-t border-[#4D5842]/20 py-10 flex justify-center">
            <button
              onClick={onNavigate}
              className="text-[11px] uppercase tracking-[0.4em] font-semibold text-[#4D5842] hover:opacity-60 transition-opacity flex items-center gap-2"
=======
          <div className="mt-12 w-full border-t border-[#333333]/10 pt-6">
            <button 
              onClick={onNavigate}
              className="text-[11px] uppercase tracking-[0.35em] font-bold text-[#333333] hover:text-[#4D5842] transition-colors flex items-center gap-2"
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
            >
              GET IN TOUCH →
            </button>
          </div>
        </div>
<<<<<<< HEAD
        <div className="w-full md:w-1/2 relative min-h-[500px] bg-[#E8E2D9] flex items-center justify-center">
          <span className="text-4xl text-[#4D5842]/20 serif-font">2</span>
=======
        {/* Right Image Placeholder */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-auto">
           <div className="img-placeholder absolute inset-0">Img 2</div>
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
        </div>
      </div>
    </section>
  );
};

export default FulfillingLife;