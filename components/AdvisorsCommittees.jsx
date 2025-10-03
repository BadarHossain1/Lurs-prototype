"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Users, Award, Sparkles, Briefcase } from "lucide-react";

const AdvisorsCommittees = () => {
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
                                                <p className="text-gray-600 font-medium">Assistant Professor</p>
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
                                                <p className="text-gray-600 font-medium">Lecturer</p>
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

                    {/* Founding Executive Committee Section */}
                    <div
                        id="committee"
                        data-animate
                        className={`backdrop-blur-lg bg-white/90 p-8 rounded-3xl shadow-2xl border border-[#166a98]/20 transition-all duration-1000 ${isVisible["committee"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <Users className="w-8 h-8 text-[#166a98] animate-pulse" />
                            <h3 className="text-3xl font-bold text-[#166a98] text-center">Founding Executive Committee (2023)</h3>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Left column: Named officers */}
                            <div>
                                <dl className="space-y-4">
                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">President</dt>
                                        <dd className="text-lg font-medium text-gray-800">Abdus Samad Sumo</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">General Secretary</dt>
                                        <dd className="text-lg font-medium text-gray-800">Mahmudul Haque Jamil</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Vice President (Academic)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Shahriyar Ahmod</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Vice President (Organizing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Redwanul Haque</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Assistant General Secretary (Academic)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Mashura Chowdhury Mim</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Assistant General Secretary (Organizing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Soumitra Pada Dey Mithun</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Treasurer</dt>
                                        <dd className="text-lg font-medium text-gray-800">Saikat Chanda Sudip</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Secretary (Organizing wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Pranto Mozumder Proshanto</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Secretary (Scholarship & Higher Education wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Sabikunnahar Jannat</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Secretary (Media & Content Development wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Dewan Sonubar Raza Chowdhury</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Secretary (Research & Career Development wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Md. Badrul Alom Tawsyat</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Assistant Secretary (Research & Career Development wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Shotabdi Das Puja</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Secretary (IT & Creative wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Nafisa Tasmiya</dd>
                                    </div>

                                    <div className="backdrop-blur-sm bg-white/50 p-3 rounded-lg hover:bg-[#166a98]/5 transition-all duration-300">
                                        <dt className="text-sm font-semibold text-[#166a98]">Assistant Secretary (IT & Creative wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Nafisa Maliath</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Right column: Executive members grid + other founding members */}
                            <div>
                                <h4 className="text-xl font-semibold text-[#166a98] mb-4">Executive Members</h4>
                                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                    {[
                                        'Faiza', 'Ali Ahmed Masum', 'Md. Rahy Bin Kamal', 'Md. Ali Hussain Sagor', 'Fardous Ahmed Siam', 'Sumaiya Islam', 'Mohosin Ahmed', 'Refah Taspia Chowdhury', 'Sumaiya Akter', 'Sajib Chanda', 'Puja Rani Nath', 'Aziza Ara Jagirdar', 'Hadia Akter Ritu', 'Md. Tazwar Rahman Chowdhury', 'Dipongkar Deb', 'Md. Atikur Rahman Joy', 'Asfarur Rahman Chowdhury'
                                    ].map((name, index) => (
                                        <div key={name} className="px-4 py-3 backdrop-blur-sm bg-white/50 rounded-lg border border-[#166a98]/20 text-gray-800 hover:bg-[#166a98]/10 hover:border-[#166a98]/40 transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                                            <span className="group-hover:text-[#166a98] transition-colors duration-200">{name}</span>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="text-xl font-semibold text-[#166a98] mb-4">Other Founding Members</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li className="hover:text-[#166a98] transition-colors duration-200 cursor-pointer">Sadia Ahad</li>
                                    <li className="hover:text-[#166a98] transition-colors duration-200 cursor-pointer">Mahfuz Hussain</li>
                                    <li className="hover:text-[#166a98] transition-colors duration-200 cursor-pointer">Joynul Hussain Tuhin</li>
                                </ul>
                            </div>
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
                                    <a
                                        href="/conferences/2nd-student-research-conference"
                                        className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#166a98] transform hover:scale-105 transition-all duration-300"
                                    >
                                        Research Opportunities
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