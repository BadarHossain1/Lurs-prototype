import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

// POST - Submit contact form
export async function POST(request) {
    try {
        console.log('=== Contact Form Submission Started ===');
        
        const client = await clientPromise;
        console.log('MongoDB client connected');
        
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        console.log('Database selected:', process.env.MONGODB_DB || 'lurs_database');
        
        const body = await request.json();
        console.log('Request body:', body);
        
        // Validate required fields
        if (!body.name || !body.email) {
            console.log('Validation failed: Missing name or email');
            return NextResponse.json({
                success: false,
                message: 'Name and email are required'
            }, { status: 400 });
        }
        
        // Add timestamps and status
        const contactData = {
            name: body.name,
            email: body.email,
            subject: body.subject || 'No Subject',
            message: body.message || '',
            status: 'new',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        console.log('Inserting contact data:', contactData);
        
        const result = await db.collection('contacts').insertOne(contactData);
        
        console.log('Insert result:', result);
        console.log('=== Contact Form Submission Completed ===');
        
        return NextResponse.json({
            success: true,
            message: 'Contact form submitted successfully',
            data: {
                _id: result.insertedId,
                ...contactData
            }
        }, { status: 201 });
        
    } catch (error) {
        console.error('=== Error submitting contact form ===');
        console.error('Error details:', error);
        console.error('Error stack:', error.stack);
        return NextResponse.json({
            success: false,
            message: 'Failed to submit contact form',
            error: error.message
        }, { status: 500 });
    }
}

// GET - Fetch all contact submissions (admin only)
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit')) || 50;
        const skip = parseInt(searchParams.get('skip')) || 0;
        const status = searchParams.get('status');
        
        const query = status ? { status } : {};
        
        const contacts = await db
            .collection('contacts')
            .find(query)
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip(skip)
            .toArray();
        
        const total = await db.collection('contacts').countDocuments(query);
        
        return NextResponse.json({
            success: true,
            data: contacts,
            total,
            limit,
            skip
        }, { status: 200 });
        
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch contacts',
            error: error.message
        }, { status: 500 });
    }
}
