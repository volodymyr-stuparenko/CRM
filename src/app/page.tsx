'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 bg-gradient-animate">
      <motion.div
        className="text-center text-white px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          variants={itemVariants}
        >
          Welcome to the Next.js! 👋
        </motion.h1>

        <motion.p
          className="text-lg max-w-xl mx-auto opacity-90"
          variants={itemVariants}
        >
          This is your website`s homepage. Make yourself at home 😊
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/dashboard">
            <button className="px-6 py-3 mt-4 text-lg font-semibold rounded-2xl shadow-lg bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white hover:scale-105 transition duration-300 ease-in-out">
              Start Now!
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
