"use client";

export default function Home() {
    return (
        <div className="space-y-0 -mt-24">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 w-full">
                    {/* Left: Arched Image Placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[500px] aspect-[4/5] arched-image overflow-hidden shadow-sm bg-[#E8E2D9] flex items-center justify-center">
                            <div className="text-[#2D3339]/40 uppercase tracking-[0.5em] text-xs font-medium">
                                img1
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                        <h1 className="text-[4rem] md:text-[6.5rem] lg:text-[7.2rem] leading-[1] text-[#2D3339] mb-8 font-serif">
                            Live your life<br />
                            <span className="italic">in full bloom</span>
                        </h1>
                        <div className="flex flex-col items-start gap-12">
                            <p className="text-[17px] md:text-[19px] font-normal text-[#2D3339] tracking-wide opacity-80">
                                Therapy for Adults in Minneapolis, MN.
                            </p>
                            <button className="border border-[#2D3339] px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold text-[#2D3339] hover:bg-[#2D3339] hover:text-[#FAF8F6] transition-all flex items-center gap-3">
                                CONNECT WITH ME <span className="text-sm font-light">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fulfilling Life Section */}
            <section className="flex flex-col md:flex-row min-h-[700px] bg-[#E8E2D9]/20">
                <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 py-24 text-left">
                    <h2 className="text-4xl md:text-6xl font-serif text-[#2D3339] mb-12 italic font-light">
                        Live a fulfilling life.
                    </h2>
                    <div className="space-y-8 text-[17px] md:text-[19px] font-light text-[#2D3339] leading-[1.8] max-w-lg opacity-80">
                        <p>
                            Life can be challenging—especially when you're trying to balance your personal and professional life.
                        </p>
                        <p>
                            It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                        </p>
                    </div>
                    <div className="mt-16">
                        <a
                            href="/contact"
                            className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#2D3339] border-b border-[#2D3339]/30 pb-1 hover:border-[#2D3339] transition-all"
                        >
                            GET IN TOUCH →
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-[#D1CEC5] overflow-hidden flex items-center justify-center min-h-[500px] relative">
                    <div className="text-[#2D3339]/40 uppercase tracking-[0.5em] text-xs font-medium">
                        img2
                    </div>
                </div>
            </section>
        </div>
    );
}
