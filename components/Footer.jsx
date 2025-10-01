import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
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
                            <Link href="https://www.facebook.com/lursbd" target="_blank" className="text-gray-400 hover:text-[var(--primary)] transition-colors">Facebook</Link>
                            <Link href="https://www.instagram.com/lursbd" target="_blank" className="text-gray-400 hover:text-[var(--primary)] transition-colors">Instagram</Link>
                            <Link href="https://www.linkedin.com/in/lursbd/" target="_blank" className="text-gray-400 hover:text-[var(--primary)] transition-colors">LinkedIn</Link>
                        </div>
                    </div>

                    <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                        <h3 className="text-xl font-bold mb-6 text-[var(--primary)]">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/founding-committee" className="text-gray-300 hover:text-white transition-colors">Founding Committee</Link></li>
                            <li><Link href="/conferences/1st-student-research-conference" className="text-gray-300 hover:text-white transition-colors">Conferences</Link></li>
                            <li><Link href="/events/webinars-seminars" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
                        </ul>
                    </div>

                    <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="text-xl font-bold mb-6 text-[var(--primary)]">Research</h3>
                        <ul className="space-y-3">
                            <li><Link href="/lurssc" className="text-gray-300 hover:text-white transition-colors">Current Projects</Link></li>
                            <li><Link href="/news/newsletters" className="text-gray-300 hover:text-white transition-colors">Publications</Link></li>
                            <li><Link href="/advisors-committees" className="text-gray-300 hover:text-white transition-colors">Collaboration</Link></li>
                            <li><Link href="/news/donations" className="text-gray-300 hover:text-white transition-colors">Community Impact</Link></li>
                        </ul>
                    </div>

                    <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                        <h3 className="text-xl font-bold mb-6 text-[var(--primary)]">Contact Info</h3>
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
    );
};

export default Footer;