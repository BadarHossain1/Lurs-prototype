# MongoDB Contact Form Testing Guide

## 🚀 Quick Start Testing

### Method 1: Using Test HTML Page (Recommended)

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open the test page:**
   ```
   http://localhost:3000/test-contact.html
   ```

3. **Submit the form:**
   - The form is pre-filled with test data
   - Click "Submit Test Contact"
   - Watch the browser console (F12) for detailed logs
   - Check your terminal for MongoDB operation logs

4. **View results in dashboard:**
   ```
   http://localhost:3000/dashboard/contacts
   ```

### Method 2: Using the Actual Contact Page

1. **Visit the contact page:**
   ```
   http://localhost:3000/about/contact
   ```

2. **Fill out the form with test data:**
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Inquiry
   - Message: Testing MongoDB storage

3. **Submit and check dashboard:**
   ```
   http://localhost:3000/dashboard/contacts
   ```

### Method 3: Direct API Testing with cURL

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

### Method 4: Using Node.js Test Script

```bash
node test-mongodb.js
```

This will:
- Connect to MongoDB
- Insert a test contact
- List all contacts
- Show detailed logs

## 🔍 Troubleshooting

### If contacts are not showing:

1. **Check MongoDB connection:**
   ```
   http://localhost:3000/api/test-connection
   ```
   Should return: `{"success": true, "message": "Successfully connected to MongoDB!"}`

2. **Check environment variables:**
   - Open `.env.local`
   - Verify `MONGODB_URI` is correct
   - Verify `MONGODB_DB=lurs_database`

3. **Check terminal logs:**
   Look for these messages when submitting:
   ```
   === Contact Form Submission Started ===
   MongoDB client connected
   Database selected: lurs_database
   Request body: { name: '...', email: '...', ... }
   Inserting contact data: { ... }
   Insert result: { acknowledged: true, insertedId: ... }
   === Contact Form Submission Completed ===
   ```

4. **Check browser console:**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for any error messages

5. **Verify MongoDB package is installed:**
   ```bash
   npm list mongodb
   ```
   Should show: `mongodb@6.x.x` or similar

6. **If MongoDB is not installed:**
   ```bash
   npm install mongodb
   ```

## 📊 Expected Results

### Successful Submission:
- Browser shows: "Thank you for your message!"
- Terminal shows: "Contact Form Submission Completed"
- Dashboard shows the new contact card
- MongoDB has the document in `contacts` collection

### API Response Format:
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message",
    "status": "new",
    "createdAt": "2025-01-20T10:30:00.000Z",
    "updatedAt": "2025-01-20T10:30:00.000Z"
  }
}
```

## 🎯 Dashboard Features to Test

1. **View all contacts** - Should display cards with contact info
2. **Filter by status** - Click "New" or "Read" tabs
3. **Search contacts** - Type in search box
4. **Refresh data** - Click refresh button
5. **Stats cards** - Should show correct counts

## 📝 Common Issues

### Issue: "Failed to connect to MongoDB"
**Solution:** Check if MongoDB URI in `.env.local` is correct

### Issue: "mongodb is not defined"
**Solution:** Run `npm install mongodb`

### Issue: "Cannot read property 'db' of undefined"
**Solution:** Restart the development server after installing mongodb

### Issue: Contacts not appearing in dashboard
**Solution:** 
1. Check browser console for errors
2. Verify API endpoint is working: `http://localhost:3000/api/contact`
3. Check if data is in MongoDB using test script

## ✅ Verification Checklist

- [ ] MongoDB package installed (`npm list mongodb`)
- [ ] `.env.local` file exists with correct credentials
- [ ] Development server running (`npm run dev`)
- [ ] Test connection works (`/api/test-connection`)
- [ ] Can submit form from `/test-contact.html`
- [ ] Can see contacts in `/dashboard/contacts`
- [ ] Terminal shows MongoDB logs
- [ ] Browser console shows no errors

## 🔗 Useful URLs

- Test Page: `http://localhost:3000/test-contact.html`
- Contact Page: `http://localhost:3000/about/contact`
- Dashboard: `http://localhost:3000/dashboard`
- Contacts: `http://localhost:3000/dashboard/contacts`
- Test Connection: `http://localhost:3000/api/test-connection`
- API Endpoint: `http://localhost:3000/api/contact`
