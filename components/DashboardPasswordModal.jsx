"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, X, Eye, EyeOff } from "lucide-react";

export default function DashboardPasswordModal({ onAuthenticated }) {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const router = useRouter();

    const CORRECT_PASSWORD = "lurs12041";
    const MAX_ATTEMPTS = 5;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulate a small delay for better UX
        setTimeout(() => {
            if (password === CORRECT_PASSWORD) {
                // Store authentication in sessionStorage
                sessionStorage.setItem("dashboardAuth", "true");
                onAuthenticated();
            } else {
                const newAttempts = attempts + 1;
                setAttempts(newAttempts);
                
                if (newAttempts >= MAX_ATTEMPTS) {
                    setError(`Maximum attempts reached (${MAX_ATTEMPTS}). Redirecting to home...`);
                    setTimeout(() => {
                        router.push("/");
                    }, 2000);
                } else {
                    const remainingAttempts = MAX_ATTEMPTS - newAttempts;
                    setError(`Incorrect password. ${remainingAttempts} attempt${remainingAttempts !== 1 ? 's' : ''} remaining.`);
                }
                setPassword("");
            }
            setIsLoading(false);
        }, 500);
    };

    const handleClose = () => {
        router.push("/");
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[var(--primary)]/10 p-4 rounded-full">
                        <Lock size={40} className="text-[var(--primary)]" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Dashboard Access
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Please enter the password to access the dashboard
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                            autoFocus
                            disabled={isLoading || attempts >= MAX_ATTEMPTS}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                            disabled={isLoading || attempts >= MAX_ATTEMPTS}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading || !password || attempts >= MAX_ATTEMPTS}
                        className="w-full bg-[var(--primary)] text-white py-3 rounded-lg font-semibold hover:bg-[var(--primary)]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Verifying..." : "Access Dashboard"}
                    </button>

                    {/* Attempts Counter */}
                    {attempts > 0 && attempts < MAX_ATTEMPTS && (
                        <p className="text-center text-sm text-gray-600">
                            Attempts used: {attempts} / {MAX_ATTEMPTS}
                        </p>
                    )}
                </form>

                {/* Footer */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Contact admin if you need access
                </p>
            </div>
        </div>
    );
}
