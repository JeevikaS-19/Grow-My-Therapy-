
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-56 pb-20 bg-[#e8ebed]">
      <div className="px-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-48">
        <div>
          <h1 className="text-7xl md:text-8xl serif-font text-[#2c3f70] mb-12 font-bold italic leading-tight">Let's Connect</h1>
          <div className="space-y-6 text-2xl font-normal text-[#2c3f70]/80 max-w-xl mb-16">
            <p className="text-[#2c3f70]">Starting therapy is courageous.</p>
            <p>Get in touch for questions, or to book a free <br />15-minute consultation.</p>
          </div>

          <div className="relative mt-20 max-w-md">
            {/* Arched Image (img_15) */}
            <div className="w-full md:w-[380px] aspect-[4.5/6] arched-image overflow-hidden shadow-2xl relative z-10 bg-white">
              <img
                src="/assets/images/img_15.jpg"
                alt="Support"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Circle (img_16) */}
            <div className="absolute -bottom-12 -right-12 md:-bottom-16 md:-right-16 w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl z-20 bg-white">
              <img
                src="/assets/images/img_16.jpg"
                alt="Flowers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#26321d] p-16 text-white shadow-xl mt-10">
          <p className="text-xl font-bold mb-8 uppercase tracking-widest opacity-90">PLEASE NOTE:</p>
          <div className="space-y-8 text-lg md:text-xl font-normal leading-relaxed opacity-80">
            <p>
              If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant.
            </p>
            <p>
              Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
            </p>
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
        <div className="aspect-[16/9] overflow-hidden shadow-2xl border border-white/5 bg-gray-100">
          <iframe
            src="https://maps.google.com/maps?cid=4175526099630036887&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>

      <div className="py-48 px-10 max-w-[1440px] mx-auto bg-[#e8ebed]">
        <h2 className="text-6xl md:text-7xl serif-font text-[#2c3f70] mb-16 font-bold">Find me on social.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="aspect-square overflow-hidden border border-[#2c3f70]/5">
            <img src="/assets/images/img_18.jpg" alt="Social Post 1" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden border border-[#2c3f70]/5">
            <img src="/assets/images/img_19.jpg" alt="Social Post 2" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden border border-[#2c3f70]/5">
            <img src="/assets/images/img_20.jpg" alt="Social Post 3" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden border border-[#2c3f70]/5">
            <img src="/assets/images/img_21.jpg" alt="Social Post 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
