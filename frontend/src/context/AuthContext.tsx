import { createContext, useReducer, useCallback, type ReactNode } from 'react';
import type { AuthState, User, SignUpData, SignInData, VerificationData } from '../types/auth';

interface AuthContextType extends AuthState {
  signUp: (data: SignUpData) => Promise<void>;
  signIn: (data: SignInData) => Promise<void>;
  verifyEmail: (data: VerificationData) => Promise<void>;
  signOut: () => void;
  clearError: () => void;
  setAuthStep: (step: AuthState['authStep']) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_AUTH_STEP'; payload: AuthState['authStep'] }
  | { type: 'SIGN_OUT' };

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  authStep: 'idle',
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: action.payload !== null,
      };
    case 'SET_AUTH_STEP':
      return { ...state, authStep: action.payload };
    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        authStep: 'idle',
        error: null,
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const clearError = useCallback(() => {
    dispatch({ type: 'SET_ERROR', payload: null });
  }, []);

  const setAuthStep = useCallback((step: AuthState['authStep']) => {
    dispatch({ type: 'SET_AUTH_STEP', payload: step });
  }, []);

  const signUp = useCallback(async (data: SignUpData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });

      // Validate passwords match
      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // TODO: Call your backend API
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   const error = await response.json();
      //   throw new Error(error.message || 'Sign up failed');
      // }

      // For now, simulate success and move to verification step
      dispatch({ type: 'SET_AUTH_STEP', payload: 'verification' });
      
      console.log('Sign up data:', data);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Sign up failed';
      dispatch({ type: 'SET_ERROR', payload: message });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const signIn = useCallback(async (data: SignInData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });

      // TODO: Call your backend API
      // const response = await fetch('/api/auth/signin', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   const error = await response.json();
      //   throw new Error(error.message || 'Sign in failed');
      // }

      // const { user, token } = await response.json();
      // localStorage.setItem('authToken', token);
      // dispatch({ type: 'SET_USER', payload: user });
      // dispatch({ type: 'SET_AUTH_STEP', payload: 'idle' });

      console.log('Sign in data:', data);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Sign in failed';
      dispatch({ type: 'SET_ERROR', payload: message });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const verifyEmail = useCallback(async (data: VerificationData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });

      // TODO: Call your backend API
      // const response = await fetch('/api/auth/verify-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   const error = await response.json();
      //   throw new Error(error.message || 'Verification failed');
      // }

      // const { user, token } = await response.json();
      // localStorage.setItem('authToken', token);
      // dispatch({ type: 'SET_USER', payload: user });
      // dispatch({ type: 'SET_AUTH_STEP', payload: 'idle' });

      console.log('Verify email data:', data);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Verification failed';
      dispatch({ type: 'SET_ERROR', payload: message });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  const signOut = useCallback(() => {
    // TODO: Call your backend API to invalidate token
    // localStorage.removeItem('authToken');
    dispatch({ type: 'SIGN_OUT' });
  }, []);

  const value: AuthContextType = {
    ...state,
    signUp,
    signIn,
    verifyEmail,
    signOut,
    clearError,
    setAuthStep,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
