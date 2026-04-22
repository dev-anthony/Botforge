import React, { useState, useRef, useEffect } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  hasOverflow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  onClick,
  className = '',
  hasOverflow = false,
}) => {
  const [showViewMore, setShowViewMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && hasOverflow) {
      const isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setShowViewMore(isOverflowing);
    }
  }, [hasOverflow]);

  return (
    <div
      className={`
        relative group cursor-pointer
        bg-white/30 backdrop-blur-md
        border border-white/40
        rounded-2xl
        p-6 md:p-8
        hover:bg-white/40 hover:border-white/60
        transition-all duration-300
        overflow-hidden
        ${className}
      `}
      onClick={onClick}
    >
      <div
        ref={contentRef}
        className={`
          ${hasOverflow ? 'h-64 overflow-hidden' : ''}
          transition-all duration-300
        `}
      >
        {children}
      </div>

      {showViewMore && (
        <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
          <span className="text-sm font-semibold text-purple-600 hover:text-purple-700">
            View More ↗
          </span>
          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-baby-pink to-light-blue opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
      )}

      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 50%)',
          }}
        />
      </div>
    </div>
  );
};
