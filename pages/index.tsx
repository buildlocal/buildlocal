import Head from 'next/head';
import { LucideRocket } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenTokyo - Tech News, Community & Events</title>
        <meta name="description" content="OpenTokyo: Platform for news, community, and events in technology and engineering." />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-cream-50 dark:bg-gray-900">
        <div className="flex items-center space-x-3 mb-6">
          <LucideRocket className="w-10 h-10 text-primary-500" />
          <h1 className="text-4xl font-bold text-primary-800 dark:text-cream-100">OpenTokyo</h1>
        </div>
        <p className="text-lg text-primary-700 dark:text-cream-200 mb-4 text-center max-w-2xl">
          Platform for news, community, and events in technology and engineering.
        </p>
        <div className="flex space-x-4">
          <a href="/news" className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors">News</a>
          <a href="/community" className="px-4 py-2 bg-beige-200 text-primary-800 rounded hover:bg-beige-300 transition-colors">Community</a>
          <a href="/events" className="px-4 py-2 bg-accent-500 text-white rounded hover:bg-accent-600 transition-colors">Events</a>
        </div>
      </main>
    </>
  );
}
