"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Users, Trophy, Globe, Star, Heart, ChevronRight, Award } from "lucide-react";

const CeremoniesAndMeetingsPage = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        // Observer will mark elements as visible when they enter the viewport.
        // We intentionally never set visibility back to false so once revealed they remain visible.
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
            { threshold: 0.08 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observer.observe(el));

        // Safety fallback: if for any reason the observer doesn't fire (SSR hydration edge cases
        // or very large above-fold hero overlays), reveal the elements after a short delay so the
        // page never appears completely blank to the user.
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

    const events = [
        {
            id: "inauguration-ceremony",
            title: "Inauguration Ceremony",
            date: "5 June 2023",
            icon: Star,
            content: `Leading University Research Society's first event 'Inauguration Ceremony' ended successfully on Monday 5 June, thanks to our wonderful team members who have worked hard to make this event a success. We would like to express our heartfelt gratitude to our Advisor Dr. Shafkat Kibria Sir and Co-Advisor Md. Saidur Rahman Kohinoor Sir for your valuable guidance throughout the journey.

We would like to express our heartfelt gratitude to our respected keynote speakers Prof. Dr. Mohammed Shamsul Arefin Sir for enlightening us on the topic 'Multidisciplinary Research in the Era of 4th Industrial Revolution' and Dr. Md. Rezaul Karim Sir for illuminating us on the topic 'Students 'Engagement' in Quality Assurance and Research Activities'. Our heartfelt gratitude goes to our Chief Guest Honourable Vice-Chancellor Prof. Dr. Qazi Azizul Mowla Sir for his valuable advice and feedback.

A key part of our event was our founding executive committee announcement done by our respected Co-Advisor Md. Saidur Rahman Kohinoor Sir, with Abdus Samad Sumo from the Department of Law as our President and Mahmudul Haque Jamil from the Department of Civil Engineering as our General Secretary and other members in key roles.`,
            images: [
                "https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            highlights: [
                { label: "Leadership", value: "Committee Formation", icon: Users },
                { label: "Focus", value: "Research Culture", icon: Award },
                { label: "Impact", value: "Foundation Building", icon: Trophy }
            ]
        },
        {
            id: "first-general-meeting",
            title: "First General Meeting",
            date: "31 July 2023",
            icon: Users,
            content: `Today, on the 31st of July, Leading University Research Society held its first General Meeting with our Honourable Advisor Dr. Shafkat Kibria Sir.

We would also like to Congratulate our Honourable Advisor Dr. Shafkat Kibria Sir for completing his PhD from Shahjalal University of Science and Technology. Also a token of appreciation on behalf of us was handed over to him from LURS. We pray for his more success in the future. Best wishes for your future endeavours Sir.

With his wonderful guidance and advice, we had a fruitful meeting, where we discussed our club's next endeavours and how best to represent it. The meeting also reflected the unity within our club and our hunger to take Leading University Research Society to a higher level.`,
            images: [
                "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            highlights: [
                { label: "Leadership", value: "Strategic Planning", icon: Users },
                { label: "Focus", value: "Future Vision", icon: Award },
                { label: "Impact", value: "Team Unity", icon: Trophy }
            ]
        },
        {
            id: "associate-member-reception",
            title: "1st Associate Member Reception",
            date: "17 April 2025",
            icon: Heart,
            content: `We are thrilled to share that the Leading University Research Society (LURS) has successfully held our 1st Associate Member Reception and General Meeting!

It was an inspiring day filled with enthusiasm, learning, and new beginnings. We were honored to have our Respected Co-Advisor Sir present at the event, whose valuable presence truly made the occasion special. A proud moment for us all was the official launch of our very first NEWSLETTER, graciously unveiled by our Co-Advisor Sir.

A huge congratulations to the winners of our thrilling Quiz Game: 1st: Sunak Dhor Abir, 2nd: Humayra Islam, 3rd: Neha Das, 4th: Bikash Chokrabarti, 5th: Ohona, 6th: Tarin. Your sharp minds and quick responses truly amazed us! Lastly, a heartfelt thank you to all our General Members who joined us and contributed to making this event a grand success.`,
            images: [
                "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            highlights: [
                { label: "Leadership", value: "Member Engagement", icon: Users },
                { label: "Focus", value: "Community Growth", icon: Award },
                { label: "Impact", value: "Newsletter Launch", icon: Trophy }
            ]
        },
        {
            id: "legacy-genesis-event",
            title: "Legacy and Genesis Event",
            date: "2024-2025 Transition",
            icon: Trophy,
            content: `Farewell to the Legends and Welcome to the New Leaders! Today, we bid adieu to the incredible Founders of LURS Committee 2023-2024 at our Legacy and Genesis event, graced by our Honourable Advisor, Dr. Shafkat Kibria.

It was a bittersweet moment as we celebrated their achievements and welcomed the new committee for 2024-2025. The Founding Executive Committee included President: Abdus Samad Sumo, General Secretary: Mahmudul Haque Jamil, Vice Presidents: Shahriyar Ahmod (Academic) and Redwanul Haque (Organizing), and many other dedicated members across various wings including Academic, Organizing, Media, Research, IT, and Creative departments.

We extend our heartfelt appreciation to all the outgoing members for their dedication and hard work. Your legacy will continue to inspire us all. Also, a warm welcome to the new committee members. We are excited to see what you will achieve in the coming year.`,
            images: [
                "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            highlights: [
                { label: "Leadership", value: "Transition Ceremony", icon: Users },
                { label: "Focus", value: "Legacy Building", icon: Award },
                { label: "Impact", value: "New Beginnings", icon: Trophy }
            ]
        },
        {
            id: "farewell-co-advisor",
            title: "Farewell to Co-Advisor",
            date: "3 January 2024",
            icon: Heart,
            content: `"Joined us in bidding an illustrious farewell to our esteemed co-advisor, Md. Saidur Rahman Kohinoor, as he embarks on a thrilling journey and got awarded International Scholarship Graduate Programme to pursue his MS in Computer Science at King Fahad University of Petroleum and Minerals, Saudi Arabia."

Your contributions as a Co-advisor at Leading University Research Society have left an indelible mark on our hearts and minds. Wishing you every success and achievement as you soar to great heights in your academic pursuit. Your passion and mentorship will be dearly missed, and we eagerly anticipate the brilliance you will continue to bring to the world.

Congratulations and best wishes from the entire Leading University Research Society family!`,
            images: [
                "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            highlights: [
                { label: "Leadership", value: "Mentorship", icon: Users },
                { label: "Focus", value: "Guidance & Support", icon: Award },
                { label: "Impact", value: "Lasting Legacy", icon: Trophy }
            ]
        },
        {
            id: "welcome-new-vc",
            title: "Welcome New Vice-Chancellor",
            date: "16 February 2025",
            icon: Users,
            content: `A Special Welcome To Our New VC Sir! Today, Team Leading University Research Society (LURS) had the pleasure of meeting Professor Dr. Mohammed Taj Uddin, our newly appointed Vice-Chancellor. We greeted him with a bouquet as a small gesture of appreciation and warm wishes for his new Journey at Leading University.

His Vision and leadership will be inspiring and we're excited for the future ahead under HIS guidance. Here's to new beginnings and greater opportunities for students..!`,
            images: [
                "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            highlights: [
                { label: "Leadership", value: "New Vision", icon: Users },
                { label: "Focus", value: "Student Success", icon: Award },
                { label: "Impact", value: "Future Growth", icon: Trophy }
            ]
        },
        {
            id: "legacy-genesis-2",
            title: "Legacy and Genesis 2.0",
            date: "2025 Transition",
            icon: Trophy,
            content: `The Leading University Research Society (LURS) proudly hosted "Legacy and Genesis 2.0" the Farewell Ceremony of the Executive Committee (2024–2025) today, marking the conclusion of a dedicated and inspiring tenure. The event was filled with gratitude, reflection, and appreciation for a team that has led with integrity, passion, and commitment to advancing the research culture at Leading University.

The ceremony was honored by the presence of our respected Advisor – Dr. Shafkat Kibria, along with the outgoing President – Dipongkar Deb, Vice Presidents – Faiza and Refah Taspia Chowdhury, General Secretary – Rayhan Ahmed, Treasurer – Rahat Islam, and Senior Executives – Muhymeen Mousuf and Mahdia Akhter Chowdhury Nipa of the 2024-2025 Executive Committee. Under their leadership, LURS has continued to uphold its vision of fostering academic excellence, promoting systematic research practices, and building a community of young researchers eager to contribute to knowledge and innovation. Their initiatives, dedication, and teamwork have left a lasting mark on the society's journey.

As we bid farewell to the Executive Committee (2024–2025), we extend our sincere appreciation for their remarkable service and wish them continued success in their academic and professional pursuits. Their legacy will undoubtedly guide and inspire the next generation of research leaders at LURS.`,
            images: [
                "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800"
            ],
            highlights: [
                { label: "Leadership", value: "Committee Farewell", icon: Users },
                { label: "Focus", value: "Academic Excellence", icon: Award },
                { label: "Impact", value: "Inspiring Legacy", icon: Trophy }
            ]
        }
    ];

    const EventCard = ({ event, eventIndex }) => {
        const [imageIndex, setImageIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setImageIndex((prev) => (prev + 1) % event.images.length);
            }, 4000);
            return () => clearInterval(interval);
        }, [event.images.length]);

        return (
            <div
                id={`event-${eventIndex}`}
                data-animate
                style={{ transitionDelay: `${eventIndex * 120}ms` }}
                className={`mb-20 transform transition-all duration-700 ${isVisible[`event-${eventIndex}`] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-80'
                    }`}
            >
                {/* Modern Event Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">

                    {/* Event Header with Icon */}
                    <div className="relative bg-gradient-to-r from-slate-50 to-gray-50 p-8 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <event.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full">
                                            Event
                                        </span>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-medium">{event.date}</span>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[var(--primary)] transition-colors duration-300">
                                        {event.title}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Layout */}
                    <div className="grid lg:grid-cols-5 gap-0">

                        {/* Image Section - Left Side */}
                        <div className="lg:col-span-2 relative">
                            {/* Main Carousel Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={event.images[imageIndex]}
                                    alt={`${event.title} - Image ${imageIndex + 1}`}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                                {/* Image Navigation Dots */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {event.images.map((_, dotIndex) => (
                                        <button
                                            key={dotIndex}
                                            onClick={() => setImageIndex(dotIndex)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${dotIndex === imageIndex
                                                ? 'bg-white scale-125'
                                                : 'bg-white/50 hover:bg-white/80'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Thumbnail Strip */}
                            <div className="p-4 bg-gray-50/50">
                                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                                    {event.images.map((image, thumbIndex) => (
                                        <button
                                            key={thumbIndex}
                                            onClick={() => setImageIndex(thumbIndex)}
                                            className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${thumbIndex === imageIndex
                                                ? 'border-[var(--primary)] scale-105 shadow-md'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Thumbnail ${thumbIndex + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content Section - Right Side */}
                        <div className="lg:col-span-3 p-8">

                            {/* Highlights Cards */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {event.highlights.map((highlight, highlightIndex) => (
                                    <div
                                        key={highlightIndex}
                                        className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                            <highlight.icon className="w-5 h-5 text-[var(--primary)]" />
                                        </div>
                                        <div className="text-sm font-bold text-gray-900 mb-1">{highlight.value}</div>
                                        <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">{highlight.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Event Content */}
                            <div className="space-y-6">
                                <div>
                                    <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-[var(--primary)] rounded-full"></div>
                                        Event Overview
                                    </h5>
                                    <div className="prose prose-gray max-w-none">
                                        {event.content.split(/\n\n+/).map((para, i) => (
                                            <p key={i} className="text-gray-700 leading-relaxed text-sm mb-4">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100">
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
                    <Star className="absolute top-32 left-1/4 w-16 h-16 text-white/20 animate-float" />
                    <Users className="absolute top-48 right-1/4 w-12 h-12 text-white/20 animate-float" style={{ animationDelay: "0.5s" }} />
                    <Trophy className="absolute bottom-40 left-1/3 w-14 h-14 text-white/20 animate-float" style={{ animationDelay: "1s" }} />
                    <Heart className="absolute bottom-32 right-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            Ceremonies & Meetings
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            Celebrating milestones, fostering connections, and building our research community through memorable events and meaningful gatherings
                        </p>

                        {/* Stats Cards with Glass Morphism */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Star className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Grand Ceremonies</div>
                                <div className="text-white/80 text-sm">Celebrating achievements</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Community Meetings</div>
                                <div className="text-white/80 text-sm">Building together</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Trophy className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Special Events</div>
                                <div className="text-white/80 text-sm">Creating memories</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* subtle divider to separate hero and content */}
            <div className="w-full h-8 bg-gradient-to-b from-transparent to-white/30 -mt-8 pointer-events-none" />

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
                            Our Journey Together
                        </h3>
                        <p className="text-2xl text-sky-700 max-w-4xl mx-auto">
                            Explore the memorable ceremonies and important meetings that have shaped our research society and strengthened our community bonds
                        </p>
                    </div>

                    {/* Events Grid */}
                    {events.map((event, eventIndex) => (
                        <EventCard key={event.id} event={event} eventIndex={eventIndex} />
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
                    <div className={`transform transition-all duration-1000 ${isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-90'
                        }`}>
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <Globe className="w-20 h-20 animate-spin-slow" />
                            <Star className="w-16 h-16 animate-pulse" />
                            <Trophy className="w-18 h-18" />
                        </div>
                        <h3 className="text-5xl md:text-6xl font-bold mb-8">
                            Be Part of Our Story
                        </h3>
                        <p className="text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
                            Join us in creating more memorable moments and meaningful connections.
                            Be part of a vibrant research community that celebrates achievements together.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                                <span className="font-bold text-xl">Join Our Community</span>
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
                    50% { transform: translateY(-12px); }
                }
                
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    /* slow and subtle gradient movement */
                    animation: gradient 12s ease infinite;
                }

                .animate-spin-slow {
                    /* slower globe spin */
                    animation: spin 20s linear infinite;
                }

                .animate-float {
                    /* reduced float amplitude and slower */
                    animation: float 8s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite 2.5s;
                }
                
                /* slow down default pulse/bounce for this page to be less aggressive */
                .animate-pulse {
                    animation: pulse 3.5s cubic-bezier(.4,0,.6,1) infinite !important;
                }

                .animate-bounce {
                    animation: bounce 3.5s infinite !important;
                }

                .animate-fade-in-up {
                    animation: fadeInUp 1.6s ease-out;
                }

                @keyframes pulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.65; transform: scale(1.05); }
                    100% { opacity: 1; transform: scale(1); }
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
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
                
                /* define spin keyframe used above */
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default CeremoniesAndMeetingsPage;