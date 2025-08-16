import * as React from 'react';
import Head from 'next/head';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <>
      <Head>
        <title>Contact Us | OpenTokyo</title>
        <meta name="description" content="Get in touch with the OpenTokyo team" />
      </Head>
      <main className="min-h-screen bg-cream-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-800 dark:text-cream-100 mb-4">Contact Us</h1>
            <p className="text-primary-600 dark:text-cream-200 max-w-2xl mx-auto">
              Have questions, suggestions, or need support? We'd love to hear from you! 
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-primary-800 dark:text-cream-100 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 dark:text-cream-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-3 border border-beige-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-primary-900 dark:text-cream-100 placeholder-primary-400 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us more about your question or feedback..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-cream-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-beige-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-primary-800 dark:text-cream-100 mb-6">Get in touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-cream-100">Email</h3>
                      <p className="text-primary-600 dark:text-cream-300">hello@opentokyo.org</p>
                      <p className="text-sm text-primary-500 dark:text-cream-400">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-cream-100">Community Support</h3>
                      <p className="text-primary-600 dark:text-cream-300">Join our Discord community</p>
                      <p className="text-sm text-primary-500 dark:text-cream-400">Get help from community members</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-cream-100">Support</h3>
                      <p className="text-primary-600 dark:text-cream-300">support@opentokyo.org</p>
                      <p className="text-sm text-primary-500 dark:text-cream-400">For technical issues and bugs</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-cream-100">Location</h3>
                      <p className="text-primary-600 dark:text-cream-300">Tokyo, Japan</p>
                      <p className="text-sm text-primary-500 dark:text-cream-400">Building communities worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-beige-100 dark:bg-gray-800 rounded-xl p-6 border border-beige-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-primary-800 dark:text-cream-100 mb-3">
                  Frequently Asked Questions
                </h3>
                <p className="text-primary-600 dark:text-cream-300 mb-4">
                  Check our FAQ section for quick answers to common questions.
                </p>
                <button className="text-primary-500 hover:text-primary-400 font-medium text-sm transition-colors">
                  View FAQ →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
