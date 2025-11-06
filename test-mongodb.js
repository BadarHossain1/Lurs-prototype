// Test MongoDB Connection and Insert
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://badar12041_db_user:1l0yHcCcRMCnYaNV@cluster0.fhkadnc.mongodb.net/?appName=Cluster0";
const dbName = "lurs_database";

async function testConnection() {
    let client;
    
    try {
        console.log('🔄 Connecting to MongoDB...');
        client = new MongoClient(uri);
        await client.connect();
        console.log('✅ Connected successfully to MongoDB!');
        
        const db = client.db(dbName);
        console.log(`📊 Using database: ${dbName}`);
        
        // List collections
        const collections = await db.listCollections().toArray();
        console.log('📁 Existing collections:', collections.map(c => c.name));
        
        // Insert test contact
        console.log('\n🧪 Inserting test contact...');
        const testContact = {
            name: "Test User",
            email: "test@example.com",
            subject: "Test Subject",
            message: "This is a test message from the test script",
            status: "new",
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        const result = await db.collection('contacts').insertOne(testContact);
        console.log('✅ Test contact inserted successfully!');
        console.log('📝 Inserted ID:', result.insertedId);
        
        // Fetch all contacts
        console.log('\n📋 Fetching all contacts...');
        const contacts = await db.collection('contacts').find({}).toArray();
        console.log(`✅ Found ${contacts.length} contact(s):`);
        contacts.forEach((contact, index) => {
            console.log(`\n${index + 1}. ${contact.name} (${contact.email})`);
            console.log(`   Subject: ${contact.subject}`);
            console.log(`   Status: ${contact.status}`);
            console.log(`   Created: ${contact.createdAt}`);
        });
        
        console.log('\n✅ Test completed successfully!');
        
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

testConnection();
