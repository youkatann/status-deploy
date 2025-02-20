
'use client';
import * as React from 'react';
import Navbar from '@/components/sections/navbar/navbar';
import Cursor from '@/components/ui/cursor';
import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: number; // Індекс правильної відповіді
};

const questions: Question[] = [
  { question: "Яка столиця Великобританії?", options: ["Париж", "Лондон", "Берлін", "Мадрид"], answer: 1 },
  { question: "Оберіть правильне речення:", options: ["He go to school.", "He goes to school.", "He going school.", "He went school."], answer: 1 },
  { question: "Яке слово є синонімом 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1 },
];



export interface ITestProps {
}

export default function Test (props: ITestProps) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);

  const handleAnswerClick = (optionIndex: number) => {
    if (optionIndex === questions[currentQuestion].answer) { // ✅ Порівнюємо числа
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowEmailForm(true);
    }
  };

  const handleSubmitEmail = async () => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, score }),
    });

    if (response.ok) {
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
        resetQuiz();
      }, 3000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowEmailForm(false);
    setEmail("");
  };
  return (
    <>
    <Cursor/>
    <Navbar/>
    <main>
    <section className='relative w-full h-svh flex justify-center items-center'>
    <div className="z-[10] flex flex-col items-center justify-center p-4">
      {!showEmailForm ? (
        <div className="bg-white p-6 border-2 border-black shadow-brutalism w-full">
          {/* Лічильник питань */}
          <p className="text-black text-base font-semibold mb-2">
            Запитання {currentQuestion + 1} / {questions.length}
          </p>

          {/* Саме питання */}
          <h2 className="text-4xl font-extrabold mb-4">{questions[currentQuestion].question}</h2>

          {/* Відповіді */}
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full px-9 py-4 border-2 border-black shadow-brutalism bg-roseLight hover:bg-roseBase transition text-2xl font-extrabold"
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 border-2 border-black shadow-brutalism w-full">
          <h2 className="text-4xl font-extrabold mb-4">Отримати результат</h2>
          <p className="text-black text-base font-semibold mb-4">Введіть свою електронну пошту, щоб отримати результат.</p>

          <input
            type="email"
            placeholder="Введіть вашу пошту"
            className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism px-3 py-2 mb-6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="px-9 py-4 border-2 border-black shadow-brutalism bg-roseLight hover:bg-roseBase transition text-2xl font-extrabold"
            onClick={handleSubmitEmail}
          >
            Отримати результат
          </button>
        </div>
      )}
    </div>
    {popup && (
        <div className="z-[50] absolute text-black top-10 bg-purpleLight                                            px-4 py-2 border-2 border-black shadow-brutalism transition-opacity">
          Лист успішно відправлено!
        </div>
      )} 
    <div
    className="z-1 absolute inset-0 h-full w-full bg-roseLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
    </main>
    </>
  );
}
