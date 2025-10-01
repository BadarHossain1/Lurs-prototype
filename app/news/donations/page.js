"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Heart, Users, Gift, Sparkles, HandHeart, Home } from "lucide-react";

const DonationsPage = () => {
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

    const galleryImages = [
        {
            src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Food distribution to flood victims"
        },
        {
            src: "https://images.pexels.com/photos/6647005/pexels-photo-6647005.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Students organizing relief efforts"
        },
        {
            src: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Community receiving aid"
        },
        {
            src: "https://images.pexels.com/photos/6647112/pexels-photo-6647112.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Relief supplies distribution"
        },
        {
            src: "https://images.pexels.com/photos/6646993/pexels-photo-6646993.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Volunteer team effort"
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

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary)]/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-sky-200/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-200/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-sky-300/15 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <HandHeart className="absolute top-1/4 left-1/5 w-10 h-10 text-[var(--primary)]/30 animate-float" />
                    <Heart className="absolute top-1/3 right-1/4 w-8 h-8 text-sky-500/40 animate-float-delayed" />
                    <Sparkles className="absolute bottom-1/3 left-1/3 w-7 h-7 text-blue-500/35 animate-pulse" />
                    <Gift className="absolute bottom-1/4 right-1/5 w-9 h-9 text-sky-500/30 animate-float" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <div className="animate-fade-in-up">
                        {/* Icon Group */}
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <HandHeart className="w-14 h-14 text-[var(--primary)] animate-pulse-glow" />
                            <div className="h-14 w-1 bg-gradient-to-b from-[var(--primary)] via-sky-400 to-transparent rounded-full"></div>
                            <Heart className="w-12 h-12 text-sky-500 animate-pulse" />
                            <div className="h-12 w-0.5 bg-gradient-to-b from-sky-400 to-transparent rounded-full"></div>
                            <Gift className="w-10 h-10 text-blue-600" />
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] via-sky-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                            Donation &
                        </h1>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-sky-500 via-blue-500 to-[var(--primary)] bg-clip-text text-transparent animate-gradient">
                            Social Contributions
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Extending a helping hand to those in need, building a compassionate community through action and solidarity
                        </p>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            <div className="group bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                                <div className="flex items-center gap-2">
                                    <HandHeart className="w-5 h-5 text-[var(--primary)] animate-pulse-glow" />
                                    <span className="text-sm font-bold text-[var(--primary)]">Community Service</span>
                                </div>
                            </div>
                            <div className="group bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-sky-600" />
                                    <span className="text-sm font-bold text-sky-600">Student Initiative</span>
                                </div>
                            </div>
                            <div className="group bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                                <div className="flex items-center gap-2">
                                    <Gift className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-bold text-blue-600">Relief Work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"></div>

            {/* Main Content Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Event Section */}
                    <div
                        id="flood-relief-2024"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['flood-relief-2024'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

                            {/* Text Content */}
                            <div className="space-y-6">
                                {/* Date Badge */}
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary)] to-sky-600 text-white px-6 py-3 rounded-full shadow-lg">
                                    <Calendar className="w-5 h-5" />
                                    <span className="font-bold text-sm">29 August 2024</span>
                                </div>

                                {/* Title */}
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-sky-600 bg-clip-text text-transparent">
                                        Flood Relief Initiative 2024
                                    </h3>
                                    <p className="text-lg text-gray-500 italic font-medium">
                                        লিডিং ইউনিভার্সিটির শিক্ষার্থীদের উদ্যোগে বন্যায় ক্ষতিগ্রস্ত মানুষদের মাঝে খাদ্য সামগ্রী বিতরণ
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center gap-3">
                                    <div className="h-1 w-16 bg-gradient-to-r from-[var(--primary)] to-sky-400 rounded-full"></div>
                                    <HandHeart className="w-5 h-5 text-[var(--primary)] animate-pulse" />
                                    <div className="h-1 flex-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></div>
                                </div>

                                {/* Content - English */}
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        In the first phase, essential food items have been distributed among 200 flood-affected families under the initiative of the students of Leading University. On August 27, food items were distributed in several villages of Rajnagar upazila of Moulvibazar district.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        People from different classes and professions including university teachers, current and former students cooperated in this initiative.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The founder of Leading University and Honorable Chairman of the Board of Trustees, Danbir Dr. Syed Ragib Ali, provided solidarity to this collective effort of the students of Leading University by providing cash and materials.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        On behalf of the teachers of the university, English department lecturer Mr. Asfaq Ahmad Shovan and CSE department lecturer (part-time) Md. Mahdi Hossain Hira were present.
                                    </p>
                                </div>

                                {/* Bangla Content (shown together with English) */}
                                <div id="bangla-inline" className="space-y-4">
                                    <h4 className="text-xl font-semibold text-[var(--primary)]">বাংলায় বিস্তারিত</h4>
                                    <div className="space-y-3 text-gray-700 leading-relaxed text-lg">
                                        <p>
                                            লিডিং ইউনিভার্সিটির শিক্ষার্থীদের উদ্যোগে বন্যায় ক্ষতিগ্রস্ত ২০০টি পরিবারের মধ্যে প্রথম ধাপে নিত্য প্রয়োজনীয় খাদ্য সামগ্রী বিতরণ করা হয়েছে। গতকাল ২৭ আগস্ট মৌলভীবাজার জেলার রাজনগর উপজেলার কয়েকটি গ্রামে খাদ্য-সামগ্রী বিতরণ করা হয়। এই উদ্যোগে বিশ্ববিদ্যালয়ের শিক্ষক, বর্তমান ও প্রাক্তন শিক্ষার্থীসহ বিভিন্ন শ্রেণি-পেশার মানুষ সহযোগিতা করেন।
                                        </p>
                                        <p>
                                            লিডিং ইউনিভার্সিটির শিক্ষার্থীদের সম্মিলিত এই প্রয়াসে সংহতি জানানোর জন্য নগদ অর্থ ও উপকরণ দিয়ে সহযোগিতা প্রদান করেন লিডিং ইউনিভার্সিটির প্রতিষ্ঠাতা ও ট্রাস্টি বোর্ডের সম্মানিত চেয়ারম্যান দানবীর ড. সৈয়দ রাগীব আলী।
                                        </p>
                                        <p>
                                            এসময় বিশ্ববিদ্যালয়ের শিক্ষকদের পক্ষ থেকে ইংরেজি বিভাগের প্রভাষক জনাব আসফাক আহমদ শোভন এবং সিএসই বিভাগের প্রভাষক (খন্ডকালীন) মোঃ মাহদী হোসেন হীরা উপস্থিত ছিলেন।
                                        </p>
                                        <p className="font-semibold text-[var(--primary)]">
                                            উল্লেখ্য, প্রথম পর্যায়ে খাদ্য সামগ্রী বিতরণ; পরবর্তীতে ক্ষতিগ্রস্ত ঘর মেরামতের জন্য সাহায্য করা হবে। যারা এই উদ্যোগে বিভিন্নভাবে সাহায্য সহযোগিতা করেছেন আপনাদের প্রতি আমাদের কৃতজ্ঞতা।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Images Column: show all images on the right side (no gallery/lightbox) */}
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {galleryImages.map((image, idx) => (
                                        <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                                            <Image src={image.src} alt={image.alt} fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* End of event section */}
                    </div>
                </div>
            </section>

            {/* No lightbox/modal - images shown inline on the right column */}

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
                            <HandHeart className="w-12 h-12 animate-pulse" />
                            <Heart className="w-10 h-10" />
                            <Gift className="w-12 h-12 animate-pulse-glow" />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Together We Make a Difference
                        </h3>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Every act of kindness creates ripples of hope. Join us in building a compassionate community that stands together in times of need.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonationsPage;
