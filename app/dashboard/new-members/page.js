"use client";

import { useState, useEffect } from "react";
import { UserPlus, Calendar, Phone, MapPin, RefreshCw, CheckCircle, XCircle, Clock, Search, Download } from "lucide-react";

export default function NewMembersPage() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [updating, setUpdating] = useState(null);

    useEffect(() => {
        fetchMembers();
    }, [filter]);

    const fetchMembers = async () => {
        setLoading(true);
        setError(null);
        try {
            const url = filter === 'all' 
                ? '/api/new-members' 
                : `/api/new-members?status=${filter}`;
            
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.success) {
                setMembers(data.data);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to fetch members');
            console.error('Error fetching members:', err);
        } finally {
            setLoading(false);
        }
    };

    const updateMemberStatus = async (id, status) => {
        setUpdating(id);
        try {
            const response = await fetch('/api/new-members', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, status })
            });

            const data = await response.json();

            if (data.success) {
                // Update local state
                setMembers(members.map(member => 
                    member._id === id ? { ...member, status } : member
                ));
                alert(`✅ Member ${status} successfully!`);
            } else {
                alert(`❌ Failed to update: ${data.message}`);
            }
        } catch (error) {
            console.error('Error updating member:', error);
            alert('❌ An error occurred while updating');
        } finally {
            setUpdating(null);
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
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'approved':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'rejected':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const filteredMembers = members.filter(member =>
        member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.mobileNumber.includes(searchTerm)
    );

    const exportToCSV = () => {
        const headers = ['Full Name', 'Department', 'Semester', 'Mobile', 'WhatsApp', 'Blood Group', 'Gender', 'DOB', 'Address', 'bKash', 'Transaction ID', 'Status', 'Applied Date'];
        const rows = filteredMembers.map(member => [
            member.fullName,
            member.department,
            member.semester,
            member.mobileNumber,
            member.whatsappNumber,
            member.bloodGroup,
            member.gender,
            member.dateOfBirth ? new Date(member.dateOfBirth).toLocaleDateString() : '',
            member.address,
            member.bkashNumber,
            member.transactionId,
            member.status,
            formatDate(member.appliedAt)
        ]);

        let csvContent = headers.join(',') + '\n';
        rows.forEach(row => {
            csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
        });

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `members_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const exportToPDF = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Members Report</title>');
        printWindow.document.write('<style>body{font-family:Arial,sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;font-size:10px;}th,td{border:1px solid #ddd;padding:6px;text-align:left;}th{background-color:#176b98;color:white;}</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h1>Member Applications Report</h1>');
        printWindow.document.write('<p>Generated: ' + new Date().toLocaleString() + '</p>');
        printWindow.document.write('<table><thead><tr><th>Name</th><th>Department</th><th>Semester</th><th>Mobile</th><th>Blood Group</th><th>Gender</th><th>Status</th><th>Applied</th></tr></thead><tbody>');
        
        filteredMembers.forEach(member => {
            printWindow.document.write('<tr>');
            printWindow.document.write('<td>' + member.fullName + '</td>');
            printWindow.document.write('<td>' + member.department + '</td>');
            printWindow.document.write('<td>' + member.semester + '</td>');
            printWindow.document.write('<td>' + member.mobileNumber + '</td>');
            printWindow.document.write('<td>' + member.bloodGroup + '</td>');
            printWindow.document.write('<td>' + member.gender + '</td>');
            printWindow.document.write('<td>' + member.status + '</td>');
            printWindow.document.write('<td>' + formatDate(member.appliedAt) + '</td>');
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">New Member Applications</h1>
                    <p className="text-gray-600">Review and manage membership applications</p>
                </div>
                <button
                    onClick={fetchMembers}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
                >
                    <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm mb-1">Total</p>
                            <p className="text-3xl font-bold">{members.length}</p>
                        </div>
                        <UserPlus className="w-10 h-10 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm mb-1">Pending</p>
                            <p className="text-3xl font-bold">{members.filter(m => m.status === 'pending').length}</p>
                        </div>
                        <Clock className="w-10 h-10 text-yellow-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm mb-1">Approved</p>
                            <p className="text-3xl font-bold">{members.filter(m => m.status === 'approved').length}</p>
                        </div>
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm mb-1">Rejected</p>
                            <p className="text-3xl font-bold">{members.filter(m => m.status === 'rejected').length}</p>
                        </div>
                        <XCircle className="w-10 h-10 text-red-500" />
                    </div>
                </div>
            </div>

            {/* Export Buttons */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex gap-3">
                        <button
                            onClick={exportToCSV}
                            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                        >
                            <Download className="w-5 h-5" />
                            Export CSV
                        </button>
                        <button
                            onClick={exportToPDF}
                            className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                        >
                            <Download className="w-5 h-5" />
                            Export PDF
                        </button>
                    </div>
                    
                    {/* Search */}
                    <div className="flex-1 w-full">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by name, department, or phone..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                            />
                        </div>
                    </div>
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

            {/* Members List */}
            {!loading && !error && (
                <div className="space-y-4">
                    {filteredMembers.length === 0 ? (
                        <div className="bg-white rounded-xl p-12 text-center shadow-lg">
                            <UserPlus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-600 text-lg font-medium">No applications found</p>
                        </div>
                    ) : (
                        filteredMembers.map((member) => (
                            <div
                                key={member._id}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                    {/* Member Info */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="font-bold text-2xl text-gray-900">{member.fullName}</h3>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(member.status)}`}>
                                                        {member.status}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>Applied: {formatDate(member.appliedAt)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">Department & Semester</p>
                                                <p className="font-semibold text-gray-900">{member.department} - Semester {member.semester}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">Gender & Blood Group</p>
                                                <p className="font-semibold text-gray-900">{member.gender} - {member.bloodGroup}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">Mobile Number</p>
                                                <p className="font-semibold text-gray-900 flex items-center gap-2">
                                                    <Phone className="w-4 h-4" />
                                                    {member.mobileNumber}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">WhatsApp Number</p>
                                                <p className="font-semibold text-gray-900 flex items-center gap-2">
                                                    <Phone className="w-4 h-4" />
                                                    {member.whatsappNumber}
                                                </p>
                                            </div>
                                            {member.dateOfBirth && (
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">Date of Birth</p>
                                                    <p className="font-semibold text-gray-900">{new Date(member.dateOfBirth).toLocaleDateString()}</p>
                                                </div>
                                            )}
                                            {member.address && (
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">Address</p>
                                                    <p className="font-semibold text-gray-900 flex items-start gap-2">
                                                        <MapPin className="w-4 h-4 mt-1" />
                                                        {member.address}
                                                    </p>
                                                </div>
                                            )}
                                            {member.bkashNumber && (
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">bKash Number</p>
                                                    <p className="font-semibold text-gray-900">{member.bkashNumber}</p>
                                                </div>
                                            )}
                                            {member.transactionId && (
                                                <div>
                                                    <p className="text-sm text-gray-600 mb-1">Transaction ID</p>
                                                    <p className="font-semibold text-gray-900">{member.transactionId}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    {member.status === 'pending' && (
                                        <div className="flex lg:flex-col gap-3">
                                            <button
                                                onClick={() => updateMemberStatus(member._id, 'approved')}
                                                disabled={updating === member._id}
                                                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <CheckCircle className="w-5 h-5" />
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => updateMemberStatus(member._id, 'rejected')}
                                                disabled={updating === member._id}
                                                className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <XCircle className="w-5 h-5" />
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
