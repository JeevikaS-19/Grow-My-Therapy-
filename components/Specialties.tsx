
import React from 'react';

const SpecialtyCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => (
  <div className="bg-[#E8E2D9] border border-[#4D5842]/30 p-12 flex flex-col h-full items-center text-center animate-fade-in group">
    <h3 className="text-[22px] md:text-[24px] serif-font text-[#4D5842] mb-8 font-bold tracking-tight">
      {title}
    </h3>
    <p className="text-base font-light text-[#333333]/90 leading-relaxed mb-16 px-2 flex-grow">
      {description}
    </p>
    <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg bg-white/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
      <div className="w-full h-full bg-[#FAF8F6] flex items-center justify-center">
        <span className="text-3xl text-[#4D5842]/20 serif-font font-light">{index}</span>
      </div>
    </div>
  </div>
);

const Specialties: React.FC = () => {
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      index: 3
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      index: 4
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      index: 5
    },
  ];

  return (
    <section className="py-10 px-10 bg-[#FAF8F6]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-[3.5rem] serif-font text-[#4D5842] mb-16 italic font-light text-center">
          My Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specialties.map((s, idx) => (
            <SpecialtyCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
