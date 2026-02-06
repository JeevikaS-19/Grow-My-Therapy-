import React, { useState } from 'react';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#2D3339]/10 py-10 first:border-t">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-start items-center gap-8 group text-left"
      >
        <span className="text-[2.2rem] font-light text-[#2D3339] transition-transform duration-500 w-10 flex justify-center opacity-40"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>
          +
        </span>
        <span className="text-[1.8rem] md:text-[2.6rem] serif-font text-[#2D3339] font-medium tracking-tight group-hover:opacity-70 transition-opacity">
          {question}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-6 ml-[4.5rem]' : 'max-h-0 opacity-0'}`}>
        <p className="text-[17px] font-light text-[#2D3339]/80 leading-relaxed max-w-xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  return (
    <section className="py-24 px-8 max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24 bg-[#E0E5E9]">
      <div className="w-full md:w-[40%]">
        <div className="arched-image overflow-hidden w-full aspect-[3/4] shadow-2xl relative bg-[#E8E2D9] border border-[#2D3339]/10 flex items-center justify-center">
          <span className="text-4xl text-[#2D3339]/20 serif-font italic font-light">img9</span>
        </div>
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl serif-font mb-10 text-[#2D3339] font-light">FAQs</h2>
        <div className="w-full">
          <AccordionItem
            question="Do you take insurance?"
            answer="Yes, I am currently in-network with several major providers including Aetna, Blue Cross Blue Shield, and United Healthcare. I also provide superbills for out-of-network reimbursement."
          />
          <AccordionItem
            question="What are your rates?"
            answer="Individual sessions are $175 for 50 minutes. I believe quality care should be accessible, so I offer sliding scale spots for those who qualify."
          />
          <AccordionItem
            question="Do you have any openings?"
            answer="I am currently accepting new clients for Tuesday and Thursday afternoon slots. Reach out to schedule a free 15-minute consultation."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQs;