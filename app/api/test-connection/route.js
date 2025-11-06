import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        // Test the connection by listing collections
        const collections = await db.listCollections().toArray();
        
        return NextResponse.json({
            success: true,
            message: 'Successfully connected to MongoDB!',
            database: process.env.MONGODB_DB || 'lurs_database',
            collections: collections.map(col => col.name),
            timestamp: new Date().toISOString()
        }, { status: 200 });
        
    } catch (error) {
        console.error('MongoDB connection error:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to connect to MongoDB',
            error: error.message
        }, { status: 500 });
    }
}
