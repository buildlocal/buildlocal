import * as React from 'react';
import Head from 'next/head';
import { Users, MessageCircle, Heart, Share2, Calendar, MapPin, Star, Trophy, ArrowRight, Zap, Globe } from 'lucide-react';

const Community: React.FC = () => {
  const featuredDiscussions = [
    {
      id: 1,
      title: "Best Practices for API Design in 2025",
      author: "Sarah Chen",
      avatar: "SC",
      replies: 42,
      likes: 156,
      timestamp: "2 hours ago",
      category: "API Development",
      tags: ["REST", "GraphQL", "Design"]
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      author: "Mike Johnson",
      avatar: "MJ",
      replies: 28,
      likes: 89,
      timestamp: "4 hours ago",
      category: "Frontend",
      tags: ["React", "Scalability", "Architecture"]
    },
    {
      id: 3,
      title: "Kubernetes vs Docker Swarm: Real-world Experience",
      author: "Alex Rivera",
      avatar: "AR",
      replies: 67,
      likes: 203,
      timestamp: "6 hours ago",
      category: "DevOps",
      tags: ["Kubernetes", "Docker", "Containers"]
    }
  ];

  const communityStats = [
    { icon: Users, label: "Active Members", value: "12,547", color: "text-primary-600" },
    { icon: MessageCircle, label: "Discussions", value: "8,923", color: "text-beige-600" },
    { icon: Trophy, label: "Projects Shared", value: "2,341", color: "text-accent-600" },
    { icon: Star, label: "Total Contributions", value: "45,678", color: "text-primary-500" }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "BuildLocal Meetup: AI in Development",
      date: "Aug 20, 2025",
      time: "6:00 PM EST",
      location: "Virtual Event",
      attendees: 156,
      type: "Meetup"
    },
    {
      id: 2,
      title: "Open Source Workshop: Contributing to Projects",
      date: "Aug 25, 2025",
      time: "2:00 PM EST",
      location: "New York, NY",
      attendees: 89,
      type: "Workshop"
    },
    {
      id: 3,
      title: "BuildLocal Conference 2025",
      date: "Sep 15, 2025",
      time: "9:00 AM EST",
      location: "San Francisco, CA",
      attendees: 2341,
      type: "Conference"
    }
  ];

  const topContributors = [
    { name: "Elena Rodriguez", avatar: "ER", contributions: 1247, specialty: "Full-Stack Dev" },
    { name: "James Park", avatar: "JP", contributions: 1098, specialty: "DevOps Engineer" },
    { name: "Anna Thompson", avatar: "AT", contributions: 967, specialty: "UI/UX Designer" },
    { name: "Carlos Mendez", avatar: "CM", contributions: 834, specialty: "Data Scientist" }
  ];

  return (
    <>
      <Head>
        <title>Community | BuildLocal</title>
        <meta name="description" content="Join the BuildLocal community - connect with developers, share knowledge, and collaborate on amazing projects" />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-beige-600 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Join Our <span className="text-cream-200">Community</span>
              </h1>
              <p className="text-lg lg:text-xl text-cream-100 max-w-3xl mx-auto mb-8">
                Connect with passionate developers, designers, and innovators from around the world. 
                Share knowledge, collaborate on projects, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-cream-100 text-primary-700 rounded-lg font-semibold hover:bg-cream-200 transition-colors">
                  Join Community
                </button>
                <button className="px-8 py-3 border border-cream-100 text-cream-100 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
                  Browse Discussions
                </button>
              </div>
            </div>
            
            {/* Community Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {communityStats.map((stat, index) => (
                <div key={index} className="text-center bg-white bg-opacity-10 rounded-xl p-4 lg:p-6 backdrop-blur-sm">
                  <stat.icon className={`w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl lg:text-3xl font-bold text-cream-100 mb-1">{stat.value}</div>
                  <div className="text-sm lg:text-base text-cream-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Discussions */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary-800 dark:text-cream-100 mb-4 sm:mb-0">
                  Featured Discussions
                </h2>
                <button className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-6">
                {featuredDiscussions.map((discussion) => (
                  <div key={discussion.id} className="bg-cream-100 dark:bg-gray-800 rounded-xl p-6 border border-beige-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {discussion.avatar}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded text-xs font-medium">
                            {discussion.category}
                          </span>
                          {discussion.tags.map((tag) => (
                            <span key={tag} className="inline-block px-2 py-1 bg-beige-100 dark:bg-gray-700 text-beige-600 dark:text-beige-400 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-2 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                          {discussion.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-primary-600 dark:text-cream-400">
                          <span>by {discussion.author}</span>
                          <span>{discussion.timestamp}</span>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{discussion.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Top Contributors */}
              <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-6 border border-beige-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-6 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent-600" />
                  Top Contributors
                </h3>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {contributor.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-primary-800 dark:text-cream-100">{contributor.name}</div>
                        <div className="text-sm text-primary-600 dark:text-cream-400">{contributor.specialty}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-accent-600 dark:text-accent-400">{contributor.contributions}</div>
                        <div className="text-xs text-primary-600 dark:text-cream-400">contributions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-6 border border-beige-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-beige-600" />
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border border-beige-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="inline-block px-2 py-1 bg-beige-100 dark:bg-gray-700 text-beige-600 dark:text-beige-400 rounded text-xs font-medium mb-2">
                        {event.type}
                      </div>
                      <h4 className="font-semibold text-primary-800 dark:text-cream-100 mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-primary-600 dark:text-cream-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 border border-primary-300 dark:border-gray-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors">
                  View All Events
                </button>
              </div>

              {/* Community Guidelines */}
              <div className="bg-gradient-to-br from-accent-50 to-beige-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-accent-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-cream-100 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent-600" />
                  Community Guidelines
                </h3>
                <ul className="space-y-3 text-sm text-primary-700 dark:text-cream-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Be respectful and constructive in all interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Share knowledge and help others learn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Keep discussions on-topic and relevant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>No spam or self-promotion without value</span>
                  </li>
                </ul>
                <button className="w-full mt-4 px-4 py-2 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-lg hover:bg-accent-200 dark:hover:bg-accent-800 transition-colors">
                  Read Full Guidelines
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Community;
