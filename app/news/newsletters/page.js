"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BookOpen, Sparkles, FileText, Users } from "lucide-react";

const NewsletterPublicationsPage = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll("[data-animate]");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#eef5fe]">
            {/* Hero Section with Floating Elements */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#166a98] via-[#1a7eb0] to-[#166a98]">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                    <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <BookOpen className="absolute top-32 left-1/4 w-16 h-16 text-white/20 animate-float" />
                    <FileText className="absolute top-48 right-1/4 w-12 h-12 text-white/20 animate-float" style={{ animationDelay: "0.5s" }} />
                    <Sparkles className="absolute bottom-40 left-1/3 w-14 h-14 text-white/20 animate-float" style={{ animationDelay: "1s" }} />
                    <Users className="absolute bottom-32 right-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            Newsletter Publications
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            A proud moment for LURS - launching our very first newsletter, marking a significant milestone in our journey
                        </p>

                        {/* Stats Cards with Glass Morphism */}
                        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <BookOpen className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">First Newsletter</div>
                                <div className="text-white/80 text-sm">Official launch celebration</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <FileText className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Milestone Achievement</div>
                                <div className="text-white/80 text-sm">Growing together</div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0) rotate(0deg);
                        }
                        50% {
                            transform: translateY(-20px) rotate(5deg);
                        }
                    }

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

                    .animate-float {
                        animation: float 6s ease-in-out infinite;
                    }

                    .animate-gradient {
                        animation: gradient 4s linear infinite;
                    }
                `}</style>
            </section>

            {/* Main Content Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Newsletter Launch Section */}
                    <div
                        id="newsletter-launch"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible["newsletter-launch"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image Section */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#166a98]/20 to-transparent rounded-3xl"></div>
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="https://i.ibb.co.com/Nd7xdhQV/newsletter.jpg"
                                        alt="LURS Newsletter Launch"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#166a98] to-[#1a7eb0] text-white px-6 py-3 rounded-full shadow-lg">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="font-bold text-sm">Milestone Achievement</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-[#166a98] leading-tight">
                                    First LURS Newsletter Launch
                                </h2>

                                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                    <p>
                                        <strong className="text-[#166a98]">We are thrilled to share</strong> that the Leading University Research Society (LURS) has successfully held our 1st Associate Member Reception and General Meeting!
                                    </p>

                                    <p>
                                        It was an inspiring day filled with enthusiasm, learning, and new beginnings. We were honored to have our <strong className="text-[#166a98]">Respected Co-Advisor Sir</strong> present at the event, whose valuable presence truly made the occasion special.
                                    </p>

                                    <div className="backdrop-blur-lg bg-[#166a98]/10 rounded-2xl p-6 border border-[#166a98]/20">
                                        <p className="font-semibold text-[#166a98] mb-3 flex items-center gap-2">
                                            <FileText className="w-5 h-5" />
                                            Newsletter Highlight
                                        </p>
                                        <p>
                                            A proud moment for us all was the <strong>official launch of our very first NEWSLETTER</strong>, graciously unveiled by our Co-Advisor Sir. This marks a significant milestone in our journey, and we&apos;re excited for what lies ahead!
                                        </p>
                                    </div>

                                    <p>
                                        This newsletter represents more than just a publication – it&apos;s a testament to our commitment to fostering research excellence, building community, and sharing knowledge. Through these pages, we aim to celebrate achievements, highlight research endeavors, and strengthen the bonds within our academic community.
                                    </p>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-4 pt-6">
                                    <div className="text-center p-4 backdrop-blur-sm bg-white/80 rounded-xl border border-[#166a98]/20 hover:shadow-lg transition-shadow duration-300">
                                        <div className="text-3xl font-bold text-[#166a98] mb-1">1st</div>
                                        <div className="text-sm text-gray-600">Newsletter Edition</div>
                                    </div>
                                    <div className="text-center p-4 backdrop-blur-sm bg-white/80 rounded-xl border border-[#166a98]/20 hover:shadow-lg transition-shadow duration-300">
                                        <div className="text-3xl font-bold text-[#166a98] mb-1">40+</div>
                                        <div className="text-sm text-gray-600">New Members</div>
                                    </div>
                                    <div className="text-center p-4 backdrop-blur-sm bg-white/80 rounded-xl border border-[#166a98]/20 hover:shadow-lg transition-shadow duration-300">
                                        <div className="text-3xl font-bold text-[#166a98] mb-1">100%</div>
                                        <div className="text-sm text-gray-600">Dedication</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Future Vision Section */}
                    <div
                        id="future-vision"
                        data-animate
                        className={`mt-24 transform transition-all duration-1000 ${isVisible["future-vision"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="backdrop-blur-lg bg-white/90 rounded-3xl p-8 md:p-12 shadow-2xl border border-[#166a98]/20">
                            <div className="text-center max-w-4xl mx-auto">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#166a98] to-[#1a7eb0] text-white px-6 py-3 rounded-full shadow-lg mb-6">
                                    <Sparkles className="w-5 h-5" />
                                    <span className="font-bold text-sm">Looking Ahead</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-[#166a98] mb-6">
                                    A New Chapter Begins
                                </h3>

                                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                    With the launch of our first newsletter, we embark on a new journey of knowledge sharing, community building, and research excellence. This publication will serve as a platform to showcase our achievements, share insights, and celebrate the incredible work of our members.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="p-6 backdrop-blur-sm bg-[#166a98]/5 rounded-2xl hover:bg-[#166a98]/10 transition-all duration-300">
                                        <BookOpen className="w-12 h-12 text-[#166a98] mx-auto mb-4" />
                                        <h4 className="font-bold text-[#166a98] mb-2">Knowledge Sharing</h4>
                                        <p className="text-sm text-gray-600">Disseminating research findings and academic insights</p>
                                    </div>
                                    <div className="p-6 backdrop-blur-sm bg-[#166a98]/5 rounded-2xl hover:bg-[#166a98]/10 transition-all duration-300">
                                        <Users className="w-12 h-12 text-[#166a98] mx-auto mb-4" />
                                        <h4 className="font-bold text-[#166a98] mb-2">Community Building</h4>
                                        <p className="text-sm text-gray-600">Strengthening bonds within our research society</p>
                                    </div>
                                    <div className="p-6 backdrop-blur-sm bg-[#166a98]/5 rounded-2xl hover:bg-[#166a98]/10 transition-all duration-300">
                                        <Sparkles className="w-12 h-12 text-[#166a98] mx-auto mb-4" />
                                        <h4 className="font-bold text-[#166a98] mb-2">Celebrating Success</h4>
                                        <p className="text-sm text-gray-600">Highlighting achievements and milestones</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsletterPublicationsPage;
