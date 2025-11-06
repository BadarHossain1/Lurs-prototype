import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request) {
    const logs = [];
    
    try {
        logs.push('Step 1: Starting contact form submission');
        
        // Check environment variables
        logs.push(`Step 2: MONGODB_URI exists: ${!!process.env.MONGODB_URI}`);
        logs.push(`Step 3: MONGODB_DB: ${process.env.MONGODB_DB || 'lurs_database'}`);
        
        // Get request body
        const body = await request.json();
        logs.push(`Step 4: Request body received: ${JSON.stringify(body)}`);
        
        // Validate
        if (!body.name || !body.email) {
            logs.push('Step 5: Validation FAILED - Missing name or email');
            return NextResponse.json({
                success: false,
                message: 'Name and email are required',
                logs
            }, { status: 400 });
        }
        logs.push('Step 5: Validation PASSED');
        
        // Connect to MongoDB
        logs.push('Step 6: Attempting to connect to MongoDB...');
        const client = await clientPromise;
        logs.push('Step 7: MongoDB client connected successfully');
        
        // Get database
        const dbName = process.env.MONGODB_DB || 'lurs_database';
        const db = client.db(dbName);
        logs.push(`Step 8: Database selected: ${dbName}`);
        
        // Prepare data
        const contactData = {
            name: body.name,
            email: body.email,
            subject: body.subject || 'No Subject',
            message: body.message || '',
            status: 'new',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        logs.push(`Step 9: Contact data prepared: ${JSON.stringify(contactData)}`);
        
        // Insert into MongoDB
        logs.push('Step 10: Attempting to insert into contacts collection...');
        const result = await db.collection('contacts').insertOne(contactData);
        logs.push(`Step 11: Insert successful! ID: ${result.insertedId}`);
        logs.push(`Step 12: Acknowledged: ${result.acknowledged}`);
        
        // Verify insertion
        logs.push('Step 13: Verifying insertion...');
        const inserted = await db.collection('contacts').findOne({ _id: result.insertedId });
        logs.push(`Step 14: Verification ${inserted ? 'SUCCESSFUL' : 'FAILED'}`);
        
        return NextResponse.json({
            success: true,
            message: 'Contact form submitted successfully',
            data: {
                _id: result.insertedId,
                ...contactData
            },
            logs,
            verification: inserted ? 'Data confirmed in database' : 'Warning: Could not verify'
        }, { status: 201 });
        
    } catch (error) {
        logs.push(`ERROR at some step: ${error.message}`);
        logs.push(`Error stack: ${error.stack}`);
        
        return NextResponse.json({
            success: false,
            message: 'Failed to submit contact form',
            error: error.message,
            errorStack: error.stack,
            logs
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const contacts = await db.collection('contacts').find({}).toArray();
        
        return NextResponse.json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
