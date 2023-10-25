"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

function Trivia() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get<APIResponse>('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=boolean');
      setQuestions(response.data.results);
    }

    fetchQuestions();
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);

    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    }, 1000);
  };

  if (currentIndex >= questions.length) {
    return <div>Your score is: {score}/{questions.length}</div>;
  }

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: questions[currentIndex]?.question }}></p>
      <button onClick={() => handleAnswer('True')}>True</button>
      <button onClick={() => handleAnswer('False')}>False</button>
      {selectedAnswer && (
        <p>
          You selected: {selectedAnswer}
        </p>
      )}
    </div>
  );
}

export default Trivia;
