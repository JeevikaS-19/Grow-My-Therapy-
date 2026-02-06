import React from 'react';

interface Props {
  onNavigate: () => void;
}

const EmpathySection: React.FC<Props> = ({ onNavigate }) => {
  return (
<<<<<<< HEAD
    <section className="bg-[#FAF8F6]">
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 relative bg-[#E8E2D9] flex items-center justify-center min-h-[600px] overflow-hidden">
          <span className="text-6xl text-[#4D5842]/20 serif-font">6</span>
        </div>
        <div className="w-full md:w-1/2 bg-[#C0C9D1] flex flex-col justify-center text-[#2D3339]">
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
=======
    <section className="flex flex-col md:flex-row items-stretch min-h-[750px] w-full">
      {/* Left Image Placeholder */}
      <div className="w-full md:w-[48%] relative min-h-[500px] md:min-h-auto overflow-hidden">
        <div className="img-placeholder absolute inset-0">Img 6</div>
      </div>
      
      {/* Right Content Section */}
      <div className="w-full md:w-[52%] px-10 md:px-20 lg:px-24 py-16 flex flex-col justify-between bg-[#D7D3DE] text-[#4D5842]">
        <div className="w-full">
          <h2 className="text-4xl md:text-[6rem] serif-font mb-10 leading-[1] tracking-tight">
            You don't have to <br />
            do this all <span className="italic">alone.</span>
          </h2>
          
          <div className="space-y-6 max-w-xl">
            <p className="font-light text-[18px] opacity-85 mb-6">If you are facing any of these, there's hope:</p>
            <ul className="space-y-4 font-light text-[17px]">
              {[
                "Persistent feelings of sadness or hopelessness",
                "Trouble focusing or making decisions",
                "Difficulty maintaining relationships",
                "Feeling constantly exhausted or unmotivated",
                "A pervasive sense of being overwhelmed"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#4D5842] shrink-0 opacity-40"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-[17px] font-light leading-relaxed opacity-90 mt-10">
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
          </div>
        </div>

        <div className="mt-12 w-full border-t border-[#4D5842]/20 pt-8 flex justify-end">
          <button 
            onClick={onNavigate}
            className="text-[11px] uppercase tracking-[0.35em] font-bold hover:opacity-60 transition-all flex items-center gap-2"
          >
            WORK WITH ME →
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;