import React, { useState } from 'react';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<<<<<<< HEAD
    <div className="border-b border-[#4D5842]/20 py-10 first:border-t">
      <button
=======
    <div className="border-b border-[#4D5842]/20 py-8 last:border-b-0">
      <button 
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-start items-center gap-8 group text-left"
      >
        <span className="text-[2.2rem] font-light text-[#4D5842] transition-transform duration-500 w-10 flex justify-center opacity-40" 
              style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>
          +
        </span>
        <span className="text-[1.8rem] md:text-[2.6rem] serif-font text-[#4D5842] font-medium tracking-tight group-hover:opacity-70 transition-opacity">
          {question}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-6 ml-[4.5rem]' : 'max-h-0 opacity-0'}`}>
        <p className="text-[17px] font-light text-[#333333]/80 leading-relaxed max-w-xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  return (
<<<<<<< HEAD
    <section className="py-10 px-8 max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
      <div className="w-full md:w-[40%]">
        <div className="arched-image overflow-hidden w-full aspect-[3/4] shadow-2xl relative bg-[#E8E2D9] flex items-center justify-center">
          <span className="text-4xl text-[#4D5842]/20 serif-font">9</span>
        </div>
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl serif-font mb-10 text-[#4D5842] italic font-light">FAQs</h2>
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
=======
    <section className="py-20">
      <div className="section-container flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Arched Image - Now slightly shorter than before */}
        <div className="w-full md:w-[35%] flex justify-center">
          <div className="arched-image overflow-hidden w-full max-w-[380px] aspect-[1/1.6] shadow-sm">
            <div className="img-placeholder">Img 9</div>
          </div>
        </div>

        {/* Right: Accordion Section */}
        <div className="w-full md:w-[65%] flex flex-col justify-center">
          <h2 className="text-[3.5rem] md:text-[5.8rem] serif-font mb-8 text-[#4D5842] leading-[1.1] tracking-tighter">FAQs</h2>
          <div className="w-full border-t border-[#4D5842]/20">
            <AccordionItem 
              question="Do you take insurance?" 
              answer="Yes, I am currently in-network with several major providers including Aetna, Blue Cross Blue Shield, and United Healthcare. I also provide superbills for out-of-network reimbursement for other providers."
            />
            <AccordionItem 
              question="What are your rates?" 
              answer="Individual sessions are $175 for a standard 50-minute clinical hour. I offer a limited number of sliding scale spots for those demonstrating financial need."
            />
            <AccordionItem 
              question="Do you have any openings?" 
              answer="I am currently maintaining a waitlist for new clients. Please reach out to schedule a free 15-minute consultation to see if we're a good fit for future sessions."
            />
          </div>
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
        </div>
      </div>
    </section>
  );
};

export default FAQs;