// Add Test Member Applications to MongoDB
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://badar12041_db_user:1l0yHcCcRMCnYaNV@cluster0.fhkadnc.mongodb.net/lurs_database?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "lurs_database";

const testMembers = [
    {
        fullName: "Ahmed Hassan",
        department: "Computer Science & Engineering",
        semester: "5th",
        mobileNumber: "01712345678",
        whatsappNumber: "01712345678",
        bloodGroup: "A+",
        address: "Sylhet, Bangladesh",
        gender: "Male",
        dateOfBirth: "2002-05-15",
        bkashNumber: "01712345678",
        transactionId: "TXN123456789",
        status: "pending",
        appliedAt: new Date(),
        updatedAt: new Date()
    },
    {
        fullName: "Fatima Rahman",
        department: "Business Administration",
        semester: "3rd",
        mobileNumber: "01823456789",
        whatsappNumber: "01823456789",
        bloodGroup: "B+",
        address: "Dhaka, Bangladesh",
        gender: "Female",
        dateOfBirth: "2003-08-22",
        bkashNumber: "01823456789",
        transactionId: "TXN987654321",
        status: "pending",
        appliedAt: new Date(Date.now() - 86400000), // 1 day ago
        updatedAt: new Date(Date.now() - 86400000)
    },
    {
        fullName: "Mohammad Ali",
        department: "Electrical & Electronic Engineering",
        semester: "7th",
        mobileNumber: "01934567890",
        whatsappNumber: "01934567890",
        bloodGroup: "O+",
        address: "Chittagong, Bangladesh",
        gender: "Male",
        dateOfBirth: "2001-12-10",
        bkashNumber: "01934567890",
        transactionId: "TXN456789123",
        status: "approved",
        appliedAt: new Date(Date.now() - 172800000), // 2 days ago
        updatedAt: new Date()
    },
    {
        fullName: "Ayesha Siddique",
        department: "English Literature",
        semester: "4th",
        mobileNumber: "01645678901",
        whatsappNumber: "01645678901",
        bloodGroup: "AB+",
        address: "Rajshahi, Bangladesh",
        gender: "Female",
        dateOfBirth: "2002-03-18",
        bkashNumber: "01645678901",
        transactionId: "TXN789123456",
        status: "pending",
        appliedAt: new Date(Date.now() - 3600000), // 1 hour ago
        updatedAt: new Date(Date.now() - 3600000)
    },
    {
        fullName: "Karim Uddin",
        department: "Civil Engineering",
        semester: "6th",
        mobileNumber: "01756789012",
        whatsappNumber: "01756789012",
        bloodGroup: "A-",
        address: "Khulna, Bangladesh",
        gender: "Male",
        dateOfBirth: "2001-09-25",
        bkashNumber: "01756789012",
        transactionId: "TXN321654987",
        status: "rejected",
        appliedAt: new Date(Date.now() - 259200000), // 3 days ago
        updatedAt: new Date(Date.now() - 86400000)
    }
];

async function addTestMembers() {
    let client;
    
    try {
        console.log('🔄 Connecting to MongoDB...');
        client = new MongoClient(uri);
        await client.connect();
        console.log('✅ Connected successfully!');
        
        const db = client.db(dbName);
        
        // Clear existing test data (optional)
        console.log('\n🗑️  Clearing existing test data...');
        await db.collection('new_members').deleteMany({});
        console.log('✅ Cleared existing data');
        
        // Insert test members
        console.log('\n📝 Inserting test member applications...');
        const result = await db.collection('new_members').insertMany(testMembers);
        console.log(`✅ Inserted ${result.insertedCount} test members`);
        
        // Fetch and display all members
        console.log('\n📋 All Member Applications:');
        const members = await db.collection('new_members').find({}).toArray();
        
        members.forEach((member, index) => {
            console.log(`\n${index + 1}. ${member.fullName}`);
            console.log(`   Department: ${member.department} - Semester ${member.semester}`);
            console.log(`   Mobile: ${member.mobileNumber}`);
            console.log(`   Blood Group: ${member.bloodGroup}`);
            console.log(`   Status: ${member.status}`);
            console.log(`   Applied: ${member.appliedAt.toLocaleString()}`);
        });
        
        console.log('\n✅ Test data added successfully!');
        console.log('\n📊 Summary:');
        console.log(`   Total: ${members.length}`);
        console.log(`   Pending: ${members.filter(m => m.status === 'pending').length}`);
        console.log(`   Approved: ${members.filter(m => m.status === 'approved').length}`);
        console.log(`   Rejected: ${members.filter(m => m.status === 'rejected').length}`);
        
        console.log('\n🎯 Next Steps:');
        console.log('   1. Start your dev server: npm run dev');
        console.log('   2. Visit: http://localhost:3000/dashboard/new-members');
        console.log('   3. Review and manage applications!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Stack:', error.stack);
    } finally {
        if (client) {
            await client.close();
            console.log('\n🔒 Connection closed');
        }
    }
}

addTestMembers();
