import Link from "next/link";

export default function BlogPage() {
    const posts = [
        { title: "Blog Post One", slug: "blog-post-one", date: "MAR 11" },
        { title: "Blog Post Two", slug: "blog-post-two", date: "MAR 11" },
    ];

    return (
        <div className="py-20">
            <h1 className="text-5xl italic mb-16">The Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {posts.map((post) => (
                    <div key={post.slug} className="group">
                        <div className="aspect-video bg-white/50 rounded-[40px] mb-8 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-slate/20 uppercase tracking-widest text-xs">Thumbnail</div>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">{post.date}</p>
                        <h2 className="text-3xl mb-6 group-hover:text-accent transition-colors cursor-pointer">{post.title}</h2>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-[10px] uppercase tracking-widest font-bold text-accent border-b border-accent/30 pb-1"
                        >
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
