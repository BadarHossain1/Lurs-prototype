"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Users, Award, Sparkles } from "lucide-react";

const FoundingCommittee = () => {
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
                    <Sparkles className="absolute bottom-40 left-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1s" }} />
                </div>

                <div className="relative container mx-auto px-4 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            Founding Committee
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            The pioneers who started something extraordinary
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
                    {/* Main Content */}
                    <div
                        id="main-content"
                        data-animate
                        className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 ${isVisible["main-content"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        {/* Left side - Text Content */}
                        <div>
                            <div className="backdrop-blur-lg bg-white/90 p-8 rounded-3xl shadow-2xl border border-[#166a98]/20 hover:shadow-3xl transition-all duration-500">
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <Sparkles className="w-8 h-8 text-[#166a98] animate-pulse" />
                                    <h2 className="text-3xl font-bold text-[#166a98] text-center">The Beginning of Something Great</h2>
                                </div>

                                <div className="prose prose-lg text-gray-700 leading-relaxed">
                                    <p className="mb-6 text-lg">
                                        <span className="text-[#166a98] font-semibold">&apos;First&apos;</span>, the word suggests something big. But what about being the first one to start something? Here is what the Leading University Research Society is publishing today. It&apos;s the first committee, the committee of 2023, which will be written in the pages of history to have started something.
                                    </p>

                                    <p className="mb-6 text-lg">
                                        Leading University Research Society presents you with a committee of immense potential. We hope that this committee brings with it some exciting and creative events and projects that will enhance the knowledge and skills of those who attend and participate in them.
                                    </p>

                                    <p className="text-lg">
                                        And we ask you to support this committee in its future endeavors by being a part of its future events and projects and through your active participation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - First Image */}
                        <div>
                            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Founding Committee Meeting"
                                    width={600}
                                    height={400}
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Vision & Leadership</h3>
                                    <p className="text-sm text-white/90">Building the foundation of excellence</p>
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
                                    ].map((name) => (
                                        <div key={name} className="px-4 py-3 backdrop-blur-sm bg-white/50 rounded-lg border border-[#166a98]/20 text-gray-800 hover:bg-[#166a98]/10 hover:border-[#166a98]/40 transition-all duration-300 transform hover:scale-105 cursor-pointer">{name}</div>
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
                                <h3 className="text-3xl font-bold mb-6">Join Our Journey</h3>
                                <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                                    Be a part of history. Support our committee&apos;s future endeavors and contribute to the legacy we&apos;re building together.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="/membership/join-now"
                                        className="inline-flex items-center justify-center bg-white text-[#166a98] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                                    >
                                        Get Involved
                                    </a>
                                    <a
                                        href="/about"
                                        className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#166a98] transform hover:scale-105 transition-all duration-300"
                                    >
                                        Learn More
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

export default FoundingCommittee;