"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Sections = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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
            name: "Dr. Sarah Mitchell",
            qualification: "PhD in Environmental Science",
            position: "Dean of Research Affairs",
            image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
            id: 2,
            name: "Prof. Ahmed Rahman",
            qualification: "PhD in Computer Science",
            position: "Director of Innovation Hub",
            image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
    ];

    // Section 4 - Highlights Images
    const highlightImages = [
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
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

    // Section 6 - Gallery Images
    const galleryImages = Array.from({ length: 24 }, (_, i) => ({
        id: i + 1,
        src: `https://picsum.photos/400/300?random=${i + 1}`,
        alt: `Gallery image ${i + 1}`
    }));

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % highlightImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + highlightImages.length) % highlightImages.length);
    };

    return (
        <div className="w-full">
            {/* Section 1 - Objectives */}
            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-primary">Objectives</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leading University Research Society is committed to advancing research excellence through these core objectives
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <div
                                key={objective.id}
                                className="group relative"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative p-8 bg-white rounded-full shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-up">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {objective.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                            {objective.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {objective.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2 - LURS Advisors */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            LURS <span className="text-primary">Advisors</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Meet our distinguished advisors who guide our research initiatives
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {advisors.map((advisor, index) => (
                            <div
                                key={advisor.id}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-fade-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={advisor.image}
                                        alt={advisor.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {advisor.name}
                                    </h3>
                                    <p className="text-primary font-semibold mb-2">
                                        {advisor.qualification}
                                    </p>
                                    <p className="text-gray-600 font-medium">
                                        {advisor.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3 - Upcoming Event */}
            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden animate-fade-up">
                            <Image
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Upcoming Event"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        </div>

                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                                UPCOMING EVENT
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                International Research <span className="text-primary">Summit 2025</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Join researchers from around the world for three days of groundbreaking presentations,
                                networking opportunities, and collaborative discussions on the future of research and innovation.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center text-gray-700">
                                    <span className="font-semibold w-20">Date:</span>
                                    <span>May 15-17, 2025</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <span className="font-semibold w-20">Venue:</span>
                                    <span>Leading University Main Auditorium</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <span className="font-semibold w-20">Time:</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                            <button className="btn-primary hover:bg-primary/90 transition-colors duration-300 hover:scale-105 transform">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 - Highlights */}
            <section className="py-20 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={highlightImages[currentSlide]}
                        alt="Highlights"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Research <span className="text-[#176b98]">Highlights</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Showcasing our latest achievements and breakthrough research
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="relative h-96 rounded-2xl overflow-hidden">
                            <Image
                                src={highlightImages[currentSlide]}
                                alt={`Highlight ${currentSlide + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft className="text-white" size={24} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight className="text-white" size={24} />
                        </button>

                        <div className="flex justify-center mt-6 space-x-2">
                            {highlightImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#176b98] scale-125' : 'bg-white/50 hover:bg-white/70'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 - Important Notices */}
            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Important <span className="text-primary">Notices</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Stay updated with the latest announcements and important information
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {notices.map((notice, index) => (
                            <div
                                key={notice.id}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={notice.image}
                                        alt={notice.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {notice.date}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {notice.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {notice.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6 - Gallery */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Research <span className="text-primary">Gallery</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A visual journey through our research activities and achievements
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-up"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7 - News */}
            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 animate-fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Latest <span className="text-primary">News</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Watch our latest research updates and announcements
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt="News Video Placeholder"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 hover:scale-110 cursor-pointer">
                                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">LURS Research Breakthroughs 2025</h3>
                                <p className="text-gray-200">Latest developments in our research initiatives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8 - Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="animate-fade-up">
                            <div className="mb-6">
                                <Image
                                    src="/apple-touch-icon.png"
                                    alt="LURS Logo"
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Leading University Research Society - Advancing research excellence and fostering innovation for a better tomorrow.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Facebook</a>
                                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a>
                                <a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
                            </div>
                        </div>

                        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                            <h3 className="text-xl font-bold mb-6 text-primary">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Research Areas</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Publications</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
                            </ul>
                        </div>

                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-xl font-bold mb-6 text-primary">Research</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Current Projects</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Grant Opportunities</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Collaboration</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ethics Guidelines</a></li>
                            </ul>
                        </div>

                        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                            <h3 className="text-xl font-bold mb-6 text-primary">Contact Info</h3>
                            <div className="space-y-3 text-gray-300">
                                <p>Leading University<br />Ragibnagar, South Surma<br />Sylhet, Bangladesh</p>
                                <p>Phone: +880-821-123456</p>
                                <p>Email: info@lurs.edu.bd</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <p className="text-gray-400">
                            © 2025 Leading University Research Society. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Sections;