
import React from 'react';

interface Props {
  onNavigate: () => void;
}

const EmpathySection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="flex flex-col md:flex-row items-stretch min-h-[850px] w-full bg-[#C0C9D1]">
      <div className="w-full md:w-[45%] relative min-h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?auto=format&fit=crop&q=80&w=1200" 
          alt="Reflective" 
          className="w-full h-full object-cover grayscale mix-blend-multiply opacity-50 contrast-125"
        />
      </div>
      <div className="w-full md:w-[55%] px-10 md:px-24 py-32 flex flex-col justify-center text-[#4D5842]">
        <h2 className="text-5xl md:text-[5.5rem] serif-font mb-16 leading-[1.05] italic">
          You don't have to <br />
          do this all alone.
        </h2>
        <div className="space-y-12 max-w-lg">
          <p className="font-light tracking-wide italic text-xl opacity-90">If you are facing any of these, there's hope:</p>
          <ul className="space-y-6 font-light text-lg tracking-wide">
            <li className="flex items-start gap-4"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4D5842]"></span> Persistent feelings of sadness or hopelessness</li>
            <li className="flex items-start gap-4"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4D5842]"></span> Trouble focusing or making decisions</li>
            <li className="flex items-start gap-4"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4D5842]"></span> Difficulty maintaining relationships</li>
            <li className="flex items-start gap-4"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4D5842]"></span> Feeling constantly exhausted or unmotivated</li>
            <li className="flex items-start gap-4"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4D5842]"></span> A pervasive sense of being overwhelmed</li>
          </ul>
          <div className="pt-12">
            <button 
              onClick={onNavigate}
              className="text-[10px] uppercase tracking-[0.4em] font-semibold border-b border-[#4D5842] pb-3 hover:opacity-50 transition-opacity"
            >
              WORK WITH ME →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
