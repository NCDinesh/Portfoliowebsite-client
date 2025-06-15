import { motion } from 'framer-motion';
import CTA from '../components/CTA';

const Vision = () => {
  const visionStatement = {
    title: "My   Vision for a Better Future",
    description: "I envision a community where every citizen has access to quality education, healthcare, and economic opportunities. A society built on the principles of equality, justice, and sustainable development.",
    image: "/images/vision.jpg"
  };

  const priorities = [
    {
      title: "Education for All",
      description: "Ensuring access to quality education for every child, with modern facilities and well-trained teachers.",
      icon: "🎓"
    },
    {
      title: "Healthcare Access",
      description: "Making healthcare affordable and accessible to all citizens, with a focus on preventive care.",
      icon: "🏥"
    },
    {
      title: "Economic Growth",
      description: "Creating sustainable job opportunities and supporting local businesses for economic prosperity.",
      icon: "💼"
    },
    {
      title: "Environmental Protection",
      description: "Implementing green initiatives and sustainable practices for a cleaner, healthier environment.",
      icon: "🌱"
    }
  ];

  const goals = [
    {
      year: "2024",
      title: "Education Reform",
      items: [
        "Upgrade school infrastructure",
        "Implement digital learning programs",
        "Provide scholarships for underprivileged students"
      ]
    },
    {
      year: "2025",
      title: "Healthcare Enhancement",
      items: [
        "Build new healthcare centers",
        "Launch mobile health units",
        "Establish health insurance programs"
      ]
    },
    {
      year: "2026",
      title: "Economic Development",
      items: [
        "Create industrial zones",
        "Support small businesses",
        "Develop tourism infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--primary-light)] text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{visionStatement.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{visionStatement.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Priorities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {priorities.map((priority, index) => (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{priority.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">
                  {priority.title}
                </h3>
                <p className="text-gray-700">{priority.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Timeline */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Strategic Goals
          </motion.h2>
          <div className="space-y-12">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-[var(--primary)] mr-4">
                    {goal.year}
                  </span>
                  <h3 className="text-2xl font-bold">{goal.title}</h3>
                </div>
                <ul className="space-y-3">
                  {goal.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-[var(--primary)] mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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

export default Vision; 