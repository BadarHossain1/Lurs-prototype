"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Dropdown = ({ title, items = [] }) => {
    return (
        <div className="relative group">
            <button className="flex items-center gap-2 text-white hover:text-blue-200 transition-all duration-300 font-semibold py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">
                {title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute left-0 mt-2 bg-white/95 backdrop-blur-lg text-gray-800 rounded-2xl shadow-2xl border border-gray-100 min-w-[240px] py-3 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {items.map((it, idx) => (
                    <Link key={idx} href={it.href} className="block px-6 py-3 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-all duration-200 font-medium relative overflow-hidden group/item">
                        <span className="relative z-10">{it.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/40 via-black/30 to-black/40 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    {/* Mobile hamburger - very left */}
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpen((v) => !v)}
                        className="lg:hidden text-white hover:text-blue-200 transition-all duration-300 mr-4 p-2 rounded-lg hover:bg-white/10 group"
                    >
                        <div className="relative w-6 h-6">
                            <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''} group-hover:bg-blue-200`}></span>
                            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transform transition-all duration-300 ${open ? 'opacity-0' : ''} group-hover:bg-blue-200`}></span>
                            <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''} group-hover:bg-blue-200`}></span>
                        </div>
                    </button>

                    {/* Main logo */}
                    <Link href="/" className="block hover:scale-105 transition-transform duration-300">
                        <Image src="/apple-touch-icon.png" alt="LURS" width={60} height={60} className="object-contain lg:w-20 lg:h-20" />
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-blue-200 transition-all duration-300 font-semibold py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">HOME</Link>

                    <Dropdown
                        title="WHAT WE DO"
                        items={[
                            { href: '/about', label: 'About Us' },
                            { href: '/founding-committee', label: 'Founding Committee' },
                            { href: '/advisors-committees', label: 'Advisors & Committees' },
                        ]}
                    />

                    <Dropdown
                        title="CONFERENCES"
                        items={[
                            { href: '/conferences/1st-student-research-conference', label: '1st Student Research Conference' },
                            { href: '/lurssc', label: '2nd Student Research Conference' },
                            { href: '/conferences/international-representation', label: 'International Representation' },
                        ]}
                    />

                    <Dropdown
                        title="EVENTS & SOCIAL PROGRAMS"
                        items={[
                            { href: '/events/webinars-seminars', label: 'Webinars & Seminars' },
                            { href: '/events/ceremonies-meetings', label: 'Ceremonies & Meetings' },
                            { href: '/events/cultural-social', label: 'Cultural & Social Programs' },
                            { href: '/events/national-days', label: 'National Days & Tributes' },
                            { href: '/news/donations', label: 'Donation & Social Contributions' },
                        ]}
                    />

                    <Dropdown
                        title="NEWS & ACHIEVEMENTS"
                        items={[
                            { href: '/news/newsletters', label: 'Newsletter Publications' },
                        ]}
                    />

                    <Dropdown
                        title="MEMBERSHIP"
                        items={[
                            { href: '/membership/join-now', label: 'Join Now' },
                            { href: '/membership/benefits', label: 'Membership Benefits' },
                            { href: '/membership/contact', label: 'Contact' },
                        ]}
                    />
                </div>

                {/* Right side - University logo */}
                <div className="flex items-center">
                    <div className="hover:scale-105 transition-transform duration-300">
                        <Image src="/Leading_University_Logo.png" alt="Leading University" width={60} height={60} className="object-contain lg:w-16 lg:h-16" />
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`fixed inset-0 top-16 bg-gradient-to-br from-[var(--primary)]/95 to-slate-900/95 backdrop-blur-xl lg:hidden transition-all duration-500 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className={`h-full overflow-y-auto transform transition-all duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="p-6 space-y-2">
                            <Link href="/" className="block py-4 px-4 font-semibold text-white hover:bg-white/10 rounded-xl transition-all duration-300 transform hover:translate-x-2">HOME</Link>

                            <details className="group">
                                <summary className="py-4 px-4 font-semibold text-white hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer list-none flex items-center justify-between group-open:bg-white/10">
                                    WHAT WE DO
                                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                                    <Link href="/about" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">About Us</Link>
                                    <Link href="/founding-committee" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Founding Committee</Link>
                                    <Link href="/advisors-committees" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Advisors & Committees</Link>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="py-4 px-4 font-semibold text-white hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer list-none flex items-center justify-between group-open:bg-white/10">
                                    CONFERENCES
                                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                                    <Link href="/conferences/1st-student-research-conference" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">1st Student Research Conference</Link>
                                    <Link href="/conferences/2nd-student-research-conference" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">2nd Student Research Conference</Link>
                                    <Link href="/conferences/international-representation" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">International Representation</Link>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="py-4 px-4 font-semibold text-white hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer list-none flex items-center justify-between group-open:bg-white/10">
                                    EVENTS & SOCIAL PROGRAMS
                                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                                    <Link href="/events/webinars-seminars" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Webinars & Seminars</Link>
                                    <Link href="/events/ceremonies-meetings" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Ceremonies & Meetings</Link>
                                    <Link href="/events/cultural-social" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Cultural & Social Programs</Link>
                                    <Link href="/events/national-days" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">National Days & Tributes</Link>
                                    <Link href="/news/donations" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Donation & Social Contributions</Link>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="py-4 px-4 font-semibold text-white hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer list-none flex items-center justify-between group-open:bg-white/10">
                                    NEWS & ACHIEVEMENTS
                                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                                    <Link href="/news/newsletters" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Newsletter Publications</Link>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="py-4 px-4 font-semibold text-white hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer list-none flex items-center justify-between group-open:bg-white/10">
                                    MEMBERSHIP
                                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                                </summary>
                                <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                                    <Link href="/membership/join-now" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Join Now</Link>
                                    <Link href="/membership/benefits" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Membership Benefits</Link>
                                    <Link href="/membership/contact" className="block py-3 px-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 transform hover:translate-x-1">Contact</Link>
                                </div>
                            </details>

                            <div className="mt-8 pt-6 border-t border-white/20">
                                <Link href="/lurssc" className="block py-4 px-6 bg-white/20 text-white text-center rounded-xl font-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105">LURSSC</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
