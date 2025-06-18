import { useState } from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';

const Media = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const mediaItems = [
    {
      type: 'image',
      title: 'Pokhara Tour',
      description: 'A memorable visit to Pokhara, engaging with political leaders and experiencing the rich cultural heritage of the region.',
      url: './images/pokhara_tour.jpeg',
      category: 'Photos',
    },
    {
      type: 'video',
      title: 'Policy Announcement',
      description: 'New education policy announcement',
      url: 'https://www.youtube.com/embed/example1',
      category: 'Speeches',
    },
{
  type: 'image',
  title: 'Muktinath Visit',
  description: 'Spiritual journey to Muktinath Temple, exploring the sacred site and its breathtaking Himalayan surroundings.',
  url: './images/muktinath_tour.jpeg',
  category: 'Photos',
},
    {
      type: 'video',
      title: 'TV Interview',
      description: 'Discussion on current affairs',
      url: 'https://www.youtube.com/embed/example2',
      category: 'Interviews',
    },
    {
      type: 'image',
      title: 'Award Ceremony',
      description: 'Receiving community service award',
      url: '/media/award.jpg',
      category: 'Photos',
    },
    {
      type: 'video',
      title: 'Press Conference',
      description: 'Addressing media on new initiatives',
      url: 'https://www.youtube.com/embed/example3',
      category: 'Speeches',
    },
  ];

  const categories = ['All', 'Photos', 'Videos', 'Interviews', 'Speeches'];

  const filteredItems = activeFilter === 'All'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative h-[30vh] bg-[var(--primary-light)] flex items-center justify-center mt-20">
        <div className="container text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Media Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Photos, Videos, and Interviews
          </motion.p>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-16">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-white text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {item.type === 'image' ? (
                  <div className="relative h-48">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-contain scale-150"
                    />
                  </div>
                ) : (
                  <div className="relative h-48">
                    <iframe
                      src={item.url}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="p-6 pt-16">

                  <h3 className="text-xl font-bold mt-2 mb-2 text-[var(--primary)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
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

export default Media; 