import { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      title: 'The Future of Education in Our Community',
      excerpt: 'Exploring innovative approaches to education and their impact on our community\'s future.',
      category: 'Education',
      date: '2024-03-15',
      author: 'Politician Name',
      image: '/blog/education.jpg',
      readTime: '5 min read',
    },
    {
      title: 'Healthcare Reform: A Path Forward',
      excerpt: 'Analyzing current healthcare challenges and proposing sustainable solutions.',
      category: 'Healthcare',
      date: '2024-03-10',
      author: 'Politician Name',
      image: '/blog/healthcare.jpg',
      readTime: '7 min read',
    },
    {
      title: 'Environmental Conservation: Our Responsibility',
      excerpt: 'Understanding the importance of environmental protection and community involvement.',
      category: 'Environment',
      date: '2024-03-05',
      author: 'Politician Name',
      image: '/blog/environment.jpg',
      readTime: '4 min read',
    },
    {
      title: 'Economic Growth Through Innovation',
      excerpt: 'How innovation and technology can drive economic development in our region.',
      category: 'Economy',
      date: '2024-02-28',
      author: 'Politician Name',
      image: '/blog/economy.jpg',
      readTime: '6 min read',
    },
    {
      title: 'Youth Empowerment: Building Tomorrow\'s Leaders',
      excerpt: 'The importance of investing in youth development and leadership programs.',
      category: 'Youth',
      date: '2024-02-20',
      author: 'Politician Name',
      image: '/blog/youth.jpg',
      readTime: '5 min read',
    },
    {
      title: 'Community Development: A Collaborative Approach',
      excerpt: 'How community participation leads to successful development initiatives.',
      category: 'Community',
      date: '2024-02-15',
      author: 'Politician Name',
      image: '/blog/community.jpg',
      readTime: '4 min read',
    },
  ];

  const categories = ['All', 'Education', 'Healthcare', 'Environment', 'Economy', 'Youth', 'Community'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[var(--primary)] flex items-center justify-center">
        <div className="container text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Blog & News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Insights and Updates
          </motion.p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-white text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[var(--primary)] font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {filteredPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="/author-avatar.jpg"
                        alt="Author"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-800">
                          {filteredPosts[0].author}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(filteredPosts[0].date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                    >
                      Read More
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[var(--primary)] font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[var(--primary)]">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      Read More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--primary)] rounded-lg p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest blog posts and updates.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--background)]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[var(--primary)] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 