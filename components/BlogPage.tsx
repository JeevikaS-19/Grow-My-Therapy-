import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const BlogCard: React.FC<{ title: string; date: string; index: number }> = ({ title, date, index }) => (
  <Link to="/blog/blog-post-one" className="group cursor-pointer block">
    <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#E8E2D9] flex items-center justify-center">
      <span className="text-3xl text-[#4D5842]/20 serif-font">{index}</span>
    </div>
    <p className="text-[10px] text-[#333333]/50 tracking-widest mb-2 font-medium">{date}</p>
    <h3 className="text-2xl md:text-4xl serif-font text-[#4D5842] mb-4 font-light italic">{title}</h3>
    <span className="text-[10px] uppercase tracking-widest font-semibold border-b border-[#4D5842]/30 pb-1 group-hover:border-[#4D5842] transition-all">
=======
const BlogCard: React.FC<{ title: string; date: string; label: string }> = ({ title, date, label }) => (
  <div className="group cursor-pointer">
    <div className="aspect-[16/10] overflow-hidden mb-6 img-placeholder">
      {label}
    </div>
    <p className="text-xs text-[#333333]/50 tracking-widest mb-2 font-medium">{date}</p>
    <h3 className="text-3xl md:text-5xl serif-font text-[#4D5842] mb-4 font-light italic">{title}</h3>
    <button className="text-xs uppercase tracking-widest font-semibold border-b-2 border-[#4D5842]/30 pb-1 group-hover:border-[#4D5842] transition-all">
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
      Read More
    </span>
  </Link>
);

const BlogPage: React.FC = () => {
  return (
    <div className="pt-56 px-10 pb-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-20 mb-32">
        <div className="w-full md:w-1/3">
<<<<<<< HEAD
          <div className="arched-image overflow-hidden aspect-[3/4] shadow-xl bg-[#E8E2D9] flex items-center justify-center">
            <span className="text-4xl text-[#4D5842]/20 serif-font">10</span>
=======
          <div className="arched-image overflow-hidden aspect-[3/4] shadow-xl img-placeholder max-w-[500px] mx-auto">
            Img 10
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-7xl md:text-[6.5rem] serif-font text-[#4D5842] mb-8 font-light italic leading-tight">The Lilac Blog</h1>
          <div className="max-w-2xl space-y-6 text-2xl font-light text-[#333333]/70">
            <p>My tiny corner of the internet where I talk about all things healing, heart, and wholeness.</p>
            <p className="font-semibold text-[#4D5842]">Glad you're here.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
<<<<<<< HEAD
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
=======
        <BlogCard title="Blog Post One" date="3/11/19" label="Img 11" />
        <BlogCard title="Blog Post Two" date="3/11/19" label="Img 12" />
        <BlogCard title="Blog Post Three" date="3/11/19" label="Img 13" />
        <BlogCard title="Blog Post Four" date="3/11/19" label="Img 14" />
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
      </div>

      <div className="mt-40 bg-[#4D5842] p-20 text-center text-[#FAF8F6]">
        <div className="max-w-2xl mx-auto border border-white/20 p-16">
          <h2 className="text-5xl serif-font mb-6 italic">Subscribe</h2>
          <p className="text-lg font-light opacity-80 mb-10">Sign up with your email address to receive news and updates.</p>
          <div className="flex flex-col md:flex-row gap-4">
<<<<<<< HEAD
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow bg-[#FAF8F6] text-[#333333] px-6 py-4 text-sm focus:outline-none"
=======
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow bg-[#FAF8F6] text-[#333333] px-8 py-6 text-lg focus:outline-none"
>>>>>>> 3fc2329ba5ba5efc9cdd25fce8090578a6f7dc9c
            />
            <button className="bg-transparent border border-[#FAF8F6] px-10 py-6 text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF8F6] hover:text-[#4D5842] transition-all">
              SIGN UP
            </button>
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest opacity-60">We respect your privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
