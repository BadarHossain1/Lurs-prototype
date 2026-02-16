"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const Sections = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(0);

    // Section 1 - Objectives Data
    const objectives = [
        {
            id: 1,
            title: "Research Excellence",
            description: "Promote high-quality, rigorous research across all disciplines",
            icon: "🔬"
        },
        {
            id: 2,
            title: "Interdisciplinary Collaboration",
            description: "Foster collaboration between different departments and fields",
            icon: "🤝"
        },
        {
            id: 3,
            title: "Student Mentorship",
            description: "Guide and support emerging researchers and graduate students",
            icon: "👥"
        },
        {
            id: 4,
            title: "Knowledge Translation",
            description: "Transform research findings into practical solutions for society",
            icon: "💡"
        },
        {
            id: 5,
            title: "Ethical Research",
            description: "Maintain highest standards of research integrity and ethics",
            icon: "⚖️"
        },
        {
            id: 6,
            title: "Global Impact",
            description: "Create research that addresses global challenges and opportunities",
            icon: "🌍"
        }
    ];

    // Section 2 - Advisors Data
    const advisors = [
        {
            id: 1,
            name: "Dr. Shafkat Kibria",

            position: "Advisor",
            image: "https://res.cloudinary.com/draevbvcu/image/upload/v1745142755/FB_IMG_1745141103346_rykcyf.jpg"
        },
        {
            id: 2,
            name: "Md. Jamaner Rahaman",

            position: "Co-advisor",
            image: "https://res.cloudinary.com/draevbvcu/image/upload/v1745142756/IMG-20250420-WA0016_xjdo6q.jpg"
        }
    ];

    // Section 4 - Highlights Images
    const highlightImages = [
        "https://i.ibb.co.com/C5Ptq3NB/gallery3.jpg",
        "https://i.ibb.co.com/m5Y3rvPQ/newsletter.jpg",
        "https://i.ibb.co.com/JF3h27kM/1success3.jpg",
        "https://i.ibb.co.com/Rk8ngy4S/gallery2.jpg",

    ];

    // Section 5 - Important Notices
    const notices = [
        {
            id: 1,
            title: "Research Grant Applications Open",
            description: "Applications for the 2025 research grants are now open. Deadline: March 15, 2025",
            image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400",
            date: "Feb 1, 2025"
        },
        {
            id: 2,
            title: "Annual Research Symposium",
            description: "Join us for our annual symposium featuring groundbreaking research presentations",
            image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
            date: "Apr 20, 2025"
        },
        {
            id: 3,
            title: "Ethics Training Workshop",
            description: "Mandatory ethics training for all research participants. Multiple sessions available",
            image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
            date: "Mar 10, 2025"
        },
        {
            id: 4,
            title: "New Lab Equipment Available",
            description: "State-of-the-art equipment now available for booking in the central research facility",
            image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
            date: "Jan 25, 2025"
        }
    ];

    // Section 5 - Video URLs
    const videos = [
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flursbd%2Fvideos%2F1029925765595905%2F&show_text=false&width=560&t=0",
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flursbd%2Fvideos%2F686481963840786%2F&show_text=false&width=560&t=0",
        
    ];

    // Section 6 - Gallery Images
    const galleryImages = [
        {
            id: 1,
            src: "https://i.ibb.co.com/C5Ptq3NB/gallery3.jpg",
            alt: "Research Gallery Image 1"
        },
        {
            id: 2,
            src: "https://i.ibb.co.com/m5Y3rvPQ/newsletter.jpg",
            alt: "Research Gallery Image 2"
        },
        {
            id: 3,
            src: "https://i.ibb.co.com/JF3h27kM/1success3.jpg",
            alt: "Research Gallery Image 3"
        },
        {
            id: 4,
            src: "https://i.ibb.co.com/Rk8ngy4S/gallery2.jpg",
            alt: "Research Gallery Image 4"
        },
        {
            id: 5,
            src: "https://i.ibb.co.com/fYF44DLL/1-success10.jpg",
            alt: "Research Gallery Image 5"
        },
        {
            id: 6,
            src: "https://i.ibb.co.com/S7f5f2D1/1success6.jpg",
            alt: "Research Gallery Image 6"
        },
        {
            id: 7,
            src: "https://i.ibb.co.com/MxNK4D36/1success9.jpg",
            alt: "Research Gallery Image 7"
        },
        {
            id: 8,
            src: "https://i.ibb.co.com/Zpd7jXpp/gallery6.jpg",
            alt: "Research Gallery Image 8"
        },
        {
            id: 9,
            src: "https://i.ibb.co.com/4nT2D5C0/gallery14.jpg",
            alt: "Research Gallery Image 9"
        },
        {
            id: 10,
            src: "https://i.ibb.co.com/mgRD919/1success17.jpg",
            alt: "Research Gallery Image 10"
        },
        {
            id: 11,
            src: "https://i.ibb.co.com/7NVhT6X7/1success15.jpg",
            alt: "Research Gallery Image 11"
        },
        {
            id: 12,
            src: "https://i.ibb.co.com/4ZZ7Bdct/associate1.jpg",
            alt: "Research Gallery Image 12"
        },
        {
            id: 13,
            src: "https://i.ibb.co.com/GfMtyTFQ/gallery19-1.jpg",
            alt: "Research Gallery Image 13"
        },
        {
            id: 14,
            src: "https://i.ibb.co.com/NGTNGYc/1success8.jpg",
            alt: "Research Gallery Image 14"
        },
        {
            id: 15,
            src: "https://i.ibb.co.com/hxstkwC6/1success1.jpg",
            alt: "Research Gallery Image 15"
        },
        {
            id: 16,
            src: "https://i.ibb.co.com/6cL898Y8/1success12.jpg",
            alt: "Research Gallery Image 16"
        },
        {
            id: 17,
            src: "https://i.ibb.co.com/dw2z5Qrv/1success14.jpg",
            alt: "Research Gallery Image 17"
        },
        {
            id: 18,
            src: "https://i.ibb.co.com/n8tpQVT4/1success13.jpg",
            alt: "Research Gallery Image 18"
        },
        {
            id: 19,
            src: "https://i.ibb.co.com/zTKWvJyX/gallery5.jpg",
            alt: "Research Gallery Image 19"
        },
        {
            id: 20,
            src: "https://i.ibb.co.com/B52cLGrH/gallery18.jpg",
            alt: "Research Gallery Image 20"
        },
        {
            id: 21,
            src: "https://i.ibb.co.com/SXQ846V6/independenceday25.jpg",
            alt: "Research Gallery Image 21"
        },
        {
            id: 22,
            src: "https://i.ibb.co.com/Z6p33270/newvc.jpg",
            alt: "Research Gallery Image 22"
        },
        {
            id: 23,
            src: "https://i.ibb.co.com/XZGFXTJd/1success5.jpg",
            alt: "Research Gallery Image 23"
        },
        {
            id: 24,
            src: "https://i.ibb.co.com/VYMvNQgH/exmeeting1.jpg",
            alt: "Research Gallery Image 24"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % highlightImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + highlightImages.length) % highlightImages.length);
    };

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    };

    // Intersection Observer for scroll animations
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

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="floating-shapes pointer-events-none">
                <div className="shape shape-1">🎓</div>
                <div className="shape shape-2">📚</div>
                <div className="shape shape-3">🔬</div>
                <div className="shape shape-4">🌍</div>
                <div className="shape shape-5">💡</div>
                <div className="shape shape-6">🧪</div>
            </div>

            {/* Section 1 - Objectives */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative" id="objectives" data-animate>
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
                            Our <span className="text-[#176b98]">Objectives</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Leading University Research Society is committed to advancing research excellence through these core objectives
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <div
                                key={objective.id}
                                className="group relative"
                                data-animate
                                style={{
                                    opacity: isVisible['objectives'] ? 1 : 0,
                                    transform: isVisible['objectives'] ? 'translateY(0)' : 'translateY(50px)',
                                    transition: `all 0.6s ease ${index * 0.1}s`
                                }}
                            >
                                <div className="relative p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50 hover:border-[#176b98]/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 overflow-hidden">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#176b98]/0 to-[#176b98]/0 group-hover:from-[#176b98]/5 group-hover:to-[#176b98]/10 transition-all duration-500 rounded-3xl"></div>

                                    <div className="text-center relative z-10">
                                        <div className="text-6xl mb-4 group-hover:scale-110 transition-all duration-300 inline-block">
                                            {objective.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#176b98] transition-colors duration-300">
                                            {objective.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {objective.description}
                                        </p>
                                    </div>

                                    {/* Decorative pulse effect */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#176b98]/10 rounded-full blur-2xl group-hover:animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2 - LURS Advisors */}
            <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden" id="advisors" data-animate>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 text-9xl animate-float">🎓</div>
                    <div className="absolute bottom-20 right-10 text-9xl animate-float-delayed">📖</div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
                            LURS <span className="text-[#176b98]">Advisors</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Meet our distinguished advisors who guide our research initiatives
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {advisors.map((advisor, index) => (
                            <div
                                key={advisor.id}
                                className="group relative"
                                data-animate
                                style={{
                                    opacity: isVisible['advisors'] ? 1 : 0,
                                    transform: isVisible['advisors'] ? 'translateY(0)' : 'translateY(50px)',
                                    transition: `all 0.7s ease ${index * 0.2}s`
                                }}
                            >
                                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(23,107,152,0.3)] transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-200/50">
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={advisor.image}
                                            alt={advisor.name}
                                            fill
                                            className="object-cover group-hover:scale-125 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-[#176b98]/70 transition-all duration-500"></div>

                                        {/* Decorative shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    </div>
                                    <div className="p-8 relative">

                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#176b98] transition-colors duration-300">
                                            {advisor.name}
                                        </h3>

                                        <p className="text-gray-600 font-medium">
                                            {advisor.position}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2.5 - LURS Committee 2025-2026 Panel */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" id="committee-panel" data-animate>
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 text-8xl animate-float">👥</div>
                    <div className="absolute bottom-20 right-20 text-8xl animate-float-delayed">🏆</div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
                            LURS Committee <span className="text-[#176b98]">2025-2026 Panel</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Meet the leadership team guiding LURS towards excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {/* President */}
                        <div
                            className="group relative"
                            data-animate
                            style={{
                                opacity: isVisible['committee-panel'] ? 1 : 0,
                                transform: isVisible['committee-panel'] ? 'translateY(0)' : 'translateY(50px)',
                                transition: 'all 0.7s ease 0.1s'
                            }}
                        >
                            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(23,107,152,0.3)] transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-200/50">
                                {/* Circular Image Container */}
                                <div className="relative w-48 h-48 mx-auto mt-8 mb-6">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#176b98] to-[#1a7fb8] p-1 group-hover:scale-110 transition-transform duration-500">
                                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                                            <Image
                                                src="/President.jpg"
                                                alt="Nibir Ray - President"
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    {/* Decorative ring */}
                                    <div className="absolute -inset-2 rounded-full border-2 border-[#176b98]/20 group-hover:border-[#176b98]/40 transition-all duration-500"></div>
                                </div>

                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#176b98] transition-colors duration-300">
                                        Nibir Ray
                                    </h3>
                                    <p className="text-[#176b98] font-semibold text-lg mb-4">
                                        President
                                    </p>
                                    {/* Decorative element */}
                                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#176b98] to-transparent mx-auto"></div>
                                </div>
                            </div>
                        </div>

                        {/* General Secretary */}
                        <div
                            className="group relative"
                            data-animate
                            style={{
                                opacity: isVisible['committee-panel'] ? 1 : 0,
                                transform: isVisible['committee-panel'] ? 'translateY(0)' : 'translateY(50px)',
                                transition: 'all 0.7s ease 0.2s'
                            }}
                        >
                            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(23,107,152,0.3)] transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-200/50">
                                {/* Circular Image Container */}
                                <div className="relative w-48 h-48 mx-auto mt-8 mb-6">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#176b98] to-[#1a7fb8] p-1 group-hover:scale-110 transition-transform duration-500">
                                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                                            <Image
                                                src="/General-Secretary.png"
                                                alt="Khandkar Sayeed Ahmed - General Secretary"
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    {/* Decorative ring */}
                                    <div className="absolute -inset-2 rounded-full border-2 border-[#176b98]/20 group-hover:border-[#176b98]/40 transition-all duration-500"></div>
                                </div>

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#176b98] transition-colors duration-300">
                                        Khandkar Sayeed Ahmed
                                    </h3>
                                    <p className="text-[#176b98] font-semibold text-lg mb-4">
                                        General Secretary
                                    </p>
                                    {/* Decorative element */}
                                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#176b98] to-transparent mx-auto"></div>
                                </div>
                            </div>
                        </div>

                        {/* Treasurer */}
                        <div
                            className="group relative"
                            data-animate
                            style={{
                                opacity: isVisible['committee-panel'] ? 1 : 0,
                                transform: isVisible['committee-panel'] ? 'translateY(0)' : 'translateY(50px)',
                                transition: 'all 0.7s ease 0.3s'
                            }}
                        >
                            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(23,107,152,0.3)] transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-200/50">
                                {/* Circular Image Container */}
                                <div className="relative w-48 h-48 mx-auto mt-8 mb-6">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#176b98] to-[#1a7fb8] p-1 group-hover:scale-110 transition-transform duration-500">
                                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                                            <Image
                                                src="/Treasurer.jpg"
                                                alt="Jyoti Prokash Anindya - Treasurer"
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                    {/* Decorative ring */}
                                    <div className="absolute -inset-2 rounded-full border-2 border-[#176b98]/20 group-hover:border-[#176b98]/40 transition-all duration-500"></div>
                                </div>

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#176b98] transition-colors duration-300">
                                        Jyoti Prokash Anindya
                                    </h3>
                                    <p className="text-[#176b98] font-semibold text-lg mb-4">
                                        Treasurer
                                    </p>
                                    {/* Decorative element */}
                                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#176b98] to-transparent mx-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Upcoming Event */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden" id="upcoming-event" data-animate>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-1/4 w-2 h-2 bg-[#176b98] rounded-full animate-ping"></div>
                    <div className="absolute top-32 right-1/3 w-3 h-3 bg-[#176b98] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-[#176b98] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div
                            className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden group"
                            data-animate
                            style={{
                                opacity: isVisible['upcoming-event'] ? 1 : 0,
                                transform: isVisible['upcoming-event'] ? 'translateX(0)' : 'translateX(-50px)',
                                transition: 'all 0.8s ease'
                            }}
                        >
                            <Image
                                src="https://i.ibb.co.com/23Tky3cz/workshop.jpg"
                                alt="Workshop on Research Fundamentals and Academic Paper Writing"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#176b98]/30 to-transparent group-hover:from-[#176b98]/50 transition-all duration-500"></div>


                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                            <div className="absolute top-6 right-6 text-5xl animate-spin-slow"></div>
                        </div>

                        <div
                            data-animate
                            style={{
                                opacity: isVisible['upcoming-event'] ? 1 : 0,
                                transform: isVisible['upcoming-event'] ? 'translateX(0)' : 'translateX(50px)',
                                transition: 'all 0.8s ease 0.2s'
                            }}
                        >
                            <div className="inline-block px-5 py-2 bg-gradient-to-r from-[#176b98]/20 to-[#176b98]/10 backdrop-blur-sm rounded-full text-[#176b98] font-bold text-sm mb-6 animate-pulse border border-[#176b98]/30">
                                ✨ WORKSHOP ANNOUNCEMENT
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Research Fundamentals & <span className="text-[#176b98] animate-gradient-text">Academic Paper Writing</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                A 3-month intensive online program to build a solid foundation in academic research and paper writing skills. Learn to develop a publication-ready research paper with expert guidance and mentorship.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center text-gray-700 p-3 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 hover:translate-x-2">
                                    <span className="font-bold w-32 text-[#176b98]">📅 Duration:</span>
                                    <span>3 Months (24 Sessions)</span>
                                </div>
                                <div className="flex items-center text-gray-700 p-3 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 hover:translate-x-2">
                                    <span className="font-bold w-32 text-[#176b98]">💻 Mode:</span>
                                    <span>Online (Interactive)</span>
                                </div>
                                <div className="flex items-center text-gray-700 p-3 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 hover:translate-x-2">
                                    <span className="font-bold w-32 text-[#176b98]">⏰ Schedule:</span>
                                    <span>2 classes/week (1.5 hours each)</span>
                                </div>
                                <div className="flex items-center text-gray-700 p-3 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 hover:translate-x-2">
                                    <span className="font-bold w-32 text-[#176b98]">🗓️ Deadline:</span>
                                    <span>October 25, 2025</span>
                                </div>
                            </div>
                            <a
                                href="https://forms.gle/1hykPcGHTFKNDntx7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-gradient-to-r from-[#176b98] to-[#1a7fb8] text-white font-bold rounded-full hover:shadow-[0_10px_40px_rgba(23,107,152,0.4)] transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
                            >
                                Register Now →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 - Highlights */}
            <section className="py-20 bg-gray-900 relative overflow-hidden" id="highlights" data-animate>
                <div className="absolute inset-0 bg-gray-900"></div>

                {/* Animated particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-1 h-1 bg-[#176b98] rounded-full animate-ping"></div>
                    <div className="absolute top-40 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-[#176b98] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-gradient-text">
                            Our <span className="text-[#176b98]">Highlights</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Showcasing our latest achievements and events
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(23,107,152,0.3)] bg-gray-800 border border-white/10">
                            <Image
                                src={highlightImages[currentSlide]}
                                alt={`Highlight ${currentSlide + 1}`}
                                fill
                                className="object-contain transition-all duration-700"
                            />
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-[#176b98]/80 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#176b98]"
                        >
                            <ChevronLeft className="text-white" size={24} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-[#176b98]/80 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#176b98]"
                        >
                            <ChevronRight className="text-white" size={24} />
                        </button>

                        <div className="flex justify-center mt-8 space-x-3">
                            {highlightImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-[#176b98] w-12 shadow-lg shadow-[#176b98]/50'
                                        : 'bg-white/30 w-3 hover:bg-white/50 hover:w-6'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Section 6 - Gallery */}
            <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden" id="gallery" data-animate>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-1/4 left-10 text-8xl animate-spin-slow">📸</div>
                    <div className="absolute bottom-1/4 right-10 text-9xl animate-float">🖼️</div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
                            Research <span className="text-[#176b98]">Gallery</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            A visual journey through our research activities and achievements
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square overflow-hidden rounded-2xl hover:scale-105 hover:z-10 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(23,107,152,0.3)] cursor-pointer"
                                data-animate
                                style={{
                                    opacity: isVisible['gallery'] ? 1 : 0,
                                    transform: isVisible['gallery'] ? 'scale(1)' : 'scale(0.8)',
                                    transition: `all 0.5s ease ${index * 0.03}s`
                                }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#176b98]/0 to-transparent group-hover:from-[#176b98]/70 transition-all duration-500"></div>

                                {/* Glass morphism overlay on hover */}
                                <div className="absolute inset-0 bg-white/0 backdrop-blur-0 group-hover:bg-white/10 group-hover:backdrop-blur-sm transition-all duration-500"></div>

                                {/* Icon appears on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/40 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                        <span className="text-white text-2xl">🔍</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-[#176b98]/80 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#176b98] z-10"
                        aria-label="Close modal"
                    >
                        <X className="text-white" size={24} />
                    </button>
                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Section 7 - Our Moments */}
            <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden" id="moments" data-animate>
                {/* Animated particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#176b98] rounded-full animate-ping"></div>
                    <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-[#176b98] rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#176b98] rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
                            Our <span className="text-[#176b98]">Moments</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Relive our memorable events and achievements through these videos
                        </p>
                    </div>

                    <div
                        className="max-w-4xl mx-auto"
                        data-animate
                        style={{
                            opacity: isVisible['moments'] ? 1 : 0,
                            transform: isVisible['moments'] ? 'scale(1)' : 'scale(0.95)',
                            transition: 'all 0.8s ease 0.2s'
                        }}
                    >
                        <div className="relative">
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(23,107,152,0.3)] bg-gray-100 border border-gray-200/50">
                                <iframe
                                    key={currentVideo}
                                    src={videos[currentVideo]}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevVideo}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-[#176b98]/80 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#176b98] z-10"
                                aria-label="Previous video"
                            >
                                <ChevronLeft className="text-white" size={24} />
                            </button>

                            <button
                                onClick={nextVideo}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-[#176b98]/80 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#176b98] z-10"
                                aria-label="Next video"
                            >
                                <ChevronRight className="text-white" size={24} />
                            </button>

                            {/* Video Indicators */}
                            <div className="flex justify-center mt-8 space-x-3">
                                {videos.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentVideo(index)}
                                        className={`h-3 rounded-full transition-all duration-300 ${index === currentVideo
                                                ? 'bg-[#176b98] w-12 shadow-lg shadow-[#176b98]/50'
                                                : 'bg-gray-300 w-3 hover:bg-gray-400 hover:w-6'
                                            }`}
                                        aria-label={`Go to video ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Video Counter */}
                        <div className="text-center mt-6">
                            <p className="text-gray-600 font-medium">
                                Video {currentVideo + 1} of {videos.length}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .floating-shapes {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    overflow: hidden;
                }

                .shape {
                    position: absolute;
                    font-size: 3rem;
                    opacity: 0.06;
                    pointer-events: none;
                }

                .shape-1 {
                    top: 10%;
                    left: 10%;
                    animation: float 20s infinite ease-in-out;
                }

                .shape-2 {
                    top: 20%;
                    right: 15%;
                    animation: float 25s infinite ease-in-out 2s;
                }

                .shape-3 {
                    top: 60%;
                    left: 5%;
                    animation: float 22s infinite ease-in-out 4s;
                }

                .shape-4 {
                    top: 70%;
                    right: 10%;
                    animation: float 28s infinite ease-in-out 1s;
                }

                .shape-5 {
                    top: 40%;
                    left: 50%;
                    animation: float 24s infinite ease-in-out 3s;
                }

                .shape-6 {
                    bottom: 10%;
                    right: 30%;
                    animation: float 26s infinite ease-in-out 5s;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    33% {
                        transform: translateY(-30px) translateX(20px) rotate(5deg);
                    }
                    66% {
                        transform: translateY(20px) translateX(-20px) rotate(-5deg);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    33% {
                        transform: translateY(20px) translateX(-20px) rotate(-5deg);
                    }
                    66% {
                        transform: translateY(-30px) translateX(20px) rotate(5deg);
                    }
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes gradient-shift {
                    0%, 100% {
                        color: #176b98;
                    }
                    50% {
                        color: #1a7fb8;
                    }
                }

                .animate-gradient-text {
                    animation: gradient-shift 3s ease-in-out infinite;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 6s ease-in-out infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in-out;
                }

                /* Backdrop blur support */
                @supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
                    .backdrop-blur-sm {
                        backdrop-filter: blur(4px);
                        -webkit-backdrop-filter: blur(4px);
                    }
                    .backdrop-blur-md {
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                    }
                    .backdrop-blur-lg {
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                    }
                    .backdrop-blur-xl {
                        backdrop-filter: blur(24px);
                        -webkit-backdrop-filter: blur(24px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Sections;