
import React, { useState } from 'react';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#4D5842]/20 py-10 first:border-t">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center group text-left"
      >
        <span className="text-3xl md:text-4xl serif-font text-[#4D5842] group-hover:opacity-60 transition-opacity font-light italic">{question}</span>
        <span className="text-3xl font-light text-[#4D5842] transition-transform duration-500" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
        <p className="text-lg font-light text-[#333333]/60 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  return (
    <section className="py-40 px-8 max-w-[1440px] mx-auto flex flex-col md:flex-row gap-20 md:gap-32">
      <div className="w-full md:w-[40%]">
        <div className="arched-image overflow-hidden w-full aspect-[3/4] shadow-2xl relative grayscale-[20%]">
          <img 
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800" 
            alt="Editorial aesthetic interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center">
        <h2 className="text-6xl md:text-8xl serif-font mb-20 text-[#4D5842] italic font-light">FAQs</h2>
        <div className="w-full">
          <AccordionItem 
            question="Do you take insurance?" 
            answer="Answer goes here. Yes, I am currently in-network with several major providers including Aetna, Blue Cross Blue Shield, and United Healthcare. I also provide superbills for out-of-network reimbursement."
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
