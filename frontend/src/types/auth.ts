export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface VerificationData {
  email: string;
  code: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  isVerified: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  authStep: 'signin' | 'signup' | 'verification' | 'idle';
}

export interface VerificationState {
  isOpen: boolean;
  email: string;
  purpose: 'signup' | 'password-reset' | 'email-change';
  onSuccess: (() => void) | null;
}
