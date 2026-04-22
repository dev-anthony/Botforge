import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Semi-transparent overlay showing bento grid in background */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Modal content */}
      <div className="relative flex items-center justify-center min-h-screen p-4 pointer-events-none">
        <div
          className="pointer-events-auto bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-white/80 backdrop-blur-sm z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal body with scroll animation */}
          <div className="p-6 space-y-6 animate-slide-up">{children}</div>
        </div>
      </div>
    </div>
  );
};
