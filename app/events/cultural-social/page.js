"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Users, Heart, Globe, Sparkles, Star, Award, MapPin } from "lucide-react";

const CulturalSocialPage = () => {
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-sky-50">
            {/* Hero Section with Floating Elements */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[var(--primary)] via-sky-600 to-[var(--primary)]">
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
                    <Heart className="absolute top-48 right-1/4 w-12 h-12 text-white/20 animate-float" style={{ animationDelay: "0.5s" }} />
                    <Sparkles className="absolute bottom-40 left-1/3 w-14 h-14 text-white/20 animate-float" style={{ animationDelay: "1s" }} />
                    <Star className="absolute bottom-32 right-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            Cultural & Social Programs
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            Celebrating unity, culture, and togetherness through meaningful gatherings that strengthen our community bonds
                        </p>

                        {/* Stats Cards with Glass Morphism */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Unity Events</div>
                                <div className="text-white/80 text-sm">Community celebration</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Sparkles className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Cultural Programs</div>
                                <div className="text-white/80 text-sm">Celebrating traditions</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Social Gatherings</div>
                                <div className="text-white/80 text-sm">Building connections</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Divider */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"></div>

            {/* Events Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div
                        id="events-header"
                        data-animate
                        className={`text-center mb-16 transform transition-all duration-1000 ${isVisible['events-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-sky-600 bg-clip-text text-transparent">
                            Our Cultural Journey
                        </h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Moments of togetherness that celebrate our values and strengthen our bonds
                        </p>
                    </div>

                    {/* Event 1: Iftar Mahfil 2023 - Card Style matching Event 2 */}
                    <div
                        id="event-2023"
                        data-animate
                        className={`mb-24 transform transition-all duration-1000 ${isVisible['event-2023'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'
                            }`}
                    >
                        <div className="bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 group">

                            {/* Event Header */}
                            <div className="relative bg-gradient-to-r from-[var(--primary)] via-sky-600 to-blue-600 text-white p-8 md:p-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar className="w-6 h-6" />
                                        <span className="text-lg font-semibold">15 April 2023</span>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                                        First Iftar Mahfil - LURS Inaugural Event
                                    </h4>
                                    <p className="text-xl md:text-2xl text-blue-100 font-medium flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        Spicy Restaurant, Sylhet
                                    </p>
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">

                                {/* Left: Content */}
                                <div className="space-y-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-1 h-full bg-gradient-to-b from-[var(--primary)] to-blue-600 rounded-full"></div>
                                        <div className="flex-1 space-y-4">
                                            <p className="text-gray-700 leading-relaxed">
                                                Leading University Research Society (LURS) organized a first event through first Iftar Mahfil today; 15th April 2023. Our honorable LURS Advisor &apos;Shafkat Kibria&apos; sir, honorable university Proctor, &apos;Rana M. Luthfur Rahman Pir&apos; sir, and members of LURS were present there.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed">
                                                The purpose of the Mahfil was fulfilled by gathering together over a memorable Iftar to celebrate the joy of Ramadan, and we discussed our upcoming plans for our club and the steps required to take it forward.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed">
                                                We are grateful to our LURS Advisor sir and university Proctor sir for their valuable time and wisdom, and their dedication to our club and its enrichment. We believe that Iftar Mahfil is just a stepping stone to building a larger family of researchers who will enrich our society with their accomplishments.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed">
                                                Overall, the Iftar Mahfil arranged by LURS was a successful event at Spicy Restaurant, Sylhet. Which brought together the members of the society and strengthened the spirit of brotherhood and unity among them.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Event Highlights */}
                                    <div className="bg-gradient-to-br from-[var(--primary)]/5 to-sky-50 rounded-2xl p-6 border border-[var(--primary)]/10">
                                        <h5 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                            <Sparkles className="w-5 h-5 text-[var(--primary)] animate-pulse" />
                                            Event Highlights
                                        </h5>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                                                <span>First official LURS event</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                                                <span>Ramadan celebration with unity</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                                                <span>Strategic planning discussions</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                                                <span>Building research community</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right: Image and Stats */}
                                <div className="space-y-4">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group/image">
                                        <Image
                                            src="https://i.ibb.co.com/v4NCLqsN/iftar2023-1.jpg"
                                            alt="Iftar Mahfil 2023"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-gradient-to-br from-[var(--primary)]/10 to-sky-50 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                                            <Award className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
                                            <div className="text-2xl font-bold text-gray-900">1st</div>
                                            <div className="text-xs text-gray-600 uppercase">Event</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-sky-100 to-blue-50 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                                            <Heart className="w-6 h-6 text-sky-600 mx-auto mb-2 animate-pulse" />
                                            <div className="text-2xl font-bold text-gray-900">Unity</div>
                                            <div className="text-xs text-gray-600 uppercase">Spirit</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-100 to-sky-50 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                                            <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                            <div className="text-2xl font-bold text-gray-900">2023</div>
                                            <div className="text-xs text-gray-600 uppercase">Inaugural</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event 2: Iftar Mahfil 2025 - Card Style with Image Gallery (moved second) */}
                    <div
                        id="event-2025"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['event-2025'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-80'
                            }`}
                    >
                        <div className="bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-700 group">

                            {/* Event Header */}
                            <div className="relative bg-gradient-to-r from-[var(--primary)] via-sky-600 to-blue-600 text-white p-8 md:p-12">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar className="w-6 h-6" />
                                        <span className="text-lg font-semibold">20 March 2025</span>
                                    </div>
                                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                                        LURS Iftar Mahfil 2025
                                    </h4>
                                    <p className="text-xl md:text-2xl text-blue-100 font-medium">
                                        A Heartwarming Gathering of Scholars!
                                    </p>
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">

                                {/* Left: Content */}
                                <div className="space-y-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-1 h-full bg-gradient-to-b from-[var(--primary)] to-blue-600 rounded-full"></div>
                                        <div className="flex-1 space-y-4">
                                            <p className="text-gray-700 leading-relaxed">
                                                Alhamdulillah, the Leading University Research Society (LURS) successfully organized a beautiful Iftar Mahfil, bringing together researchers, faculty members, and students in an evening filled with unity, gratitude, and togetherness.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed">
                                                The event was more than just breaking the fast; it was a celebration of our shared commitment to knowledge, collaboration, and the values that strengthen our academic community. The presence of distinguished guests, dedicated members, and aspiring researchers made the evening truly special.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed">
                                                Our Honourable Adviser Dr.Safkat Kibria sir, Co-Adviser MD. Jamaner Rahaman sir and Our Special guest Md. Ebrahim Hussain sir and Founding President Abdus Samad Sumo was present in this iftar mahfil.
                                            </p>
                                            <p className="text-gray-700 leading-relaxed">
                                                Heartfelt thanks to everyone who attended and contributed to making this event a success! Your participation and support inspire us to continue fostering a strong research culture at Leading University.
                                            </p>
                                            <p className="leading-relaxed font-semibold text-[var(--primary)]">
                                                Let&apos;s carry this spirit of unity and knowledge forward in all our future endeavors!
                                            </p>
                                        </div>
                                    </div>

                                    {/* Distinguished Guests */}
                                    <div className="bg-gradient-to-br from-[var(--primary)]/5 to-sky-50 rounded-2xl p-6 border border-[var(--primary)]/10">
                                        <h5 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                            <Award className="w-5 h-5 text-[var(--primary)]" />
                                            Distinguished Guests
                                        </h5>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                                                <span>Dr. Safkat Kibria - Honourable Adviser</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                                                <span>MD. Jamaner Rahaman - Co-Adviser</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                                                <span>Md. Ebrahim Hussain - Special Guest</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Star className="w-4 h-4 text-[var(--primary)] mt-1 flex-shrink-0" />
                                                <span>Abdus Samad Sumo - Founding President</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right: Image Placeholder */}
                                <div className="space-y-4">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group/image">
                                        <Image
                                            src="https://i.ibb.co.com/933z7Gdj/iftar20252-1.jpg"
                                            alt="Iftar Mahfil 2025"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-gradient-to-br from-[var(--primary)]/10 to-sky-50 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                                            <Users className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
                                            <div className="text-2xl font-bold text-gray-900">10+</div>
                                            <div className="text-xs text-gray-600 uppercase">Attendees</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-sky-100 to-blue-50 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                                            <Heart className="w-6 h-6 text-sky-600 mx-auto mb-2 animate-pulse" />
                                            <div className="text-2xl font-bold text-gray-900">Unity</div>
                                            <div className="text-xs text-gray-600 uppercase">Spirit</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-100 to-sky-50 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                                            <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                            <div className="text-2xl font-bold text-gray-900">2025</div>
                                            <div className="text-xs text-gray-600 uppercase">Event</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gradient-to-r from-[var(--primary)] via-blue-600 to-blue-400 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div
                    className="max-w-4xl mx-auto text-center text-white relative z-10"
                    id="cta-section"
                    data-animate
                >
                    <div className={`transform transition-all duration-1000 ${isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-90'
                        }`}>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Heart className="w-12 h-12 animate-pulse" />
                            <Sparkles className="w-10 h-10" />
                            <Globe className="w-12 h-12 animate-spin-slow" />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Join Our Cultural Journey
                        </h3>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Be part of our vibrant community and participate in events that celebrate unity, culture, and togetherness.
                        </p>
                        <a
                            href="/membership/join-now"
                            className="inline-flex items-center justify-center bg-white text-[#166a98] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Get Involved
                        </a>
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
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 8s ease infinite;
                }
                
                .animate-spin-slow {
                    animation: spin 15s linear infinite;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 6s ease-in-out infinite 2s;
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 1.2s ease-out;
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
                
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default CulturalSocialPage;
