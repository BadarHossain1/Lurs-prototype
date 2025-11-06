"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Globe, Users, Award, Target, TrendingUp, Heart } from "lucide-react";

const AboutUs = () => {
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
                    <Globe className="absolute top-32 left-1/4 w-16 h-16 text-white/20 animate-float" />
                    <Users className="absolute top-48 right-1/4 w-12 h-12 text-white/20 animate-float" style={{ animationDelay: "0.5s" }} />
                    <Award className="absolute bottom-40 left-1/3 w-14 h-14 text-white/20 animate-float" style={{ animationDelay: "1s" }} />
                    <Target className="absolute bottom-32 right-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            About LURS
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            Leading University Research Society - Fostering research excellence and building a vibrant research culture
                        </p>

                        {/* Stats Cards with Glass Morphism */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <div className="text-4xl font-bold text-white mb-2">2023</div>
                                <div className="text-white/80">Established</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <div className="text-4xl font-bold text-white mb-2">60+</div>
                                <div className="text-white/80">Faculty Members</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <div className="text-4xl font-bold text-white mb-2">17+</div>
                                <div className="text-white/80">Partner Universities</div>
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

            {/* WHO WE ARE Section */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-4">
                    <div
                        id="who-we-are"
                        data-animate
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible["who-we-are"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="https://i.ibb.co.com/fYh7TQtX/group-Photo2.jpg"
                                    alt="WHO WE ARE"
                                    width={600}
                                    height={400}
                                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Our Foundation</h3>
                                    <p className="text-sm text-white/90">Built on excellence since 2023</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="text-center mb-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#166a98] mb-4">
                                    WHO WE ARE
                                </h2>
                                <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#166a98] to-transparent mx-auto rounded-full"></div>
                            </div>

                            <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 shadow-xl border border-[#166a98]/10 space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    Leading University Research Society (LURS) is dedicated to cultivating
                                    a vibrant research culture among the students of Leading University.
                                    Established on 2023, with the slogan &ldquo;Research for
                                    Generating New Knowledge,&rdquo; LURS aims to make research engaging
                                    and accessible to students.
                                </p>
                                <p>
                                    Our mission is to foster healthy research practices, facilitate
                                    student-teacher collaboration, and address various issues through
                                    effective research. We also strive to expand our global research
                                    network and contribute to building research-friendly universities
                                    in Bangladesh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration Section */}
            <section className="py-20 bg-white/50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div
                        id="collaboration"
                        data-animate
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible["collaboration"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="order-2 lg:order-1">
                            <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 shadow-xl border border-[#166a98]/10 space-y-6 text-gray-700 leading-relaxed">
                                <div className="flex items-center gap-3 mb-4">
                                    <TrendingUp className="w-8 h-8 text-[#166a98] animate-pulse" />
                                    <h3 className="text-2xl font-bold text-[#166a98]">National Network</h3>
                                </div>
                                <p>
                                    LURS proudly collaborates with leading research organizations across Bangladesh, including
                                    <strong> GTCRC, EMCRC, NDSC, BDRS, DURS, RURS, JURS, BUP RS, JKKNIU RS, BURS, NSTU RS,
                                        CoURS, IURS, SUST RS, HSTU RS, KURS, BRURS, BRACU RDC,</strong> and <strong>VURC</strong>.
                                </p>
                                <p>
                                    Through these strategic partnerships, we facilitate knowledge exchange, collaborative research
                                    projects, joint conferences, and academic initiatives that strengthen the research ecosystem
                                    and benefit the entire academic community in Bangladesh.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="https://i.ibb.co.com/23sMVdqZ/rurs-1.jpg"
                                    alt="Collaboration"
                                    width={600}
                                    height={400}
                                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 right-6 text-white text-right">
                                    <h3 className="text-2xl font-bold mb-2">Collaboration</h3>
                                    <p className="text-sm text-white/90">17+ Partner Universities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-4">
                    <div
                        id="leadership"
                        data-animate
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible["leadership"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="https://i.ibb.co.com/dw2z5Qrv/1success14.jpg"
                                    alt="Leadership"
                                    width={600}
                                    height={400}
                                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Expert Leadership</h3>
                                    <p className="text-sm text-white/90">Guided by distinguished faculty</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 shadow-xl border border-[#166a98]/10 space-y-6 text-gray-700 leading-relaxed">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-8 h-8 text-[#166a98] animate-pulse" />
                                    <h3 className="text-2xl font-bold text-[#166a98]">Our Leaders</h3>
                                </div>
                                <p>
                                    LURS is led by our Chief Patron, the Honorable Vice-Chancellor of Leading University 
                                 <strong className="text-[#166a98]"> Professor Dr. Mohammed Taj Uddin</strong>.
                                    
                                </p>
                                <p>
                                    We are guided by our dedicated advisors: <strong className="text-[#166a98]">Dr. Shafkat Kibria</strong>,
                                    Associate Professor, Department of Computer Science and Engineering (Advisor), and
                                    <strong className="text-[#166a98]"> Md. Jamaner Rahaman</strong>, Assistant Professor, Department of Computer Science
                                    and Engineering (Co-Advisor).
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-20 bg-white/50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div
                        id="activities"
                        data-animate
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible["activities"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="order-2 lg:order-1">
                            <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 shadow-xl border border-[#166a98]/10 space-y-6 text-gray-700 leading-relaxed">
                                <div className="flex items-center gap-3 mb-4">
                                    <Award className="w-8 h-8 text-[#166a98] animate-pulse" />
                                    <h3 className="text-2xl font-bold text-[#166a98]">Our Activities</h3>
                                </div>
                                <p>
                                    LURS is a dynamic research society dedicated to fostering academic excellence through diverse
                                    initiatives. We organize workshops on research fundamentals and academic paper writing, host
                                    student research conferences, conduct skill development sessions, and arrange youth leadership
                                    programs that empower students to become confident researchers.
                                </p>
                                <p>
                                    Our activities include national and international conferences, seminars, scholar meets, research
                                    fairs, idea contests, and paper competitions. We provide specialized training for assignments,
                                    theses, and monographs, while facilitating internships and career development opportunities for
                                    our members.
                                </p>
                                <p>
                                    Through partnerships with universities across Bangladesh and international collaborations, LURS
                                    creates a vibrant platform for knowledge exchange, collaborative research, and academic networking,
                                    contributing to building a research-friendly academic culture in Bangladesh.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="https://i.ibb.co.com/Lz2mvhcH/seminar4-1.jpg"
                                    alt="Activities"
                                    width={600}
                                    height={400}
                                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 right-6 text-white text-right">
                                    <h3 className="text-2xl font-bold mb-2">Dynamic Activities</h3>
                                    <p className="text-sm text-white/90">Workshops, conferences & events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-4">
                    <div
                        id="objectives"
                        data-animate
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible["objectives"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="https://i.ibb.co.com/MxNK4D36/1success9.jpg"
                                    alt="Objectives"
                                    width={600}
                                    height={400}
                                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">Our Goals</h3>
                                    <p className="text-sm text-white/90">Empowering student researchers</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 shadow-xl border border-[#166a98]/10 space-y-6 text-gray-700 leading-relaxed">
                                <div className="flex items-center gap-3 mb-4">
                                    <Target className="w-8 h-8 text-[#166a98] animate-pulse" />
                                    <h3 className="text-2xl font-bold text-[#166a98]">Our Objectives</h3>
                                </div>
                                <p>
                                    Our objectives include organizing workshops, skill development
                                    sessions, youth leadership programs, national and international
                                    seminars, research fairs, and conferences to encourage young
                                    generations to engage in research.
                                </p>
                                <p>
                                    We also arrange idea contests, young researchers&apos; summits, and research
                                    paper contests, provide specialized training for assignments, theses, and
                                    monographs, and help students gain pre-employment experience through
                                    internships and part-time or voluntary jobs.
                                </p>
                                <p>
                                    LURS collaborates with universities both at home and abroad for research,
                                    arranging monthly research sessions and weekly workshops.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#166a98] via-[#1a7eb0] to-[#166a98]">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div
                        id="mission"
                        data-animate
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible["mission"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20 space-y-6 leading-relaxed">
                                <div className="flex items-center gap-3 mb-4">
                                    <Heart className="w-8 h-8 text-white animate-pulse" />
                                    <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
                                </div>
                                <p className="text-lg text-white/90">
                                    By promoting a healthy research culture, facilitating student-teacher
                                    collaborations, and expanding our national and international
                                    connections, LURS is committed to contributing to the establishment
                                    of research-friendly universities in Bangladesh, removing barriers to
                                    research work, and supporting the development of a dynamic,
                                    interactive, and global research community.
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="https://i.ibb.co.com/C5Ptq3NB/gallery3.jpg"
                                    alt="Mission"
                                    width={600}
                                    height={400}
                                    className="w-full h-96 object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20">
                <div className="container max-w-7xl mx-auto px-4 text-center">
                    <div
                        id="cta"
                        data-animate
                        className={`transition-all duration-1000 ${isVisible["cta"]
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-12 shadow-2xl border border-[#166a98]/20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient bg-gradient-to-r from-[#166a98] via-[#1a7eb0] to-[#166a98] bg-clip-text text-transparent bg-[length:200%_auto]">
                                Join Our Research Community
                            </h2>
                            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                                Be part of a dynamic research community that&apos;s shaping the future of academic excellence in Bangladesh
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/membership/join-now"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#166a98] rounded-full hover:bg-[#1a7eb0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                                >
                                    Join LURS Today
                                </a>
                                <a
                                    href="/membership/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#166a98] border-2 border-[#166a98] rounded-full hover:bg-[#166a98] hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;