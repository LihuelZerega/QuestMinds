"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Books from "@/assets/images/libro.png";
import Films from "@/assets/images/video.png";
import Music from "@/assets/images/nota-musical.png";
import VideoGames from "@/assets/images/videojuego.png";


const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" },
  whileTap: { scale: 0.95 },
};

function page() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1 className="text-white text-3xl font-bold py-12 text-center">
        Select your Entertainment category to start playing
      </h1>
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12">
        <Link href="https://questminds.vercel.app/categories/entertainment/books">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Books
            </h1>
            <div className="hidden sm:block">
              <Image
                src={Books}
                width={100}
                height={100}
                alt="Books"
              />
            </div>
            <div className="block sm:hidden">
              <Image
                src={Books}
                width={50}
                height={50}
                alt="Books"
              />
            </div>
          </motion.div>
        </Link>

        <Link href="https://questminds.vercel.app/categories/entertainment/film">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Film
            </h1>
            <div className="hidden sm:block">
              <Image src={Films} width={100} height={100} alt="Films" />
            </div>
            <div className="block sm:hidden">
              <Image src={Films} width={50} height={50} alt="Films" />
            </div>
          </motion.div>
        </Link>

        <Link href="https://questminds.vercel.app/categories/entertainment/music">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Music
            </h1>
            <div className="hidden sm:block">
              <Image src={Music} width={100} height={100} alt="Music" />
            </div>
            <div className="block sm:hidden">
              <Image src={Music} width={50} height={50} alt="Music" />
            </div>
          </motion.div>
        </Link>

        <Link href="https://questminds.vercel.app/categories/entertainment/videogames">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Video Games
            </h1>
            <div className="hidden sm:block">
              <Image src={VideoGames} width={100} height={100} alt="VideoGames" />
            </div>
            <div className="block sm:hidden">
              <Image src={VideoGames} width={50} height={50} alt="VideoGames" />
            </div>
          </motion.div>
        </Link>
      </section>
    </div>
  );
}

export default page;
