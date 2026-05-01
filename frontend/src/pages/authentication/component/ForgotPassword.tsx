// ForgotPassword.tsx
import React, { useState } from 'react'
import SpaceLayout from '../../../components/SpaceLayout'
import { ArrowLeft } from 'lucide-react'
import { useAuth } from '../../../hooks/useAuth'
import type { ForgotPasswordData, ChangePasswordData } from '../../../types/auth'

interface ForgotPasswordProps {
  onBack?: () => void;
}

function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const { forgotPassword, changePassword, isLoading, error } = useAuth()

  const [step, setStep] = useState<'email' | 'reset'>('email')
  const [emailData, setEmailData] = useState<ForgotPasswordData>({ email: '' })
  const [passwordData, setPasswordData] = useState<ChangePasswordData>({ password: '' })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmError, setConfirmError] = useState('')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await forgotPassword(emailData)
      setStep('reset')
    } catch (err) {
      console.error('Forgot password error:', err)
    }
  }

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordData.password !== confirmPassword) {
      setConfirmError('Passwords do not match')
      return
    }
    setConfirmError('')
    try {
      await changePassword(passwordData)
      onBack?.() // ✅ go back to sign-in state instead of navigating
    } catch (err) {
      console.error('Change password error:', err)
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmailData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  const inputClass =
    'w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-[var(--color-gray-500)] border border-[var(--color-cyan-400-20)] focus:outline-none focus:border-[var(--color-cyan-400-50)] transition-colors'
  const inputStyle = { background: 'rgba(34,211,238,0.05)' }

  return (
    <SpaceLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <button
          type="button"
          onClick={onBack}
          className="absolute top-5 left-5"
        >
          <ArrowLeft className="text-[var(--color-cyan-400)] w-4 h-4" />
        </button>

        <div className="w-full max-w-md p-4">
          {/* Logo */}
          <div className="mb-4">
            <div className="flex items-center justify-center">
              <img src="/botforge_logo_clean.svg" alt="" className="w-40" />
            </div>
            <h1 className="text-xl font-semibold text-white mt-2 text-center mb-1 leading-relaxed">
              {step === 'email' ? 'Forgot Password' : 'Reset Password'}
            </h1>
            <p className="text-sm text-[var(--color-gray-400)] text-center leading-relaxed">
              {step === 'email'
                ? 'Enter your email to receive a reset link'
                : 'Enter your new password below'}
            </p>
          </div>

          {error && (
            <div className="mb-5 p-3 rounded-lg border border-red-500/30 bg-red-500/10">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {step === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--color-gray-400)] mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={emailData.email}
                  onChange={handleEmailChange}
                  placeholder="you@example.com"
                  required
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-2.5 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(to right, var(--color-cyan-400), var(--color-cyan-500))' }}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[var(--color-gray-400)] mb-1.5"
                >
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={passwordData.password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  required
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-[var(--color-gray-400)] mb-1.5"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if (confirmError) setConfirmError('')
                  }}
                  placeholder="••••••••"
                  required
                  className={`${inputClass} ${confirmError ? 'border-red-500/60' : ''}`}
                  style={inputStyle}
                />
                {confirmError && (
                  <p className="text-red-400 text-xs mt-1.5">{confirmError}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-2.5 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(to right, var(--color-cyan-400), var(--color-cyan-500))' }}
              >
                {isLoading ? 'Updating...' : 'Reset Password'}
              </button>
            </form>
          )}
        </div>
      </div>
    </SpaceLayout>
  )
}

export default ForgotPassword