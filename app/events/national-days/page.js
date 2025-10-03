"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Users, Flag, Heart, Globe, Sparkles, Star } from "lucide-react";

const NationalDaysPage = () => {
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

    const events = [
        {
            id: "event-1",
            date: "26 March 2024",
            titleBangla: "মহান স্বাধীনতা ও জাতীয় দিবস-২০২৪ উপলক্ষ্যে লিডিং বিশ্ববিদ্যালয় গবেষনা সংসদের পুষ্পার্ঘ্য অর্পণ",
            titleEnglish: "LURS Wreath Laying on Great Independence & National Day 2024",
            contentBangla: [
                "মহান স্বাধীনতা ও জাতীয় দিবস-২০২৪ উপলক্ষ্যে লিডিং বিশ্ববিদ্যালয় গবেষনা সংসদের পক্ষ থেকে শহিদ মিনারে পুষ্পার্ঘ্য অর্পণ করে মহান স্বাধীনতা যুদ্ধে শহিদদের প্রতি গভীর শ্রদ্ধা জ্ঞাপন করা হয়েছে।",
                "স্বাধীনতার ৫৩ বছরে পুষ্পার্ঘ্য অর্পণের সময় উপস্থিত ছিলেন লিডিং বিশ্ববিদ্যালয় গবেষনা সংসদের সম্মানিত উপদেষ্টা ডক্টর শাফকাত কিবরিয়া।",
                "এসময় ক্লাবের প্রতিষ্ঠাতা সভাপতি আব্দুস সামাদ সুমু, প্রতিষ্ঠাতা সাধারণ সম্পাদক মাহমুদুল হক জামিল, মিডিয়া ও কন্টেন্ট ডেভেলপমেন্ট সম্পাদক নাফি চৌধুরী, সহযোগী সদস্য হামযা উপস্থিত ছিলেন।"
            ],
            contentEnglish: [
                "On the occasion of Great Independence & National Day 2024, the Leading University Research Society paid deep respect to the martyrs of the Great War of Independence by laying a wreath at the Shaheed Minar.",
                "During the 53rd anniversary of independence, Dr. Shafkat Kibria, the esteemed Adviser of the Leading University Research Society, was present at the wreath-laying ceremony.",
                "At that time, Founding President Abdus Samad Sumo, Founding General Secretary Mahmudul Haque Jamil, Media & Content Development Secretary Nafi Chowdhury, and Associate Member Hamza were also present."
            ],
            image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id: "event-2",
            date: "16 December 2024",
            titleBangla: "মহান বিজয় দিবস-২০২৪ উপলক্ষ্যে লিডিং ইউনিভার্সিটি রিসার্চ সোসাইটির পুষ্পস্তবক অর্পণ অনুষ্ঠান",
            titleEnglish: "Leading University Research Society's Wreath Laying Ceremony on Great Victory Day 2024",
            contentBangla: [
                "মহান বিজয় দিবস-২০২৪ উপলক্ষ্যে লিডিং ইউনিভার্সিটি রিসার্চ সোসাইটির পক্ষ থেকে শহিদ মিনারে পুষ্পস্তবক অর্পণ করে মহান স্বাধীনতা যুদ্ধের শহিদদের প্রতি গভীর শ্রদ্ধা জ্ঞাপন করা হয়েছে।",
                "পুষ্পস্তবক অর্পণ অনুষ্ঠানে উপস্থিত ছিলেন লিডিং ইউনিভার্সিটি রিসার্চ সোসাইটির উপদেষ্টা ডক্টর শাফকাত কিবরিয়া এবং সহ-উপদেষ্টা মোঃ জামানের রহমান।"
            ],
            contentEnglish: [
                "On the occasion of Great Victory Day 2024, the Leading University Research Society paid deep respect to the martyrs of the Great War of Independence by laying a wreath at the Shaheed Minar.",
                "Dr. Shafkat Kibria, Adviser, and Md. Jamaner Rahaman, Co-Adviser of the Leading University Research Society, were present during the wreath-laying ceremony."
            ],
            image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id: "event-3",
            date: "21 February 2025",
            titleBangla: "আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষ্যে লিডিং ইউনিভার্সিটি রিসার্চ সোসাইটি'র পুষ্পস্তবক অর্পণ",
            titleEnglish: "LURS Wreath Laying on International Mother Language Day 2025",
            contentBangla: [
                "আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষ্যে লিডিং ইউনিভার্সিটি রিসার্চ সোসাইটি'র পক্ষ থেকে শহিদ মিনারে পুষ্পস্তবক অর্পণ করে ভাষা শহিদদের প্রতি গভীর শ্রদ্ধা জ্ঞাপন করা হয়েছে।",
                "পুষ্পস্তবক অর্পণের সময় উপস্থিত ছিলেন লিডিং ইউনিভার্সিটি রিসার্চ সোসাইটি'র সম্মানিত উপদেষ্টা ডক্টর শাফকাত কিবরিয়া এবং সহ-উপদেষ্টা জামানের রহমান, সভাপতি, সাধারণ সম্পাদক, কোষাধ্যক্ষসহ অন্যান্য ব্যক্তিবর্গ।"
            ],
            contentEnglish: [
                "On the occasion of International Mother Language Day, the Leading University Research Society paid deep respect to the language martyrs by laying a wreath at the Shaheed Minar.",
                "Dr. Shafkat Kibria, Adviser, and Jamaner Rahman, Co-Adviser of the Leading University Research Society, along with the President, General Secretary, Treasurer, and other dignitaries were present during the wreath-laying ceremony."
            ],
            image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id: "event-4",
            date: "26 March 2025",
            titleBangla: "স্বাধীনতা দিবসে লিডিং ইউনিভার্সিটি রিসার্চ সোসাইটির পক্ষ থেকে বীর শহীদদের প্রতি বিনম্র শ্রদ্ধা",
            titleEnglish: "LURS Pays Humble Tribute to Brave Martyrs on Independence Day 2025",
            contentBangla: [
                "১৯৭১ সালের মহান মুক্তিযুদ্ধের বীর সেনানীদের আত্মত্যাগেই আজকের স্বাধীন বাংলাদেশ। আমরা গভীর কৃতজ্ঞতায় স্মরণ করছি সেই সকল বীর সন্তানদের, যাঁদের রক্তে রাঙানো এ দেশের স্বাধীনতা। দেশের সমৃদ্ধি ও উন্নয়নে গবেষণা ও জ্ঞানচর্চার মাধ্যমে আমরা তাদের স্বপ্ন পূরণে প্রতিশ্রুতিবদ্ধ।",
                "লিডিং ইউনিভার্সিটি রিসার্চ সোসাইটি জাতির এই গৌরবময় দিনে শ্রদ্ধা ও ভালোবাসা জানায়। মুক্তিযুদ্ধের চেতনায় উদ্বুদ্ধ হয়ে আমরা দেশ গঠনে অবদান রাখার অঙ্গীকার করি। বাংলাদেশের ইতিহাস, সংস্কৃতি ও উন্নয়নে গবেষণার আলোকবর্তিকা হয়ে এগিয়ে চলবে আমাদের সংগঠন।",
                "দেশপ্রেমের চেতনায় উজ্জীবিত হয়ে আগামী দিনের গবেষক ও নেতৃত্ব তৈরি করাই আমাদের লক্ষ্য। বিজয়ের এই আনন্দঘন দিনে আমরা প্রতিজ্ঞা করি – সত্য, জ্ঞান ও ন্যায়পরায়ণতার পথে চলব।"
            ],
            contentEnglish: [
                "Today's independent Bangladesh exists because of the brave freedom fighters' sacrifices in the great Liberation War of 1971. We remember with deep gratitude those heroic sons whose blood painted this country's independence. We are committed to fulfilling their dreams through research and knowledge pursuit for the country's prosperity and development.",
                "The Leading University Research Society extends respect and love on this glorious day of the nation. Inspired by the spirit of the Liberation War, we pledge to contribute to nation-building. Our organization will continue as a beacon of research in Bangladesh's history, culture, and development.",
                "Motivated by patriotic spirit, our goal is to create the researchers and leaders of tomorrow. On this joyous day of victory, we pledge to walk the path of truth, knowledge, and justice."
            ],
            image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
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
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
            `}</style>

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
                    <Flag className="absolute top-32 left-1/4 w-16 h-16 text-white/20 animate-float" />
                    <Heart className="absolute top-48 right-1/4 w-12 h-12 text-white/20 animate-float" style={{ animationDelay: "0.5s" }} />
                    <Sparkles className="absolute bottom-40 left-1/3 w-14 h-14 text-white/20 animate-float" style={{ animationDelay: "1s" }} />
                    <Star className="absolute bottom-32 right-1/3 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1.5s" }} />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
                            National Days & Tributes
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            Honoring our heroes, celebrating our heritage, and remembering those who gave everything for our freedom
                        </p>

                        {/* Stats Cards with Glass Morphism */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Flag className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Independence Day</div>
                                <div className="text-white/80 text-sm">Celebrating freedom</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Victory Day</div>
                                <div className="text-white/80 text-sm">Honoring heroes</div>
                            </div>
                            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                <Sparkles className="w-8 h-8 text-white mx-auto mb-2" />
                                <div className="text-white font-semibold mb-1">Mother Language Day</div>
                                <div className="text-white/80 text-sm">Remembering martyrs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"></div>

            {/* Events Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto space-y-32">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            id={event.id}
                            data-animate
                            className={`transform transition-all duration-1000 ${isVisible[event.id] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                        >
                            {/* Hero-style layout: Text on left, Image on right */}
                            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                                {/* Text Content */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    {/* Date Badge */}
                                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-sky-600 text-white px-6 py-3 rounded-full shadow-lg">
                                        <Calendar className="w-5 h-5" />
                                        <span className="font-bold text-sm">{event.date}</span>
                                    </div>

                                    {/* Title */}
                                    <div>
                                        <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-sky-600 bg-clip-text text-transparent">
                                            {event.titleEnglish}
                                        </h3>
                                        <p className="text-lg text-gray-500 italic font-medium">
                                            {event.titleBangla}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex items-center gap-3">
                                        <div className="h-1 w-16 bg-gradient-to-r from-[var(--primary)] to-sky-400 rounded-full"></div>
                                        <Flag className="w-5 h-5 text-[var(--primary)] animate-pulse" />
                                        <div className="h-1 flex-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></div>
                                    </div>

                                    {/* Content - English */}
                                    <div className="space-y-4">
                                        {event.contentEnglish.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="text-gray-700 leading-relaxed text-lg">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Content - Bangla (styled differently) */}
                                    <div className="bg-gradient-to-br from-blue-50/50 to-sky-50/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 space-y-3">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                                            <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wide">বাংলায়</span>
                                        </div>
                                        {event.contentBangla.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="text-gray-600 leading-relaxed text-base">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Image */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                                        <Image
                                            src={event.image}
                                            alt={event.titleEnglish}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Floating badge on image */}
                                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                            <div className="flex items-center gap-2">
                                                <Heart className="w-5 h-5 text-[var(--primary)] animate-pulse" />
                                                <span className="font-bold text-gray-900 text-sm">Remembrance</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements around image */}
                                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--primary)]/10 rounded-full blur-2xl"></div>
                                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gradient-to-r from-[var(--primary)] via-sky-600 to-blue-600 relative overflow-hidden">
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
                            <Flag className="w-12 h-12 animate-pulse" />
                            <Heart className="w-10 h-10" />
                            <Globe className="w-12 h-12 animate-spin-slow" />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Honoring Our Heritage
                        </h3>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Together we remember, together we honor, together we build a future worthy of our heroes&apos; sacrifices.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NationalDaysPage;
