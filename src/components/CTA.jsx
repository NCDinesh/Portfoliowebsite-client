import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const CTA = () => {
  return (
   <section className="section bg-[var(--primary-light)] text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Your Support Matters</h2>

            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Together, we can create positive change in our community. Your support and involvement make a difference.
            </p>
            <div className="flex justify-center space-x-4">

              <Link
                to="/contact"
className="btn border-2 border-white text-white hover:bg-white hover:text-[var(--primary)]"              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default CTA
