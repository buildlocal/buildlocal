import * as React from 'react';
import Head from 'next/head';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <>
      <Head>
        <title>Events | BuildLocal</title>
      </Head>
      <main className="container mx-auto py-10 bg-cream-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 flex items-center gap-3 text-primary-800 dark:text-cream-100">
          <Calendar className="w-10 h-10 text-accent-500" />
          Events
        </h1>
        <p className="text-xl text-primary-700 dark:text-cream-200 mb-10">Discover and join upcoming technology and engineering events in the BuildLocal community.</p>
        
        {/* Upcoming Events */}
        <div className="space-y-6">
          {/* Event 1 */}
          <div className="bg-cream-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-beige-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-2">Tokyo AI Conference 2025</h2>
                <p className="text-primary-700 dark:text-cream-300 mb-4">Join industry leaders and researchers for a deep dive into the latest AI technologies and their applications.</p>
                <div className="flex flex-wrap gap-4 text-sm text-primary-600 dark:text-cream-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>September 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Tokyo International Forum</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>500+ attendees</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">Register Now</button>
                <span className="text-beige-600 dark:text-beige-400 font-semibold">¥15,000</span>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-cream-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-beige-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-beige-700 dark:text-beige-400 mb-2">Open Source Meetup</h2>
                <p className="text-primary-700 dark:text-cream-300 mb-4">Monthly gathering of open source contributors. Share your projects and learn from others.</p>
                <div className="flex flex-wrap gap-4 text-sm text-primary-600 dark:text-cream-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>August 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Shibuya Tech Hub</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>50+ attendees</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-beige-500 text-white px-6 py-3 rounded-lg hover:bg-beige-600 transition-colors">Join Meetup</button>
                <span className="text-beige-600 dark:text-beige-400 font-semibold">Free</span>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="bg-cream-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-beige-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-accent-600 dark:text-accent-400 mb-2">Web3 Workshop Series</h2>
                <p className="text-primary-700 dark:text-cream-300 mb-4">Hands-on workshop covering blockchain development, DeFi, and NFT creation.</p>
                <div className="flex flex-wrap gap-4 text-sm text-primary-600 dark:text-cream-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>September 2-4, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Roppongi Innovation Center</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>30 attendees</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors">Enroll Now</button>
                <span className="text-beige-600 dark:text-beige-400 font-semibold">¥25,000</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Events;
