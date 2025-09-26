"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulated form submission
        setTimeout(() => {
            alert("Thank you for your message! We'll get back to you soon.");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitting(false);
        }, 2000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-[var(--primary)] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-4 py-24">
                    <div className="text-center animate-fade-up">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Get In <span className="text-yellow-400">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <h2 className="text-4xl font-bold text-gray-800 mb-8">Let's Connect</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Whether you have questions about our research society, want to collaborate,
                                or simply want to say hello, we're here to help.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[var(--primary)] p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                                        <p className="text-gray-600">Drop us a line anytime</p>
                                        <a href="mailto:contact@lurs.org" className="text-[var(--primary)] font-medium hover:underline">
                                            contact@lurs.org
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[var(--primary)] p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                                        <p className="text-gray-600">Mon-Fri from 9am to 6pm</p>
                                        <a href="tel:+8801700000000" className="text-[var(--primary)] font-medium hover:underline">
                                            +880 1700 000 000
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Address Card */}
                            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[var(--primary)] p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
                                        <p className="text-gray-600">Come say hello at our campus</p>
                                        <p className="text-gray-700 font-medium">
                                            Leading University<br />
                                            Sylhet, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="animate-fade-up" style={{ animationDelay: '1s' }}>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/lursbd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                                >
                                    <Linkedin className="w-8 h-8 text-[#0077B5] group-hover:scale-125 transition-transform duration-300" />
                                </a>
                                <a
                                    href="https://www.instagram.com/lursbd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                                >
                                    <Instagram className="w-8 h-8 text-[#E4405F] group-hover:scale-125 transition-transform duration-300" />
                                </a>
                                <a
                                    href="https://www.facebook.com/lursbd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                                >
                                    <Facebook className="w-8 h-8 text-[#1877F2] group-hover:scale-125 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-300 group-hover:border-[var(--primary)]"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-300 group-hover:border-[var(--primary)]"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-300 group-hover:border-[var(--primary)]"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all duration-300 group-hover:border-[var(--primary)] resize-none"
                                        placeholder="Tell us more..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 focus:scale-105 ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-[var(--primary)] hover:bg-blue-700 focus:bg-blue-700 shadow-lg hover:shadow-2xl'
                                        } text-white flex items-center justify-center space-x-2`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </div>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Campus Images Section */}
                <div className="mt-20 animate-fade-up" style={{ animationDelay: '1.2s' }}>
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Beautiful Campus</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {['/campus-1.jpg', '/campus-2.jpg', '/campus-3.jpg'].map((img, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <Image
                                    src={img}
                                    alt={`Campus ${idx + 1}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;