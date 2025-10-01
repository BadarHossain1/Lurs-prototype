"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    BookOpen,
    Users,
    Award,
    Globe,
    Network,
    Lightbulb,
    Trophy,
    GraduationCap,
    Sparkles,
    Star,
    CheckCircle,
    ArrowRight,
    UserPlus,
    Calendar,
    MessageCircle
} from "lucide-react";

const MembershipBenefitsPage = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target && entry.target.id) {
                        if (entry.isIntersecting) {
                            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observer.observe(el));

        const fallback = setTimeout(() => {
            elements.forEach((el) => {
                if (el && el.id) {
                    setIsVisible((prev) => ({ ...prev, [el.id]: true }));
                }
            });
        }, 700);

        return () => {
            observer.disconnect();
            clearTimeout(fallback);
        };
    }, []);

    const benefits = [
        {
            icon: BookOpen,
            title: "Research Opportunities",
            description: "Access to cutting-edge research projects and academic collaboration opportunities with faculty members.",
            features: ["Research project participation", "Publication opportunities", "Academic mentorship", "Research funding access"]
        },
        {
            icon: Network,
            title: "Professional Network",
            description: "Connect with like-minded researchers, industry professionals, and alumni across various fields.",
            features: ["Alumni network access", "Industry connections", "Peer collaboration", "Professional references"]
        },
        {
            icon: GraduationCap,
            title: "Skill Development",
            description: "Enhance your research skills through workshops, training sessions, and hands-on experience.",
            features: ["Research methodology training", "Academic writing workshops", "Technical skill development", "Presentation skills"]
        },
        {
            icon: Globe,
            title: "International Exposure",
            description: "Participate in international conferences, competitions, and research exchange programs.",
            features: ["Conference participation", "International collaborations", "Exchange programs", "Global research network"]
        },
        {
            icon: Award,
            title: "Recognition & Awards",
            description: "Get recognized for your research contributions through awards, scholarships, and certificates.",
            features: ["Research awards", "Scholarship opportunities", "Certificate programs", "Academic recognition"]
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Join a supportive community of researchers who share knowledge, resources, and experiences.",
            features: ["Peer support", "Knowledge sharing", "Resource access", "Collaborative environment"]
        }
    ];

    const testimonials = [
        {
            name: "Sarah Ahmed",
            department: "Computer Science",
            message: "LURS opened doors to international research collaborations I never imagined possible.",
            avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
        },
        {
            name: "Mohammad Rahman",
            department: "Engineering",
            message: "The mentorship and research opportunities helped me publish my first paper.",
            avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
        },
        {
            name: "Fatima Khan",
            department: "Business",
            message: "The professional network I built through LURS was invaluable for my career.",
            avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 8s ease infinite;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 7s ease-in-out infinite;
                }
                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary)]/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-sky-200/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-200/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-sky-300/15 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <Trophy className="absolute top-1/4 left-1/5 w-10 h-10 text-[var(--primary)]/30 animate-float" />
                    <Star className="absolute top-1/3 right-1/4 w-8 h-8 text-sky-500/40 animate-float-delayed" />
                    <Sparkles className="absolute bottom-1/3 left-1/3 w-7 h-7 text-blue-500/35 animate-pulse" />
                    <Award className="absolute bottom-1/4 right-1/5 w-9 h-9 text-sky-500/30 animate-float" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <div className="animate-fade-in-up">
                        {/* Icon Group */}
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <Star className="w-14 h-14 text-[var(--primary)] animate-pulse-glow" />
                            <div className="h-14 w-1 bg-gradient-to-b from-[var(--primary)] via-sky-400 to-transparent rounded-full"></div>
                            <Trophy className="w-12 h-12 text-sky-500 animate-pulse" />
                            <div className="h-12 w-0.5 bg-gradient-to-b from-sky-400 to-transparent rounded-full"></div>
                            <Award className="w-10 h-10 text-blue-600" />
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] via-sky-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                            Membership
                        </h1>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-sky-500 via-blue-500 to-[var(--primary)] bg-clip-text text-transparent animate-gradient">
                            Benefits
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Unlock your research potential and accelerate your academic journey with exclusive LURS membership benefits
                        </p>

                        {/* CTA Button */}
                        <Link
                            href="/membership/join-now"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-sky-600 hover:from-[var(--primary)]/90 hover:to-sky-600/90 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <UserPlus className="w-6 h-6" />
                            Join LURS Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div
                        id="benefits-grid"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['benefits-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-sky-600 bg-clip-text text-transparent">
                                Why Join LURS?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover the exclusive advantages that come with being part of Leading University Research Society
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 p-4 bg-gradient-to-br from-[var(--primary)]/10 to-sky-100 rounded-2xl group-hover:from-[var(--primary)]/20 group-hover:to-sky-200 transition-all duration-300">
                                            <benefit.icon className="w-8 h-8 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300" />
                                        </div>

                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {benefit.description}
                                            </p>

                                            <div className="space-y-2">
                                                {benefit.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        <span className="text-sm text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-[var(--primary)]/5 to-sky-100/50">
                <div className="max-w-6xl mx-auto">
                    <div
                        id="statistics"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['statistics'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-sky-600 bg-clip-text text-transparent">
                                LURS Impact
                            </h2>
                            <p className="text-xl text-gray-600">
                                Numbers that speak for our community&apos;s success
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { icon: Users, number: "500+", label: "Active Members", color: "text-[var(--primary)]" },
                                { icon: BookOpen, number: "120+", label: "Research Projects", color: "text-sky-600" },
                                { icon: Award, number: "45+", label: "Awards Won", color: "text-blue-600" },
                                { icon: Globe, number: "25+", label: "International Collaborations", color: "text-sky-500" }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                                        <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-600 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div
                        id="testimonials"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['testimonials'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-sky-600 bg-clip-text text-transparent">
                                Member Success Stories
                            </h2>
                            <p className="text-xl text-gray-600">
                                Hear from our members about their journey with LURS
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                                            <p className="text-gray-600 text-sm">{testimonial.department}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 italic leading-relaxed">
                                        &quot;{testimonial.message}&quot;
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 bg-gradient-to-r from-[var(--primary)] via-sky-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div
                    className="max-w-4xl mx-auto text-center text-white relative z-10"
                    id="cta-section"
                    data-animate
                >
                    <div className={`transform transition-all duration-1000 ${isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-90'}`}>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <UserPlus className="w-12 h-12 animate-pulse" />
                            <Users className="w-10 h-10" />
                            <Trophy className="w-12 h-12 animate-pulse-glow" />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your Research Journey?
                        </h3>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Join LURS today and become part of a thriving research community that will accelerate your academic and professional growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/membership/join-now"
                                className="inline-flex items-center gap-3 bg-white text-[var(--primary)] hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            >
                                <UserPlus className="w-6 h-6" />
                                Join Now - Only ৳100
                            </Link>

                            <Link
                                href="/membership/contact"
                                className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] font-bold py-4 px-8 rounded-2xl transition-all duration-300"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Have Questions?
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MembershipBenefitsPage;