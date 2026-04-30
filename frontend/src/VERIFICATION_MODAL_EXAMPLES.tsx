/**
 * EXAMPLE: How to use VerificationModal for different purposes
 * 
 * The VerificationModal is designed to be highly reusable.
 * Here are examples for different authentication flows.
 */

import { useState } from 'react';
import { VerificationModal } from './components/VerificationModal';
import { useAuth } from './hooks/useAuth';

/**
 * ============================================
 * EXAMPLE 1: Password Reset Flow
 * ============================================
 */
export function PasswordResetExample() {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'email' | 'verification' | 'reset' | 'success'>('email');
  const [showVerification, setShowVerification] = useState(false);
  const { isLoading } = useAuth();

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to send reset code
    setShowVerification(true);
  };

  const handleVerifyForReset = async (code: string) => {
    // Call API to verify code
    console.log('Reset code verified:', code);
    setShowVerification(false);
    setStep('reset');
  };

  return (
    <div>
      {step === 'email' && (
        <form onSubmit={handleRequestReset}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Send Reset Code</button>
        </form>
      )}

      <VerificationModal
        isOpen={showVerification}
        email={email}
        purpose="password-reset"
        onClose={() => setShowVerification(false)}
        onVerify={handleVerifyForReset}
        isLoading={isLoading}
      />

      {step === 'reset' && (
        <form onSubmit={(e) => {
          e.preventDefault();
          // Handle password reset here
          setStep('success');
        }}>
          <input type="password" placeholder="New password" required />
          <input type="password" placeholder="Confirm password" required />
          <button type="submit">Reset Password</button>
        </form>
      )}

      {step === 'success' && (
        <div className="success-message">
          Password reset successful! You can now sign in.
        </div>
      )}
    </div>
  );
}

/**
 * ============================================
 * EXAMPLE 2: Change Email Flow
 * ============================================
 */
export function ChangeEmailExample() {
  const { user } = useAuth();
  const [newEmail, setNewEmail] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleChangeEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to initiate email change
    setShowVerification(true);
  };

  const handleVerifyNewEmail = async (code: string) => {
    // Call API to verify new email
    console.log('New email verified with code:', code);
    setShowVerification(false);
    setNewEmail('');
    // Show success message
  };

  return (
    <div>
      <form onSubmit={handleChangeEmail}>
        <div>
          <label>Current Email: {user?.email}</label>
        </div>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Enter new email"
          required
        />
        <button type="submit">Change Email</button>
      </form>

      <VerificationModal
        isOpen={showVerification}
        email={newEmail}
        purpose="email-change"
        onClose={() => setShowVerification(false)}
        onVerify={handleVerifyNewEmail}
      />
    </div>
  );
}

/**
 * ============================================
 * EXAMPLE 3: Two-Factor Authentication
 * ============================================
 */
export function TwoFactorAuthExample() {
  const [email, setEmail] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Verify credentials first
    // If valid, show 2FA code verification
    setShowVerification(true);
  };

  const handleVerify2FA = async (code: string) => {
    // Verify 2FA code
    console.log('2FA code verified:', code);
    setIsVerified(true);
    setShowVerification(false);
    // Complete login
  };

  if (isVerified) {
    return <div>Login successful! Redirecting...</div>;
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>

      <VerificationModal
        isOpen={showVerification}
        email={email}
        purpose="signup" // Reuse the "signup" purpose for 2FA
        onClose={() => setShowVerification(false)}
        onVerify={handleVerify2FA}
      />
    </div>
  );
}

/**
 * ============================================
 * EXAMPLE 4: Phone Verification (reusing modal for OTP)
 * ============================================
 */
export function PhoneVerificationExample() {
  const [phone, setPhone] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleVerifyPhone = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to send OTP to phone
    setShowVerification(true);
  };

  const handleVerifyOTP = async (code: string) => {
    // Verify OTP
    console.log('OTP verified:', code);
    setShowVerification(false);
  };

  return (
    <div>
      <form onSubmit={handleVerifyPhone}>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          required
        />
        <button type="submit">Send OTP</button>
      </form>

      <VerificationModal
        isOpen={showVerification}
        email={phone} // Email prop is just for display, works with phone too
        purpose="signup"
        onClose={() => setShowVerification(false)}
        onVerify={handleVerifyOTP}
      />
    </div>
  );
}

/**
 * ============================================
 * EXAMPLE 5: Multi-Step Verification
 * ============================================
 * Verify email AND phone in sequence
 */
export function MultiStepVerificationExample() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationStep, setVerificationStep] = useState<'email' | 'phone' | 'complete' | null>(null);

  const handleStartVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    // Start with email verification
    setVerificationStep('email');
  };

  const handleEmailVerified = async (code: string) => {
    console.log('Email verified:', code);
    // Move to phone verification
    setVerificationStep('phone');
  };

  const handlePhoneVerified = async (code: string) => {
    console.log('Phone verified:', code);
    setVerificationStep('complete');
  };

  return (
    <div>
      {verificationStep === null && (
        <form onSubmit={handleStartVerification}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
          />
          <button type="submit">Start Verification</button>
        </form>
      )}

      {/* Email Verification Modal */}
      <VerificationModal
        isOpen={verificationStep === 'email'}
        email={email}
        purpose="signup"
        onClose={() => setVerificationStep(null)}
        onVerify={handleEmailVerified}
      />

      {/* Phone Verification Modal */}
      <VerificationModal
        isOpen={verificationStep === 'phone'}
        email={phone}
        purpose="signup"
        onClose={() => setVerificationStep(null)}
        onVerify={handlePhoneVerified}
      />

      {verificationStep === 'complete' && (
        <div className="success-message">
          ✓ Email verified
          <br />
          ✓ Phone verified
          <br />
          All verification steps completed!
        </div>
      )}
    </div>
  );
}

/**
 * ============================================
 * Key Takeaways: Why This Modal is Highly Reusable
 * ============================================
 * 
 * 1. **Generic Props**: Takes email, purpose, and onVerify callback
 * 2. **Purpose Driven**: Automatically generates appropriate text
 * 3. **Flexible**: Can be reused for any 6-digit code scenario
 * 4. **Customizable**: Error states, loading states, and callbacks
 * 5. **Composable**: Can be stacked for multi-step flows
 * 6. **UX Optimized**: Built-in keyboard nav, paste, auto-focus, timer
 * 
 * You can use this modal for:
 * - Email verification during signup
 * - Email verification for password reset
 * - Email verification for email change
 * - OTP/2FA verification
 * - Phone verification
 * - Any other 6-digit code verification flow
 * 
 * To extend for other code lengths, just change:
 * const VERIFICATION_CODE_LENGTH = 6; // -> change to 4, 8, etc.
 */
