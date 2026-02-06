import React from 'react';

interface Props {
  onNavigate: () => void;
}

const EmpathySection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="bg-[#e8ebed]">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 relative bg-gray-200 flex items-center justify-center min-h-[600px] overflow-hidden">
          <span className="text-6xl text-[#2c3f70]/20 serif-font italic font-bold">img6</span>
        </div>
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-center text-[#2c3f70]">
          <div className="px-12 md:px-24 py-20 flex-grow flex flex-col justify-center">
            <h2 className="text-3xl md:text-6xl serif-font leading-[1.05] mb-10 font-bold">
              You don't have to <br />
              do this all <span className="italic font-normal">alone.</span>
            </h2>

            <div className="space-y-8 mb-12">
              <p className="text-lg font-semibold tracking-wide">If you are facing any of these, there's hope:</p>
              <ul className="space-y-5 pl-4">
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  Persistent feelings of sadness or hopelessness
                </li>
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  Trouble focusing or making decisions
                </li>
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  Difficulty maintaining relationships
                </li>
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  Feeling constantly exhausted or unmotivated
                </li>
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  A pervasive sense of being overwhelmed
                </li>
              </ul>
            </div>

            <p className="text-xl font-medium leading-relaxed max-w-xl opacity-90">
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>
          </div>

          <div className="w-full border-t border-[#2c3f70]/10 py-10 flex justify-center mt-auto">
            <button
              onClick={onNavigate}
              className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#2c3f70] hover:text-[#a5231c] hover:scale-105 transition-all duration-300 flex items-center gap-2"
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