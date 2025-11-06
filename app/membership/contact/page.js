"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    Facebook,
    Instagram,
    Linkedin,
    Send,
    User,
    MessageSquare,
    Sparkles,
    Users,
    Building
} from "lucide-react";

const ContactPage = () => {
    const [isVisible, setIsVisible] = useState({});
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleContactFormChange = (e) => {
        const { name, value } = e.target;
        setContactForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log('📤 Submitting contact form...', contactForm);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactForm)
            });

            console.log('📥 Response status:', response.status);
            const data = await response.json();
            console.log('📥 Response data:', data);

            if (data.success) {
                console.log('✅ Contact saved successfully! ID:', data.data._id);
                alert('✅ Message sent successfully! We will get back to you soon.\n\nYour message has been saved to our database.');
                setContactForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                console.error('❌ Submission failed:', data.message);
                alert('❌ Failed to send message: ' + data.message + '\n\nPlease try again.');
            }
        } catch (error) {
            console.error('❌ Error submitting form:', error);
            alert('❌ An error occurred: ' + error.message + '\n\nPlease try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Building,
            title: "Office Address",
            details: "Leading University Research Society\nLeading University\nSylhet, Bangladesh",
            color: "text-[var(--primary)]"
        },
        {
            icon: Phone,
            title: "Phone Numbers",
            details: "+880 821 765432\n+880 1700 000000",
            color: "text-sky-600"
        },
        {
            icon: Mail,
            title: "Email Address",
            details: "info@lurs.edu.bd\nresearch@lurs.edu.bd",
            color: "text-blue-600"
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: "Sunday - Thursday: 9:00 AM - 5:00 PM\nFriday: 9:00 AM - 12:00 PM",
            color: "text-sky-500"
        }
    ];

    const socialMedia = [
        {
            icon: Facebook,
            name: "Facebook",
            url: "#",
            color: "text-blue-600 hover:bg-blue-600"
        },
        {
            icon: Instagram,
            name: "Instagram",
            url: "#",
            color: "text-pink-500 hover:bg-pink-500"
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            url: "#",
            color: "text-blue-700 hover:bg-blue-700"
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
                .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary)]/10 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-sky-200/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-200/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-sky-300/15 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <Phone className="absolute top-1/4 left-1/5 w-10 h-10 text-[var(--primary)]/30 animate-float" />
                    <Mail className="absolute top-1/3 right-1/4 w-8 h-8 text-sky-500/40 animate-float-delayed" />
                    <Sparkles className="absolute bottom-1/3 left-1/3 w-7 h-7 text-blue-500/35 animate-pulse" />
                    <MessageCircle className="absolute bottom-1/4 right-1/5 w-9 h-9 text-sky-500/30 animate-float" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <div className="animate-fade-in-up">
                        {/* Icon Group */}
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <MessageCircle className="w-14 h-14 text-[var(--primary)] animate-pulse-glow" />
                            <div className="h-14 w-1 bg-gradient-to-b from-[var(--primary)] via-sky-400 to-transparent rounded-full"></div>
                            <Phone className="w-12 h-12 text-sky-500 animate-pulse" />
                            <div className="h-12 w-0.5 bg-gradient-to-b from-sky-400 to-transparent rounded-full"></div>
                            <Mail className="w-10 h-10 text-blue-600" />
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] via-sky-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                            Contact
                        </h1>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-sky-500 via-blue-500 to-[var(--primary)] bg-clip-text text-transparent animate-gradient">
                            LURS
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Get in touch with Leading University Research Society. We&apos;re here to help with your research journey
                        </p>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            <div className="group bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5 text-[var(--primary)] animate-pulse-glow" />
                                    <span className="text-sm font-bold text-[var(--primary)]">Quick Response</span>
                                </div>
                            </div>
                            <div className="group bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-sky-600" />
                                    <span className="text-sm font-bold text-sky-600">Helpful Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <div
                            id="contact-info"
                            data-animate
                            className={`transform transition-all duration-1000 ${isVisible['contact-info'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                                <div className="bg-gradient-to-r from-[var(--primary)] to-sky-600 p-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
                                    <p className="text-blue-100">We&apos;d love to hear from you</p>
                                </div>

                                <div className="p-8 space-y-8">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className={`p-3 rounded-2xl bg-gradient-to-br from-${info.color.split('-')[1]}-100 to-${info.color.split('-')[1]}-50`}>
                                                <info.icon className={`w-6 h-6 ${info.color}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 text-lg mb-2">{info.title}</h3>
                                                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                                                    {info.details}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Media */}
                                <div className="px-8 pb-8">
                                    <h3 className="font-bold text-gray-800 text-lg mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        {socialMedia.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className={`p-3 rounded-2xl ${social.color} hover:text-white transition-all duration-300 border-2 border-current hover:scale-110`}
                                                title={social.name}
                                            >
                                                <social.icon className="w-6 h-6" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div
                            id="contact-form"
                            data-animate
                            className={`transform transition-all duration-1000 ${isVisible['contact-form'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                                <div className="bg-gradient-to-r from-sky-600 to-blue-600 p-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
                                    <p className="text-sky-100">Fill out the form below and we&apos;ll get back to you</p>
                                </div>

                                <form onSubmit={handleContactSubmit} className="p-8 space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={contactForm.name}
                                                onChange={handleContactFormChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-all duration-300"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={contactForm.email}
                                                onChange={handleContactFormChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-all duration-300"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={contactForm.subject}
                                            onChange={handleContactFormChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-all duration-300"
                                            placeholder="What is this about?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            value={contactForm.message}
                                            onChange={handleContactFormChange}
                                            required
                                            rows="6"
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-all duration-300 resize-none"
                                            placeholder="Write your message here..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[var(--primary)] to-sky-600 hover:from-[var(--primary)]/90 hover:to-sky-600/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-20 px-4 bg-gradient-to-r from-[var(--primary)]/5 to-sky-100/50">
                <div className="max-w-6xl mx-auto">
                    <div
                        id="location"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['location'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-sky-600 bg-clip-text text-transparent">
                                Find Us
                            </h2>
                            <p className="text-xl text-gray-600">
                                Visit our office at Leading University campus
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-center text-gray-600">
                                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[var(--primary)]" />
                                    <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                                    <p>Map integration coming soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;