"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function DevelopmentTeamPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#eef5fe] via-white to-[#eef5fe] pt-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#166a98] via-[#1a7eb0] to-[#166a98] text-white overflow-hidden py-16">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                        The Development Team
                    </h1>
                    
                </div>

                <style jsx>{`
                    @keyframes gradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }

                    .animate-gradient {
                        animation: gradient 4s linear infinite;
                    }
                `}</style>
            </div>

            {/* Developer Card */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-md mx-auto">
                    <div className="group relative backdrop-blur-xl bg-gradient-to-br from-white via-white to-blue-50/30 rounded-3xl shadow-2xl overflow-hidden border-2 border-[#166a98]/30 hover:border-[#166a98] transition-all duration-700 transform hover:-translate-y-3 hover:shadow-3xl hover:shadow-[#166a98]/20">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#166a98]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        
                        {/* Badge */}
                        <div className="absolute top-4 right-4 z-10">
                            <div className="bg-[#166a98] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                                Developer
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <div className="relative h-80">
                                <Image
                                    src="/Badar.jpeg"
                                    alt="Badar Hossain"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                                />
                            </div>
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#166a98] via-[#166a98]/50 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                            
                            {/* Animated border */}
                            <div className="absolute inset-0 border-b-4 border-[#166a98] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-8 text-center bg-gradient-to-b from-transparent to-white/50">
                            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#166a98] transition-colors duration-300">
                                    Badar Hossain
                                </h2>
                                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#166a98] to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                            <p className="text-lg text-gray-700 font-semibold mb-6">
                                IT Secretary 2025-2026
                            </p>

                            {/* Social Links */}
                            <div className="flex justify-center gap-4">
                                <Link
                                    href="https://github.com/BadarHossain1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/icon flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                >
                                    <Github className="w-6 h-6" />
                                </Link>

                                <Link
                                    href="https://www.linkedin.com/in/badar-hossain1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/icon flex items-center justify-center w-12 h-12 bg-[#0077b5] text-white rounded-full hover:bg-[#006399] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </Link>

                                <Link
                                    href="https://badar-hossain-portfolio.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/icon flex items-center justify-center w-12 h-12 bg-[#166a98] text-white rounded-full hover:bg-[#1a7eb0] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                >
                                    <ExternalLink className="w-6 h-6" />
                                </Link>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#166a98] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 text-lg">
                            Passionate about creating beautiful and functional web experiences
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
