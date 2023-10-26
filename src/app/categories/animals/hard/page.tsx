"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type APIResponse = {
  response_code: number;
  results: Question[];
};

function AnimalsHard() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [showNext, setShowNext] = useState<boolean>(false);
  const difficulties = ["hard"];
  const [difficultyIndex, setDifficultyIndex] = useState<number>(0);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)",
    },
  };

  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get<APIResponse>(
        `https://opentdb.com/api.php?amount=5&category=27&difficulty=${difficulties[difficultyIndex]}&type=boolean`
      );
      setQuestions(response.data.results);
    }

    fetchQuestions();
  }, [difficultyIndex]);

  const handleAnswer = (answer: string) => {
    console.log(
      `Respuesta correcta: ${questions[currentIndex].correct_answer}`
    );

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);

    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);

      if (currentIndex === questions.length - 1) {
        if (score === 4) {
          setShowNext(true);
        } else {
          setShowNext(false);
        }
      }
    }, 1000);
  };

  const retryLevel = () => {
    window.location.reload();
  };

  const goToNextLevel = () => {
    router.push("https://questminds.vercel.app/categories");
  };

  if (currentIndex >= questions.length) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen mx-6 sm:mx-0 bg-[#1e1e20]"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeIn}
      >
        <p className="text-white font-medium text-2xl mb-6 select-none">
          Your score is: {score}/{questions.length}
        </p>
        {showNext ? (
          <motion.button
            className="bg-white text-[#865bce] py-2 rounded-md font-bold hover:bg-[#865bce] hover:text-white px-12"
            onClick={goToNextLevel}
            variants={buttonVariants}
            whileHover="hover"
          >
            Ir al siguiente nivel
          </motion.button>
        ) : (
          <motion.button
            className="bg-white text-[#865bce] py-2 rounded-md font-bold hover:bg-[#865bce] hover:text-white px-12"
            onClick={retryLevel}
            variants={buttonVariants}
            whileHover="hover"
          >
            Reintentar nivel
          </motion.button>
        )}
      </motion.div>
    );
  }

  if (currentIndex >= questions.length) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen blur-effect mx-6 sm:mx-0 bg-[#1e1e20]"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeIn}
      >
        <p>
          Your score is: {score}/{questions.length}
        </p>
        {message && <p>{message}</p>}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen blur-effect mx-6 sm:mx-0 bg-[#1e1e20]"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeIn}
    >
      <div className="text-center container mx-auto max-w-xl">
        <div className="flex flex-row items-center justify-center font-bold text-xl mb-24">
          {/* CATEGORIA */}
          <h1 className="text-white text-2xl">Animals: {""}</h1>
          {/* DIFFICULTY */}
          <p className="text-[#865bce] text-2xl ml-2">
            {difficulties[difficultyIndex].charAt(0).toUpperCase() +
              difficulties[difficultyIndex].slice(1)}
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <p
              className="text-white font-medium text-2xl select-none"
              dangerouslySetInnerHTML={{
                __html: questions[currentIndex]?.question,
              }}
            ></p>
          </section>
          <section className="flex flex-col space-y-4">
            <motion.button
              className="bg-white text-[#865bce] py-2 rounded-md font-bold hover:bg-[#865bce] hover:text-white"
              onClick={() => handleAnswer("True")}
              variants={buttonVariants}
              whileHover="hover"
            >
              True
            </motion.button>
            <motion.button
              className="bg-white text-[#865bce] py-2 rounded-md font-bold hover:bg-[#865bce] hover:text-white"
              onClick={() => handleAnswer("False")}
              variants={buttonVariants}
              whileHover="hover"
            >
              False
            </motion.button>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default AnimalsHard;
