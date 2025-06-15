import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      year: '2023',
      title: 'Community Development Award',
      description: 'Recognized for outstanding contribution to community development initiatives.',
      category: 'Awards',
    },
    {
      year: '2022',
      title: 'Education Reform',
      description: 'Successfully implemented new education policies benefiting over 10,000 students.',
      category: 'Policy',
    },
    {
      year: '2022',
      title: 'Healthcare Initiative',
      description: 'Launched free healthcare program for underprivileged communities.',
      category: 'Healthcare',
    },
    {
      year: '2021',
      title: 'Infrastructure Development',
      description: 'Completed major infrastructure projects improving connectivity.',
      category: 'Infrastructure',
    },
    {
      year: '2021',
      title: 'Environmental Conservation',
      description: 'Implemented green energy initiatives reducing carbon footprint.',
      category: 'Environment',
    },
    {
      year: '2020',
      title: 'Youth Empowerment',
      description: 'Created job opportunities for over 5,000 young professionals.',
      category: 'Employment',
    },
  ];

  const categories = ['All', 'Awards', 'Policy', 'Healthcare', 'Infrastructure', 'Environment', 'Employment'];

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
            Our Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Milestones in Our Journey
          </motion.p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-white text-[var(--primary)] font-medium hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[var(--primary)] font-bold">{achievement.year}</span>
                  <span className="px-3 py-1 bg-[var(--background)] text-[var(--primary)] rounded-full text-sm">
                    {achievement.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">10k+</div>
              <div className="text-gray-600">People Impacted</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">15+</div>
              <div className="text-gray-600">Awards Received</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">100%</div>
              <div className="text-gray-600">Community Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements; 