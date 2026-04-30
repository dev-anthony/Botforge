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

  // Timer for resend button
  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleInputChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setInternalError(null);

    // Auto-focus next input
    if (value && index < VERIFICATION_CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
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
      // Reset form on success
      setCode(Array(VERIFICATION_CODE_LENGTH).fill(''));
      setInternalError(null);
    } catch (err) {
      setInternalError(err instanceof Error ? err.message : 'Verification failed');
    }
  };

  const handleResendCode = () => {
    // TODO: Implement resend logic
    setResendTimer(60);
    setCode(Array(VERIFICATION_CODE_LENGTH).fill(''));
    setInternalError(null);
    console.log('Resending code to:', email);
  };

  if (!isOpen) return null;

  const getPurposeText = () => {
    switch (purpose) {
      case 'signup':
        return 'verify your email to complete registration';
      case 'password-reset':
        return 'verify your email to reset your password';
      case 'email-change':
        return 'verify your new email address';
      default:
        return 'verify your email';
    }
  };

  const displayError = error || internalError;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Verify Email</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm">
            We sent a verification code to
          </p>
          <p className="font-semibold text-gray-900 break-all">{email}</p>
          <p className="text-gray-600 text-sm mt-2">
            Please enter the code below to {getPurposeText()}.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Code Input Boxes */}
          <div className="flex gap-2 justify-center mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                className={`w-12 h-12 text-center text-2xl font-bold rounded-lg border-2 transition-all ${
                  displayError
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 bg-white hover:border-gray-400 focus:border-blue-500 focus:outline-none'
                }`}
                disabled={isLoading}
              />
            ))}
          </div>

          {/* Error Message */}
          {displayError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{displayError}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || code.join('').length !== VERIFICATION_CODE_LENGTH}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>

        {/* Resend Code Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center mb-3">
            Didn't receive the code?
          </p>
          {resendTimer > 0 ? (
            <p className="text-center text-gray-500 text-sm">
              Resend code in <span className="font-semibold">{resendTimer}s</span>
            </p>
          ) : (
            <button
              onClick={handleResendCode}
              disabled={isLoading}
              className="w-full text-blue-600 hover:text-blue-700 disabled:text-gray-400 font-semibold py-2 px-4 rounded-lg transition-colors border border-blue-600 hover:border-blue-700 disabled:border-gray-400"
            >
              Resend Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
