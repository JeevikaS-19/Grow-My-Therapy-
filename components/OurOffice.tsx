import React from 'react';

const OurOffice: React.FC = () => {
    return (
        <section className="bg-[#e8ebed] py-24 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                {/* Left Column (Visuals) */}
                <div className="relative">
                    {/* Main Image: Arched Mask */}
                    <div className="w-full h-[600px] arched-image overflow-hidden shadow-xl">
                        <img
                            src="/assets/images/office1.jpeg"
                            alt="Santa Monica Office"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Secondary Image: Circle Overlap */}
                    <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full overflow-hidden shadow-2xl z-20 bg-white">
                        <img
                            src="/assets/images/office2.jpeg"
                            alt="Office Details"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Column (Content) */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-5xl serif-font text-[#2c3f70] font-bold mb-4">
                            A Sanctuary for Clarity
                        </h2>
                        <div className="w-16 h-[2px] bg-[#a5231c]"></div>
                    </div>

                    <p className="text-[#2c3f70] text-lg md:text-xl leading-relaxed italic opacity-90 max-w-xl">
                        'Healing requires a space where the nervous system can finally settle. Our Santa Monica office is a light-filled sanctuary designed to offer privacy and grounding away from the noise of professional life.'
                    </p>

                    <div className="space-y-10 pt-4">
                        <div className="flex flex-col">
                            <span className="serif-font font-bold text-[#2c3f70] text-lg uppercase tracking-wider mb-1">Location</span>
                            <span className="text-[#2c3f70]/80 text-base font-medium">Wilshire Blvd, Santa Monica</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="serif-font font-bold text-[#2c3f70] text-lg uppercase tracking-wider mb-1">Session Type</span>
                            <span className="text-[#2c3f70]/80 text-base font-medium">In-person & Hybrid Availability</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="serif-font font-bold text-[#2c3f70] text-lg uppercase tracking-wider mb-1">Privacy</span>
                            <span className="text-[#2c3f70]/80 text-base font-medium">100% HIPAA-Compliant & Secure</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurOffice;
