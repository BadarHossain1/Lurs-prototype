"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    LayoutDashboard, 
    Mail, 
    Users, 
    Menu, 
    X,
    LogOut
} from "lucide-react";
import DashboardPasswordModal from "@/components/DashboardPasswordModal";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isChecking, setIsChecking] = useState(true);
    const pathname = usePathname();

    // Check authentication on mount
    useEffect(() => {
        const authStatus = sessionStorage.getItem("dashboardAuth");
        setIsAuthenticated(authStatus === "true");
        setIsChecking(false);
    }, []);

    const menuItems = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard
        },
        {
            name: "Contacts",
            href: "/dashboard/contacts",
            icon: Mail
        },
        {
            name: "New Members",
            href: "/dashboard/new-members",
            icon: Users
        }
    ];

    // Show loading state while checking authentication
    if (isChecking) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)] mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    // Show password modal if not authenticated
    if (!isAuthenticated) {
        return <DashboardPasswordModal onAuthenticated={() => setIsAuthenticated(true)} />;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg"
            >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-white shadow-xl z-40 transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 w-64`}
            >
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-[var(--primary)]">LURS Admin</h1>
                    <p className="text-sm text-gray-500 mt-1">Dashboard Panel</p>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? "bg-[var(--primary)] text-white shadow-lg"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
                    <button 
                        onClick={() => {
                            sessionStorage.removeItem("dashboardAuth");
                            window.location.href = "/";
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full transition-all duration-200"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-64 min-h-screen">
                {children}
            </main>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
