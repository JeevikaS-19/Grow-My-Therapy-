import React from 'react';

const SpecialtyCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => (
  <div className="bg-[#E8E2D9] border border-[#2D3339]/10 p-12 flex flex-col h-full items-center text-center animate-fade-in group shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-[22px] md:text-[24px] serif-font text-[#2D3339] mb-8 font-medium tracking-tight">
      {title}
    </h3>
    <p className="text-base font-light text-[#2D3339]/80 leading-relaxed mb-16 px-2 flex-grow">
      {description}
    </p>
    <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg bg-white/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
      <div className="w-full h-full bg-[#FAF8F6] flex items-center justify-center">
        <span className="text-3xl text-[#2D3339]/20 serif-font font-light">{index}</span>
      </div>
    </div>
  </div>
);

const Specialties: React.FC = () => {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description: "Learn to navigate overwhelming worry and physical panicky sensations with grounded, evidence-based somatic tools.",
      index: 1
    },
    {
      title: "Trauma Recovery",
      description: "Process past experiences in a safe, collaborative space to reclaim your sense of safety and agency in the present.",
      index: 2
    },
    {
      title: "Professional Burnout",
      description: "Address the deep exhaustion of high-achievement and rediscover a sustainable balance between work and wellness.",
      index: 3
    },
  ];

  return (
    <section className="py-24 px-10 bg-[#E0E5E9]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl md:text-[4rem] serif-font text-[#2D3339] mb-20 font-light text-center">
          Specialized Support
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
