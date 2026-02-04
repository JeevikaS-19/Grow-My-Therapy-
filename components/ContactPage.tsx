
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-40 pb-20">
      <div className="px-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h1 className="text-6xl md:text-[7rem] serif-font text-[#4D5842] mb-12 font-light italic leading-tight">Let's Connect</h1>
          <div className="space-y-8 text-xl font-light text-[#333333]/80">
            <p className="font-medium text-[#4D5842]">Starting therapy is courageous.</p>
            <p>Get in touch for questions, or to book a free 15-minute consultation.</p>
          </div>
        </div>
        <div className="bg-[#4D5842] p-12 text-[#FAF8F6]">
          <p className="text-sm font-light leading-relaxed mb-6 italic">
            PLEASE NOTE: If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. 
            Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 rounded-full object-cover" alt="" />
            <img src="https://images.unsplash.com/photo-1464333182101-71329a67a80b?auto=format&fit=crop&q=80&w=200" className="w-24 h-24 rounded-full object-cover" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#E8E2D9] py-32 px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl serif-font text-[#4D5842] mb-10 italic font-light">Book an appointment.</h2>
          <p className="text-lg font-light text-[#333333]/70 mb-16 leading-relaxed">
            Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
          </p>
          <div className="bg-white p-16 shadow-lg">
            <h3 className="text-2xl serif-font text-[#333333] mb-8">This page is not active</h3>
            <p className="text-sm text-[#333333]/60 mb-10">If you're the owner, please log into your account to start a free trial or subscribe.</p>
            <button className="bg-[#333333] text-white px-10 py-4 text-[10px] uppercase tracking-widest font-bold">GO TO ACCOUNT</button>
            <p className="mt-16 text-[10px] text-[#333333]/40">Powered by <span className="font-bold">acuity:scheduling</span></p>
          </div>
        </div>
      </div>

      <div className="py-32 px-10 bg-[#4D5842] text-[#FAF8F6] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl serif-font mb-10 italic font-light">My Office</h2>
          <div className="space-y-6 text-lg font-light opacity-90">
            <p>123 Example Street<br />Minneapolis, MN</p>
            <h4 className="text-2xl serif-font mt-10">Hours</h4>
            <p>Monday – Friday<br />10am – 6pm</p>
          </div>
        </div>
        <div className="aspect-[16/9] bg-stone-300 overflow-hidden shadow-2xl grayscale brightness-90">
          <img 
            src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&q=80&w=1200" 
            alt="Map placeholder" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="py-32 px-10">
        <h2 className="text-5xl md:text-6xl serif-font text-[#4D5842] mb-16 italic font-light">Find me on social.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" className="aspect-square object-cover" alt="" />
          <img src="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?auto=format&fit=crop&q=80&w=400" className="aspect-square object-cover" alt="" />
          <img src="https://images.unsplash.com/photo-1464333182101-71329a67a80b?auto=format&fit=crop&q=80&w=400" className="aspect-square object-cover" alt="" />
          <img src="https://images.unsplash.com/photo-1550592704-6c76defa9985?auto=format&fit=crop&q=80&w=400" className="aspect-square object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
