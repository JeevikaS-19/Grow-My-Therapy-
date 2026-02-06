import React from 'react';

const SpecialtyCard: React.FC<{ title: string; description: string; index: number; className?: string }> = ({ title, description, index, className }) => (
  <div className={`bg-[#c8d4e5] rounded-3xl shadow-sm p-12 flex flex-col h-full items-center text-center animate-fade-in group hover:shadow-md transition-all duration-500 border border-[#2c3f70]/5 ${className}`}>
    <h3 className="text-[22px] md:text-[24px] serif-font text-[#2c3f70] mb-8 font-bold tracking-tight">
      {title}
    </h3>
    <p className="text-base font-normal text-[#2c3f70]/80 leading-relaxed mb-16 px-2 flex-grow">
      {description}
    </p>
    <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg bg-[#e8ebed]/50 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
      <div className="w-full h-full bg-[#e8ebed]/50 flex items-center justify-center">
        <span className="text-3xl text-[#2c3f70]/20 serif-font font-bold">{index}</span>
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
    <section className="py-24 px-10 bg-[#e8ebed]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl md:text-6xl serif-font text-[#2c3f70] mb-20 font-bold text-center">
          Specialized Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specialties.map((s, idx) => (
            <SpecialtyCard
              key={idx}
              {...s}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
