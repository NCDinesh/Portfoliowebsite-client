import { motion } from 'framer-motion';
import CTA from '../components/CTA';

const About = () => {
  const personalInfo = {
    name: "Ram Bahadur",
    role: "Political Leader & Community Advocate",
    bio: "With over 15 years of experience in public service and community development, I have dedicated my life to creating positive change in our society. My journey in politics began with a simple belief: that every citizen deserves equal opportunities and a voice in their community's future.",
    achievements: [
      "Led successful community development programs benefiting over 10,000 families",
      "Implemented innovative education reforms in local schools",
      "Established healthcare initiatives for underprivileged communities",
      "Created job opportunities through sustainable economic development programs"
    ]
  };

  const values = [
    {
      title: "Integrity",
      description: "Committed to transparent and honest governance, always putting the community's interests first."
    },
    {
      title: "Inclusivity",
      description: "Ensuring that every voice is heard and every citizen has equal opportunities to thrive."
    },
    {
      title: "Innovation",
      description: "Finding creative solutions to complex problems through collaboration and forward-thinking."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 ">About Me</h1>
            <p className="text-xl md:text-2xl mb-8">{personalInfo.role}</p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/team-3.jpg"
                alt={personalInfo.name}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[var(--primary)]">My Journey</h2>
              <p className="text-lg text-gray-700 mb-8">{personalInfo.bio}</p>
              <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Key Achievements</h3>
              <ul className="space-y-3">
                {personalInfo.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
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
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[var(--primary)]"
          >
            My Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-[var(--primary)]">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
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

export default About; 