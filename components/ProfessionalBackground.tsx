import React, { useState } from 'react';

const CredentialItem: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#4D5842]/20 py-4 last:border-b">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-lg md:text-xl font-light tracking-wide text-[#4D5842] uppercase">{title}</span>
        <span className="text-2xl font-light text-[#4D5842] transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p className="pb-4 text-sm md:text-base font-light text-[#333333]/70 leading-relaxed max-w-3xl">
          {content}
        </p>
      </div>
    </div>
  );
};

const ProfessionalBackground: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl md:text-[3.5rem] serif-font mb-16 text-[#4D5842] font-light">My Professional Background</h2>
        <div className="w-full border-t border-[#4D5842]/20 text-left">
          <CredentialItem 
            title="Education" 
            content="M.S. in Counseling Psychology from the University of Minnesota, B.A. in Psychology from Macalester College." 
          />
          <CredentialItem 
            title="Licensure" 
            content="Licensed Professional Clinical Counselor (LPCC) in the State of Minnesota. License #12345." 
          />
          <CredentialItem 
            title="Certifications" 
            content="Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea." 
          />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;