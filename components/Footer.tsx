import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary-900 text-cream-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BL</span>
              </div>
              <span className="text-2xl font-bold text-cream-100">BuildLocal</span>
            </div>
            <p className="text-cream-200 mb-6 leading-relaxed max-w-md">
              Building the future of technology and engineering communities worldwide. Join our global network of innovators, 
              creators, and changemakers who are shaping tomorrow's digital landscape.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://github.com/buildlocal" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/buildlocal" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/buildlocal" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@buildlocal.org"
                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Community</h3>
            <ul className="space-y-3">
              <li><a href="/news" className="text-cream-200 hover:text-cream-100 transition-colors block">Latest News</a></li>
              <li><a href="/community" className="text-cream-200 hover:text-cream-100 transition-colors block">Forum</a></li>
              <li><a href="/events" className="text-cream-200 hover:text-cream-100 transition-colors block">Events</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors block">Projects</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors block">Contributors</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors block">Documentation</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors block">API Reference</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors block">Tutorials</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors block">Blog</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors block">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cream-100">Stay Updated</h3>
              <p className="text-cream-200">Get the latest news, events, and insights delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-primary-700 text-cream-100 rounded-lg border border-primary-600 focus:border-primary-400 focus:outline-none flex-1 lg:w-64 placeholder-cream-300"
              />
              <button className="px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-cream-300 text-center lg:text-left">
              <span>© {new Date().getFullYear()} BuildLocal. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-accent-400" fill="currentColor" /> globally
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm">
              <a href="/legal/privacy" className="text-cream-300 hover:text-cream-100 transition-colors">Privacy Policy</a>
              <a href="/legal/terms" className="text-cream-300 hover:text-cream-100 transition-colors">Terms of Service</a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
