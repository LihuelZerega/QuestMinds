"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GeneralKnowledgeImage from "@/assets/images/libro.png";
import Art from "@/assets/images/art.png";
import Animals from "@/assets/images/lobo.png";
import Entertainment from "@/assets/images/mascara.png";
import Geography from "@/assets/images/geografia.png";
import History from "@/assets/images/desplazarse.png";
import Politics from "@/assets/images/conferencia.png";
import Science from "@/assets/images/prueba.png";
import Sports from "@/assets/images/deportes.png";

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
        Select your favorite category to start playing
      </h1>
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12">
        <Link href="https://questminds.vercel.app/categories/generalknowledge">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              General Knowledge
            </h1>
            <div className="hidden sm:block">
              <Image
                src={GeneralKnowledgeImage}
                width={100}
                height={100}
                alt="GeneralKnowledgeImage"
              />
            </div>
            <div className="block sm:hidden">
              <Image
                src={GeneralKnowledgeImage}
                width={50}
                height={50}
                alt="GeneralKnowledgeImage"
              />
            </div>
          </motion.div>
        </Link>

        <Link href="https://questminds.vercel.app/categories/art">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Art
            </h1>
            <div className="hidden sm:block">
              <Image src={Art} width={100} height={100} alt="Art" />
            </div>
            <div className="block sm:hidden">
              <Image src={Art} width={50} height={50} alt="Art" />
            </div>
          </motion.div>
        </Link>
        <Link href="https://questminds.vercel.app/categories/animals">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Animals
            </h1>
            <div className="hidden sm:block">
              <Image src={Animals} width={100} height={100} alt="Animals" />
            </div>
            <div className="block sm:hidden">
              <Image src={Animals} width={50} height={50} alt="Animals" />
            </div>
          </motion.div>
        </Link>
        <Link href="https://questminds.vercel.app/categories/entertainment">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Entertainment
            </h1>
            <div className="hidden sm:block">
              <Image
                src={Entertainment}
                width={100}
                height={100}
                alt="Entertainment"
              />
            </div>
            <div className="block sm:hidden">
              <Image
                src={Entertainment}
                width={50}
                height={50}
                alt="Entertainment"
              />
            </div>
          </motion.div>
        </Link>

        <Link href="https://questminds.vercel.app/categories/geography">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Geography
            </h1>
            <div className="hidden sm:block">
              <Image src={Geography} width={100} height={100} alt="Geography" />
            </div>
            <div className="block sm:hidden">
              <Image src={Geography} width={50} height={50} alt="Geography" />
            </div>
          </motion.div>
        </Link>

        <Link href="https://questminds.vercel.app/categories/history">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              History
            </h1>
            <div className="hidden sm:block">
              <Image src={History} width={100} height={100} alt="History" />
            </div>
            <div className="block sm:hidden">
              <Image src={History} width={50} height={50} alt="History" />
            </div>
          </motion.div>
        </Link>

        <Link href="https://questminds.vercel.app/categories/politics">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Politics
            </h1>
            <div className="hidden sm:block">
              <Image src={Politics} width={100} height={100} alt="Politics" />
            </div>
            <div className="block sm:hidden">
              <Image src={Politics} width={50} height={50} alt="Politics" />
            </div>
          </motion.div>
        </Link>

        <Link href="https://questminds.vercel.app/categories/science">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Science
            </h1>
            <div className="hidden sm:block">
              <Image src={Science} width={100} height={100} alt="Science" />
            </div>
            <div className="block sm:hidden">
              <Image src={Science} width={50} height={50} alt="Science" />
            </div>
          </motion.div>
        </Link>
      </section>
    </div>
  );
}

export default page;
