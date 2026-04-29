
import { useEffect } from 'react';
import { Mail} from 'lucide-react';
import AOS from 'aos';

export default function FooterSection() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[var(--color-bg-primary)] border-t border-[var(--color-cyan-400-20)] pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Footer Content */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
        >
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Bot<span className="text-[var(--color-cyan-400)]">Forge</span>
            </h3>
            <p className="text-sm sm:text-base text-[var(--color-gray-400)] leading-relaxed">
              Automate your customer support with intelligent AI-powered messaging bots.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Email"
                className="p-2 rounded-full bg-[var(--color-cyan-400-10)] text-[var(--color-cyan-400)] hover:bg-[var(--color-cyan-400-20)] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-[var(--color-cyan-400-10)] text-[var(--color-cyan-400)] hover:bg-[var(--color-cyan-400-20)] transition-colors"
              >
              
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-[var(--color-cyan-400-10)] text-[var(--color-cyan-400)] hover:bg-[var(--color-cyan-400-20)] transition-colors"
              >
            
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-full bg-[var(--color-cyan-400-10)] text-[var(--color-cyan-400)] hover:bg-[var(--color-cyan-400-20)] transition-colors"
              >
              
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-sm sm:text-base text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-cyan-400-20)]"></div>

        {/* Bottom Footer */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
        >
          <p className="text-xs sm:text-sm text-[var(--color-gray-400)]">
            © {currentYear} BotForge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs sm:text-sm text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
              Sitemap
            </a>
            <a href="#" className="text-xs sm:text-sm text-[var(--color-gray-400)] hover:text-[var(--color-cyan-400)] transition-colors">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}