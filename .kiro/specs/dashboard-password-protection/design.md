# Design Document

## Overview

This design implements a client-side password protection mechanism for the dashboard using React hooks and sessionStorage. The solution wraps the dashboard layout with an authentication component that displays a modal for password entry. Upon successful authentication, the session is stored in sessionStorage, allowing seamless navigation between dashboard pages without re-authentication.

## Architecture

### Component Structure

```
app/dashboard/
├── layout.js (existing - will be modified)
└── components/
    └── DashboardAuth.jsx (new component)
```

### Authentication Flow

```
User navigates to /dashboard/* 
    ↓
DashboardAuth component checks sessionStorage
    ↓
    ├─→ Authenticated? → Render dashboard content
    │
    └─→ Not authenticated? → Show password modal
            ↓
            User enters password
            ↓
            ├─→ Correct? → Store in sessionStorage → Render dashboard
            │
            └─→ Incorrect? → Show error → Redirect to home after 2s
```

## Components and Interfaces

### 1. DashboardAuth Component

**Location:** `app/dashboard/components/DashboardAuth.jsx`

**Purpose:** Wrapper component that handles authentication logic and modal display

**State Management:**
```javascript
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(true)
```

**Key Methods:**

- `checkAuth()` - Checks sessionStorage for existing authentication on mount
- `handleSubmit(e)` - Validates password and handles authentication
- `handleIncorrectPassword()` - Shows error and redirects to home

**Props:**
- `children` - React children to render when authenticated

### 2. Modified Dashboard Layout

**Location:** `app/dashboard/layout.js`

**Changes:**
- Import and wrap children with `<DashboardAuth>` component
- No other structural changes needed

## Data Models

### Session Storage Schema

```javascript
{
  key: 'dashboardAuth',
  value: 'true' | null
}
```

**Storage Type:** sessionStorage (clears on tab close)

### Password Configuration

```javascript
const DASHBOARD_PASSWORD = 'lurs12041'
```

**Note:** This constant should be easily replaceable with an environment variable in future iterations.

## Error Handling

### Error States

1. **Incorrect Password**
   - Display: "Incorrect password. Redirecting to home..."
   - Action: Redirect to "/" after 2 seconds
   - Clear: Password input field

2. **Empty Password**
   - Display: "Please enter a password"
   - Action: Focus on input field
   - No redirect

### Error Display

- Errors shown in red text below password input
- Error message clears when user starts typing again
- Smooth fade-in animation for error messages

## UI Design

### Password Modal

**Layout:**
```
┌─────────────────────────────────────┐
│  [Backdrop - semi-transparent]      │
│                                     │
│     ┌─────────────────────┐        │
│     │  Dashboard Access   │        │
│     │                     │        │
│     │  [Password Input]   │        │
│     │  [Error Message]    │        │
│     │                     │        │
│     │     [Submit Btn]    │        │
│     └─────────────────────┘        │
│                                     │
└─────────────────────────────────────┘
```

**Styling:**
- Modal: White background, rounded corners, shadow
- Backdrop: Black with 50% opacity, blur effect
- Input: Border, focus ring, password type
- Button: Primary color, hover effect
- Error: Red text, small font size

**Responsive:**
- Mobile: Full width with padding
- Desktop: Fixed width (400px), centered

### CSS Classes

```css
Modal Container: fixed inset-0 z-50 flex items-center justify-center
Backdrop: absolute inset-0 bg-black/50 backdrop-blur-sm
Modal Card: bg-white rounded-xl shadow-2xl p-8 w-full max-w-md
Input: w-full px-4 py-3 border rounded-lg focus:ring-2
Button: w-full bg-primary text-white py-3 rounded-lg hover:opacity-90
Error: text-red-500 text-sm mt-2
```

## Testing Strategy

### Unit Tests (Optional)

1. **Authentication Logic**
   - Test password validation
   - Test sessionStorage read/write
   - Test state management

2. **Component Rendering**
   - Test modal display when not authenticated
   - Test content display when authenticated
   - Test error message display

### Integration Tests (Optional)

1. **User Flow**
   - Test complete authentication flow
   - Test navigation between dashboard pages
   - Test session persistence

2. **Error Scenarios**
   - Test incorrect password handling
   - Test empty password submission
   - Test redirect functionality

### Manual Testing

1. **Authentication Flow**
   - Navigate to /dashboard
   - Enter correct password → Should access dashboard
   - Enter incorrect password → Should show error and redirect
   - Enter empty password → Should show validation error

2. **Session Persistence**
   - Authenticate successfully
   - Navigate to /dashboard/contacts
   - Navigate to /dashboard/new-members
   - Should not prompt for password again

3. **Session Expiry**
   - Authenticate successfully
   - Close browser tab
   - Open new tab and navigate to /dashboard
   - Should prompt for password again

4. **Mobile Responsiveness**
   - Test modal on mobile devices
   - Verify input is accessible
   - Verify button is clickable

## Security Considerations

### Current Implementation

- Password stored as constant in code
- Client-side validation only
- Session stored in sessionStorage (not localStorage)
- No encryption of stored session

### Future Improvements

1. Move password to environment variable
2. Implement server-side authentication
3. Add JWT tokens for session management
4. Implement rate limiting for password attempts
5. Add password hashing
6. Add multi-factor authentication

### Known Limitations

- Client-side only protection (can be bypassed by tech-savvy users)
- Password visible in source code
- No audit logging of access attempts
- No password expiry mechanism

**Recommendation:** This implementation provides basic protection suitable for internal use. For production environments with sensitive data, implement proper server-side authentication with JWT tokens and secure session management.

## Implementation Notes

### Browser Compatibility

- sessionStorage: Supported in all modern browsers
- React hooks: Requires React 16.8+
- CSS: Uses Tailwind CSS classes (already in project)

### Performance

- Minimal performance impact
- Authentication check runs once on mount
- No API calls required
- Modal renders conditionally

### Accessibility

- Modal should trap focus
- Input should have proper labels
- Error messages should be announced to screen readers
- Keyboard navigation should work (Enter to submit)
