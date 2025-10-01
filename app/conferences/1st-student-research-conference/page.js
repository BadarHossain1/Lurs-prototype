"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
    Calendar, 
    Users, 
    Award, 
    Lightbulb, 
    Trophy,
    BookOpen,
    Globe,
    Target,
    Sparkles,
    Star,
    X,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

const FirstConferencePage = () => {
    const [isVisible, setIsVisible] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel images for hero section
    const heroSlides = [
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1920",
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1920"
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

    // Carousel auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroSlides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    // Conference gallery images - using placeholder images
    const galleryImages = [
        { src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Conference opening ceremony" },
        { src: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Vice Chancellor keynote speech" },
        { src: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Poster presentations" },
        { src: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Abstract presentations" },
        { src: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Student researchers" },
        { src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Award ceremony" },
        { src: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Panel discussion" },
        { src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Research presentations" },
        { src: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Conference participants" },
        { src: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Judges and faculty" },
        { src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Group photo" },
        { src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Networking session" }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#eef5fe' }}>
            <style jsx>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes float-up {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(5deg); }
                }
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: scale(1.1); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-gradient-shift {
                    background-size: 200% 200%;
                    animation: gradient-shift 10s ease infinite;
                }
                .animate-float-up {
                    animation: float-up 8s ease-in-out infinite;
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                    background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
                    background-size: 1000px 100%;
                }
                .slide-active {
                    animation: slideIn 1s ease-out;
                }
            `}</style>

            {/* Hero Banner Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Carousel Background Images with Overlay */}
                <div className="absolute inset-0">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100 slide-active' : 'opacity-0'
                            }`}
                        >
                            <Image
                                src={slide}
                                alt={`Conference slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                    {/* Light blue overlay like HomeHero */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(22,106,152,0.78)] via-[rgba(22,106,152,0.62)] to-[rgba(0,0,0,0.82)] z-10"></div>
                    
                    {/* Carousel Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 border-2 border-white/30 hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 border-2 border-white/30 hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Carousel Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-white w-8' 
                                        : 'bg-white/50 hover:bg-white/75'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    {/* Animated particles */}
                    <div className="absolute inset-0 z-10">
                        <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#166a98' }}></div>
                        <div className="absolute top-40 right-20 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#4a9dd4', animationDelay: '1s' }}></div>
                        <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#166a98', animationDelay: '2s' }}></div>
                        <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#4a9dd4', animationDelay: '0.5s' }}></div>
                        <div className="absolute top-1/2 left-1/5 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#166a98', animationDelay: '1.5s' }}></div>
                        <div className="absolute top-1/3 right-1/5 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#4a9dd4', animationDelay: '2.5s' }}></div>
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                    <Trophy className="absolute top-1/4 left-1/6 w-16 h-16 text-yellow-300/20 animate-float-up" />
                    <Award className="absolute top-1/3 right-1/5 w-14 h-14 animate-float-up" style={{ color: 'rgba(22, 106, 152, 0.2)', animationDelay: '1s' }} />
                    <Star className="absolute bottom-1/3 left-1/4 w-12 h-12 animate-float-up" style={{ color: 'rgba(74, 157, 212, 0.2)', animationDelay: '2s' }} />
                    <Lightbulb className="absolute bottom-1/4 right-1/3 w-16 h-16 text-yellow-200/20 animate-float-up" style={{ animationDelay: '1.5s' }} />
                    <Globe className="absolute top-1/2 right-1/6 w-14 h-14 animate-float-up" style={{ color: 'rgba(22, 106, 152, 0.2)', animationDelay: '0.5s' }} />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-32 pb-20">
                    <div
                        id="hero-content"
                        data-animate
                        className={`transform transition-all duration-1500 ${isVisible['hero-content'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                    >
                        {/* Date Badge */}
                        <div className="inline-flex items-center gap-3 backdrop-blur-xl border text-white px-8 py-4 rounded-full mb-8 shadow-2xl" style={{ backgroundColor: 'rgba(22, 106, 152, 0.3)', borderColor: 'rgba(22, 106, 152, 0.4)' }}>
                            <Calendar className="w-6 h-6" style={{ color: '#eef5fe' }} />
                            <span className="font-bold text-xl">16 July 2024</span>
                        </div>

                        {/* Main Title with Shimmer Effect */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
                            <span className="block mb-4">A Grand Success of the</span>
                            <span className="block bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent animate-gradient-shift">
                                Very 1st Leading University
                            </span>
                            <span className="block bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent animate-gradient-shift">
                                Research Conference 2024!
                            </span>
                        </h1>

                        {/* Theme Quote */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <div className="backdrop-blur-xl border-l-4 rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: 'rgba(22, 106, 152, 0.2)', borderColor: '#166a98' }}>
                                <p className="text-2xl md:text-3xl font-bold text-white italic mb-4">
                                    &ldquo;Rethinking Tomorrow: Global Problems, Local Solutions&rdquo;
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #166a98)' }}></div>
                                    <Target className="w-6 h-6" style={{ color: '#166a98' }} />
                                    <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #166a98)' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            {[
                                { icon: Users, number: "150+", label: "Participants" },
                                { icon: BookOpen, number: "9", label: "Universities" },
                                { icon: Award, number: "5", label: "Award Winners" },
                                { icon: Lightbulb, number: "50+", label: "Research Ideas" }
                            ].map((stat, idx) => (
                                <div 
                                    key={idx} 
                                    className="backdrop-blur-xl border rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                                    style={{ 
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                        animationDelay: `${idx * 0.1}s` 
                                    }}
                                >
                                    <stat.icon className="w-10 h-10 mx-auto mb-3" style={{ color: '#eef5fe' }} />
                                    <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                                    <div className="font-semibold text-sm" style={{ color: '#eef5fe' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                            <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2" style={{ borderColor: '#166a98' }}>
                                <div className="w-1 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#166a98' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conference Description Section */}
            <section className="relative py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <div
                        id="description"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['description'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        {/* Section Title */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #166a98)' }}></div>
                                <Sparkles className="w-8 h-8" style={{ color: '#166a98' }} />
                                <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #166a98)' }}></div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#166a98' }}>
                                Conference Highlights
                            </h2>
                            <p className="text-xl" style={{ color: '#166a98' }}>A Landmark Event in Research Excellence</p>
                        </div>

                        {/* Main Description */}
                        <div className="space-y-8">
                            {/* Introduction */}
                            <div className="bg-white/95 backdrop-blur-xl border rounded-3xl p-10 shadow-2xl" style={{ borderColor: '#166a98' }}>
                                <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#166a98' }}>
                                    The inaugural Leading University Research Conference 2024 came to a successful conclusion today, marking a significant landmark. <span className="font-bold">A total number of 150+ people</span> have joined the conference. The conference was a hub of innovation and critical thinking, engaging students in rethinking and recreating the future.
                                </p>
                            </div>

                            {/* Conference Segments */}
                            <div className="bg-white/95 backdrop-blur-xl border rounded-3xl p-10 shadow-2xl" style={{ borderColor: '#166a98' }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <BookOpen className="w-8 h-8" style={{ color: '#166a98' }} />
                                    <h3 className="text-2xl font-bold" style={{ color: '#166a98' }}>Conference Structure</h3>
                                </div>
                                <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#166a98' }}>
                                    The event was divided into several segments: poster presentations, opening ceremony, keynote session by our esteemed Vice Chancellor, Prof. Qazi Azizul Mowla Sir, who provided profound insights into research. He encouraged the young researchers, but among his many encouraging words, a simple yet powerful statement stood out:
                                </p>
                                <div className="border-l-4 rounded-2xl p-6 mb-6" style={{ backgroundColor: '#fff3cd', borderColor: '#ffc107' }}>
                                    <p className="text-xl md:text-2xl font-bold italic" style={{ color: '#856404' }}>
                                        &ldquo;First come global problems, then the need for solutions follows.&rdquo;
                                    </p>
                                    <p className="mt-2" style={{ color: '#166a98' }}>— Prof. Qazi Azizul Mowla, Vice Chancellor</p>
                                </div>
                                <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#166a98' }}>
                                    The conference also featured abstract presentations, prize giving and closing ceremony.
                                </p>
                            </div>

                            {/* Theme and Participation */}
                            <div className="bg-white/95 backdrop-blur-xl border rounded-3xl p-10 shadow-2xl" style={{ borderColor: '#166a98' }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <Globe className="w-8 h-8" style={{ color: '#166a98' }} />
                                    <h3 className="text-2xl font-bold" style={{ color: '#166a98' }}>Participating Universities</h3>
                                </div>
                                <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: '#166a98' }}>
                                    Our theme, <span className="font-bold">&ldquo;Rethinking Tomorrow: Global Problems, Local Solutions,&rdquo;</span> resonated through every presentation and discussion. Students from multiple prestigious institutions came together, showcasing mind-blowing innovative ideas:
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        "Shahjalal University of Science and Technology",
                                        "Sylhet Agricultural University",
                                        "Metropolitan University",
                                        "Rajshahi University",
                                        "Leading University",
                                        "University of Chittagong",
                                        "Dhaka University",
                                        "Sylhet Osmani Medical College",
                                        "University of Rajshahi"
                                    ].map((uni, idx) => (
                                        <div key={idx} className="flex items-center gap-2 rounded-xl p-3" style={{ backgroundColor: '#e3f2fd' }}>
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#166a98' }}></div>
                                            <span className="text-sm font-medium" style={{ color: '#166a98' }}>{uni}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Awards and Recognition */}
                            <div className="bg-white/95 backdrop-blur-xl border rounded-3xl p-10 shadow-2xl" style={{ borderColor: '#166a98' }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <Trophy className="w-8 h-8 text-yellow-500" />
                                    <h3 className="text-2xl font-bold" style={{ color: '#166a98' }}>Awards & Recognition</h3>
                                </div>
                                <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#166a98' }}>
                                    We selected the <span className="font-bold">best three papers</span> and <span className="font-bold">best two poster presenters</span> for awards from our esteemed deans of faculties. Their assessment as judges made the competition more competitive and engaging.
                                </p>
                            </div>

                            {/* Acknowledgements */}
                            <div className="bg-white/95 backdrop-blur-xl border rounded-3xl p-10 shadow-2xl" style={{ borderColor: '#166a98' }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="w-8 h-8" style={{ color: '#166a98' }} />
                                    <h3 className="text-2xl font-bold" style={{ color: '#166a98' }}>Acknowledgements</h3>
                                </div>
                                <div className="space-y-6 text-lg md:text-xl leading-relaxed" style={{ color: '#166a98' }}>
                                    <p>
                                        Special thanks to the esteemed deans of our faculties, distinguished department heads as well as the other faculty members of Leading University who have supported and guided us throughout the conference.
                                    </p>
                                    <p>
                                        A special thank you to <span className="font-bold">Elahee Agro and Fattening Farm</span>, our proud sponsor, for their valuable contributions.
                                    </p>
                                    <p>
                                        The success of this event wouldn&apos;t have been possible without the active participation of all the students and the relentless efforts of our advisor, <span className="font-bold">Dr. Shafkat Kibria Sir</span>, and co-advisor, <span className="font-bold">Md. Jamaner Rahaman Sir</span>.
                                    </p>
                                    <p>
                                        Under the leadership of the Conference Chair and Founding President, <span className="font-bold">Abdus Samad Sumo</span>, also Convenor and Founding General Secretary, <span className="font-bold">Mahmudul Haque Jamil</span>, of the Leading University Research Society, the conference was impeccably organized.
                                    </p>
                                    <p>
                                        Last but not the least, a heartfelt thank you to all the organizers whose efforts turned this idea into reality.
                                    </p>
                                </div>
                            </div>

                            {/* Closing Message */}
                            <div className="bg-white/95 backdrop-blur-xl border rounded-3xl p-10 shadow-2xl text-center" style={{ borderColor: '#166a98' }}>
                                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                                <p className="text-xl md:text-2xl leading-relaxed font-semibold" style={{ color: '#166a98' }}>
                                    The conference provided a rich learning platform, fostering many new innovations. We look forward to more such engaging and enlightening events in the future!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="relative py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div
                        id="gallery"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['gallery'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        {/* Gallery Title */}
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #166a98)' }}></div>
                                <Sparkles className="w-8 h-8" style={{ color: '#166a98' }} />
                                <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #166a98)' }}></div>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#166a98' }}>
                                Conference Gallery
                            </h2>
                            <p className="text-xl" style={{ color: '#166a98' }}>Capturing Moments of Innovation and Excellence</p>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                                    onClick={() => setSelectedImage(image)}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(22, 106, 152, 0.9), rgba(22, 106, 152, 0.4), transparent)' }}></div>
                                    
                                    {/* Caption */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-sm font-bold mb-1">{image.alt}</p>
                                        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#eef5fe' }}></div>
                                    </div>

                                    {/* Number Badge */}
                                    <div className="absolute top-4 left-4 w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border-2" style={{ backgroundColor: 'rgba(22, 106, 152, 0.9)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                                        <span className="text-sm font-black text-white">{index + 1}</span>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 border-2 border-white/30 hover:scale-110 z-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    
                    <div className="relative max-w-7xl w-full max-h-[90vh] aspect-video">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                            <p className="text-white text-xl font-bold text-center">{selectedImage.alt}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer CTA */}
            <section className="relative py-20 px-4" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <Star className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-pulse" />
                    <h3 className="text-3xl md:text-4xl font-black mb-6" style={{ color: '#166a98' }}>
                        Thank You for Being Part of This Journey!
                    </h3>
                    <p className="text-xl mb-8" style={{ color: '#166a98' }}>
                        Stay connected for upcoming research conferences and events
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#166a98' }}></div>
                        <Trophy className="w-6 h-6 text-yellow-500" />
                        <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#166a98' }}></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FirstConferencePage;