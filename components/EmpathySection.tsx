import React from 'react';

interface Props {
  onNavigate: () => void;
}

const EmpathySection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="bg-[#E0E5E9]">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 relative bg-[#D1D9E0] flex items-center justify-center min-h-[600px] overflow-hidden">
          <span className="text-6xl text-[#2D3339]/20 serif-font italic font-light">img6</span>
        </div>
        <div className="w-full md:w-1/2 bg-[#E8E2D9] flex flex-col justify-center text-[#2D3339]">
          <div className="px-12 md:px-24 py-20 flex-grow flex flex-col justify-center">
            <h2 className="text-3xl md:text-[4rem] serif-font leading-[1.05] mb-10 font-medium">
              You don't have to <br />
              do this all <span className="italic font-light">alone.</span>
            </h2>

            <div className="space-y-8 mb-12">
              <p className="text-lg font-medium tracking-wide">If you are facing any of these, there's hope:</p>
              <ul className="space-y-5 pl-4">
                <li className="flex items-center gap-6 text-lg font-medium opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D3339]"></span>
                  Persistent feelings of sadness or hopelessness
                </li>
                <li className="flex items-center gap-6 text-lg font-medium opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D3339]"></span>
                  Trouble focusing or making decisions
                </li>
                <li className="flex items-center gap-6 text-lg font-medium opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D3339]"></span>
                  Difficulty maintaining relationships
                </li>
                <li className="flex items-center gap-6 text-lg font-medium opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D3339]"></span>
                  Feeling constantly exhausted or unmotivated
                </li>
                <li className="flex items-center gap-6 text-lg font-medium opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D3339]"></span>
                  A pervasive sense of being overwhelmed
                </li>
              </ul>
            </div>

            <p className="text-xl font-medium leading-relaxed max-w-xl opacity-90">
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>
          </div>

          <div className="w-full border-t border-[#2D3339]/20 py-8 flex justify-center mt-auto">
            <button
              onClick={onNavigate}
              className="text-[11px] uppercase tracking-[0.4em] font-semibold text-[#2D3339] hover:opacity-50 transition-opacity"
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