import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary-900 text-cream-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">OT</span>
              </div>
              <span className="text-2xl font-bold text-cream-100">OpenTokyo</span>
            </div>
            <p className="text-cream-200 mb-4 leading-relaxed">
              Building the future of technology and engineering in Tokyo. Join our community of innovators, 
              creators, and changemakers who are shaping tomorrow's digital landscape.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/opentokyo" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/opentokyo" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/opentokyo" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@opentokyo.org"
                className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Community</h3>
            <ul className="space-y-2">
              <li><a href="/news" className="text-cream-200 hover:text-cream-100 transition-colors">Latest News</a></li>
              <li><a href="/community" className="text-cream-200 hover:text-cream-100 transition-colors">Forum</a></li>
              <li><a href="/events" className="text-cream-200 hover:text-cream-100 transition-colors">Events</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">Projects</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">Contributors</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">Blog</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-cream-100">Stay Updated</h3>
              <p className="text-cream-200">Get the latest news, events, and insights delivered to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 bg-primary-700 text-cream-100 rounded-lg border border-primary-600 focus:border-primary-400 focus:outline-none flex-1 md:w-64 placeholder-cream-300"
              />
              <button className="px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-cream-300">
              <span>© {new Date().getFullYear()} OpenTokyo. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline-flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-accent-400" fill="currentColor" /> in Tokyo
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">Privacy Policy</a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">Terms of Service</a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
