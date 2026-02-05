import React from 'react';

const SpecialtyCard: React.FC<{ title: string; description: string; label: string }> = ({ title, description, label }) => (
  <div className="flex flex-col items-start text-left bg-[#E1DDD3] p-10 md:p-12 border border-[#D1CEC5] transition-all duration-700 hover:shadow-xl min-h-[540px]">
    <h3 className="text-3xl md:text-[2.2rem] font-medium text-[#4D5842] mb-8 tracking-tight leading-tight">{title}</h3>
    <p className="text-[16px] font-light leading-[1.7] text-[#333333] mb-10 flex-grow opacity-90">
      {description}
    </p>
    <div className="mt-auto w-full flex justify-center">
      <div className="w-full max-w-[310px] aspect-square overflow-hidden rounded-full shadow-md">
        <div className="img-placeholder">{label}</div>
      </div>
    </div>
  </div>
);

const Specialties: React.FC = () => {
  const specialties = [
    {
      title: "Self-Esteem",
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem and confidence.",
      label: "Img 3"
    },
    {
      title: "Relationships",
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      label: "Img 4"
    },
    {
      title: "Burnout",
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      label: "Img 5"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-[1500px] mx-auto">
      <h2 className="text-[3.5rem] md:text-[5.5rem] text-center serif-font text-[#4D5842] mb-16 italic font-light">My Specialties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specialties.map((s, idx) => (
          <SpecialtyCard key={idx} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Specialties;