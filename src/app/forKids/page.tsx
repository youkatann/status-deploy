'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { studyKids612, studyKids1318, examsTypes } from "@/data";
import Navbar from "@/components/sections/navbar/navbar";
import Cursor from "@/components/ui/cursor";
import Test from "@/components/sections/test/test";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/solid';

export interface IForKids {}

export default function ForKids(props: IForKids) {
  const data = {
    left: {
      title: "Як записатися",
      description: "Залишилося всього 7 кроків до знавця англійської мови",
      timeline: [
        { title: "Залиш заявку", text: "домовимося про зручний час зустрічі" },
        { title: "Пройди короткий вступний тест", text: "визначимо наявний рівень знань" },
        { title: "Консультація", text: "де ми деталізуємо твої індивідуальні потреби та цілі" },
        { title: "Підбір оптимальної програми ", text: "й викладача " },
        { title: "Відвідай 2 пробні заняття", text: "щоб зрозуміти темп, навантаження та комфортність заняття" },
        { title: "Підпиши угоду про навчання ", text: "фіксуємо чіткі умови (вартість, тривалість, результат)" },
        { title: "Початок занять!", text: "" },
      ],
    },
    right: {
      title: "У нас ваша дитина отримає:",
      description: "Ми надаємо якомога більше переваг під час вивчення англійської мови",
      cards: [
        { title: "Дружнє та проактивне оточення", text: "яке мотивує до навчання", image: "LetterA.svg" },
        { title: "100% занять - англійською мовою", text: "для занурення у мовне середовище", image: "LetterB.svg" },
        { title: "Ігрову форму навчання", text: "що зробить спілкування англійською невимушеним", image: "LetterC.svg"},
        { title: "Особистий кабінет учня ", text: "з інтерактивним підручником", image: "LetterD.svg" },
        { title: "Постійний супровід у месенджері", text: "для оперативного зв'язку", image: "LetterE.svg"},
        { title: "Динамічний контроль успішності", text: "з детальним звітом для батьків", image: "LetterF.svg"},
        { title: "Фінальний річний іспит ", text: "із сертифікатом і рекомендаціями для подальшого навчання", image: "LetterG.svg"},
      ],
    },
  };
  const [status, setStatus] = useState<'online' | 'offline'>('online');
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
    <Navbar/>
    <Cursor/>
    <main>
    <section className="relative">
    <div className="z-1 flex flex-col md:flex-row w-full h-fit lg:h-screen py-28 px-12 gap-6">
      {/* Left Column */}
      <div className="w-full md:w-1/2 flex flex-col mt-16">
        <h2 className="text-4xl font-extrabold mb-2">{data.left.title}</h2>
        <p className="mb-4">{data.left.description}</p>
        <div className="relative flex">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-purpleLight"></div>
          <div className="ml-8 flex flex-col gap-4">
            {data.left.timeline.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Circle */}
                <div className="absolute left-[-22px] top-1 h-4 w-4 bg-purpleLight border-2 border-black "></div>
                <div className="bg-white border-2 border-black  shadow-brutalism p-2">
                  <h3 className="text-xl font-extrabold">{item.title}</h3>
                  <p className="text-black ">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 flex flex-col mt-16">
        <h2 className="text-4xl font-extrabold mb-2">{data.right.title}</h2>
        <p className="mb-4">{data.right.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.right.cards.map((card, index) => (
            <div
              key={index}
              className="relative p-4 bg-white shadow-brutalism border-2 border-black "
            >
              <h3 className="text-xl font-extrabold">{card.title}</h3>
              <p className="text-black ">{card.text}</p>
              <img className="w-12 h-12 absolute top-0 right-0" src={`/images/${card.image}`}/>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div
    className="z-[-1] absolute inset-0 h-full w-full bg-greenLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
    <Test/>
    <section className="relative h-fit pb-96 lg:pb-8 lg:h-screen flex flex-col justify-center items-center bg-gray-100 p-8 border-t-2 border-black ">
      <h2 className="z-[10] text-5xl lg:text-8xl font-bold text-black  mb-8">На курсі ти:</h2>
      <div className="z-[10] flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full max-w-lg bg-white shadow-brutalism border-2 border-black  p-6">
          <h3 className="text-2xl font-extrabold text-black  mb-4">Розкриєш свій потенціал в англійській мові!</h3>
          <p className="text-gray-600">Забудь про нудні підручники – ми допоможемо тобі опанувати англійську за програмою МОН так, щоб ти не тільки здолав тест, а й почувався впевнено в реальних життєвих ситуаціях</p>
        </div>

        <div className="w-full max-w-lg bg-white shadow-brutalism border-2 border-black  p-6">
          <h3 className="text-2xl font-extrabold text-black  mb-4">Прокачаєш лексику та граматику на максимум!</h3>
          <p className="text-gray-600">Усі теми, які можуть бути на НМТ, ми розберемо до дрібниць: круті слова, цікаві правила й прості способи їх запам’ятати. Ніяких "зубрінь"! Ми покажемо, як застосовувати знання на практиці</p>
        </div>
        <div className="w-full max-w-lg bg-white shadow-brutalism border-2 border-black  p-6">
          <h3 className="text-2xl font-extrabold text-black  mb-4">Навчишся "грати" з тестами, як професіонал!</h3>
          <p className="text-gray-600">Ти дізнаєшся, як виглядає структура тесту, які хитрощі допоможуть швидше розуміти завдання, як знаходити правильні відповіді навіть у складних текстах і грамотно розподіляти час, щоб встигнути все й навіть більше</p>
        </div>
      </div>
      <div className="absolute bottom-12 px-8 lg:px-12 z-[13] w-full flex flex-col lg:flex-row justify-between items-center">
        <h3 className="text-xl lg:text-4xl font-extrabold">Твій шлях до успіху починається тут!<br/> Власне майбутнє створюй сьогодні!</h3>
        <button
        className='z-[13] w-fit px-9 py-4 border-2 border-black shadow-brutalism bg-purpleLight text-2xl font-extrabold mt-12'
        >Тестування</button>
      </div>
      <div
    className="z-1 absolute inset-0 h-full w-full bg-blueLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
    <section className="relative flex flex-col justify-center p-8 lg:py-28 lg:px-12 border-t-2 border-black">
      <h2 className="text-2xl lg:text-5xl font-extrabold text-black mb-4">Вивчати англійську — це просто кайф! Нові друзі, круті можливості та цікаві заняття. Закордонні подорожі влітку разом зі «СТАТУС». Приєднуйся, щоб відкривати світ разом!
</h2>
      <h3 className="text-2xl text-black mt-4 mb-6">Всі навчальні програми відповідають вимогам МОН України та CEFR</h3>

      <div className="mt-8 flex items-center mb-8">
        <span className="mr-4 text-2xl lg:text-xl font-bold text-black ">Навчання:</span>
        <button
          className={`text-lg lg:text-2xl font-bold px-4 py-2 border-2 border-black shadow-brutalism ${status === 'online' ? 'bg-purpleAccent text-black' : 'bg-white text-black '}`}
          onClick={() => setStatus('online')}
        >
          Online
        </button>
        <button
          className={`text-lg lg:text-2xl font-bold px-4 py-2 ml-4 border-2 border-black shadow-brutalism ${status === 'offline' ? 'bg-purpleAccent text-black' : 'bg-white text-black '}`}
          onClick={() => setStatus('offline')}
        >
          Offline
        </button>
      </div>

      {status === 'offline' && (
        <p className="text-2xl font-bold text-black mb-8">
          Адреса: місто Полтава, вул. Соборності, 66, офіс 712.
        </p>
      )}

      <div className="w-full mt-12 ">
        <div className="flex flex-col p-4 md:p-0 md:flex-row border-2 border-black bg-white shadow-brutalism mb-4">
          <button
            className={`w-full md:w-1/3 py-2 text-lg lg:text-2xl font-extrabold text-center ${activeTab === 0 ? 'border-b-4 mb-2 border-purpleAccent text-purpleAccent' : 'text-gray-600'}`}
            onClick={() => setActiveTab(0)}
          >
            Англійська для дітей 6-12 років

          </button>
          <button
            className={`w-full md:w-1/3 text-lg lg:text-2xl font-extrabold text-center ${activeTab === 1 ? 'border-b-4 mb-2 border-purpleAccent text-purpleAccent' : 'text-gray-600'}`}
            onClick={() => setActiveTab(1)}
          >
            Англійська для підлітків 13-18 років

          </button>
          <button
            className={`w-full md:w-1/3 text-lg lg:text-2xl font-extrabold text-center ${activeTab === 2 ? 'border-b-4 mb-2 border-purpleAccent text-purpleAccent' : 'text-gray-600'}`}
            onClick={() => setActiveTab(2)}
          >
            Підготовка до НМТ
          </button>
        </div>

        <div className="p-2 lg:p-8 bg-white shadow-brutalism border-2 border-black shadow-brutalism">
          {activeTab === 0 && 
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
                    {
                                studyKids612.map((studyKid612, index) => {
                                    return <TypeCard key={index} {...studyKid612} />
                                })
                    }</div>
          }
          {activeTab === 1 &&             
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
                {
                              studyKids1318.map((studyKid1318, index) => {
                                return <TypeCard key={index} {...studyKid1318} />
                              })
                }</div>}
          {activeTab === 2 &&  
          <div>
          <div className="flex flex-col lg:flex-row justify-between border-2 border-black  shadow-brutalism bg-white p-8">
    <div className="space-y-4">
        <h2 className="text-4xl font-extrabold text-black  mb-8">Готовий підкорювати НМТ з англійської?</h2>
        <p className="text-xl font-bold text-black max-w-lg">Цей курс – твій ключ до твого майбутнього!</p>
        <p className="text-lg text-black max-w-lg">
          <span className="text-xl font-bold">Успіх на НМТ</span> = рівень знань + розуміння формату тесту + сформовані навички виконання завдань</p>
      </div>

      <div className="mt-20">
        <h3 className="text-xl font-bold text-black  mb-2">Команда досвідчених професіоналів</h3>
        <p className="text-lg text-black max-w-lg">
          З понад 10-річним стажем підготовки до міжнародних іспитів PEIC та НМТ (ЗНО) допоможе набрати максимальні бали на
          іспиті та стати студентом омріяного ВНЗ!
        </p>
      </div>
      </div>
      <div className="w-full flex flex-col gap-4 lg:gap-0  lg:flex-row justify-between">
      {
                              examsTypes.map((examsType, index) => {
                                return <TypeCard key={index} {...examsType} />
                              })
                }

      </div>
      </div>
      }
        </div>
       </div>
      <div
    className="z-[-1] absolute inset-0 h-full w-full bg-greenLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
    </main>
    </>
  );
}

type TypeCardProps = {
  title: string;
  price: string;
  calendar: string;
  estimate: string;
  group: string;
  order: string;
  course?: string;
}

const TypeCard = function Index({title, price, calendar, estimate, group, order, course}: TypeCardProps) {

    const MotionBoltIcon = motion(BoltIcon)
    const MotionArrowRightIcon = motion(ArrowRightIcon)
    const [isHover, setIsHover] = React.useState(false);
    
    return (
        <motion.div
    className="relative flex shrink-0 h-fit grid flex-col p-8 w-full lg:w-[49%] justify-between cursor-pointer border-2 border-black  shadow-brutalism overflow-clip"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false , amount: 0.8 }}
        onMouseEnter={()=> setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        transition={{ duration: 0.8, ease: "backInOut" }}
        style={{
          backgroundColor: "#fff"
        }}
      >
        <motion.h3 
        className=" z-10 text-3xl font-black  text-black  leading-[0.9] tracking-tighter"
        >{title}</motion.h3>
        <div className='z-10 mt-12 bg-greenLight w-fit h-fit'>
        <motion.h4
        className="z-10 text-2xl font-bold h-fit w-fit p-4 border-2 border-black  shadow-brutalism leading-[0.9] tracking-tighter text-black ">
        {price}
        </motion.h4>
        </div>
        <div
        className='flex items-center gap-4 mt-24'
        >
        <MotionBoltIcon
        className='z-10 w-8 h-8 p-2 border-2 border-black  shadow-brutalism'
        animate={{
          color: isHover ? "#fff" : "#18181b",
          backgroundColor: isHover ? "#18181b" : "#A388EE",
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
        />
        <motion.p 
        className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
        >{calendar}</motion.p></div>
        <div
        className='flex items-center gap-4 mt-4'
        >
        <MotionBoltIcon
        className='z-10 w-8 h-8 border-2 border-black  shadow-brutalism p-2'
        animate={{
          color: isHover ? "#fff" : "#18181b",
          backgroundColor: isHover ? "#18181b" : "#A388EE",
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
        />
        <motion.p 
        className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
        >{estimate}</motion.p></div>
        <div
        className='flex items-center gap-4 mt-4'
        >
        <MotionBoltIcon
        className='z-10 w-8 h-8 border-2 border-black  shadow-brutalism p-2'
        animate={{
          color: isHover ? "#fff" : "#18181b",
          backgroundColor: isHover ? "#18181b" : "#A388EE",
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
        />
        <motion.p 
        className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
        >{group}</motion.p></div>
                <div
        className='flex items-center gap-4 mt-4'
        >
        <MotionBoltIcon
        className='z-10 w-8 h-8 border-2 border-black  shadow-brutalism p-2'
        animate={{
          color: isHover ? "#fff" : "#18181b",
          backgroundColor: isHover ? "#18181b" : "#A388EE",
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
        />
        <motion.p 
        className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
        >{order}</motion.p></div>
        <div
        className='flex items-center gap-4 mt-4'
        >
        <MotionBoltIcon
        className='z-10 w-8 h-8 border-2 border-black  shadow-brutalism p-2'
        animate={{
          color: isHover ? "#fff" : "#18181b",
          backgroundColor: isHover ? "#18181b" : "#A388EE",
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
        />
         <motion.p 
        className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
        >{course}</motion.p></div>
        <motion.div 
        className="hidden absolute z-10 top-8 right-8 md:flex justify-center items-center w-12 h-12 border-2 border-black  shadow-brutalism"
        animate={{
            rotate: isHover ? "45deg" : "0deg",
            backgroundColor: isHover ? "#fff" : "#A388EE",
        }}
        transition={{
          duration: 0.8,
          ease: 'backInOut'
        }}
        >

        <MotionArrowRightIcon 
        className="w-4 h-4"
        animate={{
          color: "#000"
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
        />
        </motion.div>
        <motion.div
        className='hidden md:inline absolute z-0 top-8 right-8 w-12 h-12 border-2 border-black  shadow-brutalism bg-purpleAccent'
        animate={{
          scale: isHover ? 45 : 1,
        }}
        transition={{
          duration: 0.8,
          scale: { type: "spring", visualDuration: 0.6, bounce: 0.2 },
        }}
        >
       
        </motion.div>
        <button
        className='z-[13] w-fit px-9 py-4 border-2 border-black  shadow-brutalism bg-purpleLight text-2xl font-extrabold self-end mt-12'
        >Залишити заявку</button>
      </motion.div>
    )
}