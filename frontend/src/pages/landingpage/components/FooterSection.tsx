export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--color-cyan-400-20)] px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex">
         <img src="/botforge_logo_clean.svg" alt="" className="w-50" />
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-[var(--color-gray-400)]">
          © {currentYear} BotForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}