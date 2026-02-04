
import React from 'react';

const BlogCard: React.FC<{ title: string; date: string; imageUrl: string }> = ({ title, date, imageUrl }) => (
  <div className="group cursor-pointer">
    <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#E8E2D9]">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <p className="text-[10px] text-[#333333]/50 tracking-widest mb-2 font-medium">{date}</p>
    <h3 className="text-2xl md:text-4xl serif-font text-[#4D5842] mb-4 font-light italic">{title}</h3>
    <button className="text-[10px] uppercase tracking-widest font-semibold border-b border-[#4D5842]/30 pb-1 group-hover:border-[#4D5842] transition-all">
      Read More
    </button>
  </div>
);

const BlogPage: React.FC = () => {
  return (
    <div className="pt-40 px-10 pb-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-20 mb-32">
        <div className="w-full md:w-1/3">
          <div className="arched-image overflow-hidden aspect-[3/4] shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
              alt="The Lilac Blog" 
              className="w-full h-full object-cover"
            />
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
          imageUrl="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800"
        />
        <BlogCard 
          title="Blog Post Two" 
          date="3/11/19" 
          imageUrl="https://images.unsplash.com/photo-1506485338023-6ce5f36692df?auto=format&fit=crop&q=80&w=800"
        />
        <BlogCard 
          title="Blog Post Three" 
          date="3/11/19" 
          imageUrl="https://images.unsplash.com/photo-1464333182101-71329a67a80b?auto=format&fit=crop&q=80&w=800"
        />
        <BlogCard 
          title="Blog Post Four" 
          date="3/11/19" 
          imageUrl="https://images.unsplash.com/photo-1550592704-6c76defa9985?auto=format&fit=crop&q=80&w=800"
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
