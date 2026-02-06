import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostTwo: React.FC = () => {
    return (
        <article className="pt-40 bg-[#e8ebed] min-h-screen transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-10 pb-40">
                <div className="text-center mb-16">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#2c3f70]/60 mb-8 font-bold">
                        Mar 11
                    </p>
                    <h1 className="text-6xl md:text-8xl serif-font text-[#2c3f70] mb-12 font-bold leading-tight">
                        The Missing Link in Recovery: Why Your Body Holds the Stress Your Mind Tries to Ignore
                    </h1>
                </div>

                <div className="space-y-10 text-xl md:text-2xl font-normal text-[#2c3f70]/80 leading-relaxed max-w-3xl mx-auto">
                    <p>
                        Most high-level professionals are excellent at logic and analysis. However, when trauma or chronic stress gets trapped in the nervous system, logic isn’t enough to talk it out.
                    </p>
                    <p>
                        This post dives into the science of Somatic Experiencing and EMDR (Eye Movement Desensitization and Reprocessing). We discuss why "thinking" your way out of a panic attack or "analyzing" your way out of burnout often feels like running in circles. By shifting the focus from the narrative of what happened to the physiological sensations of safety, we can unlock the patterns keeping you stuck in a state of hyper-vigilance, allowing your nervous system to finally come home.
                    </p>
                </div>

                <div className="mt-32 pt-16 border-t border-[#2c3f70]/10 flex justify-between items-center text-left">
                    <Link
                        to="/blog/blog-post-one"
                        className="text-2xl md:text-3xl serif-font text-[#2c3f70] hover:text-[#a5231c] transition-colors italic flex items-center gap-4 group"
                    >
                        <div className="flex flex-col items-start">
                            <span className="text-xs uppercase tracking-widest font-bold mb-2 not-italic text-[#a5231c]">Previous Post</span>
                            <span><span className="text-xl group-hover:-translate-x-2 transition-transform inline-block mr-2">←</span> High-Functioning Anxiety</span>
                        </div>
                    </Link>
                    <Link
                        to="/blog/blog-post-three"
                        className="text-2xl md:text-3xl serif-font text-[#2c3f70] hover:text-[#a5231c] transition-colors italic flex items-center gap-4 group text-right justify-end"
                    >
                        <div className="flex flex-col items-end">
                            <span className="text-xs uppercase tracking-widest font-bold mb-2 not-italic text-[#a5231c]">Next Post</span>
                            <span>Radical Boundaries <span className="text-xl group-hover:translate-x-2 transition-transform inline-block ml-2">→</span></span>
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogPostTwo;
