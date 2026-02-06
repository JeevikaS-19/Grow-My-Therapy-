import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#FAF8F6] pt-32 pb-16 px-8 border-t border-[#2D3339]/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-24">
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-serif text-[#2D3339] italic font-medium">Lilac Template</h3>
                        <p className="text-[14px] leading-relaxed text-[#2D3339]/60 max-w-[240px]">
                            Find your steady ground. <br />Professional therapy for adults in Minneapolis, MN.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#2D3339]/30">Explore</h4>
                        <nav className="flex flex-col gap-4 text-[14px] text-[#2D3339]/80 font-medium">
                            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
                            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-8">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#2D3339]/30">Connect</h4>
                        <div className="flex flex-col gap-4">
                            <p className="text-[14px] text-[#2D3339] font-medium">email@example.com</p>
                            <p className="text-[13px] text-[#2D3339]/40 mt-4 tracking-wider leading-relaxed">
                                123 Example Road <br />
                                Minneapolis, MN 55401
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-[#2D3339]/5 gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#2D3339]/30">© 2024 Lilac Template</p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D3339]/30">
                        <a href="#" className="hover:text-[#2D3339]">Privacy Policy</a>
                        <a href="#" className="hover:text-[#2D3339]">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
