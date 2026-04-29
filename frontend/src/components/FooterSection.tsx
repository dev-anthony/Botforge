export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--color-cyan-400-20)] py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <h3 className="text-xl font-bold text-white">
          Bot<span className="text-[var(--color-cyan-400)]">Forge</span>
        </h3>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-[var(--color-gray-400)]">
          © {currentYear} BotForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}