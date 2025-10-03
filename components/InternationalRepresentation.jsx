"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Users, Award, ChevronRight, Globe } from "lucide-react";

const InternationalRepresentation = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const internationalEvents = [
        {
            id: "rajshahi-2024",
            title: "1st International Research Conference",
            host: "Rajshahi University Research Society",
            date: "February 22-23, 2024",
            location: "Rajshahi University, Bangladesh",
            description: "LURS proudly represented Leading University at the prestigious 1st International Research Conference hosted by Rajshahi University Research Society on February 22-23. Our representatives, Pritom Roy and Jyoti Prakash Anindya actively engaged in insightful discussions, while Sabbir Khan attended as an audience member, gaining valuable perspectives on emerging research trends. This conference provided an exceptional platform for knowledge exchange, networking with scholars, and exploring innovative research directions. Such experiences strengthen our commitment to fostering a strong research culture within our university. We look forward to applying these learnings and continuing to push the boundaries of academic excellence.",
            representatives: [
                { name: "Pritom Roy", role: "Active Participant", image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" },
                { name: "Jyoti Prakash Anindya", role: "Active Participant", image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" },
                { name: "Sabbir Khan", role: "Audience Member", image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" }
            ],
            achievements: [
                "Knowledge exchange with international scholars",
                "Networking with research communities",
                "Insights into emerging research trends",
                "Strengthened research culture commitment"
            ],
            images: [
                "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
                "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section with Floating Elements */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[var(--primary)] via-indigo-600 to-[var(--primary)]">
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
                    <MapPin className="absolute bottom-32 right-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            International Representation
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            Showcasing our global research impact and fostering international academic collaborations
                        </p>

                        {/* Stats Cards with Glass Morphism */}
                        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white/80">Global Presence</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white/80">Research Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* International Events Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div
                        id="events-header"
                        data-animate
                        className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['events-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)]">
                            Our International Journey
                        </h3>
                        <p className="text-xl text-sky-700 max-w-3xl mx-auto">
                            Representing Leading University on the global stage, fostering research excellence and international collaboration
                        </p>
                    </div>

                    {/* Events Grid */}
                    {internationalEvents.map((event, eventIndex) => (
                        <div
                            key={event.id}
                            id={`event-${eventIndex}`}
                            data-animate
                            className={`mb-20 transform transition-all duration-1000 delay-${eventIndex * 200} ${isVisible[`event-${eventIndex}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                        >
                            {/* Event Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500 group">
                                {/* Event Header */}
                                <div className="bg-gradient-to-r from-[var(--primary)] to-indigo-600 text-white p-8">
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <h4 className="text-3xl md:text-4xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                                                {event.title}
                                            </h4>
                                            <p className="text-xl text-blue-100 mb-2">{event.host}</p>
                                            <div className="flex flex-col sm:flex-row gap-4 text-blue-100">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-5 h-5" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-5 h-5" />
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                                            <Globe className="w-12 h-12 text-white animate-pulse" />
                                        </div>
                                    </div>
                                </div>

                                {/* Event Content */}
                                <div className="p-8">
                                    {/* Description */}
                                    <div className="mb-12">
                                        <h5 className="text-2xl font-bold text-[var(--primary)] mb-4">Conference Overview</h5>
                                        <p className="text-sky-700 leading-relaxed text-lg">
                                            {event.description}
                                        </p>
                                    </div>

                                    {/* Representatives removed by request - reserved for future reuse */}
                                    {/* <div className="mb-12">
                                        <h5 className="text-2xl font-bold text-[var(--primary)] mb-4">Representatives</h5>
                                        <p className="text-sky-700 leading-relaxed text-lg">
                                            The list of representatives has been intentionally removed from this page for a cleaner presentation.
                                            If you want to display representatives in future events, the page supports adding a responsive representatives grid.
                                        </p>
                                    </div> */}

                                    {/* Achievements */}
                                    <div className="mb-12">
                                        <h5 className="text-2xl font-bold text-[var(--primary)] mb-6">Key Achievements & Impact</h5>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {event.achievements.map((achievement, achIndex) => (
                                                <div
                                                    key={achIndex}
                                                    className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-4 hover:shadow-md transition-all duration-300 group/achievement"
                                                >
                                                    <Award className="w-6 h-6 text-[var(--primary)] mt-0.5 group-hover/achievement:animate-pulse" />
                                                    <span className="text-sky-800 font-medium">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Conference Images */}
                                    <div>
                                        <h5 className="text-2xl font-bold text-[var(--primary)] mb-6">Conference Highlights</h5>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {event.images.map((image, imgIndex) => (
                                                <div
                                                    key={imgIndex}
                                                    className="relative aspect-video rounded-2xl overflow-hidden group/image shadow-lg hover:shadow-xl transition-all duration-500"
                                                >
                                                    <Image
                                                        src={image}
                                                        alt={`${event.title} - Image ${imgIndex + 1}`}
                                                        fill
                                                        className="object-cover group-hover/image:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                                                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                                        <p className="font-semibold">Conference Moment {imgIndex + 1}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Future Opportunities Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-[var(--primary)] to-indigo-600">
                <div
                    className="max-w-4xl mx-auto text-center text-white"
                    id="future-section"
                    data-animate
                >
                    <div className={`transform transition-all duration-1000 ${isVisible['future-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <Globe className="w-16 h-16 mx-auto mb-6 animate-pulse" />
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Expanding Our Global Reach
                        </h3>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            As we continue to grow, LURS is committed to representing Leading University at more international conferences,
                            fostering global research partnerships, and contributing to the worldwide academic community.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/30 transition-all duration-300">
                                <span className="font-semibold">Global Research Network</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/30 transition-all duration-300">
                                <span className="font-semibold">International Collaborations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                
                .animate-spin-slow {
                    animation: spin 3s linear infinite;
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default InternationalRepresentation;