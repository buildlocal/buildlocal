import * as React from 'react';
import Head from 'next/head';
import { Users, MessageCircle, Star, GitBranch, Code, Heart } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <>
      <Head>
        <title>Community | OpenTokyo</title>
      </Head>
      <main className="container mx-auto py-10 bg-cream-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 flex items-center gap-3 text-primary-800 dark:text-cream-100">
          <Users className="w-10 h-10 text-primary-500" />
          Community
        </h1>
        <p className="text-xl text-primary-700 dark:text-cream-200 mb-10">Connect, share, and collaborate with fellow technology and engineering enthusiasts.</p>
        
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-6 text-center">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">5.2k</div>
            <div className="text-cream-100">Members</div>
          </div>
          <div className="bg-gradient-to-br from-beige-500 to-beige-600 text-white rounded-xl p-6 text-center">
            <MessageCircle className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">1.8k</div>
            <div className="text-cream-100">Discussions</div>
          </div>
          <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-xl p-6 text-center">
            <GitBranch className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">342</div>
            <div className="text-cream-100">Projects</div>
          </div>
          <div className="bg-gradient-to-br from-cream-500 to-cream-600 text-primary-800 rounded-xl p-6 text-center">
            <Star className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">98%</div>
            <div className="text-primary-700">Satisfaction</div>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cream-100 dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-beige-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-primary-500" />
              <h2 className="text-2xl font-semibold text-primary-800 dark:text-cream-100">Developer Forum</h2>
            </div>
            <p className="text-primary-700 dark:text-cream-300 mb-4">Ask questions, share knowledge, and get help from experienced developers in our active forum.</p>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">Join Discussion</button>
          </div>
          
          <div className="bg-cream-100 dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-beige-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-accent-500" />
              <h2 className="text-2xl font-semibold text-primary-800 dark:text-cream-100">Mentorship Program</h2>
            </div>
            <p className="text-primary-700 dark:text-cream-300 mb-4">Connect with industry experts and experienced developers who can guide your career journey.</p>
            <button className="bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">Find a Mentor</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Community;
