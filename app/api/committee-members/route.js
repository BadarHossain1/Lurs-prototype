import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        
        const members = await db.collection('committee_members')
            .find({})
            .sort({ order: 1, createdAt: 1 }) // Sort by order first, then by creation date
            .toArray();
        
        return NextResponse.json({ success: true, members });
    } catch (error) {
        console.error('Error fetching committee members:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch committee members' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        
        // Get the count of existing members for this year to set the order
        const count = await db.collection('committee_members').countDocuments({ year: data.year });
        
        const newMember = {
            name: data.name,
            designation: data.designation,
            year: data.year,
            image: data.image,
            order: count, // Set order based on current count
            createdAt: new Date(),
        };
        
        const result = await db.collection('committee_members').insertOne(newMember);
        
        return NextResponse.json({ 
            success: true, 
            message: 'Committee member added successfully',
            memberId: result.insertedId 
        });
    } catch (error) {
        console.error('Error adding committee member:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to add committee member' },
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    try {
        const data = await request.json();
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const { ObjectId } = require('mongodb');
        
        // Update the order of members
        if (data.reorder) {
            const updates = data.members.map((member, index) => ({
                updateOne: {
                    filter: { _id: new ObjectId(member._id) },
                    update: { $set: { order: index } }
                }
            }));
            
            await db.collection('committee_members').bulkWrite(updates);
            
            return NextResponse.json({ 
                success: true, 
                message: 'Order updated successfully' 
            });
        }
        
        return NextResponse.json(
            { success: false, error: 'Invalid request' },
            { status: 400 }
        );
    } catch (error) {
        console.error('Error updating order:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update order' },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json(
                { success: false, error: 'Member ID is required' },
                { status: 400 }
            );
        }
        
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB);
        const { ObjectId } = require('mongodb');
        
        await db.collection('committee_members').deleteOne({ _id: new ObjectId(id) });
        
        return NextResponse.json({ 
            success: true, 
            message: 'Committee member deleted successfully' 
        });
    } catch (error) {
        console.error('Error deleting committee member:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete committee member' },
            { status: 500 }
        );
    }
}
