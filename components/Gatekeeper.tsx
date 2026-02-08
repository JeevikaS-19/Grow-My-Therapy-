import React, { useState, useEffect } from 'react';

interface GatekeeperProps {
    children: React.ReactNode;
}

const Gatekeeper: React.FC<GatekeeperProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const auth = sessionStorage.getItem('access_granted');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
        setIsMounted(true);
    }, []);

    const handleAccess = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'lilac') {
            sessionStorage.setItem('access_granted', 'true');
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPassword('');
        }
    };

    if (!isMounted) return null;

    if (!isAuthenticated) {
        return (
            <div className="fixed inset-0 bg-[#e8ebed] z-[9999] flex items-center justify-center p-6">
                <div className="max-w-md w-full text-center space-y-10 animate-fade-in">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl serif-font text-[#2c3f70] font-bold">
                            Private Access
                        </h1>
                        <p className="text-[#2c3f70] italic opacity-80 text-lg md:text-xl font-normal leading-relaxed">
                            Please enter the project access key to view the Dr. Maya Reynolds redesign.
                        </p>
                    </div>

                    <form onSubmit={handleAccess} className="space-y-6">
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Access Key"
                                className={`w-full bg-white/50 border ${error ? 'border-red-400' : 'border-[#2c3f70]/20'} px-6 py-5 focus:outline-none focus:border-[#2c3f70]/50 transition-colors text-[#2c3f70] placeholder-[#2c3f70]/40 font-normal text-lg`}
                                autoFocus
                            />
                            {error && (
                                <p className="absolute -bottom-6 left-0 text-xs text-[#a5231c] font-bold tracking-wider uppercase">
                                    Incorrect Key
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#a5231c] text-white py-6 text-xs uppercase tracking-[0.4em] font-bold serif-font hover:brightness-110 transition-all shadow-lg active:scale-[0.98]"
                        >
                            ENTER SITE
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in transition-opacity duration-1000">
            {children}
        </div>
    );
};

export default Gatekeeper;
