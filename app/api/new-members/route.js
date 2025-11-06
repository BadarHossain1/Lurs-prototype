import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

// POST - Submit new member application
export async function POST(request) {
    try {
        console.log('=== New Member Application Started ===');
        
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const body = await request.json();
        console.log('Application data:', body);
        
        // Validate required fields
        const requiredFields = ['fullName', 'department', 'semester', 'mobileNumber'];
        for (const field of requiredFields) {
            if (!body[field]) {
                return NextResponse.json({
                    success: false,
                    message: `${field} is required`
                }, { status: 400 });
            }
        }
        
        // Prepare member data
        const memberData = {
            fullName: body.fullName,
            department: body.department,
            semester: body.semester,
            mobileNumber: body.mobileNumber,
            whatsappNumber: body.whatsappNumber || body.mobileNumber,
            bloodGroup: body.bloodGroup || 'Not Specified',
            address: body.address || '',
            gender: body.gender || 'Not Specified',
            dateOfBirth: body.dateOfBirth || '',
            bkashNumber: body.bkashNumber || '',
            transactionId: body.transactionId || '',
            status: 'pending', // pending, approved, rejected
            appliedAt: new Date(),
            updatedAt: new Date()
        };
        
        console.log('Inserting member data:', memberData);
        
        const result = await db.collection('new_members').insertOne(memberData);
        
        console.log('Insert result:', result);
        console.log('=== New Member Application Completed ===');
        
        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully',
            data: {
                _id: result.insertedId,
                ...memberData
            }
        }, { status: 201 });
        
    } catch (error) {
        console.error('=== Error submitting application ===');
        console.error('Error details:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to submit application',
            error: error.message
        }, { status: 500 });
    }
}

// GET - Fetch all member applications
export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const { searchParams } = new URL(request.url);
        const limit = parseInt(searchParams.get('limit')) || 50;
        const skip = parseInt(searchParams.get('skip')) || 0;
        const status = searchParams.get('status');
        
        const query = status ? { status } : {};
        
        const members = await db
            .collection('new_members')
            .find(query)
            .sort({ appliedAt: -1 })
            .limit(limit)
            .skip(skip)
            .toArray();
        
        const total = await db.collection('new_members').countDocuments(query);
        
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

// PATCH - Update member status (approve/reject)
export async function PATCH(request) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DB || 'lurs_database');
        
        const body = await request.json();
        const { id, status } = body;
        
        if (!id || !status) {
            return NextResponse.json({
                success: false,
                message: 'ID and status are required'
            }, { status: 400 });
        }
        
        if (!['approved', 'rejected', 'pending'].includes(status)) {
            return NextResponse.json({
                success: false,
                message: 'Invalid status. Must be: approved, rejected, or pending'
            }, { status: 400 });
        }
        
        const result = await db.collection('new_members').updateOne(
            { _id: new ObjectId(id) },
            { 
                $set: { 
                    status,
                    updatedAt: new Date()
                } 
            }
        );
        
        if (result.matchedCount === 0) {
            return NextResponse.json({
                success: false,
                message: 'Member not found'
            }, { status: 404 });
        }
        
        return NextResponse.json({
            success: true,
            message: `Member ${status} successfully`
        }, { status: 200 });
        
    } catch (error) {
        console.error('Error updating member status:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to update member status',
            error: error.message
        }, { status: 500 });
    }
}
