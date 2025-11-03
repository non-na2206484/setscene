"use client";

import { motion } from "framer-motion";

const bookImages = [
  "/b1.jpeg",
  "/b2.jpeg",
  "/b3.jpeg",
  "/b4.jpeg",
  "/b5.jpeg",
  "/b6.jpeg",
  "/b7.jpeg",
  "/b8.jpeg",
  "/b9.jpeg",
  "/b10.jpeg",
  "/b11.jpeg",
  "/b12.jpeg",
  "/b13.jpeg",
  "/b14.jpeg",
];

export default function HeroSection() {
  return (
    <section className="hero-section" id="top">
      {/* Book cover backgrounds */}
      {bookImages.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Book ${index + 1}`}
          className={`book-bg book-${index + 1}`}
          initial={{ opacity: 0.3, y: 0, x: 0, rotate: 0 }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-title"
      >
        Set the Scene with SetScene
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hero-subtitle"
      >
        Step inside your favorite stories. Experience books like never before in immersive VR.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (window.umami) window.umami.track("join_waitlist_click");
          document.getElementById("waitlist").scrollIntoView({ behavior: "smooth" });
        }}
        className="btn-primary"
      >
        Join Waitlist
      </motion.button>
    </section>
  );
}
