"use client";

import { useState, useEffect } from "react";
import {
    Calendar,
    MapPin,
    Users,
    Award,
    FileText,
    Clock,
    ChevronLeft,
    ChevronRight,
    X,
    DollarSign,
    Mail,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function SecondConferencePage() {
    const [isVisible, setIsVisible] = useState(false);
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
            image:
                "https://res.cloudinary.com/ddzsqf33b/image/upload/v1748375035/lurs/ju8sja0pcprpruxojeal.jpg",
        },
        {
            id: 2,
            name: "Dr. Mohammod Kamruj Jaman Bhuiyan",
            designation: "Chief Editor",
            image:
                "https://res.cloudinary.com/ddzsqf33b/image/upload/v1748375778/lurs/cqclwzjuupycwgfol5xg.webp",
        },
        {
            id: 3,
            name: "Professor Dr. Bashir Ahmed Bhuiyan",
            designation: "Chief Editor",
            image:
                "https://res.cloudinary.com/ddzsqf33b/image/upload/v1748375038/lurs/gfpzdubjrhsyaeys7yse.jpg",
        },
        {
            id: 4,
            name: "Dr. Md. Rezaul Karim",
            designation: "Chief Editor",
            image:
                "https://res.cloudinary.com/ddzsqf33b/image/upload/v1748375035/lurs/kje9o2shn1pcz1l1zhfm.jpg",
        },
        {
            id: 5,
            name: "Dr. Shafkat Kibria",
            designation: "Advisor",
            image:
                "https://res.cloudinary.com/draevbvcu/image/upload/v1745142755/FB_IMG_1745141103346_rykcyf.jpg",
        },
        {
            id: 6,
            name: "Md. Jamaner Rahaman",
            designation: "Co-advisor",
            image:
                "https://res.cloudinary.com/draevbvcu/image/upload/v1745142756/IMG-20250420-WA0016_xjdo6q.jpg",
        },
        {
            id: 7,
            name: "Dipongkar Deb",
            designation: "Conference Chair",
            image:
                "https://res.cloudinary.com/draevbvcu/image/upload/v1745142757/IMG_20250331_004453_w0ojol.jpg",
        },
        {
            id: 8,
            name: "Rayhan Ahmed",
            designation: "Convenor",
            image:
                "https://res.cloudinary.com/ddzsqf33b/image/upload/v1749200922/lurs/jenwrlksmzkxt1bmqlq6.jpg",
        },
        {
            id: 9,
            name: "Md. Majidul Islam Rahat",
            designation: "Co-Convenor",
            image:
                "https://res.cloudinary.com/ddzsqf33b/image/upload/v1749200925/lurs/lpnoyashiirrduov4bio.jpg",
        },
    ];

    useEffect(() => {
        setIsVisible(true);

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-[#eef5fe]">
            {/* Hero Section with Carousel */}
            <section className="relative h-[600px] overflow-hidden">
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
                        <div className="absolute inset-0 bg-gradient-to-r from-[#166a98]/90 via-[#166a98]/80 to-[#166a98]/70" />
                    </div>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? "bg-white w-8"
                                    : "bg-white/50 hover:bg-white/75"
                                }`}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <h1
                            className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 delay-300 ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                        >
                            LURS 2nd Student Research Conference 2025
                        </h1>
                        <p
                            className={`text-xl md:text-3xl text-white/95 mb-8 font-medium transition-all duration-1000 delay-500 ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                        >
                            Building A Sustainable World: Tackling Barriers and Exploring New
                            Ideas
                        </p>
                        <div
                            className={`flex flex-wrap justify-center gap-6 text-white/90 transition-all duration-1000 delay-700 ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                        >
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">August 9, 2025</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                                <MapPin className="w-5 h-5" />
                                <span className="font-medium">
                                    Leading University, Sylhet, Bangladesh
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call for Abstract Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-8 text-center">
                        Call for Abstract
                    </h2>
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The Leading University Research Society (LURS) cordially invites
                            specially students and young researchers from diverse disciplines
                            to submit original research for presentation at the &ldquo;LURS 2nd
                            Student Research Conference 2025&rdquo; (LURSSRC-2025). This
                            national-level conference will serve as a prestigious
                            interdisciplinary platform for the exchange of ideas and promotion
                            of impactful research across domains such as Engineering, Science
                            and Technology, Social Science, Political Science, Agriculture,
                            Language and Literature etc. Participants will gain insights into
                            how innovative research contributes to academic progression and
                            addresses real-world challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Conference Highlights */}
            <section className="py-16 px-4 bg-white/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Conference Highlights
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#166a98]">
                            <Users className="w-12 h-12 text-[#166a98] mb-4" />
                            <h3 className="text-xl font-bold text-[#166a98] mb-3">
                                Presentation Segments
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98] font-bold">1.</span>
                                    <span>Oral Presentation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98] font-bold">2.</span>
                                    <span>Poster Presentation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#166a98]">
                            <Award className="w-12 h-12 text-[#166a98] mb-4" />
                            <h3 className="text-xl font-bold text-[#166a98] mb-3">
                                Certificates & Awards
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Certificates for all participants</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Best Abstract and Poster: Prize Money 7500 BDT+</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#166a98]">
                            <FileText className="w-12 h-12 text-[#166a98] mb-4" />
                            <h3 className="text-xl font-bold text-[#166a98] mb-3">
                                Research Scope
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Engineering, Science and Technology</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Computer Science and AI</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Life Science & Agriculture</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Social Sciences and Public Policy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Language, Literature, and Cultural Studies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Economics, Business, and Entrepreneurship</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Education and Development Studies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#166a98]">•</span>
                                    <span>Environmental and Sustainability Research</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Submission Guidelines */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Extended Abstract Submission Guidelines
                    </h2>
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">
                                        Title, Authors & Affiliations:
                                    </strong>{" "}
                                    The extended abstract must include the title, the names and
                                    affiliations of all authors, and the presenter&apos;s name
                                    should be underlined.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">Keywords:</strong> Three to
                                    five keywords of the extended abstract should be provided.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    The extended abstract should contain{" "}
                                    <strong className="text-[#166a98]">700-1000 words</strong>,
                                    including the Introduction, Methodology, Results, and
                                    Conclusion sections. References are not counted in the word
                                    limit.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">Referencing Style:</strong>{" "}
                                    IEEE style for Engineering, Science and Technology; APA style
                                    for other disciplines.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">File Name:</strong>{" "}
                                    (LastName_FirstName_AbstractTitle); File Format- Microsoft
                                    Word (.docx) + PDF (.pdf)
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">Font:</strong> Times New
                                    Roman, <strong className="text-[#166a98]">Size:</strong> 12
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    Submissions must be{" "}
                                    <strong className="text-[#166a98]">original</strong> and{" "}
                                    <strong className="text-[#166a98]">unpublished</strong>. All
                                    submissions must be written in English.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    The participants can participate on their own or
                                    cross-university as well. A{" "}
                                    <strong className="text-[#166a98]">maximum of three</strong>{" "}
                                    participants in a team.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    All abstracts will undergo rigorous{" "}
                                    <strong className="text-[#166a98]">peer review</strong> by an
                                    academic panel.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    Time allocated for oral presentation:{" "}
                                    <strong className="text-[#166a98]">
                                        approximately 5 minutes
                                    </strong>
                                    .
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Poster Presentation Guidelines */}
            <section className="py-16 px-4 bg-white/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Poster Presentation Guidelines
                    </h2>
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">Title:</strong> Ensure it
                                    is clear, concise, and easy to read from a distance
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">
                                        Authors & Affiliations:
                                    </strong>{" "}
                                    Include names, institutions, and contact info.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">Sections:</strong> Organize
                                    content into Introduction (background & objectives), Methods
                                    (brief and visual if possible), Results (key findings with
                                    visuals), Discussion (interpretation and implications),
                                    Conclusion (summary and future direction), and optional
                                    Acknowledgments and References.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">Size:</strong> Use a
                                    standard poster size;{" "}
                                    <strong className="text-[#166a98]">Layout:</strong> Use a
                                    clean, logical structure (e.g., 2-4 columns)
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    <strong className="text-[#166a98]">Font Sizes:</strong> Use
                                    clear fonts and scale text sizes so the title, headings, and
                                    body are easily readable from a distance.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#166a98] font-bold text-lg">•</span>
                                <span>
                                    Time allocated for poster presentation:{" "}
                                    <strong className="text-[#166a98]">
                                        approximately 2-3 minutes
                                    </strong>
                                    .
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Important Dates
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                            <Clock className="w-10 h-10 text-[#166a98] mb-4" />
                            <h3 className="text-lg font-bold text-[#166a98] mb-2">
                                Extended Abstract Submission Deadline
                            </h3>
                            <p className="text-2xl font-bold text-gray-800">June 30, 2025</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                            <Clock className="w-10 h-10 text-[#166a98] mb-4" />
                            <h3 className="text-lg font-bold text-[#166a98] mb-2">
                                Notification of Acceptance
                            </h3>
                            <p className="text-2xl font-bold text-gray-800">July 15, 2025</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                            <Calendar className="w-10 h-10 text-[#166a98] mb-4" />
                            <h3 className="text-lg font-bold text-[#166a98] mb-2">
                                Conference Date
                            </h3>
                            <p className="text-2xl font-bold text-gray-800">August 9, 2025</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                            <Users className="w-10 h-10 text-[#166a98] mb-4" />
                            <h3 className="text-lg font-bold text-[#166a98] mb-2">
                                Registration Deadline (Abstract Submission)
                            </h3>
                            <p className="text-2xl font-bold text-gray-800">June 30, 2025</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                            <Users className="w-10 h-10 text-[#166a98] mb-4" />
                            <h3 className="text-lg font-bold text-[#166a98] mb-2">
                                Registration Deadline (Poster Presentation)
                            </h3>
                            <p className="text-2xl font-bold text-gray-800">July 15, 2025</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                            <Users className="w-10 h-10 text-[#166a98] mb-4" />
                            <h3 className="text-lg font-bold text-[#166a98] mb-2">
                                Registration Deadline (Conference Participation)
                            </h3>
                            <p className="text-2xl font-bold text-gray-800">July 25, 2025</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Fees */}
            <section className="py-16 px-4 bg-white/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Registration Fees
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#166a98]">
                            <DollarSign className="w-12 h-12 text-[#166a98] mb-4" />
                            <h3 className="text-xl font-bold text-[#166a98] mb-4">
                                Abstract Registration
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex justify-between">
                                    <span>Per individual</span>
                                    <span className="font-bold text-[#166a98]">500 BDT</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Two persons</span>
                                    <span className="font-bold text-[#166a98]">800 BDT</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Three persons</span>
                                    <span className="font-bold text-[#166a98]">1000 BDT</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#166a98]">
                            <DollarSign className="w-12 h-12 text-[#166a98] mb-4" />
                            <h3 className="text-xl font-bold text-[#166a98] mb-4">
                                Poster Presentation
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex justify-between">
                                    <span>Per individual</span>
                                    <span className="font-bold text-[#166a98]">350 BDT</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Two persons</span>
                                    <span className="font-bold text-[#166a98]">550 BDT</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#166a98]">
                            <DollarSign className="w-12 h-12 text-[#166a98] mb-4" />
                            <h3 className="text-xl font-bold text-[#166a98] mb-4">
                                Conference Participants
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex justify-between">
                                    <span>Per individual</span>
                                    <span className="font-bold text-[#166a98]">200 BDT</span>
                                </li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-4 italic">
                                International participants are requested to contact us via
                                email.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration & Payment */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#166a98] mb-12 text-center">
                        Registration Process
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-[#166a98] mb-6">
                                How to Register
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#166a98] font-bold text-lg">1.</span>
                                    <div>
                                        <strong className="text-[#166a98]">
                                            For Abstract Submission:
                                        </strong>{" "}
                                        <a
                                            href="https://forms.gle/YcHU6a89eKwA2Vvi8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#166a98] font-bold text-lg">2.</span>
                                    <div>
                                        <strong className="text-[#166a98]">
                                            For Poster Presentation:
                                        </strong>{" "}
                                        <a
                                            href="https://forms.gle/H3q8J3viSs5CT9Qk8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#166a98] font-bold text-lg">3.</span>
                                    <div>
                                        <strong className="text-[#166a98]">
                                            For Conference Participation:
                                        </strong>{" "}
                                        <a
                                            href="https://forms.gle/3cSSaj77etkWCMzp7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Click Here
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <p className="mt-6 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                                <strong>N.B:</strong> After payment, submit your abstract via
                                the link (google form) and fill up the google form with
                                transaction ID
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-[#166a98] mb-6">
                                Payment Information
                            </h3>
                            <div className="bg-gradient-to-br from-[#166a98] to-blue-600 rounded-xl p-6 text-white mb-6">
                                <p className="text-sm mb-2 opacity-90">Send payment to:</p>
                                <p className="text-3xl font-bold">Bkash: 01646-035041</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-[#166a98]">
                                    Refund Policy
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#166a98] font-bold text-lg">1.</span>
                                        <span>
                                            <strong className="text-[#166a98]">Full Refund:</strong>{" "}
                                            If the abstract is rejected and you choose not to
                                            participate.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-[#166a98] font-bold text-lg">2.</span>
                                        <span>
                                            <strong className="text-[#166a98]">40% Refund:</strong> If
                                            the abstract is rejected but you still choose to
                                            participate.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                            LURS (Leading University Research Society) proudly hosts this
                            national-level platform to celebrate and empower research that
                            shapes the unseen future. Join us in this intellectual journey
                            toward innovation and discovery.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
