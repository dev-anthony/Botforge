# Authentication System Documentation

## Overview

The authentication system provides a complete flow for user signup, signin, and email verification. It includes reusable state management and a flexible verification modal component.

## Components & Files

### 1. **AuthContext** (`src/context/AuthContext.tsx`)
The main state management for authentication using React Context and `useReducer`.

**Features:**
- Manages user state, authentication status, and loading states
- Handles signup, signin, email verification, and signout
- Provides error handling with `error` state
- Tracks authentication steps (signup, signin, verification, idle)

**Available Methods:**
- `signUp(data: SignUpData)` - Register a new user
- `signIn(data: SignInData)` - Sign in an existing user
- `verifyEmail(data: VerificationData)` - Verify email with a code
- `signOut()` - Sign out the current user
- `clearError()` - Clear error messages
- `setAuthStep(step)` - Manually set the auth flow step

### 2. **VerificationModal** (`src/components/VerificationModal.tsx`)
A highly reusable modal component for email verification with a 6-digit code input.

**Features:**
- Automatic digit input with auto-focus to next field
- Keyboard navigation (Arrow keys, Backspace)
- Paste support for full code
- Customizable purpose text (signup, password-reset, email-change)
- Resend code with 60-second cooldown timer
- Error states with visual feedback
- Loading states during verification
- Responsive design with Tailwind CSS

**Usage:**
```tsx
<VerificationModal
  isOpen={showModal}
  email="user@example.com"
  purpose="signup"  // or 'password-reset' | 'email-change'
  onClose={() => setShowModal(false)}
  onVerify={async (code) => {
    // Handle verification
  }}
  isLoading={isLoading}
  error={error}
/>
```

### 3. **useAuth Hook** (`src/hooks/useAuth.ts`)
Custom hook to access authentication context anywhere in the app.

**Usage:**
```tsx
const { user, isAuthenticated, signUp, signIn, signOut, error } = useAuth();
```

### 4. **Auth Types** (`src/types/auth.ts`)
TypeScript interfaces for type-safe authentication:
- `SignUpData` - Signup form data
- `SignInData` - Signin form data
- `VerificationData` - Email verification data
- `User` - User object
- `AuthState` - Overall auth state
- `VerificationState` - Verification modal state

### 5. **SignUpPage** (`src/pages/authentication/SignUpPage.tsx`)
Complete signup flow with form and integrated verification modal.

### 6. **SignInPage** (`src/pages/authentication/SignInPage.tsx`)
Complete signin flow with form validation.

## How to Use

### Basic Setup
The `AuthProvider` is already wrapped around your app in `App.tsx`. Routes for `/signup` and `/signin` are configured.

### In Components
```tsx
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, isAuthenticated, signOut } = useAuth();

  if (!isAuthenticated) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      Welcome, {user?.fullName}!
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### Using the Verification Modal Independently
```tsx
import { useState } from 'react';
import { VerificationModal } from '@/components/VerificationModal';

function MyComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleVerify = async (code: string) => {
    // Verify code here
    console.log('Code:', code);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Verify Email</button>
      
      <VerificationModal
        isOpen={showModal}
        email="user@example.com"
        purpose="email-change"
        onClose={() => setShowModal(false)}
        onVerify={handleVerify}
      />
    </>
  );
}
```

## Backend Integration

The `AuthContext` has TODO comments where you need to integrate your backend APIs:

### 1. **Signup API** - Update `signUp` method
```tsx
const response = await fetch('/api/auth/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### 2. **Signin API** - Update `signIn` method
```tsx
const response = await fetch('/api/auth/signin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### 3. **Email Verification API** - Update `verifyEmail` method
```tsx
const response = await fetch('/api/auth/verify-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

### 4. **Resend Code API** - In `VerificationModal`
Update the `handleResendCode` function to call your backend.

## Flow Overview

### Signup Flow
1. User fills signup form (name, email, password)
2. Submit → `signUp()` called
3. If successful → Verification modal opens
4. User enters 6-digit code from email
5. Submit → `verifyEmail()` called
6. If verified → Navigate to dashboard, user is authenticated

### Signin Flow
1. User fills signin form (email, password)
2. Submit → `signIn()` called
3. If successful → Navigate to dashboard, user is authenticated

## Verification Modal Features

### Input Handling
- **Single digit inputs**: Automatically moves to next field
- **Paste**: Full 6-digit code can be pasted
- **Backspace**: Deletes current digit or previous
- **Arrow keys**: Navigate between input fields
- **Validation**: Only numeric input allowed

### Timer
- 60-second cooldown after code is sent
- "Resend Code" button disabled during cooldown
- Timer counts down with visual feedback

### Error States
- Validation errors (incomplete code)
- Server errors from `onVerify` callback
- Visual feedback with red border and error text

## Customization

### Change Verification Code Length
In `VerificationModal.tsx`, update:
```tsx
const VERIFICATION_CODE_LENGTH = 6; // Change to desired length
```

### Customize Styling
All components use Tailwind CSS. Modify classes as needed:
- Change colors: Update `bg-blue-600` → your color
- Adjust spacing: Modify `p-8`, `mb-6`, etc.
- Responsive: Classes like `max-w-md` control sizes

### Customize Modal Purpose Text
The modal automatically generates text based on the `purpose` prop:
- `"signup"` → "verify your email to complete registration"
- `"password-reset"` → "verify your email to reset your password"
- `"email-change"` → "verify your new email address"

Update in `getPurposeText()` function to customize.

## Security Notes

⚠️ **Important**:
1. Always validate inputs on the backend
2. Use HTTPS for all auth requests
3. Store tokens securely (HttpOnly cookies recommended)
4. Implement CSRF protection
5. Rate limit verification attempts
6. Hash passwords on backend
7. Use JWT or similar for session management

## Routes

- `GET /` - Landing page
- `GET /signup` - Signup page
- `GET /signin` - Signin page
- `GET /dashboard` - (To be created) Protected user dashboard

## Next Steps

1. Connect backend APIs in `AuthContext`
2. Add password reset flow (reuse VerificationModal)
3. Add protected routes/middleware
4. Add session persistence (localStorage/cookies)
5. Add social authentication (Google, GitHub, etc.)
6. Add two-factor authentication
