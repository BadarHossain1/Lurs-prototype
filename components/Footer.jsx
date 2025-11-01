"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const footer = document.getElementById('footer');
        if (footer) observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    return (
        <footer id="footer" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 text-9xl animate-float">🎓</div>
                <div className="absolute top-20 right-20 text-8xl animate-float-delayed">📚</div>
                <div className="absolute bottom-20 left-1/3 text-7xl animate-spin-slow">🌍</div>
                <div className="absolute bottom-10 right-1/4 text-8xl animate-float">🔬</div>
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#176b98]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#176b98]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1 - Logo & About */}
                    <div
                        className="group"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 0.6s ease'
                        }}
                    >
                        <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                            <div className="relative w-32 h-32">
                                <Image
                                    src="/apple-touch-icon.png"
                                    alt="LURS Logo"
                                    width={120}
                                    height={120}
                                    className="object-contain animate-float"
                                />
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                            Leading University Research Society - Empowering knowledge Through research
                        </p>
                        <div className="flex space-x-3">
                            <Link
                                href="https://www.facebook.com/lursbd"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:bg-[#176b98] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/20"
                            >
                                <span className="text-sm font-bold">f</span>
                            </Link>
                            <Link
                                href="https://www.instagram.com/lursbd"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/20"
                            >
                                <span className="text-sm font-bold">📷</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/lursbd/"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-white/20"
                            >
                                <span className="text-sm font-bold">in</span>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2 - Navigation Menus */}
                    <div
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 0.6s ease 0.1s'
                        }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-[#176b98]">WHAT WE DO</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                                    <span className="mr-2 text-[#176b98]">→</span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/founding-committee" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                                    <span className="mr-2 text-[#176b98]">→</span>
                                    Founding Committee
                                </Link>
                            </li>
                            <li>
                                <Link href="/advisors-committees" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                                    <span className="mr-2 text-[#176b98]">→</span>
                                    Advisors & Committees
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - More Navigation Menus */}
                    <div
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 0.6s ease 0.2s'
                        }}
                    >
                    

                        <h3 className="text-xl font-bold mb-6  text-[#176b98]">MEMBERSHIP</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/membership/join-now" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                                    <span className="mr-2 text-[#176b98]">→</span>
                                    Join Now
                                </Link>
                            </li>
                            <li>
                                <Link href="/membership/benefits" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                                    <span className="mr-2 text-[#176b98]">→</span>
                                    Membership Benefits
                                </Link>
                            </li>
                            <li>
                                <Link href="/membership/contact" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                                    <span className="mr-2 text-[#176b98]">→</span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact Info */}
                    <div
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 0.6s ease 0.3s'
                        }}
                    >
                        <h3 className="text-xl font-bold mb-6 text-[#176b98] flex items-center">
                            <span className="mr-2 text-2xl animate-pulse">📞</span>
                            Contact Info
                        </h3>
                        <div className="space-y-4 text-gray-300 text-sm">
                            <div className="flex items-start p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                                <span className="mr-3 text-lg">📍</span>
                                <p>Leading University<br />Ragibnagar, South Surma<br />Sylhet, Bangladesh</p>
                            </div>
                            
                            <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10">
                                <span className="mr-3 text-lg">✉️</span>
                                <p>
lurs@lus.ac.bd</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="border-t border-white/10 pt-8 mt-8"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.8s ease 0.4s'
                    }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 Leading University Research Society. All rights reserved.
                        </p>
                        
                    </div>

                    {/* Decorative "Back to top" button */}
                    <div className="text-center mt-8">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group px-6 py-3 bg-[#176b98]/20 backdrop-blur-sm border border-[#176b98]/40 rounded-full text-[#176b98] hover:bg-[#176b98] hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-[#176b98]/50"
                        >
                            <span className="flex items-center">
                                <span className="mr-2 group-hover:animate-bounce">↑</span>
                                Back to Top
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(-5deg);
                    }
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 30s linear infinite;
                }

                /* Backdrop blur support */
                @supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
                    .backdrop-blur-sm {
                        backdrop-filter: blur(4px);
                        -webkit-backdrop-filter: blur(4px);
                    }
                    .backdrop-blur-md {
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;