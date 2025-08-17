import * as React from 'react';
import Head from 'next/head';
import { Calendar, MapPin, Clock, Users, ExternalLink, Ticket, Filter, ArrowRight, Star, ChevronDown } from 'lucide-react';

const Events: React.FC = () => {
  const featuredEvent = {
    id: 1,
    title: "BuildLocal Summit 2025",
    subtitle: "The Future of Technology and Innovation",
    description: "Join industry leaders, innovators, and developers for our flagship annual conference. Experience cutting-edge technology demonstrations, inspiring keynotes, and networking opportunities.",
    date: "October 15-17, 2025",
    time: "9:00 AM - 6:00 PM (All Days)",
    location: "Tokyo International Forum",
    attendees: "2,500+",
    price: "¥25,000",
    image: "🎯",
    category: "Conference",
    tags: ["Technology", "Innovation", "Networking", "Keynote"]
  };

  const upcomingEvents = [
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      description: "Hands-on workshop covering neural networks, deep learning frameworks, and practical AI implementation strategies.",
      date: "September 8, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Shibuya Tech Hub",
      attendees: "120",
      price: "¥12,000",
      image: "🤖",
      category: "Workshop",
      tags: ["AI", "Machine Learning", "Python"]
    },
    {
      id: 3,
      title: "Open Source Contribution Meetup",
      description: "Monthly gathering of open source contributors. Share projects, find collaborators, and learn from experienced maintainers.",
      date: "August 25, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Virtual + In-Person",
      attendees: "85",
      price: "Free",
      image: "💻",
      category: "Meetup",
      tags: ["Open Source", "Community", "Git"]
    },
    {
      id: 4,
      title: "Startup Pitch Night",
      description: "Emerging startups present their innovative ideas to investors, mentors, and the tech community.",
      date: "September 12, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Roppongi Hills",
      attendees: "200",
      price: "¥3,000",
      image: "🚀",
      category: "Networking",
      tags: ["Startups", "Investment", "Pitching"]
    },
    {
      id: 5,
      title: "Web Development Bootcamp",
      description: "Intensive 3-day bootcamp covering modern web technologies: React, Node.js, and cloud deployment strategies.",
      date: "September 20-22, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Akihabara Learning Center",
      attendees: "50",
      price: "¥35,000",
      image: "🌐",
      category: "Bootcamp",
      tags: ["React", "Node.js", "Full-Stack"]
    },
    {
      id: 6,
      title: "Cybersecurity Conference",
      description: "Explore the latest in cybersecurity threats, defense strategies, and industry best practices with leading experts.",
      date: "October 5, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Tokyo Security Center",
      attendees: "300",
      price: "¥18,000",
      image: "🛡️",
      category: "Conference",
      tags: ["Security", "Privacy", "Enterprise"]
    }
  ];

  const eventCategories = ["All", "Conference", "Workshop", "Meetup", "Bootcamp", "Networking"];

  return (
    <>
      <Head>
        <title>Events | BuildLocal</title>
        <meta name="description" content="Discover and join BuildLocal technology events, workshops, meetups, and conferences. Connect with the tech community." />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900">
        {/* Header Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-primary-800 dark:text-cream-100">
              Upcoming Events
            </h1>
            <p className="text-lg text-primary-600 dark:text-cream-300 max-w-2xl mx-auto">
              Join our technology events, workshops, and meetups. Learn, network, and grow with the BuildLocal community.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {eventCategories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary-500 text-white"
                    : "bg-cream-100 dark:bg-gray-800 text-primary-600 dark:text-cream-300 hover:bg-primary-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Event */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-1">
            <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                    Featured Event
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 dark:text-cream-100 mb-2">
                    {featuredEvent.title}
                  </h2>
                  <h3 className="text-xl text-primary-600 dark:text-cream-200 mb-4">
                    {featuredEvent.subtitle}
                  </h3>
                  <p className="text-primary-700 dark:text-cream-300 mb-6 leading-relaxed">
                    {featuredEvent.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-primary-600 dark:text-cream-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{featuredEvent.attendees} Expected</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold">
                      <Ticket className="w-4 h-4 mr-2" />
                      Register Now - {featuredEvent.price}
                    </button>
                    <button className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 dark:border-gray-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors">
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
                <div className="lg:w-80">
                  <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-primary-100 to-beige-100 dark:from-primary-900 dark:to-gray-700 rounded-xl flex items-center justify-center">
                    <div className="text-primary-400 dark:text-primary-500 text-8xl">{featuredEvent.image}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-800 dark:text-cream-100 mb-4 sm:mb-0">
              All Events
            </h2>
            <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-cream-400">
              <Filter className="w-4 h-4" />
              <span>Showing 6 of 12 events</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-cream-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-beige-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-primary-50 to-beige-50 dark:from-primary-900 dark:to-gray-700 flex items-center justify-center">
                  <div className="text-primary-300 dark:text-primary-600 text-5xl">{event.image}</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-2 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded text-xs font-medium">
                      {event.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-beige-600 dark:text-beige-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span>4.8</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-primary-700 dark:text-cream-300 mb-4 line-clamp-3 text-sm">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-primary-600 dark:text-cream-400">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-primary-600 dark:text-cream-400">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-primary-600 dark:text-cream-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{event.attendees} attending</span>
                      </div>
                      <span className="font-semibold text-accent-600 dark:text-accent-400">{event.price}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium group-hover:bg-primary-600">
                    {event.price === "Free" ? "Join Event" : "Register Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-3 border border-primary-300 dark:border-gray-600 text-primary-700 dark:text-cream-200 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors font-medium">
              Load More Events
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary-500 to-beige-500 text-white py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-lg lg:text-xl text-cream-100 max-w-2xl mx-auto mb-8">
              Share your expertise with the BuildLocal community. We provide support, venue, and promotion for quality tech events.
            </p>
            <button className="px-8 py-3 bg-cream-100 text-primary-700 rounded-lg font-semibold hover:bg-cream-200 transition-colors">
              Submit Event Proposal
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Events;
