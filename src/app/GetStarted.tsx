import React from "react";
import { motion } from "framer-motion";
import "./FloatingUI.css";
import Link from "next/link";

const FloatingUI = () => {
  return (
    <div className="floating-container">
      <motion.h1
        className="text-white text-7xl mb-4 font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      >
        ¡Welcome to Quest Minds!
      </motion.h1>
      <motion.h1
        className="text-white text-2xl mb-10 font-light text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        A place to relax and train your mind
      </motion.h1>
      <div>
        <Link href="http://localhost:3000/categories">
          <motion.button
            className="py-2 px-8 text-xl rounded-md bg-[#ff51a6] text-white font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            whileTap={{ scale: 0.95 }}
          >
            Start play
          </motion.button>
        </Link>
        <motion.button
          className="py-2 px-8 text-xl rounded-md bg-white text-[#1e1e20] font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingUI;
