import Link from 'next/link';
import { useRouter } from 'next/router';

import { LucideRocket, Sun, Moon, User, LogIn } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/community', label: 'Community' },
  { href: '/events', label: 'Events' },
];

export function Navbar() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={`w-full border-b shadow-sm ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-cream-100 border-beige-200'}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center space-x-2">
          <LucideRocket className="w-6 h-6 text-primary-500" />
          <span className={`font-bold text-xl ${theme === 'dark' ? 'text-cream-100' : 'text-primary-800'}`}>OpenTokyo</span>
        </div>
        <div className="flex items-center space-x-4">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} legacyBehavior>
              <a className={`px-3 py-2 rounded transition-colors font-medium ${router.pathname === link.href ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/30' : theme === 'dark' ? 'text-cream-200 hover:bg-gray-800 hover:text-cream-100' : 'text-primary-700 hover:bg-beige-100 hover:text-primary-800'}`}>
                {link.label}
              </a>
            </Link>
          ))}
          
          {/* Authentication Links */}
          <div className="flex items-center space-x-2 ml-4">
            <Link href="/auth/login" legacyBehavior>
              <a className={`inline-flex items-center px-3 py-2 rounded-lg font-medium transition-colors ${theme === 'dark' ? 'text-cream-200 hover:bg-gray-800 hover:text-cream-100' : 'text-primary-700 hover:bg-beige-100 hover:text-primary-800'}`}>
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </a>
            </Link>
            <Link href="/auth/signup" legacyBehavior>
              <a className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${theme === 'dark' ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-primary-500 text-white hover:bg-primary-600'}`}>
                <User className="w-4 h-4 mr-2" />
                Sign Up
              </a>
            </Link>
          </div>
          
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-full border transition-colors ${theme === 'dark' ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' : 'border-beige-300 bg-cream-50 hover:bg-beige-200'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-cream-300" /> : <Moon className="w-5 h-5 text-primary-700" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
