import * as React from 'react';
import Head from 'next/head';

const News: React.FC = () => {
  return (
    <>
      <Head>
        <title>News | BuildLocal</title>
      </Head>
      <main className="container mx-auto py-10 bg-cream-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-primary-800 dark:text-cream-100">
          <span>Latest News</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample News Card 1 */}
          <div className="bg-cream-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-3 border border-beige-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400">AI Revolutionizes Software Engineering</h2>
            <p className="text-primary-700 dark:text-cream-300">Discover how artificial intelligence is transforming the way developers build, test, and deploy applications in 2025.</p>
            <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-cream-400">
              <span>August 10, 2025</span>
              <span>•</span>
              <span>By Jane Doe</span>
            </div>
            <a href="#" className="mt-2 text-primary-600 dark:text-primary-400 hover:underline font-medium">Read more →</a>
          </div>
          {/* Sample News Card 2 */}
          <div className="bg-cream-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-3 border border-beige-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold text-beige-700 dark:text-beige-400">Quantum Computing: The Next Leap</h2>
            <p className="text-primary-700 dark:text-cream-300">Quantum computers are no longer science fiction. Explore the latest breakthroughs and what they mean for the tech industry.</p>
            <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-cream-400">
              <span>August 8, 2025</span>
              <span>•</span>
              <span>By John Smith</span>
            </div>
            <a href="#" className="mt-2 text-beige-600 dark:text-beige-400 hover:underline font-medium">Read more →</a>
          </div>
          {/* Sample News Card 3 */}
          <div className="bg-cream-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col gap-3 border border-beige-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold text-accent-600 dark:text-accent-400">Open Source in 2025: Trends & Insights</h2>
            <p className="text-primary-700 dark:text-cream-300">Open source is thriving! See which projects are leading the way and how you can get involved in the community.</p>
            <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-cream-400">
              <span>August 5, 2025</span>
              <span>•</span>
              <span>By Alex Lee</span>
            </div>
            <a href="#" className="mt-2 text-accent-600 dark:text-accent-400 hover:underline font-medium">Read more →</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default News;
