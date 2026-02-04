
import React from 'react';

const SpecialtyCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
  <div className="flex flex-col h-full bg-[#FAF8F6] p-10 md:p-14 border border-[#4D5842]/5 hover:border-[#4D5842]/20 transition-all duration-700">
    <h3 className="text-3xl md:text-4xl serif-font text-[#4D5842] mb-8 font-light italic">{title}</h3>
    <p className="text-sm font-light leading-[1.9] text-[#333333]/70 mb-16 flex-grow">
      {description}
    </p>
    <div className="mt-auto flex justify-center">
      <div className="w-52 h-52 overflow-hidden rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] ring-8 ring-white/30 transition-transform duration-1000 hover:scale-105">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

const Specialties: React.FC = () => {
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem and confidence.",
      imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier, deeper connections.",
      imageUrl: "https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage stress and prevent burnout.",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="py-40 px-8 max-w-[1440px] mx-auto bg-[#FAF8F6]">
      <h2 className="text-5xl md:text-8xl text-center serif-font text-[#4D5842] mb-24 italic font-light">My Specialties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {specialties.map((s, idx) => (
          <SpecialtyCard key={idx} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Specialties;
