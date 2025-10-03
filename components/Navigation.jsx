"use client";

import { useState, useEffect } from "react";
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

    // Prevent background scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[99999] bg-gradient-to-r from-black/40 via-black/30 to-black/40 backdrop-blur-md border-b border-white/10 shadow-lg">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        {/* Mobile hamburger - very left */}
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setOpen((v) => !v)}
                            className="lg:hidden text-white hover:text-blue-200 transition-all duration-300 p-2 rounded-lg hover:bg-white/10 group relative z-[99999]"
                        >
                            <div className="relative w-6 h-6">
                                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transform transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>

                        {/* Main logo with text */}
                        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                            <Image src="/apple-touch-icon.png" alt="LURS" width={80} height={80} className="object-contain w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                            <div className="flex flex-col justify-center text-white leading-tight">
                                <span className="text-base md:text-lg lg:text-xl font-bold leading-tight">Leading University</span>
                                <span className="text-base md:text-lg lg:text-xl font-bold leading-tight">Research Society</span>
                            </div>
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
                                { href: '/conferences/2nd-student-research-conference', label: '2nd Student Research Conference' },
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
                        <div className="flex items-center hover:scale-105 transition-transform duration-300">
                            <Image src="/Leading_University_Logo.png" alt="Leading University" width={80} height={80} className="object-contain w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu: backdrop + sliding panel - MOVED OUTSIDE NAV */}
            {open && (
                <div className="fixed inset-0 lg:hidden z-[100000]">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)}></div>

                    {/* Sliding panel from left - Modern white design */}
                    <aside className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl overflow-hidden animate-slide-in"
                        style={{ animation: 'slideIn 0.3s ease-out forwards' }}>
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90">
                            <h2 className="text-white text-xl font-bold">Menu</h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable menu content */}
                        <nav className="h-[calc(100%-73px)] overflow-y-auto p-4 space-y-1">
                            <Link
                                href="/"
                                onClick={() => setOpen(false)}
                                className="block py-3 px-4 font-semibold text-gray-800 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] rounded-lg transition-colors"
                            >
                                HOME
                            </Link>

                            <details className="group">
                                <summary className="py-3 px-4 font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer list-none flex items-center justify-between">
                                    WHAT WE DO
                                    <ChevronDown size={18} className="text-gray-600 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="ml-2 mt-1 space-y-1">
                                    <Link href="/about" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">About Us</Link>
                                    <Link href="/founding-committee" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Founding Committee</Link>
                                    <Link href="/advisors-committees" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Advisors & Committees</Link>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="py-3 px-4 font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer list-none flex items-center justify-between">
                                    CONFERENCES
                                    <ChevronDown size={18} className="text-gray-600 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="ml-2 mt-1 space-y-1">
                                    <Link href="/conferences/1st-student-research-conference" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">1st Student Research Conference</Link>
                                    <Link href="/conferences/2nd-student-research-conference" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">2nd Student Research Conference</Link>
                                    <Link href="/conferences/international-representation" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">International Representation</Link>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="py-3 px-4 font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer list-none flex items-center justify-between">
                                    EVENTS & SOCIAL PROGRAMS
                                    <ChevronDown size={18} className="text-gray-600 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="ml-2 mt-1 space-y-1">
                                    <Link href="/events/webinars-seminars" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Webinars & Seminars</Link>
                                    <Link href="/events/ceremonies-meetings" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Ceremonies & Meetings</Link>
                                    <Link href="/events/cultural-social" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Cultural & Social Programs</Link>
                                    <Link href="/events/national-days" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">National Days & Tributes</Link>
                                    <Link href="/news/donations" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Donation & Social Contributions</Link>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="py-3 px-4 font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer list-none flex items-center justify-between">
                                    NEWS & ACHIEVEMENTS
                                    <ChevronDown size={18} className="text-gray-600 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="ml-2 mt-1 space-y-1">
                                    <Link href="/news/newsletters" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Newsletter Publications</Link>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="py-3 px-4 font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer list-none flex items-center justify-between">
                                    MEMBERSHIP
                                    <ChevronDown size={18} className="text-gray-600 transition-transform duration-200 group-open:rotate-180" />
                                </summary>
                                <div className="ml-2 mt-1 space-y-1">
                                    <Link href="/membership/join-now" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Join Now</Link>
                                    <Link href="/membership/benefits" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Membership Benefits</Link>
                                    <Link href="/membership/contact" onClick={() => setOpen(false)} className="block py-2.5 px-4 text-sm text-gray-700 hover:bg-[var(--primary)]/5 hover:text-[var(--primary)] rounded-lg transition-colors">Contact</Link>
                                </div>
                            </details>
                        </nav>
                    </aside>
                </div>
            )}
        </>
    );
};

export default Navigation;
