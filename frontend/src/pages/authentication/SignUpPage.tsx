import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import type { SignUpData } from '../../types/auth';
import { VerificationModal } from '../../components/VerificationModal';
import SpaceLayout from '../../components/SpaceLayout';
import { ArrowLeft} from 'lucide-react';
import { Link } from 'react-router-dom';

export function SignUpPage() {
  const navigate = useNavigate();
  const { signUp, verifyEmail, isLoading, error } = useAuth();
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');
  const [verificationError, setVerificationError] = useState<string | null>(null);

  const [formData, setFormData] = useState<SignUpData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(formData);
      setVerificationEmail(formData.email);
      setShowVerificationModal(true);
    } catch (err) {
      console.error('Sign up error:', err);
    }
  };

  const handleVerify = async (code: string) => {
    try {
      setVerificationError(null);
      await verifyEmail({ email: verificationEmail, code });
      navigate('/dashboard');
    } catch (err) {
      setVerificationError(err instanceof Error ? err.message : 'Verification failed');
    }
  };

  return (
    <SpaceLayout>
      <div className="min-h-screen flex items-center justify-center px-4 ">
        <Link 
         to="/" 
        className='absolute top-5 left-5'>
          <ArrowLeft className="text-[var(--color-cyan-400)] w-4 h-4"/>
        </Link>

        <div
          className="w-full max-w-md p-4"
          
        >
          {/* Logo */}
          <div className="mb-4 ">
           <div className="flex items-center justify-center">
          <img src="/botforge_logo_clean.svg" alt="" className="w-40" />
        </div>
            <h1 className="text-xl font-semibold text-white mt-2 text-center mb-1 leading-relaxed">Create Account</h1>
            <p className="text-sm text-[var(--color-gray-400)] text-center leading-relaxed">Join us to get started</p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 p-3 rounded-lg border border-red-500/30 bg-red-500/10">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[var(--color-gray-400)] mb-1.5">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-[var(--color-gray-500)] border border-[var(--color-cyan-400-20)] focus:outline-none focus:border-[var(--color-cyan-400-50)] transition-colors"
                style={{ background: 'rgba(34,211,238,0.05)' }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-gray-400)] mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-[var(--color-gray-500)] border border-[var(--color-cyan-400-20)] focus:outline-none focus:border-[var(--color-cyan-400-50)] transition-colors"
                style={{ background: 'rgba(34,211,238,0.05)' }}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--color-gray-400)] mb-1.5">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-[var(--color-gray-500)] border border-[var(--color-cyan-400-20)] focus:outline-none focus:border-[var(--color-cyan-400-50)] transition-colors"
                style={{ background: 'rgba(34,211,238,0.05)' }}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--color-gray-400)] mb-1.5">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-[var(--color-gray-500)] border border-[var(--color-cyan-400-20)] focus:outline-none focus:border-[var(--color-cyan-400-50)] transition-colors"
                style={{ background: 'rgba(34,211,238,0.05)' }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-2.5 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: `linear-gradient(to right, var(--color-cyan-400), var(--color-cyan-500))` }}
            >
              {isLoading ? 'Creating Account…' : 'Sign Up'}
            </button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-[var(--color-gray-400)]">
            Already have an account?{' '}
            <Link to="/signin" className="text-[var(--color-cyan-400)] hover:opacity-80 font-semibold transition-opacity">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <VerificationModal
        isOpen={showVerificationModal}
        email={verificationEmail}
        purpose="signup"
        onClose={() => setShowVerificationModal(false)}
        onVerify={handleVerify}
        isLoading={isLoading}
        error={verificationError}
      />
    </SpaceLayout>
  );
}