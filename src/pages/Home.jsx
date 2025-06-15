import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const Home = () => {
  const heroContent = {
    title: " Hello! I am Ram Bahadur",
    subtitle: "  Dedicated to Public Service and Progress",
    description: "  As a committed public servant, I strive to lead with integrity, transparency, and a deep commitment to uplifting our community. My mission is to bring positive change through inclusive policies, grassroots initiatives, and active citizen engagement. Together, we can build a more just, vibrant, and prosperous future.",
    image: "/images/team-3.jpg"
  };

  const initiatives = [
    {
      title: "Education Reform",
      description: "Advocating for quality education and equal opportunities for all students.",
      image: "https://media.istockphoto.com/id/1343472952/photo/happy-school-girls-walking-together-in-a-school-corridor-while-talking-to-each-other.webp?a=1&b=1&s=612x612&w=0&k=20&c=_1TGKXQzzc3H5lQoHA1-ciYpBU_D5K2zPR0Sdk4bLac=",
      link: "/initiatives/education"
    },
    {
      title: "Healthcare Access",
      description: "Ensuring affordable and accessible healthcare for every citizen.",
      image: "https://plus.unsplash.com/premium_photo-1675808575920-8010494407e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      link: "/initiatives/healthcare"
    },
    {
      title: "Economic Growth",
      description: "Creating jobs and fostering sustainable economic development.",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbm9taWMlMjBncm93dGh8ZW58MHx8MHx8fDA%3D",
      link: "/initiatives/economy"
    }
  ];

  const latestNews = [
    {
      title: "Community Town Hall Meeting",
      description: "Join us for an open discussion about local issues and solutions.",
      image: "/images/news1.jpg",
      date: "March 15, 2024"
    },
    {
      title: "Education Initiative Launch",
      description: "New program to support underprivileged students in our district.",
      image: "/images/news2.jpg",
      date: "March 10, 2024"
    },
    {
      title: "Healthcare Summit",
      description: "Bringing together healthcare providers to improve services.",
      image: "/images/news3.jpg",
      date: "March 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[var(--primary)] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroContent.image}
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg mb-12 max-w-2xl mx-auto"
          >
            {heroContent.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <Link
              to="/about"
              className="btn bg-white text-[var(--primary)] hover:bg-opacity-90 transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] transition-all duration-300"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading text-center"
          >
            Key Initiatives
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                  <p className="text-gray-600 mb-4">{initiative.description}</p>
                  <Link
                    to={initiative.link}
                    className="text-[var(--primary)] hover:text-[var(--primary-light)] font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading text-center"
          >
            Latest News
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600">{news.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
     <CTA></CTA>
    </div>
  );
};

export default Home; 