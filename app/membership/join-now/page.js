"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    UserPlus,
    Users,
    CreditCard,
    Phone,
    Mail,
    Calendar,
    MapPin,
    Sparkles,
    Heart,
    CheckCircle,
    AlertCircle,
    Banknote
} from "lucide-react";

const JoinNowPage = () => {
    const [isVisible, setIsVisible] = useState({});
    const [formData, setFormData] = useState({
        fullName: '',
        department: '',
        semester: '',
        mobileNumber: '',
        whatsappNumber: '',
        bloodGroup: '',
        address: '',
        gender: '',
        dateOfBirth: '',
        bkashNumber: '',
        transactionId: ''
    });

    const [formErrors, setFormErrors] = useState({});
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        const requiredFields = [
            'fullName', 'department', 'semester', 'mobileNumber',
            'whatsappNumber', 'bloodGroup', 'address', 'gender',
            'dateOfBirth', 'bkashNumber', 'transactionId'
        ];

        requiredFields.forEach(field => {
            if (!formData[field].trim()) {
                errors[field] = 'This field is required';
            }
        });

        // Validate mobile numbers
        const mobileRegex = /^(\+88)?01[3-9]\d{8}$/;
        if (formData.mobileNumber && !mobileRegex.test(formData.mobileNumber)) {
            errors.mobileNumber = 'Please enter a valid Bangladeshi mobile number';
        }
        if (formData.whatsappNumber && !mobileRegex.test(formData.whatsappNumber)) {
            errors.whatsappNumber = 'Please enter a valid Bangladeshi mobile number';
        }
        if (formData.bkashNumber && !mobileRegex.test(formData.bkashNumber)) {
            errors.bkashNumber = 'Please enter a valid bKash number';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);
        console.log('📤 Submitting membership application...', formData);

        try {
            const response = await fetch('/api/new-members', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            console.log('📥 Response status:', response.status);
            const data = await response.json();
            console.log('📥 Response data:', data);

            if (data.success) {
                console.log('✅ Application submitted! ID:', data.data._id);
                alert('✅ Registration submitted successfully!\n\nWe will review your application and contact you soon.\n\nYour Application ID: ' + data.data._id);
                // Reset form
                setFormData({
                    fullName: '',
                    department: '',
                    semester: '',
                    mobileNumber: '',
                    whatsappNumber: '',
                    bloodGroup: '',
                    address: '',
                    gender: '',
                    dateOfBirth: '',
                    bkashNumber: '',
                    transactionId: ''
                });
            } else {
                console.error('❌ Submission failed:', data.message);
                alert('❌ Failed to submit application: ' + data.message + '\n\nPlease try again.');
            }
        } catch (error) {
            console.error('❌ Error submitting application:', error);
            alert('❌ An error occurred: ' + error.message + '\n\nPlease try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <UserPlus className="absolute top-1/4 left-1/5 w-10 h-10 text-[var(--primary)]/30 animate-float" />
                    <Users className="absolute top-1/3 right-1/4 w-8 h-8 text-sky-500/40 animate-float-delayed" />
                    <Sparkles className="absolute bottom-1/3 left-1/3 w-7 h-7 text-blue-500/35 animate-pulse" />
                    <Heart className="absolute bottom-1/4 right-1/5 w-9 h-9 text-sky-500/30 animate-float" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                    <div className="animate-fade-in-up">
                        {/* Icon Group */}
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <UserPlus className="w-14 h-14 text-[var(--primary)] animate-pulse-glow" />
                            <div className="h-14 w-1 bg-gradient-to-b from-[var(--primary)] via-sky-400 to-transparent rounded-full"></div>
                            <Users className="w-12 h-12 text-sky-500 animate-pulse" />
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] via-sky-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                            Join LURS
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                            Become a member of Leading University Research Society and unlock your research potential
                        </p>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            <div className="group bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-[var(--primary)] animate-pulse-glow" />
                                    <span className="text-sm font-bold text-[var(--primary)]">Research Community</span>
                                </div>
                            </div>
                            <div className="group bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-sky-600" />
                                    <span className="text-sm font-bold text-sky-600">Verified Members</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Payment Information */}
                    <div
                        id="payment-info"
                        data-animate
                        className={`mb-12 transform transition-all duration-1000 ${isVisible['payment-info'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/50 shadow-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-500 rounded-full">
                                    <Banknote className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-green-800">Registration Fee</h3>
                                    <p className="text-green-600">One-time membership payment</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/70 rounded-2xl p-6">
                                    <h4 className="font-bold text-green-800 text-lg mb-3">Payment Details</h4>
                                    <div className="space-y-2 text-green-700">
                                        <p><span className="font-semibold">Amount:</span> ৳100 (One Hundred Taka)</p>
                                        <p><span className="font-semibold">Method:</span> bKash Payment</p>
                                        <p><span className="font-semibold">Type:</span> Registration Fee</p>
                                    </div>
                                </div>

                                <div className="bg-white/70 rounded-2xl p-6">
                                    <h4 className="font-bold text-green-800 text-lg mb-3">Payment Instructions</h4>
                                    <div className="space-y-1 text-green-700 text-sm">
                                        <p>1. Send ৳100 via bKash</p>
                                        <p>2. Note the transaction ID</p>
                                        <p>3. Fill the form with your bKash number & transaction ID</p>
                                        <p>4. Submit the registration form</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                                <div className="flex items-center gap-2 text-amber-800">
                                    <AlertCircle className="w-5 h-5" />
                                    <span className="font-semibold">Important: Complete bKash payment before filling the form</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <div
                        id="registration-form"
                        data-animate
                        className={`transform transition-all duration-1000 ${isVisible['registration-form'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                            <div className="bg-gradient-to-r from-[var(--primary)] to-sky-600 p-8">
                                <h2 className="text-3xl font-bold text-white mb-2">Membership Registration</h2>
                                <p className="text-blue-100">Fill out the form below to join LURS</p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                {/* Personal Information */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <UserPlus className="w-6 h-6 text-[var(--primary)]" />
                                        Personal Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.fullName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                                placeholder="Enter your full name"
                                            />
                                            {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Department *</label>
                                            <select
                                                name="department"
                                                value={formData.department}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.department ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                            >
                                                <option value="">Select Department</option>
                                                <option value="CSE">Civil Engineering</option>
                                                <option value="CSE">Computer Science & Engineering</option>
                                                <option value="EEE">Electrical & Electronic Engineering</option>
                                                <option value="BBA">Business Administration</option>
                                                <option value="English">English And Literature</option>
                                                <option value="LAW">Law</option>
                                                <option value="IST">Islamic Studies</option>
                                                <option value="PublicHealth">Public Health</option>
                                            </select>
                                            {formErrors.department && <p className="text-red-500 text-sm mt-1">{formErrors.department}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Semester *</label>
                                            <select
                                                name="semester"
                                                value={formData.semester}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.semester ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                            >
                                                <option value="">Select Semester</option>
                                                {Array.from({ length: 12 }, (_, i) => (
                                                    <option key={i + 1} value={`${i + 1}`}>{i + 1}{i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} Semester</option>
                                                ))}
                                            </select>
                                            {formErrors.semester && <p className="text-red-500 text-sm mt-1">{formErrors.semester}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.gender ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {formErrors.gender && <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.dateOfBirth ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                            />
                                            {formErrors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{formErrors.dateOfBirth}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Group *</label>
                                            <select
                                                name="bloodGroup"
                                                value={formData.bloodGroup}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.bloodGroup ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                            >
                                                <option value="">Select Blood Group</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                            </select>
                                            {formErrors.bloodGroup && <p className="text-red-500 text-sm mt-1">{formErrors.bloodGroup}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <Phone className="w-6 h-6 text-[var(--primary)]" />
                                        Contact Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                                            <input
                                                type="tel"
                                                name="mobileNumber"
                                                value={formData.mobileNumber}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.mobileNumber ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                                placeholder="01XXXXXXXXX"
                                            />
                                            {formErrors.mobileNumber && <p className="text-red-500 text-sm mt-1">{formErrors.mobileNumber}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number *</label>
                                            <input
                                                type="tel"
                                                name="whatsappNumber"
                                                value={formData.whatsappNumber}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.whatsappNumber ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                                placeholder="01XXXXXXXXX"
                                            />
                                            {formErrors.whatsappNumber && <p className="text-red-500 text-sm mt-1">{formErrors.whatsappNumber}</p>}
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                                            <textarea
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                rows="3"
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${formErrors.address ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                                placeholder="Enter your complete address"
                                            />
                                            {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Information */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <CreditCard className="w-6 h-6 text-[var(--primary)]" />
                                        Payment Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">bKash Number *</label>
                                            <input
                                                type="tel"
                                                name="bkashNumber"
                                                value={formData.bkashNumber}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.bkashNumber ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                                placeholder="01XXXXXXXXX"
                                            />
                                            {formErrors.bkashNumber && <p className="text-red-500 text-sm mt-1">{formErrors.bkashNumber}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Transaction ID *</label>
                                            <input
                                                type="text"
                                                name="transactionId"
                                                value={formData.transactionId}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${formErrors.transactionId ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-[var(--primary)]'
                                                    }`}
                                                placeholder="Enter bKash transaction ID"
                                            />
                                            {formErrors.transactionId && <p className="text-red-500 text-sm mt-1">{formErrors.transactionId}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[var(--primary)] to-sky-600 hover:from-[var(--primary)]/90 hover:to-sky-600/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <UserPlus className="w-5 h-5" />
                                                Join LURS Now
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JoinNowPage;