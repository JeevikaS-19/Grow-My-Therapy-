import React from 'react';
import { Link } from 'react-router-dom';

const PlaceholderPage: React.FC = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-10 py-32 text-center bg-[#F2F5F7]">
            <div className="max-w-4xl w-full">
                <p className="text-xl md:text-2xl font-light text-[#1A1E22] mb-12 leading-relaxed">
                    We couldn't find the page you were looking for. This is either because:
                </p>

                <ul className="text-left max-w-2xl mx-auto space-y-4 mb-16 text-lg font-light text-[#1A1E22]/80 list-disc pl-6">
                    <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
                    <li>The page you are looking for has been moved or deleted.</li>
                </ul>

                <p className="text-xl md:text-2xl font-light text-[#1A1E22] leading-relaxed">
                    You can return to our homepage by clicking{' '}
                    <Link to="/" className="underline underline-offset-4 decoration-[#2A5D67]/30 hover:decoration-[#2A5D67] transition-colors">
                        here
                    </Link>
                    , or you can try searching for the content you are seeking by clicking{' '}
                    <Link to="/" className="underline underline-offset-4 decoration-[#2A5D67]/30 hover:decoration-[#2A5D67] transition-colors">
                        here
                    </Link>.
                </p>
            </div>

            {/* Visual Divider to separate from footer properly if needed, 
          though the footer itself has its own spacing */}
            <div className="w-full border-t border-[#1A1E22]/10 mt-24"></div>
        </div>
    );
};

export default PlaceholderPage;
