import Image from "next/image";

const FoundingCommittee = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
            {/* Hero Section */}
            <div className="relative bg-[var(--primary)] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-4 py-24">
                    <div className="text-center animate-fade-up">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Founding <span className="text-yellow-400">Committee</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            The pioneers who started something extraordinary
                        </p>
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left side - Text Content */}
                        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">The Beginning of Something Great</h2>

                                <div className="prose prose-lg text-gray-700 leading-relaxed">
                                    <p className="mb-6 text-lg">
                                        <span className="text-[var(--primary)] font-semibold">'First'</span>, the word suggests something big. But what about being the first one to start something? Here is what the Leading University Research Society is publishing today. It's the first committee, the committee of 2023, which will be written in the pages of history to have started something.
                                    </p>

                                    <p className="mb-6 text-lg">
                                        Leading University Research Society presents you with a committee of immense potential. We hope that this committee brings with it some exciting and creative events and projects that will enhance the knowledge and skills of those who attend and participate in them.
                                    </p>

                                    <p className="text-lg">
                                        And we ask you to support this committee in its future endeavors by being a part of its future events and projects and through your active participation.
                                    </p>
                                </div>

                                {/* Call to action */}
                                {/* <div className="mt-8 text-center">
                                    <div className="inline-flex items-center px-6 py-3 bg-[var(--primary)] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                        <span>Committee of 2023</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Right side - First Image */}
                        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Founding Committee Meeting"
                                    width={600}
                                    height={400}
                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-xl font-bold">Vision & Leadership</h3>
                                    <p className="text-sm">Building the foundation of excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Founding Executive Committee Section */}
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
                                    ].map((name) => (
                                        <div key={name} className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-100 text-gray-800">{name}</div>
                                    ))}
                                </div>

                                <h4 className="text-xl font-semibold text-gray-800 mb-4">Other Founding Members</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Sadia Ahad</li>
                                    <li>Mahfuz Hussain</li>
                                    <li>Joynul Hussain Tuhin</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Section */}
                    <div className="mt-20 text-center animate-fade-up" style={{ animationDelay: '1s' }}>
                        <div className="bg-gradient-to-r from-[var(--primary)] to-blue-700 text-white p-12 rounded-3xl shadow-2xl">
                            <h3 className="text-3xl font-bold mb-6">Join Our Journey</h3>
                            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                                Be a part of history. Support our committee's future endeavors and contribute to the legacy we're building together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-[var(--primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Get Involved
                                </button>
                                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--primary)] transform hover:scale-105 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoundingCommittee;