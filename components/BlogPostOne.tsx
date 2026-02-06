import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPostOne: React.FC = () => {

    return (
        <article className="pt-40 bg-[#e8ebed] min-h-screen transition-colors duration-500">
            <div className="max-w-4xl mx-auto px-10 pb-40">
                <div className="text-center mb-16">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#2c3f70]/60 mb-8 font-bold">
                        Mar 11
                    </p>
                    <h1 className="text-6xl md:text-8xl serif-font text-[#2c3f70] mb-12 font-bold leading-tight">
                        Why “Functional” Isn't the Same as “Well”: The Cost of High-Functioning Anxiety
                    </h1>
                </div>

                <div className="space-y-10 text-xl md:text-2xl font-normal text-[#2c3f70]/80 leading-relaxed max-w-3xl mx-auto">
                    <p>
                        For the high-achiever, productivity is often used as a primary defense mechanism. If you are still meeting deadlines, closing deals, and showing up for your family, you tell yourself you are fine. But high-functioning anxiety is a quiet thief; it allows you to succeed while slowly stripping away your capacity for genuine rest.
                    </p>
                    <p>
                        In this post, we explore the "redline" effect—the physiological state where your engine is constantly running at max capacity despite appearing calm on the surface. We look at the subtle signs that your body is stuck in a chronic stress loop and discuss how to transition from merely performing your life to actually experiencing it.
                    </p>
                </div>

                <div className="mt-32 pt-16 border-t border-[#2c3f70]/10 flex justify-end">
                    <Link
                        to="/blog/blog-post-two"
                        className="text-2xl md:text-3xl serif-font text-[#2c3f70] hover:text-[#a5231c] transition-colors italic flex items-center gap-4 group text-right justify-end"
                    >
                        <div className="flex flex-col items-end">
                            <span className="text-xs uppercase tracking-widest font-bold mb-2 not-italic text-[#a5231c]">Next Post</span>
                            <span>The Missing Link in Recovery <span className="text-xl group-hover:translate-x-2 transition-transform inline-block ml-2">→</span></span>
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogPostOne;
