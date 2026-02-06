import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard: React.FC<{ title: string; date: string; index: number }> = ({ title, date, index }) => (
  <Link to="/blog/blog-post-one" className="group cursor-pointer block">
    <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#E8E2D9] flex items-center justify-center">
      <span className="text-3xl text-[#4D5842]/20 serif-font">{index}</span>
    </div>
    <p className="text-[10px] text-[#333333]/50 tracking-widest mb-2 font-medium">{date}</p>
    <h3 className="text-2xl md:text-4xl serif-font text-[#4D5842] mb-4 font-light italic">{title}</h3>
    <span className="text-[10px] uppercase tracking-widest font-semibold border-b border-[#4D5842]/30 pb-1 group-hover:border-[#4D5842] transition-all">
      Read More
    </span>
  </Link>
);

const BlogPage: React.FC = () => {
  return (
    <div className="pt-40 px-10 pb-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-20 mb-32">
        <div className="w-full md:w-1/3">
          <div className="arched-image overflow-hidden aspect-[3/4] shadow-xl bg-[#E8E2D9] flex items-center justify-center">
            <span className="text-4xl text-[#4D5842]/20 serif-font">10</span>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-6xl md:text-8xl serif-font text-[#4D5842] mb-8 font-light italic leading-tight">The Lilac Blog</h1>
          <div className="max-w-md space-y-4 text-lg font-light text-[#333333]/70">
            <p>My tiny corner of the internet where I talk about all things healing, heart, and wholeness.</p>
            <p className="font-semibold text-[#4D5842]">Glad you're here.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        <BlogCard
          title="Blog Post One"
          date="3/11/19"
          index={11}
        />
        <BlogCard
          title="Blog Post Two"
          date="3/11/19"
          index={12}
        />
        <BlogCard
          title="Blog Post Three"
          date="3/11/19"
          index={13}
        />
        <BlogCard
          title="Blog Post Four"
          date="3/11/19"
          index={14}
        />
      </div>

      <div className="mt-40 bg-[#4D5842] p-20 text-center text-[#FAF8F6]">
        <div className="max-w-xl mx-auto border border-white/20 p-12">
          <h2 className="text-4xl serif-font mb-6 italic">Subscribe</h2>
          <p className="text-sm font-light opacity-80 mb-10">Sign up with your email address to receive news and updates.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow bg-[#FAF8F6] text-[#333333] px-6 py-4 text-sm focus:outline-none"
            />
            <button className="bg-transparent border border-[#FAF8F6] px-10 py-4 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#FAF8F6] hover:text-[#4D5842] transition-all">
              SIGN UP
            </button>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-widest opacity-60">We respect your privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
