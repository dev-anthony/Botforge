import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export interface VerificationModalConfig {
  isOpen: boolean;
  email: string;
  purpose: 'signup' | 'password-reset' | 'email-change';
  onClose: () => void;
  onVerify: (code: string) => Promise<void>;
  isLoading?: boolean;
  error?: string | null;
}

const VERIFICATION_CODE_LENGTH = 6;

export function VerificationModal({
  isOpen,
  email,
  purpose,
  onClose,
  onVerify,
  isLoading = false,
  error = null,
}: VerificationModalConfig) {
  const [code, setCode] = useState<string[]>(Array(VERIFICATION_CODE_LENGTH).fill(''));
  const [internalError, setInternalError] = useState<string | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setInternalError(null);
    if (value && index < VERIFICATION_CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newCode = [...code];
      if (code[index]) {
        newCode[index] = '';
        setCode(newCode);
      } else if (index > 0) {
        newCode[index - 1] = '';
        setCode(newCode);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < VERIFICATION_CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '');
    if (pastedData.length >= VERIFICATION_CODE_LENGTH) {
      const newCode = pastedData.slice(0, VERIFICATION_CODE_LENGTH).split('');
      setCode(newCode);
      inputRefs.current[VERIFICATION_CODE_LENGTH - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length !== VERIFICATION_CODE_LENGTH) {
      setInternalError(`Please enter a ${VERIFICATION_CODE_LENGTH}-digit code`);
      return;
    }
    try {
      await onVerify(fullCode);
      setCode(Array(VERIFICATION_CODE_LENGTH).fill(''));
      setInternalError(null);
    } catch (err) {
      setInternalError(err instanceof Error ? err.message : 'Verification failed');
    }
  };

  const handleResendCode = () => {
    setResendTimer(60);
    setCode(Array(VERIFICATION_CODE_LENGTH).fill(''));
    setInternalError(null);
    console.log('Resending code to:', email);
  };

  if (!isOpen) return null;

  const getPurposeText = () => {
    switch (purpose) {
      case 'signup':        return 'verify your email to complete registration';
      case 'password-reset': return 'verify your email to reset your password';
      case 'email-change':  return 'verify your new email address';
      default:              return 'verify your email';
    }
  };

  const displayError = error || internalError;

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(5,14,26,0.85)', backdropFilter: 'blur(6px)' }}
    >
      {/* ── Card ── */}
      <div
        className="w-full max-w-md rounded-2xl border border-[var(--color-cyan-400-20)] p-8"
        style={{ background: 'rgba(5,14,26,0.9)', backdropFilter: 'blur(20px)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Verify Email</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full text-[var(--color-gray-400)] hover:text-white hover:bg-[var(--color-cyan-400-10)] transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-sm text-[var(--color-gray-400)]">We sent a verification code to</p>
          <p className="font-semibold text-[var(--color-cyan-400)] break-all mt-0.5">{email}</p>
          <p className="text-sm text-[var(--color-gray-400)] mt-2">
            Please enter the code below to {getPurposeText()}.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* OTP boxes */}
          <div className="flex gap-2 justify-center">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { if (el) inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                disabled={isLoading}
                className="w-11 h-12 text-center text-xl font-bold rounded-lg border-2 text-white outline-none transition-all duration-200 disabled:opacity-50"
                style={{
                  background: 'rgba(34,211,238,0.05)',
                  borderColor: displayError
                    ? 'rgba(239,68,68,0.6)'
                    : digit
                    ? 'var(--color-cyan-400)'
                    : 'var(--color-cyan-400-20)',
                }}
              />
            ))}
          </div>

          {/* Error */}
          {displayError && (
            <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10">
              <p className="text-red-400 text-sm">{displayError}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading || code.join('').length !== VERIFICATION_CODE_LENGTH}
            className="w-full py-2.5 rounded-full font-semibold text-sm text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: 'linear-gradient(to right, var(--color-cyan-400), var(--color-cyan-500))' }}
          >
            {isLoading ? 'Verifying…' : 'Verify Email'}
          </button>
        </form>

        {/* Resend */}
        <div className="mt-6 pt-5 border-t border-[var(--color-cyan-400-20)] text-center">
          <p className="text-sm text-[var(--color-gray-400)] mb-3">Didn't receive the code?</p>
          {resendTimer > 0 ? (
            <p className="text-sm text-[var(--color-gray-400)]">
              Resend code in <span className="font-semibold text-[var(--color-cyan-400)]">{resendTimer}s</span>
            </p>
          ) : (
            <button
              onClick={handleResendCode}
              disabled={isLoading}
              className="w-full py-2.5 rounded-full text-sm font-semibold text-[var(--color-cyan-400)] border border-[var(--color-cyan-400-30)] hover:bg-[var(--color-cyan-400-10)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Resend Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}