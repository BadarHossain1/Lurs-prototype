# LURS Backend API Documentation

## MongoDB Connection Setup

This project uses MongoDB Atlas for database storage. The connection is configured using Next.js API routes.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=mongodb+srv://badar12041_db_user:1l0yHcCcRMCnYaNV@cluster0.fhkadnc.mongodb.net/?appName=Cluster0
MONGODB_DB=lurs_database
NODE_ENV=development
```

### Installation

Install the MongoDB driver:

```bash
npm install mongodb
```

### API Endpoints

#### 1. Test Connection
**GET** `/api/test-connection`

Tests the MongoDB connection and returns database information.

**Response:**
```json
{
  "success": true,
  "message": "Successfully connected to MongoDB!",
  "database": "lurs_database",
  "collections": ["members", "events", "contacts"],
  "timestamp": "2025-01-20T10:30:00.000Z"
}
```

#### 2. Members API
**GET** `/api/members?limit=50&skip=0`

Fetch all members with pagination.

**POST** `/api/members`

Create a new member.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "studentId": "2021-1-60-001",
  "department": "CSE",
  "phone": "+8801234567890"
}
```

#### 3. Events API
**GET** `/api/events?limit=50&skip=0&type=seminar`

Fetch all events with optional filtering by type.

**POST** `/api/events`

Create a new event.

**Request Body:**
```json
{
  "title": "Research Workshop",
  "type": "workshop",
  "date": "2025-02-15",
  "description": "Workshop on research methodologies",
  "location": "Main Campus"
}
```

#### 4. Contact API
**POST** `/api/contact`

Submit a contact form.

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Inquiry",
  "message": "I would like to know more about LURS"
}
```

**GET** `/api/contact?limit=50&skip=0&status=new`

Fetch all contact submissions (admin only).

### Database Collections

1. **members** - Store member information
2. **events** - Store event details
3. **contacts** - Store contact form submissions

### Testing the Connection

After setting up, test the connection by visiting:
```
http://localhost:3000/api/test-connection
```

### Usage Example

```javascript
// Fetch members
const response = await fetch('/api/members?limit=10');
const data = await response.json();
console.log(data);

// Create a new member
const response = await fetch('/api/members', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    studentId: '2021-1-60-001',
    department: 'CSE'
  })
});
const data = await response.json();
console.log(data);
```

### Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. Consider implementing authentication for admin endpoints
3. Add input validation and sanitization
4. Implement rate limiting for API endpoints
5. Use environment variables for sensitive data

### Next Steps

1. Install MongoDB driver: `npm install mongodb`
2. Start the development server: `npm run dev`
3. Test the connection: Visit `http://localhost:3000/api/test-connection`
4. Start using the API endpoints in your components

### Troubleshooting

If you encounter connection issues:
1. Check if MongoDB URI is correct in `.env.local`
2. Ensure your IP address is whitelisted in MongoDB Atlas
3. Verify network connectivity
4. Check MongoDB Atlas cluster status
