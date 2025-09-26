"use client";

import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center animate-fade-up">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="text-primary">LURS</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leading University Research Society - Fostering research excellence and building a vibrant research culture
                        </p>
                    </div>
                </div>
            </section>

            {/* WHO WE ARE Section */}
            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-up">
                            <div className="relative">
                                <Image
                                    src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="WHO WE ARE"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg object-cover w-full h-96"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                            </div>
                        </div>

                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="text-center mb-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    WHO WE ARE
                                </h2>
                                <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
                            </div>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Leading University Research Society (LURS) is dedicated to cultivating
                                    a vibrant research culture among the students of Leading University.
                                    Established on September 01, 2022, with the slogan "Research for
                                    Generating New Knowledge," LURS aims to make research engaging
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
            <section className="py-20 bg-gray-50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 animate-fade-up">
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Our organization proudly collaborates with research societies from
                                    other universities across the country, such as DU, JU, RU, KU, JNU, BUP,
                                    NSTU, CoU, JUST, SUST, IU, JKKNIU, PUST, HSTU, DIU, LU, and
                                    MBSTU, creating a broad network of research-oriented students.
                                </p>
                                <p>
                                    Through these partnerships, we facilitate knowledge exchange,
                                    collaborative research projects, and joint academic initiatives
                                    that benefit the entire research community in Bangladesh.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="relative">
                                <Image
                                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Collaboration"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg object-cover w-full h-96"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-up">
                            <div className="relative">
                                <Image
                                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Leadership"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg object-cover w-full h-96"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                            </div>
                        </div>

                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    LURS is led by our Chief Patron Honorable Vice-Chancellor of the
                                    University of Leading University. Our Chief Advisor is <strong>Dr. Md. Khorshed Alam</strong>,
                                    Associate Professor and Chairman of the Department of Physics at the
                                    University of Leading University.
                                </p>
                                <p>
                                    We are supported by over 60 teachers from six faculties, with <strong>Md. Sohel Rana</strong>,
                                    Associate Professor and Chairman of the Department of Political Science,
                                    <strong>Hosneara Dalia</strong>, Assistant Professor of the Department of Public Administration and
                                    <strong>MD Hasib</strong>, Assistant Professor of the Department of Biochemistry and
                                    Biotechnology serving as our Moderators.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 animate-fade-up">
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    LURS actively participates in national and international conferences,
                                    seminars, scholar meets, youth research summits, contests, exhibitions,
                                    and fairs, representing Leading University. Recently, our young
                                    researchers attended the 6th Annual International Conference on
                                    "Identity Politics and Its Implications in the 21st Century" organized by
                                    the Bengal Institute of Political Studies (BIPS) in Kolkata, India.
                                </p>
                                <p>
                                    They also participated in events at Jadavpur University, Presidency
                                    University, Calcutta University, Vidyasagar University, Burdwan
                                    University, Rabindra Bharati University, and Kazi Nazrul University
                                    (Asansol), showcasing Bangladesh on a global platform.
                                </p>
                                <p>
                                    We are currently associated with the Bangladesh Research Society and Dhaka
                                    University Research Society for the 6-month "BDRS Research Learning
                                    Program-2024" and regularly launch research-related programs to
                                    engage our students.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="relative">
                                <Image
                                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Activities"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg object-cover w-full h-96"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-up">
                            <div className="relative">
                                <Image
                                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Objectives"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg object-cover w-full h-96"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                            </div>
                        </div>

                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Our objectives include organizing workshops, skill development
                                    sessions, youth leadership programs, national and international
                                    seminars, research fairs, and conferences to encourage young
                                    generations to engage in research.
                                </p>
                                <p>
                                    We also arrange idea contests, young researchers' summits, and research
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
            <section className="py-20 bg-primary text-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 animate-fade-up">
                            <div className="space-y-6 leading-relaxed">
                                <p className="text-lg">
                                    By promoting a healthy research culture, facilitating student-teacher
                                    collaborations, and expanding our national and international
                                    connections, LURS is committed to contributing to the establishment
                                    of research-friendly universities in Bangladesh, removing barriers to
                                    research work, and supporting the development of a dynamic,
                                    interactive, and global research community.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="relative">
                                <Image
                                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Mission"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-lg object-cover w-full h-96 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-7xl mx-auto px-4 text-center">
                    <div className="animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Join Our Research <span className="text-primary">Community</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Be part of a dynamic research community that's shaping the future of academic excellence in Bangladesh
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/membership/join"
                                className="btn-primary hover:brightness-95 transition-all duration-300 hover:scale-105 transform px-8 py-3 text-lg"
                            >
                                Join LURS Today
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;