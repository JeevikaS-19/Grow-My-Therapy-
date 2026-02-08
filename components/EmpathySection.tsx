import React from 'react';

interface Props {
  onNavigate: () => void;
}

const EmpathySection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="bg-[#e8ebed]">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 relative bg-gray-200 min-h-[600px] overflow-hidden">
          <img
            src="/assets/images/img_6.jpg"
            alt="Supportive Therapy Environment"
            className="w-full h-full object-cover"
          />
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
                  Feeling stuck in overthinking or emotionally on edge
                </li>
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  Constant worry or physical tension in your body
                </li>
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  Difficulty sleeping or "bracing" for what might go wrong
                </li>
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  Professional burnout and high internal pressure
                </li>
                <li className="flex items-center gap-6 text-lg font-normal opacity-90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2c3f70]"></span>
                  Feeling disconnected after years of pushing through stress
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