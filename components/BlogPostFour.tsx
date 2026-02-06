import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostFour: React.FC = () => {
    return (
        <article className="pt-40 bg-[#e8ebed] min-h-screen transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-10 pb-40">
                <div className="text-center mb-16">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#2c3f70]/60 mb-8 font-bold">
                        Mar 11
                    </p>
                    <h1 className="text-6xl md:text-8xl serif-font text-[#2c3f70] mb-12 font-bold leading-tight">
                        The Architecture of Calm: How Your Environment Dictates Your Internal State
                    </h1>
                </div>

                <div className="space-y-10 text-xl md:text-2xl font-normal text-[#2c3f70]/80 leading-relaxed max-w-3xl mx-auto">
                    <p>
                        Our external environment dictates our internal chemistry more than we realize. Constant noise, clutter, and digital stimulation keep our brains in a state of low-grade "alarm."
                    </p>
                    <p>
                        This post explores the concept of an environmental "reset." We dive into the intentional design of our Santa Monica office—from the minimalist color palette to the abundance of natural light—and explain how these elements facilitate an immediate shift from the high-octane chaos of daily life to a state of receptive calm. Finally, we offer practical tips on how to curate your own "Sanctuary Zones" at home to trigger an immediate relaxation response in the brain the moment you step through the door.
                    </p>
                </div>

                <div className="mt-32 pt-16 border-t border-[#2c3f70]/10 flex justify-start items-center text-left">
                    <Link
                        to="/blog/blog-post-three"
                        className="text-2xl md:text-3xl serif-font text-[#2c3f70] hover:text-[#a5231c] transition-colors italic flex items-center gap-4 group"
                    >
                        <div className="flex flex-col items-start">
                            <span className="text-xs uppercase tracking-widest font-bold mb-2 not-italic text-[#a5231c]">Previous Post</span>
                            <span><span className="text-xl group-hover:-translate-x-2 transition-transform inline-block mr-2">←</span> Radical Boundaries</span>
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogPostFour;
