export default function ContactPage() {
    return (
        <div className="py-20 flex flex-col items-center text-center">
            <h1 className="text-6xl italic mb-12">Contact</h1>
            <p className="max-w-xl text-xl opacity-60 mb-20 leading-relaxed">
                I look forward to hearing from you. Please reach out via email to schedule a consult.
            </p>
            <div className="space-y-4">
                <p className="text-accent text-3xl font-serif">email@example.com</p>
                <p className="text-slate/40 tracking-widest uppercase text-xs font-bold">Minneapolis, MN</p>
            </div>
        </div>
    );
}
