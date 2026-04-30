import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import type { SignInData } from '../../types/auth';
import SpaceLayout from '../../components/SpaceLayout';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function SignInPage() {
  const navigate = useNavigate();
  const { signIn, isLoading, error } = useAuth();
  const [formData, setFormData] = useState<SignInData>({ email: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(formData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Sign in error:', err);
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
          className="w-full max-w-md  p-4"
         
        >
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center">
          <img src="/botforge_logo_clean.svg" alt="" className="w-40" />
        </div>
            <h1 className="text-xl font-semibold text-white mt-2 mb-1 leading-relaxed">Welcome Back</h1>
            <p className="text-sm text-[var(--color-gray-400)] leading-relaxed">Sign in to your account</p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 p-3 rounded-lg border border-red-500/30 bg-red-500/10">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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

            {/* Remember me / Forgot */}
            <div className="flex items-center justify-between text-sm pt-1">
              <label className="flex items-center gap-2 text-[var(--color-gray-400)] cursor-pointer">
                <input type="checkbox" className="rounded accent-[var(--color-cyan-400)]" />
                Remember me
              </label>
              <a href="/forgot-password" className="text-[var(--color-cyan-400)] hover:opacity-80 font-medium transition-opacity">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-2.5 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: `linear-gradient(to right, var(--color-cyan-400), var(--color-cyan-500))` }}
            >
              {isLoading ? 'Signing In…' : 'Sign In'}
            </button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-[var(--color-gray-400)]">
            Don't have an account?{' '}
            <a href="/signup" className="text-[var(--color-cyan-400)] hover:opacity-80 font-semibold transition-opacity">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </SpaceLayout>
  );
}