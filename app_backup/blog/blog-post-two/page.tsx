import Link from "next/link";

export default function BlogPostTwo() {
    return (
        <div className="max-w-3xl mx-auto py-20">
            <Link href="/blog" className="text-[10px] uppercase tracking-widest font-bold text-accent mb-12 inline-block">
                ← Back to Blog
            </Link>
            <h1 className="text-5xl md:text-7xl italic mb-12">Blog Post Two</h1>
            <div className="prose prose-slate max-w-none opacity-80 leading-relaxed space-y-6 text-lg">
                <p>This is a placeholder for your second blog post.</p>
            </div>
        </div>
    );
}
