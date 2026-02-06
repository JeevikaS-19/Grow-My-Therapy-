import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard: React.FC<{ title: string; date: string; index: number; slug: string }> = ({ title, date, index, slug }) => (
  <Link to={`/blog/${slug}`} className="group cursor-pointer block">
    <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#D1D9E0] flex items-center justify-center border border-[#2D3339]/5">
      <span className="text-3xl text-[#2D3339]/20 serif-font italic font-light">img{index}</span>
    </div>
    <p className="text-[10px] text-[#2D3339]/50 tracking-widest mb-2 font-medium">{date}</p>
    <h3 className="text-2xl md:text-4xl serif-font text-[#2D3339] mb-4 font-light italic">{title}</h3>
    <span className="text-[10px] uppercase tracking-widest font-bold border-b-2 border-[#C28E7E] pb-1 group-hover:bg-[#C28E7E] group-hover:text-white transition-all">
      Read More
    </span>
  </Link>
);

const BlogPage: React.FC = () => {
  return (
    <div className="pt-56 px-10 pb-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-20 mb-32">
        <div className="w-full md:w-1/3">
          <div className="arched-image overflow-hidden aspect-[3/4] shadow-xl bg-[#D1D9E0] flex items-center justify-center text-center">
            <span className="text-4xl text-[#2D3339]/20 serif-font italic font-light">img10</span>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-7xl md:text-[6.5rem] serif-font text-[#2D3339] mb-8 font-light leading-tight">The Steady Ground Blog</h1>
          <div className="max-w-2xl space-y-6 text-2xl font-light text-[#2D3339]/70">
            <p>Reflections on healing, resilience, and finding your own steady ground in a fast-paced world.</p>
            <p className="font-bold text-[#C28E7E]">Welcome.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        <BlogCard
          title="Why “Functional” Isn't the Same as “Well”: The Cost of High-Functioning Anxiety"
          date="3/11/19"
          index={11}
          slug="blog-post-one"
        />
        <BlogCard
          title="The Missing Link in Recovery: Why Your Body Holds the Stress Your Mind Tries to Ignore"
          date="3/11/19"
          index={12}
          slug="blog-post-two"
        />
        <BlogCard
          title="Radical Boundaries: Reframing Self-Preservation as a High-Performance Strategy"
          date="3/11/19"
          index={13}
          slug="blog-post-three"
        />
        <BlogCard
          title="The Architecture of Calm: How Your Environment Dictates Your Internal State"
          date="3/11/19"
          index={14}
          slug="blog-post-four"
        />
      </div>

      <div className="mt-40 bg-[#C28E7E] p-20 text-center text-white shadow-2xl">
        <div className="max-w-2xl mx-auto border border-white/30 p-16">
          <h2 className="text-5xl serif-font mb-6 font-light">Subscribe</h2>
          <p className="text-lg font-light opacity-80 mb-10">Sign up with your email address to receive news and updates from my practice.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow bg-[#E0E5E9] text-[#2D3339] px-6 py-4 text-sm focus:outline-none placeholder-[#2D3339]/40"
            />
            <button className="bg-transparent border border-white px-10 py-6 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-[#C28E7E] transition-all">
              SIGN UP
            </button>
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest opacity-60">Your privacy is prioritized.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
