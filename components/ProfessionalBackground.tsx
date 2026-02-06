import React, { useState } from 'react';

const CredentialItem: React.FC<{ title: string; content: string }> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#1A1E22]/10 py-8 first:border-t">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-lg md:text-xl font-light tracking-wide text-[#1A1E22] uppercase">{title}</span>
        <span className="text-2xl font-light text-[#1A1E22] transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <p
          className="pb-4 text-sm md:text-base font-light text-[#1A1E22]/70 leading-relaxed max-w-3xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

const ProfessionalBackground: React.FC = () => {
  return (
    <section className="py-24 px-10 bg-[#F2F5F7] flex flex-col items-center text-[#1A1E22]">
      <div className="max-w-[1000px] w-full">
        <h2 className="text-3xl md:text-5xl text-center serif-font mb-12 font-light">My Professional Background</h2>
        <div className="w-full">
          <CredentialItem
            title="Education"
            content="Doctor of Psychology (Psy.D.) | Specialization in Clinical Psychology<br />Master of Science (M.S.) | Counseling Psychology<br />Bachelor of Arts (B.A.) | Psychology & Social Behavior"
          />
          <CredentialItem
            title="Licensure"
            content="Licensed Clinical Psychologist | California Board of Psychology (License #12345)<br />Telehealth Provider Certification | Authorized to practice across California state lines."
          />
          <CredentialItem
            title="Certifications"
            content="EMDR Certified Therapist | EMDR International Association (EMDRIA)<br />Somatic Experiencing (SE) Practitioner | Trauma Institute<br />Certified Clinical Trauma Professional (CCTP)<br />Mindfulness-Based Stress Reduction (MBSR) Instructor"
          />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;