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
            <div className="container mx-auto px-4 py-0 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="block lg:hidden">
                        <Image src="/apple-touch-icon.png" alt="LURS" width={60} height={60} className="object-contain" />
                    </Link>
                    <Link href="/" className="hidden lg:flex items-center gap-3">
                        <Image src="/apple-touch-icon.png" alt="LURS" width={80} height={80} className="object-contain" />
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-gray-200 transition-colors font-semibold">HOME</Link>

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
                        title="EVENTS & PROGRAMS"
                        items={[
                            { href: '/events/webinars-seminars', label: 'Webinars & Seminars' },
                            { href: '/events/ceremonies-meetings', label: 'Ceremonies & Meetings' },
                            { href: '/events/cultural-social', label: 'Cultural & Social Programs' },
                            { href: '/events/national-days', label: 'National Days & Tributes' },
                        ]}
                    />

                    <Dropdown
                        title="NEWS & ACHIEVEMENTS"
                        items={[
                            { href: '/news/newsletters', label: 'Newsletter Publications' },
                            { href: '/news/donations', label: 'Donation & Social Contributions' },
                        ]}
                    />

                    <Link href="/contact" className="text-white hover:text-gray-200 transition-colors font-semibold">CONTACT</Link>
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
                                    <Link href="/founding-committee" className="block py-2">Founding Committee</Link>
                                    <Link href="/advisors-committees" className="block py-2">Advisors & Committees</Link>
                                </div>
                            </details>

                            <details>
                                <summary className="py-2 font-semibold">CONFERENCES</summary>
                                <div className="pl-4">
                                    <Link href="/conferences/1st-student-research-conference" className="block py-2">1st Student Research Conference</Link>
                                    <Link href="/lurrsc" className="block py-2">2nd Student Research Conference</Link>
                                    <Link href="/conferences/international-representation" className="block py-2">International Representation</Link>
                                </div>
                            </details>

                            <details>
                                <summary className="py-2 font-semibold">EVENTS & PROGRAMS</summary>
                                <div className="pl-4">
                                    <Link href="/events/webinars-seminars" className="block py-2">Webinars & Seminars</Link>
                                    <Link href="/events/ceremonies-meetings" className="block py-2">Ceremonies & Meetings</Link>
                                    <Link href="/events/cultural-social" className="block py-2">Cultural & Social Programs</Link>
                                    <Link href="/events/national-days" className="block py-2">National Days & Tributes</Link>
                                </div>
                            </details>

                            <details>
                                <summary className="py-2 font-semibold">NEWS & ACHIEVEMENTS</summary>
                                <div className="pl-4">
                                    <Link href="/news/newsletters" className="block py-2">Newsletter Publications</Link>
                                    <Link href="/news/donations" className="block py-2">Donation & Social Contributions</Link>
                                </div>
                            </details>

                            <Link href="/contact" className="block py-2 font-semibold">CONTACT US</Link>


                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default HomeNavBar;
