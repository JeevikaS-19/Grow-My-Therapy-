"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAF8F6] border-b border-slate/5">
            <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center text-[#2D3339]">
                <Link href="/" className="text-2xl md:text-3xl font-serif font-medium tracking-tight">
                    Lilac Template
                </Link>
                <div className="flex gap-12 text-[15px] font-normal tracking-wide uppercase">
                    <Link href="/blog" className="hover:opacity-60 transition-opacity tracking-[0.1em]">Blog</Link>
                    <Link href="/contact" className="hover:opacity-60 transition-opacity tracking-[0.1em]">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
