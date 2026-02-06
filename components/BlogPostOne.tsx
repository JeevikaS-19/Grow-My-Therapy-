import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPostOne: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="pt-40 bg-[#FAF8F6] min-h-screen">
            <div className="max-w-4xl mx-auto px-10 pb-40">
                <div className="text-center mb-16">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#333333]/60 mb-8 font-semibold">
                        Mar 11
                    </p>
                    <h1 className="text-6xl md:text-8xl serif-font text-[#4D5842] mb-12 italic font-light leading-tight">
                        Blog Post One
                    </h1>
                </div>

                <div className="space-y-10 text-xl md:text-2xl font-light text-[#333333]/80 leading-relaxed max-w-3xl mx-auto">
                    <p>
                        It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
                    </p>
                    <p>
                        Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.
                    </p>
                    <p>
                        Be clear, be confident and don't overthink it. The beauty of your story is that it's going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.
                    </p>
                </div>

                <div className="mt-32 pt-16 border-t border-[#4D5842]/10 flex justify-end">
                    <Link
                        to="/blog"
                        className="text-2xl md:text-3xl serif-font text-[#4D5842] hover:opacity-60 transition-opacity italic flex items-center gap-4"
                    >
                        Blog Post Two <span className="text-xl">→</span>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogPostOne;
