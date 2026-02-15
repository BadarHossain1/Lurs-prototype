"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Users, Award, Sparkles, Briefcase } from "lucide-react";

const AdvisorsCommittees = () => {
    const [isVisible, setIsVisible] = useState({});
    const [committeeMembers, setCommitteeMembers] = useState({
        "2023-2024": [],
        "2024-2025": [],
        "2025-2026": []
    });
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        fetchCommitteeMembers();
    }, []);

    const fetchCommitteeMembers = async () => {
        try {
            const response = await fetch('/api/committee-members');
            const data = await response.json();
            
            if (data.success) {
                const grouped = {
                    "2023-2024": [],
                    "2024-2025": [],
                    "2025-2026": []
                };
                
                data.members.forEach(member => {
                    if (grouped[member.year]) {
                        grouped[member.year].push(member);
                    }
                });
                
                setCommitteeMembers(grouped);
            }
        } catch (error) {
            console.error('Error fetching committee members:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#eef5fe] pt-20">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#166a98] via-[#1a7eb0] to-[#166a98] text-white overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-32 right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Users className="absolute top-24 left-1/4 w-12 h-12 text-white/20 animate-float" />
                    <Award className="absolute top-40 right-1/3 w-14 h-14 text-white/20 animate-float" style={{ animationDelay: "0.5s" }} />
                    <Briefcase className="absolute bottom-40 left-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1s" }} />
                </div>

                <div className="relative container mx-auto px-4 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            Advisors & Committees
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            Meet the visionary leaders and dedicated committees guiding our research society towards excellence and innovation
                        </p>
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
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">

                    {/* Advisors Section */}
                    <div className="mb-20">
                        <div
                            id="advisors-heading"
                            data-animate
                            className={`text-center mb-16 transition-all duration-1000 ${isVisible["advisors-heading"]
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <Award className="w-10 h-10 text-[#166a98] animate-pulse" />
                                <h2 className="text-4xl font-bold text-[#166a98]">Our Advisors</h2>
                            </div>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/50 px-6 py-3 rounded-2xl border border-[#166a98]/10">
                                Distinguished faculty members who provide strategic guidance and mentorship to our research initiatives,
                                ensuring academic excellence and ethical standards in all our endeavors.
                            </p>
                        </div>

                        {/* Advisor Cards */}
                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            {/* Main Advisor */}
                            <div
                                id="advisor-1"
                                data-animate
                                className={`group transition-all duration-1000 ${isVisible["advisor-1"]
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                    }`}
                            >
                                <div className="backdrop-blur-lg bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-[#166a98]/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="https://res.cloudinary.com/draevbvcu/image/upload/v1745142755/FB_IMG_1745141103346_rykcyf.jpg"
                                            alt="Dr. Shafkat Kibria - Advisor"
                                            width={400}
                                            height={300}
                                            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-[#166a98] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                                                Advisor
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-[#166a98] mb-2">Dr. Shafkat Kibria</h3>
                                            <div className="space-y-2">
                                                <p className="text-[#166a98] font-semibold text-lg"> Advisor, LURS</p>
                                                <p className="text-gray-600 font-medium">Associate Professor</p>
                                                <p className="text-gray-500">Department of Computer Science and Engineering</p>
                                            </div>
                                        </div>

                                        {/* <div className="space-y-4">
                                            

                                            <div className="flex items-start space-x-3 backdrop-blur-sm bg-white/50 p-3 rounded-lg">
                                                <div className="bg-[#166a98]/10 p-2 rounded-lg">
                                                    <div className="w-2 h-2 bg-[#166a98] rounded-full animate-pulse"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#166a98]">Experience</h4>
                                                    <p className="text-gray-600 text-sm">15+ years in academia and research supervision</p>
                                                </div>
                                            </div>
                                        </div> */}


                                    </div>
                                </div>
                            </div>

                            {/* Co-Advisor */}
                            <div
                                id="advisor-2"
                                data-animate
                                className={`group transition-all duration-1000 delay-200 ${isVisible["advisor-2"]
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                    }`}
                            >
                                <div className="backdrop-blur-lg bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-[#166a98]/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="https://res.cloudinary.com/draevbvcu/image/upload/v1745142756/IMG-20250420-WA0016_xjdo6q.jpg"
                                            alt="Md. Jamaner Rahaman - Co-Advisor"
                                            width={400}
                                            height={300}
                                            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-[#1a7eb0] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                                                Co-Advisor
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-[#166a98] mb-2">Md. Jamaner Rahaman</h3>
                                            <div className="space-y-2">
                                                <p className="text-[#1a7eb0] font-semibold text-lg">Co-Advisor, LURS</p>
                                                <p className="text-gray-600 font-medium">Assistant Professor</p>
                                                <p className="text-gray-500">Department of Computer Science and Engineering</p>
                                            </div>
                                        </div>

                                        {/* <div className="space-y-4">
                                            <div className="flex items-start space-x-3 backdrop-blur-sm bg-white/50 p-3 rounded-lg">
                                                <div className="bg-[#166a98]/10 p-2 rounded-lg">
                                                    <div className="w-2 h-2 bg-[#1a7eb0] rounded-full animate-pulse"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#166a98]">Research Focus</h4>
                                                    <p className="text-gray-600 text-sm">Software Engineering, Cybersecurity, IoT Systems</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3 backdrop-blur-sm bg-white/50 p-3 rounded-lg">
                                                <div className="bg-[#166a98]/10 p-2 rounded-lg">
                                                    <div className="w-2 h-2 bg-[#1a7eb0] rounded-full animate-pulse"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-[#166a98]">Experience</h4>
                                                    <p className="text-gray-600 text-sm">12+ years in research and industry collaboration</p>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Executive Committees Section */}
                    {/* Committee 2023-2024 */}
                    <div
                        id="committee-2023"
                        data-animate
                        className={`mb-20 transition-all duration-1000 ${isVisible["committee-2023"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Users className="w-8 h-8 text-[#166a98] animate-pulse" />
                                <h3 className="text-3xl font-bold text-[#166a98]">LURS Executive Committee 2023-2024</h3>
                            </div>
                            <p className="text-gray-600 max-w-2xl mx-auto">The pioneering team that established the foundation of our research society</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {loading ? (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-600">Loading members...</p>
                                </div>
                            ) : committeeMembers["2023-2024"].length === 0 ? (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-600">No members added yet for this committee</p>
                                </div>
                            ) : (
                                committeeMembers["2023-2024"].map((member, index) => (
                                    <div
                                        key={member._id || index}
                                        className="group relative backdrop-blur-xl bg-gradient-to-br from-white via-white to-blue-50/30 rounded-3xl shadow-xl overflow-hidden border-2 border-[#166a98]/30 hover:border-[#166a98] transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#166a98]/20"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Decorative corner accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#166a98]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                        
                                        <div className="relative overflow-hidden rounded-t-3xl">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={250}
                                                height={250}
                                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#166a98] via-[#166a98]/50 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                                            
                                            {/* Animated border on image */}
                                            <div className="absolute inset-0 border-b-4 border-[#166a98] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                        </div>
                                        
                                        <div className="relative p-5 text-center bg-gradient-to-b from-transparent to-white/50">
                                            <div className="mb-2 transform group-hover:scale-105 transition-transform duration-300">
                                                <h4 className="font-bold text-gray-900 text-base mb-1 group-hover:text-[#166a98] transition-colors duration-300 leading-tight">{member.name}</h4>
                                                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#166a98] to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </div>
                                            <p className="text-xs text-gray-600 font-medium leading-tight px-2 group-hover:text-[#166a98]/80 transition-colors duration-300">{member.designation}</p>
                                            
                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#166a98] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Committee 2024-2025 */}
                    <div
                        id="committee-2024"
                        data-animate
                        className={`mb-20 transition-all duration-1000 ${isVisible["committee-2024"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Sparkles className="w-8 h-8 text-[#1a7eb0] animate-pulse" />
                                <h3 className="text-3xl font-bold text-[#1a7eb0]">LURS Executive Committee 2024-2025</h3>
                            </div>
                            <p className="text-gray-600 max-w-2xl mx-auto">Building on our legacy with innovation and dedication</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {loading ? (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-600">Loading members...</p>
                                </div>
                            ) : committeeMembers["2024-2025"].length === 0 ? (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-600">No members added yet for this committee</p>
                                </div>
                            ) : (
                                committeeMembers["2024-2025"].map((member, index) => (
                                    <div
                                        key={member._id || index}
                                        className="group relative backdrop-blur-xl bg-gradient-to-br from-white via-white to-cyan-50/30 rounded-3xl shadow-xl overflow-hidden border-2 border-[#1a7eb0]/30 hover:border-[#1a7eb0] transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#1a7eb0]/20"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Decorative corner accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1a7eb0]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                        
                                        <div className="relative overflow-hidden rounded-t-3xl">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={250}
                                                height={250}
                                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a7eb0] via-[#1a7eb0]/50 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                                            
                                            {/* Animated border on image */}
                                            <div className="absolute inset-0 border-b-4 border-[#1a7eb0] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                        </div>
                                        
                                        <div className="relative p-5 text-center bg-gradient-to-b from-transparent to-white/50">
                                            <div className="mb-2 transform group-hover:scale-105 transition-transform duration-300">
                                                <h4 className="font-bold text-gray-900 text-base mb-1 group-hover:text-[#1a7eb0] transition-colors duration-300 leading-tight">{member.name}</h4>
                                                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#1a7eb0] to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </div>
                                            <p className="text-xs text-gray-600 font-medium leading-tight px-2 group-hover:text-[#1a7eb0]/80 transition-colors duration-300">{member.designation}</p>
                                            
                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1a7eb0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Committee 2025-2026 */}
                    <div
                        id="committee-2025"
                        data-animate
                        className={`mb-20 transition-all duration-1000 ${isVisible["committee-2025"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Briefcase className="w-8 h-8 text-[#0d5a7f] animate-pulse" />
                                <h3 className="text-3xl font-bold text-[#0d5a7f]">LURS Executive Committee 2025-2026</h3>
                            </div>
                            <p className="text-gray-600 max-w-2xl mx-auto">Leading the future of research excellence and academic innovation</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {loading ? (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-600">Loading members...</p>
                                </div>
                            ) : committeeMembers["2025-2026"].length === 0 ? (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-gray-600">No members added yet for this committee</p>
                                </div>
                            ) : (
                                committeeMembers["2025-2026"].map((member, index) => (
                                    <div
                                        key={member._id || index}
                                        className="group relative backdrop-blur-xl bg-gradient-to-br from-white via-white to-indigo-50/30 rounded-3xl shadow-xl overflow-hidden border-2 border-[#0d5a7f]/30 hover:border-[#0d5a7f] transition-all duration-700 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#0d5a7f]/20"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Decorative corner accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0d5a7f]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                        
                                        <div className="relative overflow-hidden rounded-t-3xl">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={250}
                                                height={250}
                                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d5a7f] via-[#0d5a7f]/50 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                                            
                                            {/* Animated border on image */}
                                            <div className="absolute inset-0 border-b-4 border-[#0d5a7f] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                        </div>
                                        
                                        <div className="relative p-5 text-center bg-gradient-to-b from-transparent to-white/50">
                                            <div className="mb-2 transform group-hover:scale-105 transition-transform duration-300">
                                                <h4 className="font-bold text-gray-900 text-base mb-1 group-hover:text-[#0d5a7f] transition-colors duration-300 leading-tight">{member.name}</h4>
                                                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#0d5a7f] to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            </div>
                                            <p className="text-xs text-gray-600 font-medium leading-tight px-2 group-hover:text-[#0d5a7f]/80 transition-colors duration-300">{member.designation}</p>
                                            
                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0d5a7f] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Call to Action Section */}
                    <div
                        id="cta"
                        data-animate
                        className={`mt-20 text-center transition-all duration-1000 ${isVisible["cta"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="relative overflow-hidden bg-gradient-to-r from-[#166a98] to-[#1a7eb0] text-white p-12 rounded-3xl shadow-2xl">
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6">Join Our Academic Community</h3>
                                <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                                    Under the guidance of our distinguished advisors and dynamic committee, become part of a research community that&apos;s shaping the future of academia.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/membership/join-now"
                                        className="inline-flex items-center justify-center bg-white text-[#166a98] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                                    >
                                        Apply for Membership
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisorsCommittees;