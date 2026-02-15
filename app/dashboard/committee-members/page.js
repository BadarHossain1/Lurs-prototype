"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Upload, Trash2, Users, Plus, X, GripVertical, ArrowUp, ArrowDown } from "lucide-react";

export default function CommitteeMembersPage() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [draggedItem, setDraggedItem] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        designation: "",
        year: "2023-2024",
        image: "",
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await fetch("/api/committee-members");
            const data = await response.json();
            if (data.success) {
                setMembers(data.members);
            }
        } catch (error) {
            console.error("Error fetching members:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            let imageUrl = formData.image;

            // Upload image to Cloudinary if a new file is selected
            if (imageFile) {
                const formDataImage = new FormData();
                formDataImage.append("file", imageFile);

                const uploadResponse = await fetch("/api/upload-image", {
                    method: "POST",
                    body: formDataImage,
                });

                const uploadData = await uploadResponse.json();
                if (uploadData.success) {
                    imageUrl = uploadData.url;
                } else {
                    alert("Failed to upload image");
                    setUploading(false);
                    return;
                }
            }

            // Save member data
            const response = await fetch("/api/committee-members", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    image: imageUrl,
                }),
            });

            const data = await response.json();
            if (data.success) {
                alert("Committee member added successfully!");
                setFormData({
                    name: "",
                    designation: "",
                    year: "2023-2024",
                    image: "",
                });
                setImageFile(null);
                setImagePreview("");
                setShowForm(false);
                fetchMembers();
            } else {
                alert("Failed to add committee member");
            }
        } catch (error) {
            console.error("Error adding member:", error);
            alert("An error occurred");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this member?')) return;

        try {
            const response = await fetch(`/api/committee-members?id=${id}`, {
                method: "DELETE",
            });

            const data = await response.json();
            if (data.success) {
                alert("Member deleted successfully!");
                fetchMembers();
            } else {
                alert("Failed to delete member");
            }
        } catch (error) {
            console.error("Error deleting member:", error);
            alert("An error occurred");
        }
    };

    const groupedMembers = members.reduce((acc, member) => {
        if (!acc[member.year]) {
            acc[member.year] = [];
        }
        acc[member.year].push(member);
        return acc;
    }, {});

    const handleDragStart = (e, member, year) => {
        setDraggedItem({ member, year });
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDrop = async (e, targetMember, targetYear) => {
        e.preventDefault();
        
        if (!draggedItem || draggedItem.year !== targetYear) return;
        
        const yearMembers = [...groupedMembers[targetYear]];
        const draggedIndex = yearMembers.findIndex(m => m._id === draggedItem.member._id);
        const targetIndex = yearMembers.findIndex(m => m._id === targetMember._id);
        
        if (draggedIndex === targetIndex) return;
        
        // Reorder the array
        const [removed] = yearMembers.splice(draggedIndex, 1);
        yearMembers.splice(targetIndex, 0, removed);
        
        // Update the order in the database
        await updateOrder(yearMembers);
        
        setDraggedItem(null);
    };

    const moveUp = async (member, year) => {
        const yearMembers = [...groupedMembers[year]];
        const index = yearMembers.findIndex(m => m._id === member._id);
        
        if (index === 0) return;
        
        [yearMembers[index], yearMembers[index - 1]] = [yearMembers[index - 1], yearMembers[index]];
        await updateOrder(yearMembers);
    };

    const moveDown = async (member, year) => {
        const yearMembers = [...groupedMembers[year]];
        const index = yearMembers.findIndex(m => m._id === member._id);
        
        if (index === yearMembers.length - 1) return;
        
        [yearMembers[index], yearMembers[index + 1]] = [yearMembers[index + 1], yearMembers[index]];
        await updateOrder(yearMembers);
    };

    const updateOrder = async (reorderedMembers) => {
        try {
            const response = await fetch("/api/committee-members", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    reorder: true,
                    members: reorderedMembers,
                }),
            });

            const data = await response.json();
            if (data.success) {
                fetchMembers();
            }
        } catch (error) {
            console.error("Error updating order:", error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8 pt-28">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 text-[#166a98]" />
                        <h1 className="text-3xl font-bold text-gray-900">
                            Committee Members Management
                        </h1>
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center gap-2 bg-[#166a98] text-white px-6 py-3 rounded-lg hover:bg-[#1a7eb0] transition-colors"
                    >
                        {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        {showForm ? "Cancel" : "Add Member"}
                    </button>
                </div>

                {/* Add Member Form */}
                {showForm && (
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Add New Committee Member
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#166a98] focus:border-transparent"
                                        placeholder="Enter member name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Designation *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.designation}
                                        onChange={(e) =>
                                            setFormData({ ...formData, designation: e.target.value })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#166a98] focus:border-transparent"
                                        placeholder="e.g., President, General Secretary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Committee Year *
                                    </label>
                                    <select
                                        required
                                        value={formData.year}
                                        onChange={(e) =>
                                            setFormData({ ...formData, year: e.target.value })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#166a98] focus:border-transparent"
                                    >
                                        <option value="2023-2024">2023-2024</option>
                                        <option value="2024-2025">2024-2025</option>
                                        <option value="2025-2026">2025-2026</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Profile Image *
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                                            <Upload className="w-5 h-5" />
                                            Choose Image
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                                required={!formData.image}
                                            />
                                        </label>
                                        {imagePreview && (
                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-300">
                                                <Image
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={uploading}
                                    className="px-6 py-2 bg-[#166a98] text-white rounded-lg hover:bg-[#1a7eb0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {uploading ? "Adding..." : "Add Member"}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Members List */}
                <div className="space-y-8">
                    {Object.keys(groupedMembers).sort().reverse().map((year) => (
                        <div key={year} className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold text-[#166a98] mb-6">
                                Committee {year}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {groupedMembers[year].map((member, index) => (
                                    <div
                                        key={member._id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, member, year)}
                                        onDragOver={handleDragOver}
                                        onDrop={(e) => handleDrop(e, member, year)}
                                        className="relative group bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-move"
                                    >
                                        {/* Drag Handle */}
                                        <div className="absolute top-2 left-2 z-10 bg-white/90 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                            <GripVertical className="w-4 h-4 text-gray-600" />
                                        </div>
                                        
                                        {/* Move Arrows */}
                                        <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {index > 0 && (
                                                <button
                                                    onClick={() => moveUp(member, year)}
                                                    className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600"
                                                    title="Move Up"
                                                >
                                                    <ArrowUp className="w-4 h-4" />
                                                </button>
                                            )}
                                            {index < groupedMembers[year].length - 1 && (
                                                <button
                                                    onClick={() => moveDown(member, year)}
                                                    className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600"
                                                    title="Move Down"
                                                >
                                                    <ArrowDown className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                        
                                        <div className="relative h-48">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-900 text-sm mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-xs text-gray-600">
                                                {member.designation}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(member._id)}
                                            className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {Object.keys(groupedMembers).length === 0 && (
                        <div className="text-center py-12 bg-white rounded-lg shadow">
                            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 text-lg">
                                No committee members added yet
                            </p>
                            <p className="text-gray-500 text-sm mt-2">
                                Click &quot;Add Member&quot; to get started
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
