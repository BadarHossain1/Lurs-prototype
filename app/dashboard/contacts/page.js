"use client";

import { useState, useEffect } from "react";
import { Mail, Calendar, User, MessageSquare, RefreshCw, Download, Search } from "lucide-react";

export default function ContactsPage() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    const fetchContacts = async () => {
        setLoading(true);
        setError(null);
        try {
            const url = filter === 'all' 
                ? '/api/contact' 
                : `/api/contact?status=${filter}`;
            
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.success) {
                setContacts(data.data);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to fetch contacts');
            console.error('Error fetching contacts:', err);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'new':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'read':
                return 'bg-green-100 text-green-800 border-green-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const exportToCSV = () => {
        const headers = ['Name', 'Email', 'Subject', 'Message', 'Status', 'Date'];
        const rows = filteredContacts.map(contact => [
            contact.name,
            contact.email,
            contact.subject,
            contact.message,
            contact.status,
            formatDate(contact.createdAt)
        ]);

        let csvContent = headers.join(',') + '\n';
        rows.forEach(row => {
            csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
        });

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `contacts_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const exportToPDF = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Contacts Report</title>');
        printWindow.document.write('<style>body{font-family:Arial,sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ddd;padding:8px;text-align:left;}th{background-color:#176b98;color:white;}</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h1>Contacts Report</h1>');
        printWindow.document.write('<p>Generated: ' + new Date().toLocaleString() + '</p>');
        printWindow.document.write('<table><thead><tr><th>Name</th><th>Email</th><th>Subject</th><th>Message</th><th>Status</th><th>Date</th></tr></thead><tbody>');
        
        filteredContacts.forEach(contact => {
            printWindow.document.write('<tr>');
            printWindow.document.write('<td>' + contact.name + '</td>');
            printWindow.document.write('<td>' + contact.email + '</td>');
            printWindow.document.write('<td>' + contact.subject + '</td>');
            printWindow.document.write('<td>' + contact.message + '</td>');
            printWindow.document.write('<td>' + contact.status + '</td>');
            printWindow.document.write('<td>' + formatDate(contact.createdAt) + '</td>');
            printWindow.document.write('</tr>');
        });
        
        printWindow.document.write('</tbody></table></body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Submissions</h1>
                    <p className="text-gray-600">Manage all contact form submissions</p>
                </div>
                <button
                    onClick={fetchContacts}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
                >
                    <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm mb-1">Total Contacts</p>
                            <p className="text-3xl font-bold">{contacts.length}</p>
                        </div>
                        <Mail className="w-10 h-10 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <button
                                onClick={exportToCSV}
                                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all mr-2"
                            >
                                <Download className="w-4 h-4" />
                                Export CSV
                            </button>
                            <button
                                onClick={exportToPDF}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                            >
                                <Download className="w-4 h-4" />
                                Export PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or subject..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    />
                </div>
            </div>

            {/* Loading */}
            {loading && (
                <div className="flex justify-center items-center py-20">
                    <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                    <p className="text-red-600 font-medium">{error}</p>
                </div>
            )}

            {/* Contacts List */}
            {!loading && !error && (
                <div className="space-y-4">
                    {filteredContacts.length === 0 ? (
                        <div className="bg-white rounded-xl p-12 text-center shadow-lg">
                            <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-600 text-lg font-medium">No contacts found</p>
                        </div>
                    ) : (
                        filteredContacts.map((contact) => (
                            <div
                                key={contact._id}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="bg-blue-100 p-3 rounded-lg">
                                                <User className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="font-bold text-xl text-gray-900">{contact.name}</h3>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(contact.status)}`}>
                                                        {contact.status}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 mb-1">{contact.email}</p>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{formatDate(contact.createdAt)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <MessageSquare className="w-4 h-4 text-gray-400" />
                                                    <span className="text-sm font-semibold text-gray-700">Subject:</span>
                                                </div>
                                                <p className="text-gray-900 font-medium pl-6">{contact.subject}</p>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Mail className="w-4 h-4 text-gray-400" />
                                                    <span className="text-sm font-semibold text-gray-700">Message:</span>
                                                </div>
                                                <p className="text-gray-600 pl-6">{contact.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
