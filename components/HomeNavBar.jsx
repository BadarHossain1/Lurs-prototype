"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Dropdown = ({ title, items = [] }) => {
    return (
        <div className="relative group">
            <button className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors font-semibold">
                {title} <ChevronDown size={14} />
            </button>
            <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg min-w-[200px] py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                {items.map((it, idx) => (
                    <Link key={idx} href={it.href} className="block px-4 py-2 hover:bg-gray-100">
                        {it.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

const HomeNavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b bg-black/30 backdrop-blur-sm ">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="block lg:hidden">
                        <Image src="/apple-touch-icon.png" alt="LURS" width={48} height={48} className="object-contain" />
                    </Link>
                    <Link href="/" className="hidden lg:flex items-center gap-3">
                        <Image src="/apple-touch-icon.png" alt="LURS" width={80} height={80} className="object-contain" />
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-gray-200 transition-colors font-semibold">HOME</Link>

                    <Dropdown title="WHAT WE DO" items={[{ href: '/about', label: 'About Us' }, { href: '/what-we-do', label: 'What We Do' }, { href: '/mission', label: 'Our Mission & Vision' }, { href: '/contact', label: 'Contact Us' }]} />

                    <Dropdown title="EVENTS" items={[{ href: '/events/ongoing', label: 'Ongoing Events' }, { href: '/events/upcoming', label: 'Upcoming Events' }, { href: '/events/previous', label: 'Previous Events' }]} />

                    <Dropdown title="OUR TEAM" items={[{ href: '/team/executive', label: 'Executive Committee' }, { href: '/team/founding', label: 'Founding Executive Committee' }, { href: '/team/convening', label: 'Convening Team' }]} />

                    <Dropdown title="PROJECTS" items={[{ href: '/projects/ongoing', label: 'Ongoing Projects' }, { href: '/projects/upcoming', label: 'Upcoming Projects' }]} />

                    <Dropdown title="MEMBERSHIP" items={[{ href: '/membership/join', label: 'Join Now' }, { href: '/membership/how-to-join', label: 'How to Join' }, { href: '/membership/benefits', label: 'Membership Benefits' }, { href: '/membership/testimonials', label: 'What Our Members Say' }]} />
                </div>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <Link href="/lurssc" className="hidden lg:inline-block bg-[var(--primary)] text-white px-4 py-2 rounded-md font-semibold hover:brightness-95 transition">LURSSC</Link>
                    <div className="hidden lg:block">
                        <Image src="/Leading_University_Logo.png" alt="Leading" width={60} height={60} className="object-contain" />
                    </div>

                    {/* Mobile toggle */}
                    <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="lg:hidden text-white">
                        {open ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="absolute left-0 top-full w-full bg-white text-black shadow-lg lg:hidden">
                        <div className="p-4 space-y-3">
                            <Link href="/" className="block py-2 font-semibold">HOME</Link>
                            <details>
                                <summary className="py-2 font-semibold">WHAT WE DO</summary>
                                <div className="pl-4">
                                    <Link href="/about" className="block py-2">About Us</Link>
                                    <Link href="/what-we-do" className="block py-2">What We Do</Link>
                                    <Link href="/mission" className="block py-2">Our Mission & Vision</Link>
                                    <Link href="/contact" className="block py-2">Contact Us</Link>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 font-semibold">EVENTS</summary>
                                <div className="pl-4">
                                    <Link href="/events/ongoing" className="block py-2">Ongoing Events</Link>
                                    <Link href="/events/upcoming" className="block py-2">Upcoming Events</Link>
                                    <Link href="/events/previous" className="block py-2">Previous Events</Link>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 font-semibold">OUR TEAM</summary>
                                <div className="pl-4">
                                    <Link href="/team/executive" className="block py-2">Executive Committee</Link>
                                    <Link href="/team/founding" className="block py-2">Founding Executive Committee</Link>
                                    <Link href="/team/convening" className="block py-2">Convening Team</Link>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 font-semibold">PROJECTS</summary>
                                <div className="pl-4">
                                    <Link href="/projects/ongoing" className="block py-2">Ongoing Projects</Link>
                                    <Link href="/projects/upcoming" className="block py-2">Upcoming Projects</Link>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 font-semibold">MEMBERSHIP</summary>
                                <div className="pl-4">
                                    <Link href="/membership/join" className="block py-2">Join Now</Link>
                                    <Link href="/membership/how-to-join" className="block py-2">How to Join</Link>
                                    <Link href="/membership/benefits" className="block py-2">Membership Benefits</Link>
                                    <Link href="/membership/testimonials" className="block py-2">What Our Members Say</Link>
                                </div>
                            </details>

                            <Link href="/lurssc" className="block mt-2 py-2 bg-[var(--primary)] text-white text-center rounded">LURSSC</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default HomeNavBar;
