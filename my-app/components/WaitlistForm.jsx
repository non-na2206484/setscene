"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function WaitlistForm() {
  return (
    <section className="waitlist-section" id="waitlist">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Join the Waitlist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="section-text"
      >
        Be the first to experience books in VR.
      </motion.p>

      {/* Animated arrows pointing down */}
      <div className="arrow-container">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, 15, 0] }}
            transition={{
              duration: 1.5,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <FaArrowDown className="arrow-icon" />
          </motion.div>
        ))}
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        action="https://formspree.io/f/xeopweog"
        method="POST"
        className="waitlist-form"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="input-email"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="btn-primary"
        >
          Notify Me
        </motion.button>
      </motion.form>
    </section>
  );
}
