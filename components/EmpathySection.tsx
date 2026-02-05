import React from 'react';

interface Props {
  onNavigate: () => void;
}

const EmpathySection: React.FC<Props> = ({ onNavigate }) => {
  return (
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