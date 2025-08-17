import Head from 'next/head';
import Link from 'next/link';
import { LucideRocket, ArrowRight, Users, Calendar, Newspaper, Globe, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>BuildLocal - Tech News, Community & Events</title>
        <meta name="description" content="BuildLocal: Platform for news, community, and local events in technology and engineering." />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <LucideRocket className="w-12 h-12 lg:w-16 lg:h-16 text-primary-500" />
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-800 dark:text-cream-100">BuildLocal</h1>
            </div>
            <p className="text-lg lg:text-xl text-primary-700 dark:text-cream-200 mb-8 leading-relaxed">
              Connect, learn, and grow with your local tech community. Discover events, share knowledge, and stay updated with the latest technology news.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/events" className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium">
                <Calendar className="w-5 h-5 mr-2" />
                Explore Events
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/community" className="inline-flex items-center px-6 py-3 bg-beige-200 dark:bg-gray-700 text-primary-800 dark:text-cream-100 rounded-lg hover:bg-beige-300 dark:hover:bg-gray-600 transition-colors font-medium">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Link>
              <Link href="/news" className="inline-flex items-center px-6 py-3 border border-primary-300 dark:border-gray-600 text-primary-700 dark:text-cream-200 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors font-medium">
                <Newspaper className="w-5 h-5 mr-2" />
                Read News
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 dark:text-cream-100 mb-4">
              Everything you need to build locally
            </h2>
            <p className="text-lg text-primary-600 dark:text-cream-300 max-w-2xl mx-auto">
              Discover opportunities, connect with like-minded developers, and stay ahead in the tech world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-cream-100 dark:bg-gray-800 p-8 rounded-xl border border-beige-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Local Events</h3>
              <p className="text-primary-600 dark:text-cream-300 mb-4">
                Discover workshops, meetups, and conferences happening in your area. Network with fellow developers and learn new skills.
              </p>
              <Link href="/events" className="text-primary-500 hover:text-primary-400 font-medium inline-flex items-center">
                Explore events <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-cream-100 dark:bg-gray-800 p-8 rounded-xl border border-beige-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Tech Community</h3>
              <p className="text-primary-600 dark:text-cream-300 mb-4">
                Connect with developers, designers, and tech enthusiasts. Share projects, ask questions, and collaborate on ideas.
              </p>
              <Link href="/community" className="text-primary-500 hover:text-primary-400 font-medium inline-flex items-center">
                Join community <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-cream-100 dark:bg-gray-800 p-8 rounded-xl border border-beige-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <Newspaper className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Tech News</h3>
              <p className="text-primary-600 dark:text-cream-300 mb-4">
                Stay updated with the latest technology trends, framework releases, and industry insights curated for local developers.
              </p>
              <Link href="/news" className="text-primary-500 hover:text-primary-400 font-medium inline-flex items-center">
                Read news <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-cream-100 dark:bg-gray-800 p-8 rounded-xl border border-beige-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Global Reach</h3>
              <p className="text-primary-600 dark:text-cream-300 mb-4">
                While focused on local communities, connect with developers worldwide and share knowledge across borders.
              </p>
            </div>

            <div className="bg-cream-100 dark:bg-gray-800 p-8 rounded-xl border border-beige-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Fast & Modern</h3>
              <p className="text-primary-600 dark:text-cream-300 mb-4">
                Built with Next.js and modern web technologies for a lightning-fast experience across all devices.
              </p>
            </div>

            <div className="bg-cream-100 dark:bg-gray-800 p-8 rounded-xl border border-beige-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3">Open Source</h3>
              <p className="text-primary-600 dark:text-cream-300 mb-4">
                Transparent, community-driven development. Contribute to the platform and help shape the future of local tech communities.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-500 dark:bg-primary-600">
          <div className="container mx-auto px-4 py-16 lg:py-20">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to build with your local community?</h2>
              <p className="text-xl mb-8 text-primary-100">
                Join thousands of developers, designers, and tech enthusiasts already building amazing things together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup" className="inline-flex items-center px-8 py-3 bg-white text-primary-500 rounded-lg hover:bg-cream-100 transition-colors font-medium">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/events" className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-500 transition-colors font-medium">
                  Explore Events
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
