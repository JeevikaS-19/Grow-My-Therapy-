
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-56 pb-20">
      <div className="px-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h1 className="text-7xl md:text-[8rem] serif-font text-[#4D5842] mb-12 font-light italic leading-tight">Let's Connect</h1>
          <div className="space-y-8 text-2xl font-light text-[#333333]/80 max-w-xl">
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
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl text-white/20 serif-font">15</span>
            </div>
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl text-white/20 serif-font">16</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E8E2D9] py-32 px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl serif-font text-[#4D5842] mb-12 italic font-light">Book an appointment.</h2>
          <p className="text-2xl font-light text-[#333333]/70 mb-16 leading-relaxed">
            Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
          </p>
          <div className="bg-white p-20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-3xl serif-font text-[#333333] mb-8">This page is not active</h3>
            <p className="text-lg text-[#333333]/60 mb-10">If you're the owner, please log into your account to start a free trial or subscribe.</p>
            <button className="bg-[#333333] text-white px-12 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#000] transition-colors">GO TO ACCOUNT</button>
            <p className="mt-16 text-xs text-[#333333]/40">Powered by <span className="font-bold">acuity:scheduling</span></p>
          </div>
        </div>
      </div>

      <div className="py-48 px-10 bg-[#4D5842] text-[#FAF8F6] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl serif-font mb-12 italic font-light">My Office</h2>
          <div className="space-y-8 text-2xl font-light opacity-90">
            <p>123 Example Street<br />Minneapolis, MN</p>
            <h4 className="text-3xl md:text-5xl serif-font mt-16">Hours</h4>
            <p>Monday – Friday<br />10am – 6pm</p>
          </div>
        </div>
        <div className="aspect-[16/9] bg-[#E8E2D9]/20 overflow-hidden shadow-2xl flex items-center justify-center">
          <span className="text-4xl text-white/20 serif-font">17</span>
        </div>
      </div>

      <div className="py-48 px-10 max-w-[1440px] mx-auto">
        <h2 className="text-6xl md:text-7xl serif-font text-[#4D5842] mb-16 italic font-light">Find me on social.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="aspect-square bg-[#E8E2D9] flex items-center justify-center">
            <span className="text-2xl text-[#4D5842]/20 serif-font">18</span>
          </div>
          <div className="aspect-square bg-[#E8E2D9] flex items-center justify-center">
            <span className="text-2xl text-[#4D5842]/20 serif-font">19</span>
          </div>
          <div className="aspect-square bg-[#E8E2D9] flex items-center justify-center">
            <span className="text-2xl text-[#4D5842]/20 serif-font">20</span>
          </div>
          <div className="aspect-square bg-[#E8E2D9] flex items-center justify-center">
            <span className="text-2xl text-[#4D5842]/20 serif-font">21</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
