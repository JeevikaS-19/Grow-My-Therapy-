import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostThree: React.FC = () => {
    return (
        <article className="pt-40 bg-[#e8ebed] min-h-screen transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-10 pb-40">
                <div className="text-center mb-16">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#2c3f70]/60 mb-8 font-bold">
                        Mar 11
                    </p>
                    <h1 className="text-6xl md:text-8xl serif-font text-[#2c3f70] mb-12 font-bold leading-tight">
                        Radical Boundaries: Reframing Self-Preservation as a High-Performance Strategy
                    </h1>
                </div>

                <div className="space-y-10 text-xl md:text-2xl font-normal text-[#2c3f70]/80 leading-relaxed max-w-3xl mx-auto">
                    <p>
                        Ambitious people often fear that if they slow down, they will lose their edge. This misconception is what leads to the "crash and burn" cycle common in entrepreneurship and creative fields. In reality, burnout is the single greatest threat to your long-term performance and decision-making.
                    </p>
                    <p>
                        This post reframes boundaries not as a series of "no's," but as a strategic protection of your highest-value asset: your focused energy. We provide a no-nonsense guide to establishing professional guardrails—such as digital sunsets and energetic triage—that fuel your competitive drive rather than hindering it, ensuring your success is as sustainable as it is significant.
                    </p>
                </div>

                <div className="mt-32 pt-16 border-t border-[#2c3f70]/10 flex justify-between items-center text-left">
                    <Link
                        to="/blog/blog-post-two"
                        className="text-2xl md:text-3xl serif-font text-[#2c3f70] hover:text-[#a5231c] transition-colors italic flex items-center gap-4 group"
                    >
                        <div className="flex flex-col items-start">
                            <span className="text-xs uppercase tracking-widest font-bold mb-2 not-italic text-[#a5231c]">Previous Post</span>
                            <span><span className="text-xl group-hover:-translate-x-2 transition-transform inline-block mr-2">←</span> Missing Link in Recovery</span>
                        </div>
                    </Link>
                    <Link
                        to="/blog/blog-post-four"
                        className="text-2xl md:text-3xl serif-font text-[#2c3f70] hover:text-[#a5231c] transition-colors italic flex items-center gap-4 group text-right justify-end"
                    >
                        <div className="flex flex-col items-end">
                            <span className="text-xs uppercase tracking-widest font-bold mb-2 not-italic text-[#a5231c]">Next Post</span>
                            <span>Architecture of Calm <span className="text-xl group-hover:translate-x-2 transition-transform inline-block ml-2">→</span></span>
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogPostThree;
