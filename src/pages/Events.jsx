import { useState } from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = {
    upcoming: [
      {
        date: '2024-04-15',
        title: 'Community Town Hall',
        location: 'City Hall Auditorium',
        description: 'Join us for an open discussion about local issues and community development.',
        image: '/events/town-hall.jpg',
      },
      {
        date: '2024-04-20',
        title: 'Youth Empowerment Workshop',
        location: 'Community Center',
        description: 'Workshop focused on skill development and career guidance for young people.',
        image: '/events/youth-workshop.jpg',
      },
      {
        date: '2024-04-25',
        title: 'Environmental Initiative Launch',
        location: 'Central Park',
        description: 'Launch of new environmental conservation program with community participation.',
        image: '/events/environment.jpg',
      },
    ],
    past: [
      {
        date: '2024-03-10',
        title: 'Education Policy Forum',
        location: 'University Auditorium',
        description: 'Discussion on education reforms and future policies.',
        image: '/events/education-forum.jpg',
      },
      {
        date: '2024-03-05',
        title: 'Healthcare Summit',
        location: 'Medical Center',
        description: 'Addressing healthcare challenges and solutions.',
        image: '/events/healthcare.jpg',
      },
      {
        date: '2024-02-28',
        title: 'Business Networking Event',
        location: 'Convention Center',
        description: 'Connecting local businesses and entrepreneurs.',
        image: '/events/business.jpg',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[var(--primary-light)] flex items-center justify-center mt-20">
        <div className="container text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Events & Campaigns
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Join Us in Making a Difference
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 inline-flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'upcoming'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--primary)] hover:bg-gray-100'
                }`}
              >
                Upcoming Events
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('past')}
                className={`px-8 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'past'
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--primary)] hover:bg-gray-100'
                }`}
              >
                Past Events
              </motion.button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events[activeTab].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[var(--primary)] font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="px-3 py-1 bg-[var(--background)] text-[var(--primary)] rounded-full text-sm">
                      {activeTab === 'upcoming' ? 'Upcoming' : 'Past'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-500">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.location}
                  </div>
                  {activeTab === 'upcoming' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full bg-[var(--primary)] text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                    >
                      RSVP Now
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA></CTA>
    </div>
  );
};

export default Events; 