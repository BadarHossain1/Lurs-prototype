"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Users, Award, ChevronRight, Globe, Play, Mic, BookOpen, Target, Clock } from "lucide-react";

const WebinarsSeminars = () => {
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

    const events = [
        {
            id: "seminar-research-unveiled",
            type: "seminar",
            date: "10 December 2024",
            title: "Research Unveiled: Building Knowledge, Shaping Futures",
            speaker: "Dr. Muhammad Saiful Islam",
            speakerTitle: "Professor at Shahjalal University of Science and Technology, Department of Civil and Environmental Engineering",
            description: "Today, we successfully hosted the inspiring seminar \"Research Unveiled: Building Knowledge, Shaping Futures,\" featuring the esteemed Dr. Muhammad Saiful Islam, Professor at Shahjalal University of Science and Technology, Department of Civil and Environmental Engineering. The session was a remarkable opportunity to explore the profound impact of research in shaping a brighter tomorrow. We are thrilled to have had an engaging discussion and meaningful interactions with participants who showed great enthusiasm. A big thank you to everyone who attended and made this event a grand success. Together, we continue to celebrate the spirit of research and innovation! and we are looking forward to arrange more such seminars for you all and it will be only possible with the support.",
            images: [
                "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
                "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg",
                "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
                "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
            ],
            stats: [
                { label: "Participants", value: "50+", icon: Users },
                { label: "Duration", value: "2 Hours", icon: Clock },
                { label: "Impact", value: "High", icon: Target }
            ]
        },
        {
            id: "webinar-public-speaking",
            type: "webinar",
            date: "7 October 2023",
            title: "Art of Public Speaking",
            speaker: "Luthfunnahar Shancyi",
            speakerTitle: "Bangladesh Program Coordinator at Asia Justice & Rights (AJAR) & President of NILS Bangladesh",
            description: "Leading University Research Society (LURS) recently hosted an eventful session on the Art of Public Speaking, featuring the incredible Luthfunnahar Shancyi as our keynote speaker. The webinar saw a striking number of 100+ registrations, with students from over 15+ institutions. We're grateful to everyone who joined us in the webinar. Your enthusiasm and participation has made it a success! Luthfunnahar Shancyi is working at Asia Justice & Rights (AJAR) as a Bangladesh Program Coordinator. She is also the President of the Network for International Law Students (NILS) Bangladesh. She has completed her LL.B (Hons.) & LL.M from Southeast University. She is an early career researcher at the Centre for the Study of Genocide and Justice (CSGJ), Liberation War Museum (LWM). She worked as a researcher in the publication named \"The Testimony of Sixty on the crisis of Rohingyas in Myanmar.\" She contributed to \"The Rohingya Genocide: Compilation and Analysis of Survivors' Testimonies,\" published by the LWM. Luthfunnahar Shancyi is one of the International Association of Genocide Scholars (IAGS) members. She has worked as a researcher on a different research project by CSGJ, LWM. Miss. Shancyi has a gloried mooting career and achieved awards in various competitions. Specifically, she got the Champion & Best Advocate Award in the 1st NILS IHL Moot Court Competition. Ms. Shancyi's enthusiastic approach and expertise left our audience captivated and empowered them to become better communicators. Her strategies on becoming a good speaker, mastering body language, controlling the tone, and conquering stage fright were invaluable. She also conducted activities and suggested daily tasks for self-improvement. Our organisation Advisor Dr. Shafkat Kibria sir expressed his valuable remarks. Also, our President Abdus Samad Sumo and General Secretary Mahmudul Haque Jamil on behalf of the executive committee expressed their remarks towards the speaker and participants. Stay tuned for more engaging webinars and events from Leading University Research Society. Together, we'll continue to explore the fascinating world of knowledge and skills.",
            images: [
                "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
                "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
                "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
                "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
            ],
            stats: [
                { label: "Registrations", value: "100+", icon: Users },
                { label: "Institutions", value: "15+", icon: BookOpen },
                { label: "Duration", value: "90 mins", icon: Clock }
            ]
        },
        {
            id: "webinar-ai-research",
            type: "webinar",
            date: "16 October 2023",
            title: "Role of AI in Multidisciplinary and Integrated Research",
            speaker: "Salman Promon",
            speakerTitle: "Founder of MECHAMIND, Former Lecturer at BracU and IUB",
            description: "On 16 October 2023, Our esteemed speaker, Salman Promon, Founder of MECHAMIND and Former Lecturer at BracU and IUB conducted an amazing online webinar on the Role of AI in Multidisciplinary and Integrated Research. All the participants were curious to know about the AI and it's future in our life and work. Our organisation Advisor Dr. Shafkat Kibria sir, Co-advisor Md. Saidur Rahman Kohinoor, President Abdus Samad Sumo and General Secretary Mahmudul Haque Jamil on behalf of the executive committee to express their remarks towards the speaker and participants. Stay tuned for more engaging webinars and events from LURS. Together, we'll continue to explore the fascinating world of knowledge and skills.",
            images: [
                "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
                "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
                "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
                "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
                "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
                "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg"
            ],
            stats: [
                { label: "Participants", value: "80+", icon: Users },
                { label: "Topics Covered", value: "AI & Research", icon: Target },
                { label: "Duration", value: "2 Hours", icon: Clock }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100">
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
                    <Mic className="absolute top-32 left-1/4 w-16 h-16 text-white/20 animate-float" />
                    <BookOpen className="absolute top-48 right-1/4 w-12 h-12 text-white/20 animate-float" style={{ animationDelay: "0.5s" }} />
                    <Play className="absolute bottom-40 left-1/3 w-14 h-14 text-white/20 animate-float" style={{ animationDelay: "1s" }} />
                    <Target className="absolute bottom-32 right-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            Webinars & Seminars
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            Empowering minds through knowledge sharing, expert insights, and interactive learning experiences
                        </p>

                        {/* Stats Cards with Glass Morphism */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Mic className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Expert Speakers</div>
                                <div className="text-white/80 text-sm">Knowledge sharing</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Interactive Sessions</div>
                                <div className="text-white/80 text-sm">Engaging discussions</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <BookOpen className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Knowledge Building</div>
                                <div className="text-white/80 text-sm">Comprehensive learning</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Events Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div
                        id="events-header"
                        data-animate
                        className={`text-center mb-20 transform transition-all duration-1000 ${isVisible['events-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h3 className="text-5xl md:text-6xl font-bold mb-8 text-[var(--primary)]">
                            Our Knowledge Journey
                        </h3>
                        <p className="text-2xl text-sky-700 max-w-4xl mx-auto">
                            Explore our collection of inspiring seminars and engaging webinars that have shaped minds and built communities
                        </p>
                    </div>

                    {/* Events Grid */}
                    {events.map((event, eventIndex) => (
                        <div
                            key={event.id}
                            id={`event-${eventIndex}`}
                            data-animate
                            className={`mb-24 transform transition-all duration-1000 delay-${eventIndex * 200} ${isVisible[`event-${eventIndex}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                }`}
                        >
                            {/* Event Card */}
                            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-700 group">
                                {/* Banner image (optional) */}
                                <div className="relative w-full h-48 md:h-64 overflow-hidden">
                                    <Image
                                        src={event.banner || event.images[0]}
                                        alt={`${event.title} banner`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                                {/* Event Header */}
                                <div className={`bg-gradient-to-r ${event.type === 'seminar' ? 'from-[var(--primary)] to-sky-600' : 'from-indigo-600 to-blue-600'} text-white p-10`}>
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${event.type === 'seminar' ? 'bg-white/20' : 'bg-white/25'} backdrop-blur-sm`}>
                                                    {event.type}
                                                </div>
                                                <div className="flex items-center gap-2 text-blue-100">
                                                    <Calendar className="w-5 h-5" />
                                                    <span className="font-semibold">{event.date}</span>
                                                </div>
                                            </div>
                                            <h4 className="text-4xl md:text-5xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                                                {event.title}
                                            </h4>
                                            <div className="mb-3">
                                                <h5 className="text-2xl font-bold text-blue-100 mb-2">{event.speaker}</h5>
                                                <p className="text-xl text-blue-200">{event.speakerTitle}</p>
                                            </div>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6">
                                            {event.type === 'seminar' ? (
                                                <Mic className="w-16 h-16 text-white animate-pulse" />
                                            ) : (
                                                <Play className="w-16 h-16 text-white" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Event Content */}
                                <div className="p-10">
                                    {/* Statistics */}
                                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                                        {event.stats.map((stat, statIndex) => (
                                            <div
                                                key={statIndex}
                                                className="group/stat bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                                            >
                                                <stat.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                                                <div className="text-3xl font-bold text-[var(--primary)] mb-2">{stat.value}</div>
                                                <div className="text-sky-700 font-semibold">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <div className="mb-12">
                                        <h5 className="text-3xl font-bold text-[var(--primary)] mb-6">Event Overview</h5>
                                        <p className="text-sky-700 leading-relaxed text-lg">
                                            {event.description}
                                        </p>
                                    </div>

                                    {/* Event Images */}
                                    <div>
                                        <h5 className="text-3xl font-bold text-[var(--primary)] mb-8">Event Highlights</h5>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {event.images.map((image, imgIndex) => (
                                                <div
                                                    key={imgIndex}
                                                    className="relative aspect-video rounded-2xl overflow-hidden group/image shadow-xl hover:shadow-2xl transition-all duration-500"
                                                >
                                                    <Image
                                                        src={image}
                                                        alt={`${event.title} - Highlight ${imgIndex + 1}`}
                                                        fill
                                                        className="object-cover group-hover/image:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                                                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                                        <p className="font-bold text-lg mb-1">{event.title}</p>
                                                        <p className="text-sm text-blue-200">Moment {imgIndex + 1}</p>
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

            {/* Call to Action Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-[var(--primary)] via-sky-600 to-indigo-600">
                <div
                    className="max-w-5xl mx-auto text-center text-white"
                    id="cta-section"
                    data-animate
                >
                    <div className={`transform transition-all duration-1000 ${isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <Globe className="w-20 h-20 animate-spin-slow" />
                            <Mic className="w-16 h-16 animate-pulse" />
                            <BookOpen className="w-18 h-18" />
                        </div>
                        <h3 className="text-5xl md:text-6xl font-bold mb-8">
                            Join Our Learning Community
                        </h3>
                        <p className="text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                            Stay connected and never miss our upcoming webinars and seminars.
                            Be part of a vibrant community that celebrates knowledge sharing and continuous learning.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                                <span className="font-bold text-xl">Join Now</span>
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
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 4s ease infinite;
                }
                
                .animate-spin-slow {
                    animation: spin 4s linear infinite;
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 3s ease-in-out infinite 1.5s;
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 1.2s ease-out;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
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

export default WebinarsSeminars;