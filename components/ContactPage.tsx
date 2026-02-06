
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-56 pb-20 bg-[#e8ebed]">
      <div className="px-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h1 className="text-7xl md:text-8xl serif-font text-[#2c3f70] mb-12 font-bold italic leading-tight">Let's Connect</h1>
          <div className="space-y-8 text-2xl font-normal text-[#2c3f70]/80 max-w-xl">
            <p className="font-bold text-[#2c3f70]">Starting therapy is courageous.</p>
            <p>Get in touch for questions, or to book a free 15-minute consultation.</p>
          </div>
        </div>
        <div className="bg-[#2c3f70] p-12 text-white shadow-xl">
          <p className="text-sm font-normal leading-relaxed mb-6 italic opacity-80">
            PLEASE NOTE: If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant.
            Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl text-white/20 serif-font font-bold">15</span>
            </div>
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl text-white/20 serif-font font-bold">16</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-32 px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl serif-font text-[#2c3f70] mb-12 font-bold">Book an appointment.</h2>
          <p className="text-2xl font-normal text-[#2c3f70]/70 mb-16 leading-relaxed">
            Add some text here if you like, and add your scheduling widget below. I use HIPAA-compliant scheduling to ensure your privacy and ease of access.
          </p>
          <div className="bg-white p-20 shadow-xl max-w-2xl mx-auto border border-[#2c3f70]/5">
            <h3 className="text-3xl serif-font text-[#2c3f70] mb-8 font-bold">This page is not active</h3>
            <p className="text-lg text-[#2c3f70]/60 mb-10">If you're the owner, please log into your account to start a free trial or subscribe.</p>
            <button className="bg-[#2c3f70] text-white px-12 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#a5231c] transition-colors">GO TO ACCOUNT</button>
            <p className="mt-16 text-xs text-[#2c3f70]/40">Powered by <span className="font-bold">acuity:scheduling</span></p>
          </div>
        </div>
      </div>

      <div className="py-24 px-10 bg-[#2c3f70] text-white grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl serif-font mb-12 font-bold leading-tight">My Office</h2>
          <div className="space-y-8 text-2xl font-normal opacity-90">
            <p>123 Wilshire Blvd, Santa Monica, CA 90401</p>
            <h4 className="text-3xl md:text-5xl serif-font mt-16 font-bold">Hours</h4>
            <p>Monday – Thursday<br />9:00 AM – 6:00 PM</p>
          </div>
        </div>
        <div className="aspect-[16/9] bg-white/10 overflow-hidden shadow-2xl flex items-center justify-center border border-white/5">
          <span className="text-4xl text-white/20 serif-font font-bold">17</span>
        </div>
      </div>

      <div className="py-48 px-10 max-w-[1440px] mx-auto bg-[#e8ebed]">
        <h2 className="text-6xl md:text-7xl serif-font text-[#2c3f70] mb-16 font-bold">Find me on social.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="aspect-square bg-gray-200 flex items-center justify-center border border-[#2c3f70]/5">
            <span className="text-2xl text-[#2c3f70]/20 serif-font font-bold">18</span>
          </div>
          <div className="aspect-square bg-gray-200 flex items-center justify-center border border-[#2c3f70]/5">
            <span className="text-2xl text-[#2c3f70]/20 serif-font font-bold">19</span>
          </div>
          <div className="aspect-square bg-gray-200 flex items-center justify-center border border-[#2c3f70]/5">
            <span className="text-2xl text-[#2c3f70]/20 serif-font font-bold">20</span>
          </div>
          <div className="aspect-square bg-gray-200 flex items-center justify-center border border-[#2c3f70]/5">
            <span className="text-2xl text-[#2c3f70]/20 serif-font font-bold">21</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
