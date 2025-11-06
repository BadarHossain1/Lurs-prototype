import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

// GET - Fetch all members
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit')) || 50;
        const skip = parseInt(searchParams.get('skip')) || 0;
        
        const members = await db
            .collection('members')
            .find({})
            .limit(limit)
            .skip(skip)
            .toArray();
        
        const total = await db.collection('members').countDocuments();
        
        return NextResponse.json({
            success: true,
            data: members,
            total,
            limit,
            skip
        }, { status: 200 });
        
    } catch (error) {
        console.error('Error fetching members:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch members',
            error: error.message
        }, { status: 500 });
    }
}

// POST - Create a new member
export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const body = await request.json();
        
        // Add timestamps
        const memberData = {
            ...body,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        const result = await db.collection('members').insertOne(memberData);
        
        return NextResponse.json({
            success: true,
            message: 'Member created successfully',
            data: {
                _id: result.insertedId,
                ...memberData
            }
        }, { status: 201 });
        
    } catch (error) {
        console.error('Error creating member:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to create member',
            error: error.message
        }, { status: 500 });
    }
}
