"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Computers from "@/assets/images/monitor.png";
import Scienceandnature from "@/assets/images/data-science.png";

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
        Select your Science category to start playing
      </h1>
      <section className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center">
        <Link href="http://localhost:3000/categories/science/computers">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
              Computers
            </h1>
            <div className="hidden sm:block">
              <Image
                src={Computers}
                width={100}
                height={100}
                alt="Computers"
              />
            </div>
            <div className="block sm:hidden">
              <Image
                src={Computers}
                width={50}
                height={50}
                alt="Computers"
              />
            </div>
          </motion.div>
        </Link>

        <Link href="http://localhost:3000/categories/science/science&nature">
          <motion.div
            className="bg-white w-32 h-32 sm:w-64 sm:h-64 rounded-md flex flex-col items-center justify-center cursor-pointer p-1"
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={cardVariants}
          >
            <h1 className="text-[#865bce] text-lg sm:text-2xl font-bold mb-2 text-center">
            Science & Nature
            </h1>
            <div className="hidden sm:block">
              <Image src={Scienceandnature} width={100} height={100} alt="scienceandnature" />
            </div>
            <div className="block sm:hidden">
              <Image src={Scienceandnature} width={50} height={50} alt="scienceandnature" />
            </div>
          </motion.div>
        </Link>

      </section>
    </div>
  );
}

export default page;
