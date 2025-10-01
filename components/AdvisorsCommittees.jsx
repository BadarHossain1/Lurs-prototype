import Image from "next/image";

const AdvisorsCommittees = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
            {/* Hero Section */}
            <div className="relative bg-[var(--primary)] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-4 py-24">
                    <div className="text-center animate-fade-up">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Advisors & <span className="text-yellow-400">Committees</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                            Meet the visionary leaders and dedicated committees guiding our research society towards excellence and innovation
                        </p>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">

                    {/* Advisors Section */}
                    <div className="mb-20">
                        <div className="text-center mb-16 animate-fade-up">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Advisors</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Distinguished faculty members who provide strategic guidance and mentorship to our research initiatives,
                                ensuring academic excellence and ethical standards in all our endeavors.
                            </p>
                        </div>

                        {/* Advisor Cards */}
                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            {/* Main Advisor */}
                            <div className="group animate-fade-up" style={{ animationDelay: '0.2s' }}>
                                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            alt="Dr. Sarah Ahmed - Advisor"
                                            width={400}
                                            height={300}
                                            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                                Advisor
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Sarah Ahmed</h3>
                                            <div className="space-y-2">
                                                <p className="text-[var(--primary)] font-semibold text-lg">Chief Advisor, LURS</p>
                                                <p className="text-gray-600 font-medium">Professor & Head</p>
                                                <p className="text-gray-500">Department of Computer Science and Engineering</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="bg-[var(--primary)]/10 p-2 rounded-lg">
                                                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Research Focus</h4>
                                                    <p className="text-gray-600 text-sm">Artificial Intelligence, Machine Learning, Data Science</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3">
                                                <div className="bg-[var(--primary)]/10 p-2 rounded-lg">
                                                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Experience</h4>
                                                    <p className="text-gray-600 text-sm">15+ years in academia and research supervision</p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>

                            {/* Co-Advisor */}
                            <div className="group animate-fade-up" style={{ animationDelay: '0.4s' }}>
                                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            alt="Dr. Mohammad Rahman - Co-Advisor"
                                            width={400}
                                            height={300}
                                            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                                Co-Advisor
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Mohammad Rahman</h3>
                                            <div className="space-y-2">
                                                <p className="text-emerald-600 font-semibold text-lg">Co-Advisor, LURS</p>
                                                <p className="text-gray-600 font-medium">Associate Professor</p>
                                                <p className="text-gray-500">Department of Computer Science and Engineering</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <div className="bg-emerald-100 p-2 rounded-lg">
                                                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Research Focus</h4>
                                                    <p className="text-gray-600 text-sm">Software Engineering, Cybersecurity, IoT Systems</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start space-x-3">
                                                <div className="bg-emerald-100 p-2 rounded-lg">
                                                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Experience</h4>
                                                    <p className="text-gray-600 text-sm">12+ years in research and industry collaboration</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Founding Executive Committee Section - Copied from FoundingCommittee.jsx */}
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Founding Executive Committee (2023)</h3>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Left column: Named officers */}
                            <div>
                                <dl className="space-y-4">
                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">President</dt>
                                        <dd className="text-lg font-medium text-gray-800">Abdus Samad Sumo</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">General Secretary</dt>
                                        <dd className="text-lg font-medium text-gray-800">Mahmudul Haque Jamil</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Vice President (Academic)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Shahriyar Ahmod</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Vice President (Organizing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Redwanul Haque</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Assistant General Secretary (Academic)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Mashura Chowdhury Mim</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Assistant General Secretary (Organizing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Soumitra Pada Dey Mithun</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Treasurer</dt>
                                        <dd className="text-lg font-medium text-gray-800">Saikat Chanda Sudip</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Secretary (Organizing wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Pranto Mozumder Proshanto</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Secretary (Scholarship & Higher Education wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Sabikunnahar Jannat</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Secretary (Media & Content Development wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Dewan Sonubar Raza Chowdhury</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Secretary (Research & Career Development wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Md. Badrul Alom Tawsyat</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Assistant Secretary (Research & Career Development wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Shotabdi Das Puja</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Secretary (IT & Creative wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Nafisa Tasmiya</dd>
                                    </div>

                                    <div>
                                        <dt className="text-sm font-semibold text-[var(--primary)]">Assistant Secretary (IT & Creative wing)</dt>
                                        <dd className="text-lg font-medium text-gray-800">Nafisa Maliath</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Right column: Executive members grid + other founding members */}
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Executive Members</h4>
                                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                    {[
                                        'Faiza', 'Ali Ahmed Masum', 'Md. Rahy Bin Kamal', 'Md. Ali Hussain Sagor', 'Fardous Ahmed Siam', 'Sumaiya Islam', 'Mohosin Ahmed', 'Refah Taspia Chowdhury', 'Sumaiya Akter', 'Sajib Chanda', 'Puja Rani Nath', 'Aziza Ara Jagirdar', 'Hadia Akter Ritu', 'Md. Tazwar Rahman Chowdhury', 'Dipongkar Deb', 'Md. Atikur Rahman Joy', 'Asfarur Rahman Chowdhury'
                                    ].map((name, index) => (
                                        <div key={name} className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-100 text-gray-800 hover:bg-[var(--primary)]/5 hover:border-[var(--primary)]/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                                            <span className="group-hover:text-[var(--primary)] transition-colors duration-200">{name}</span>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Other Founding Members</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li className="hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer">Sadia Ahad</li>
                                    <li className="hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer">Mahfuz Hussain</li>
                                    <li className="hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer">Joynul Hussain Tuhin</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Section */}
                    <div className="mt-20 text-center animate-fade-up" style={{ animationDelay: '1s' }}>
                        <div className="bg-gradient-to-r from-[var(--primary)] to-blue-700 text-white p-12 rounded-3xl shadow-2xl">
                            <h3 className="text-3xl font-bold mb-6">Join Our Academic Community</h3>
                            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                                Under the guidance of our distinguished advisors and dynamic committee, become part of a research community that's shaping the future of academia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-[var(--primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Apply for Membership
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--primary)] transform hover:scale-105 transition-all duration-300">
                                    Research Opportunities
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisorsCommittees;