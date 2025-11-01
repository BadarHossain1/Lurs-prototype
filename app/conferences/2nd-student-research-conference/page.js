"use client";

import { useState, useEffect } from "react";
import {
    Calendar,
    MapPin,
    Users,
    Award,
    FileText,
    ChevronLeft,
    ChevronRight,
    X,
    Mail,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    ArrowRight,
    CheckCircle,
    Star,
    Globe,
    BookOpen,
    Target,
    Zap,
    TrendingUp,
} from "lucide-react";
import Image from "next/image";

export default function SecondConferencePage() {
    const [isVisible, setIsVisible] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [lightboxImage, setLightboxImage] = useState(null);

    const images = [
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    ];

    const galleryImages = [
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
        "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    ];

    const committeeMembers = [
        {
            id: 1,
            name: "Professor Dr. Mohammed Taj Uddin",
            designation: "Chief Patron",
            image: "https://res.cloudinary.com/ddzsqf33b/image/upload/v1748375035/lurs/ju8sja0pcprpruxojeal.jpg",
        },
        {
            id: 2,
            name: "Dr. Mohammod Kamruj Jaman Bhuiyan",
            designation: "Chief Editor",
            image: "https://res.cloudinary.com/ddzsqf33b/image/upload/v1748375778/lurs/cqclwzjuupycwgfol5xg.webp",
        },
        {
            id: 3,
            name: "Professor Dr. Bashir Ahmed Bhuiyan",
            designation: "Chief Editor",
            image: "https://res.cloudinary.com/ddzsqf33b/image/upload/v1748375038/lurs/gfpzdubjrhsyaeys7yse.jpg",
        },
        {
            id: 4,
            name: "Dr. Md. Rezaul Karim",
            designation: "Chief Editor",
            image: "https://res.cloudinary.com/ddzsqf33b/image/upload/v1748375035/lurs/kje9o2shn1pcz1l1zhfm.jpg",
        },
        {
            id: 5,
            name: "Dr. Shafkat Kibria",
            designation: "Advisor",
            image: "https://res.cloudinary.com/draevbvcu/image/upload/v1745142755/FB_IMG_1745141103346_rykcyf.jpg",
        },
        {
            id: 6,
            name: "Md. Jamaner Rahaman",
            designation: "Co-advisor",
            image: "https://res.cloudinary.com/draevbvcu/image/upload/v1745142756/IMG-20250420-WA0016_xjdo6q.jpg",
        },
        {
            id: 7,
            name: "Dipongkar Deb",
            designation: "Conference Chair",
            image: "https://res.cloudinary.com/draevbvcu/image/upload/v1745142757/IMG_20250331_004453_w0ojol.jpg",
        },
        {
            id: 8,
            name: "Rayhan Ahmed",
            designation: "Convenor",
            image: "https://res.cloudinary.com/ddzsqf33b/image/upload/v1749200922/lurs/jenwrlksmzkxt1bmqlq6.jpg",
        },
        {
            id: 9,
            name: "Md. Majidul Islam Rahat",
            designation: "Co-Convenor",
            image: "https://res.cloudinary.com/ddzsqf33b/image/upload/v1749200925/lurs/lpnoyashiirrduov4bio.jpg",
        },
    ];

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

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => {
            observer.disconnect();
            clearInterval(timer);
        };
    }, [images.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background with Carousel */}
                <div className="absolute inset-0">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Conference slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#166a98]/95 via-blue-900/90 to-indigo-900/85" />
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full transition-all duration-300 hover:scale-110"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="mb-8">
                        <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white/90 font-semibold text-lg mb-6">
                            🎓 LURS Conference 2025
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                        <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                            Student Research
                        </span>
                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-blue-100">
                            Conference 2025
                        </span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                        Building A Sustainable World: Tackling Barriers and Exploring New Ideas
                    </p>

                    {/* Key Info Cards */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
                            <div className="text-white font-semibold text-lg">August 9, 2025</div>
                            <div className="text-white/80 text-sm">Conference Date</div>
                        </div>
                        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                            <div className="text-white font-semibold text-lg">Leading University</div>
                            <div className="text-white/80 text-sm">Sylhet, Bangladesh</div>
                        </div>
                    </div>

                    
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? "bg-white w-8"
                                    : "bg-white/50 hover:bg-white/75 w-2"
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* About Conference Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-[#166a98]/10 text-[#166a98] rounded-full font-semibold mb-4">
                            About the Conference
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Conference <span className="text-[#166a98]">Overview</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#166a98] to-blue-500 mx-auto mb-8"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#166a98]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Target className="w-6 h-6 text-[#166a98]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            The Leading University Research Society (LURS) successfully hosted the 2nd Student Research Conference 2025, bringing together students and young researchers from diverse disciplines.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#166a98]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-6 h-6 text-[#166a98]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">National Platform</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            This national-level conference served as a prestigious interdisciplinary platform for the exchange of ideas and promotion of impactful research across multiple domains.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#166a98]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-6 h-6 text-[#166a98]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Real-World Impact</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Participants gained valuable insights into how innovative research contributes to academic progression and addresses real-world challenges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                                    alt="Conference presentation"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#166a98]/20 to-transparent"></div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                                <div className="text-3xl font-bold text-[#166a98] mb-1">500+</div>
                                <div className="text-sm text-gray-600">Participants</div>
                            </div>

                            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                                <div className="text-3xl font-bold text-[#166a98] mb-1">8+</div>
                                <div className="text-sm text-gray-600">Research Domains</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conference Features */}
            <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-[#166a98]/10 text-[#166a98] rounded-full font-semibold mb-4">
                            Conference Features
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            What We <span className="text-[#166a98]">Achieved</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#166a98] to-blue-500 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Presentation Segments */}
                        <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#166a98] to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Presentation Formats</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#166a98]" />
                                    <span className="text-gray-700">Oral Presentations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#166a98]" />
                                    <span className="text-gray-700">Poster Sessions</span>
                                </div>
                            </div>
                        </div>

                        {/* Awards */}
                        <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#166a98] to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recognition & Awards</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-[#166a98]" />
                                    <span className="text-gray-700">Certificates for all</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Star className="w-5 h-5 text-[#166a98]" />
                                    <span className="text-gray-700">Prize Money 7500+ BDT</span>
                                </div>
                            </div>
                        </div>

                        {/* Research Domains */}
                        <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 md:col-span-2 lg:col-span-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#166a98] to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Domains</h3>
                            <div className="grid grid-cols-1 gap-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#166a98]" />
                                    <span className="text-gray-700">Engineering & Technology</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#166a98]" />
                                    <span className="text-gray-700">Computer Science & AI</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#166a98]" />
                                    <span className="text-gray-700">Life Sciences & Agriculture</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#166a98]" />
                                    <span className="text-gray-700">Social Sciences</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#166a98]" />
                                    <span className="text-gray-700">Literature & Cultural Studies</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#166a98]" />
                                    <span className="text-gray-700">Business & Economics</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#166a98]" />
                                    <span className="text-gray-700">Environmental Studies</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#166a98]" />
                                    <span className="text-gray-700">Education & Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conference Gallery */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Conference Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {galleryImages.map((img, index) => (
                            <div
                                key={index}
                                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                                onClick={() => setLightboxImage(img)}
                            >
                                <Image
                                    src={img}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#166a98]/0 group-hover:bg-[#166a98]/30 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setLightboxImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                        <Image
                            src={lightboxImage}
                            alt="Gallery image"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Conference Committee */}
            <section className="py-16 px-4 bg-white/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Conference Committee
                    </h2>

                    {/* Chief Patron */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm hover:shadow-2xl transition-all duration-300">
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <Image
                                    src={committeeMembers[0].image}
                                    alt={committeeMembers[0].name}
                                    fill
                                    className="object-cover rounded-full border-4 border-[#166a98]"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-[#166a98] mb-2">
                                {committeeMembers[0].name}
                            </h3>
                            <p className="text-lg text-gray-600 font-medium">
                                {committeeMembers[0].designation}
                            </p>
                        </div>
                    </div>

                    {/* Other Committee Members */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {committeeMembers.slice(1).map((member) => (
                            <div
                                key={member.id}
                                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-full border-4 border-[#166a98]"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-[#166a98] mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-600 font-medium">
                                    {member.designation}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-white/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Contact Us
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
                            <Mail className="w-12 h-12 text-[#166a98] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#166a98] mb-3">Email</h3>
                            <a
                                href="mailto:lurs@lus.ac.bd"
                                className="text-gray-700 hover:text-[#166a98] transition-colors"
                            >
                                lurs@lus.ac.bd
                            </a>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
                            <Phone className="w-12 h-12 text-[#166a98] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#166a98] mb-3">Phone</h3>
                            <div className="space-y-1 text-gray-700">
                                <p>+8801780-592593</p>
                                <p>+8801601-082124</p>
                                <p>+8801731-979225</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
                            <div className="flex justify-center gap-4 mb-4">
                                <Facebook className="w-10 h-10 text-[#166a98]" />
                                <Instagram className="w-10 h-10 text-[#166a98]" />
                                <Linkedin className="w-10 h-10 text-[#166a98]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#166a98] mb-3">
                                Follow Us
                            </h3>
                            <p className="text-gray-700 text-sm">
                                Stay connected with LURS on social media
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            LURS (Leading University Research Society) proudly hosted this
                            national-level platform to celebrate and empower research that
                            shapes the future. Thank you for being part of this intellectual journey
                            toward innovation and discovery.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}