"use client";

import { useState, useEffect } from "react";
import { Mail, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const [stats, setStats] = useState({
        totalContacts: 0,
        totalMembers: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            // Fetch contacts
            const contactsRes = await fetch('/api/contact');
            const contactsData = await contactsRes.json();
            
            // Fetch members
            const membersRes = await fetch('/api/new-members');
            const membersData = await membersRes.json();
            
            setStats({
                totalContacts: contactsData.success ? contactsData.data.length : 0,
                totalMembers: membersData.success ? membersData.data.length : 0
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                <p className="text-gray-600">Welcome to LURS Admin Dashboard</p>
            </div>

            {/* Main Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contacts Card */}
                <Link href="/dashboard/contacts">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="bg-white/20 p-4 rounded-xl">
                                <Mail className="w-10 h-10 text-white" />
                            </div>
                            <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            {loading ? "..." : stats.totalContacts}
                        </h2>
                        <p className="text-blue-100 text-lg font-medium mb-4">Contact Submissions</p>
                        <p className="text-blue-200 text-sm">
                            View and manage all contact form submissions
                        </p>
                    </div>
                </Link>

                {/* New Members Card */}
                <Link href="/dashboard/new-members">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="bg-white/20 p-4 rounded-xl">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <ArrowRight className="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            {loading ? "..." : stats.totalMembers}
                        </h2>
                        <p className="text-green-100 text-lg font-medium mb-4">Member Applications</p>
                        <p className="text-green-200 text-sm">
                            Review and approve membership applications
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
