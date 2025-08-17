import * as React from 'react';
import Head from 'next/head';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const News: React.FC = () => {
  const featuredNews = {
    title: "AI Revolutionizes Software Engineering in 2025",
    excerpt: "Discover how artificial intelligence is transforming the way developers build, test, and deploy applications, with breakthrough tools that increase productivity by 300%.",
    date: "August 15, 2025",
    author: "Jane Doe",
    readTime: "5 min read",
    category: "AI & Machine Learning"
  };

  const newsArticles = [
    {
      id: 1,
      title: "Quantum Computing: The Next Leap in Technology",
      excerpt: "Quantum computers are no longer science fiction. Explore the latest breakthroughs and what they mean for the tech industry.",
      date: "August 12, 2025",
      author: "John Smith",
      readTime: "8 min read",
      category: "Quantum Computing"
    },
    {
      id: 2,
      title: "Open Source in 2025: Trends & Community Insights",
      excerpt: "Open source is thriving! See which projects are leading the way and how you can get involved in the global community.",
      date: "August 10, 2025",
      author: "Alex Lee",
      readTime: "6 min read",
      category: "Open Source"
    },
    {
      id: 3,
      title: "The Rise of Edge Computing",
      excerpt: "Edge computing is bringing processing power closer to data sources. Learn how this technology is reshaping cloud architecture.",
      date: "August 8, 2025",
      author: "Maria Garcia",
      readTime: "7 min read",
      category: "Cloud Computing"
    },
    {
      id: 4,
      title: "WebAssembly: Performance Beyond JavaScript",
      excerpt: "WebAssembly is enabling new possibilities for web applications. Discover how it's changing frontend development.",
      date: "August 5, 2025",
      author: "David Kim",
      readTime: "10 min read",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Sustainable Tech: Green Coding Practices",
      excerpt: "Learn how to write more energy-efficient code and contribute to a more sustainable digital future.",
      date: "August 3, 2025",
      author: "Sarah Johnson",
      readTime: "5 min read",
      category: "Sustainability"
    }
  ];

  return (
    <>
      <Head>
        <title>News | BuildLocal</title>
        <meta name="description" content="Stay updated with the latest technology news, trends, and insights from the BuildLocal community" />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900">
        {/* Header Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800 dark:text-cream-100">
              Latest Tech News
            </h1>
            <p className="text-lg text-primary-600 dark:text-cream-300 max-w-2xl mx-auto">
              Stay updated with the latest technology trends, breakthrough innovations, and insights from the global tech community
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-1">
              <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                      Featured Article
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary-800 dark:text-cream-100 mb-4">
                      {featuredNews.title}
                    </h2>
                    <p className="text-primary-700 dark:text-cream-200 mb-6 leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-primary-600 dark:text-cream-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredNews.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium">
                      Read Full Article
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="lg:w-80">
                    <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-primary-100 to-beige-100 dark:from-primary-900 dark:to-gray-700 rounded-xl flex items-center justify-center">
                      <div className="text-primary-400 dark:text-primary-500 text-6xl">🤖</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-cream-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-beige-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-primary-50 to-beige-50 dark:from-primary-900 dark:to-gray-700 flex items-center justify-center">
                  <div className="text-primary-300 dark:text-primary-600 text-4xl">📄</div>
                </div>
                
                <div className="p-6">
                  <div className="inline-block px-2 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded text-xs font-medium mb-3">
                    {article.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-primary-700 dark:text-cream-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs text-primary-600 dark:text-cream-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full text-left text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium transition-colors group">
                    Read More 
                    <ChevronRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-primary-300 dark:border-gray-600 text-primary-700 dark:text-cream-200 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default News;
