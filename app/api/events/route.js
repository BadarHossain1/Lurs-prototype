import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

// GET - Fetch all events
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit')) || 50;
        const skip = parseInt(searchParams.get('skip')) || 0;
        const type = searchParams.get('type'); // Filter by event type
        
        const query = type ? { type } : {};
        
        const events = await db
            .collection('events')
            .find(query)
            .sort({ date: -1 })
            .limit(limit)
            .skip(skip)
            .toArray();
        
        const total = await db.collection('events').countDocuments(query);
        
        return NextResponse.json({
            success: true,
            data: events,
            total,
            limit,
            skip
        }, { status: 200 });
        
    } catch (error) {
        console.error('Error fetching events:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch events',
            error: error.message
        }, { status: 500 });
    }
}

// POST - Create a new event
export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const body = await request.json();
        
        // Add timestamps
        const eventData = {
            ...body,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        const result = await db.collection('events').insertOne(eventData);
        
        return NextResponse.json({
            success: true,
            message: 'Event created successfully',
            data: {
                _id: result.insertedId,
                ...eventData
            }
        }, { status: 201 });
        
    } catch (error) {
        console.error('Error creating event:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to create event',
            error: error.message
        }, { status: 500 });
    }
}
