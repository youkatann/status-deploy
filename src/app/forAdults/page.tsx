'use client'
import {
  SetStateAction,
  Dispatch } from "react";
import { ReactNode } from "react";
import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar/navbar";
import Cursor from "@/components/ui/cursor";
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/solid';
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const AccordianContext = createContext({
  selected: null as string | null | undefined,
  setSelected: (() => {}) as Dispatch<SetStateAction<string | null | undefined>>,
})

export interface IForAdults {}

export default function ForAdults(props: IForAdults) {

  const [status, setStatus] = useState<'online' | 'offline'>('online');
  const [activeTab, setActiveTab] = useState<number>(0);
  const [result, setResult] = React.useState("Отримати консультацію");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setResult("Відправляємо...");
      
      const form = e.currentTarget as HTMLFormElement; // Cast e.currentTarget to HTMLFormElement
      const formData = new FormData(form); // Now we can treat 'form' as HTMLFormElement
    
      formData.append("access_key", "f1f9dac4-19e1-41fc-8b8d-22ca7afaff14");
    
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
    
      const data = await response.json();
    
      if (data.success) {
        setResult("Відправлено");
        form.reset(); // Reset the form
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
  const data = {
    left: {
      title: "Ви отримуєте:",
      description: "Ми надаємо якомога більше переваг під час вивчення англійської мови",
      timeline: [
        { title: "Первинна консультація", text: "обговорення потреб вашого бізнесу, цілей навчання та очікуваних результатів" },
        { title: "Вступне тестування колективу", text: "оцінка поточного рівня знань і навичок співробітників для визначення їхніх потреб у навчанні" },
        { title: "Підбір програми навчання", text: "розробка індивідуальної програми, яка відповідає специфіці вашого бізнесу та цілям навчання" },
        { title: "Пробні заняття", text: "можливість ознайомитися з форматом навчання та викладачами перед початком основного курсу" },
        { title: "Адаптивний графік занять", text: "гнучкий розклад, який може проводитися онлайн або на території вашого бізнесу, що дозволяє співробітникам зручно інтегрувати навчання у свій робочий процес" },
        { title: "Постійний супровід", text: "методист та особистий менеджер забезпечують підтримку співробітників протягом усього періоду навчання" },
        { title: "Щомісячний звіт про результати навчання", text: "регулярне інформування куратора від компанії про прогрес співробітників та досягнуті результати" },
        { title: "Адаптивне коригування програми", text: "внесення змін у програму навчання з урахуванням змін у бізнесі або нових потреб співробітників" },
      ],
    },
    right: {
      title: "У нас ваша дитина отримає:",
      description: "Ми надаємо якомога більше переваг під час вивчення англійської мови",
      cards: [
        { title: "Дружнє та проактивне оточення", text: "яке мотивує до навчання" },
        { title: "100% занять - англійською мовою", text: "для занурення у мовне середовище" },
        { title: "Ігрову форму навчання", text: "що зробить спілкування англійською невимушеним" },
        { title: "Особистий кабінет учня ", text: "з інтерактивним підручником" },
        { title: "Постійний супровід у месенджері", text: "для оперативного зв'язку" },
        { title: "Динамічний контроль успішності", text: "з детальним звітом для батьків" },
        { title: "Фінальний річний іспит ", text: "із сертифікатом і рекомендаціями для подальшого навчання" },
      ],
    },
  };
  const MotionBoltIcon = motion(BoltIcon)
  return (
    <>
    <Cursor/>
    <Navbar/>
    <main>
    <section className="relative w-full h-fit lg:h-screen py-28 px-12">
        <div className="mt-24 flex flex-col w-full md:w-2/3">
    <h1 className="text-4xl md:text-7xl text-white font-extrabold">Мовний Центр «STATUS» - <br/>понад 17 років якісного навчання для бізнесу!</h1>
    <p className="mt-12 text-2xl text-white text-balance">Англійська мова є ключовою для міжнародного бізнесу і дозволяє ефективно укладати контракти, вести переговори та розширювати ринки збуту. Англійська відкриває доступ до найновішої інформації, навчання та технологій, що сприяє успіху у Вашому бізнесі</p>
    <p className="mt-36 p-4 md:p-8 bg-white border-2 border-black shadow-brutalism text-lg md:text-xl font-bold"><span className="p-2 bg-greenLight border-2 border-black shadow-brutalism mr-4 leading-[3]">Для кого:</span>міжнародні корпорації, приватні та державні установи в галузях IT, логістики, маркетингу, нафто-газу, агробізнесу, тютюнового виробництва та інших.</p>
    </div>
    <div
    className="z-[-1] absolute inset-0 h-full w-full bg-[#141516] bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
    <section className="relative">
    <div className="z-1 flex flex-col md:flex-row w-full py-12 px-12 gap-6">
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
                <div className="bg-white border-2 border-black  shadow-brutalism p-2 max-w-xl">
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
      <form onSubmit={onSubmit} className="space-y-8">
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="name">Ім'я</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism p-6" id="name" name="Ім'я" placeholder="Введіть ім'я"></input>
    </div>
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="phone">Номер телефону</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism p-6" id="phone" name="Номер телефону" placeholder="Введіть номер телефону"></input>
    </div>
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="email">Компанія</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism p-6" id="email" name="Email" placeholder="Компанія"></input>
    </div>
<button className="z-[13] text-2xl font-extrabold px-9 py-4 border-2 border-black shadow-brutalism bg-roseLight" type="submit">
 {result}
</button>
</form>
      </div>
    </div>
    <div
    className="z-[-1] absolute inset-0 h-full w-full bg-greenLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
        <section className="relative flex flex-col justify-center p-8 md:py-28 md:px-12 border-t-2 border-black">
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center mb-8 bg-white shadow-brutalism w-full p-4">
            <span className="text-2xl lg:text-4xl font-bold text-black ">Навчання:</span>
            <button
              className={`text-lg lg:text-2xl mt-4 sm:mt-0 sm:ml-4 font-bold px-4 py-2 border-2 border-black shadow-brutalism ${status === 'online' ? 'bg-purpleAccent text-black' : 'bg-white text-black '}`}
              onClick={() => setStatus('online')}
            >
              Online
            </button>
            <button
              className={`text-lg lg:text-2xl font-bold mt-4 sm:mt-0 sm:ml-4 px-4 py-2 border-2 border-black shadow-brutalism ${status === 'offline' ? 'bg-purpleAccent text-black' : 'bg-white text-black '}`}
              onClick={() => setStatus('offline')}
            >
              Offline
            </button>
          </div>
    
          {status === 'offline' && (
            <p className="text-2xl font-bold text-white mb-8">
              Адреса: місто Полтава, вул. Соборності, 66, офіс 712.
            </p>
          )}
    
          <div className="w-full mt-12 ">
            <div className="flex border-2 border-black bg-white shadow-brutalism mb-4">
              <button
                className={`w-1/3 py-2 text-lg lg:text-2xl font-extrabold text-center ${activeTab === 0 ? 'border-b-4 mb-2 border-purpleAccent text-purpleAccent' : 'text-gray-600'}`}
                onClick={() => setActiveTab(0)}
              >
                General English
    
              </button>
              <button
                className={`w-1/3 py-2 text-lg lg:text-2xl font-extrabold text-center ${activeTab === 1 ? 'border-b-4 mb-2 border-purpleAccent text-purpleAccent' : 'text-gray-600'}`}
                onClick={() => setActiveTab(1)}
              >
                Business English
    
              </button>
              <button
                className={`w-1/3 py-2 text-lg lg:text-2xl font-extrabold text-center ${activeTab === 2 ? 'border-b-4 mb-2 border-purpleAccent text-purpleAccent' : 'text-gray-600'}`}
                onClick={() => setActiveTab(2)}
              >
                English for special purposes
              </button>
            </div>
    
            <div className="p-8 bg-white shadow-brutalism border-2 border-black">
              {activeTab === 0 && 
                        <div className="flex flex-col">
                          <motion.h3 
                          className=" z-10 text-3xl font-black  text-black  leading-[0.9] tracking-tighter"
                          >General English
                          </motion.h3>
                          <motion.h4
                        className="z-10 text-2xl font-bold h-fit w-fit p-4 border-2 border-black shadow-brutalism leading-[0.9] tracking-tighter text-black mt-8 bg-greenLight">
                        від 300 грн/год.
                        </motion.h4>
                          <div
                          className='flex items-center gap-4 mt-24'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          > курс від 50 занять</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >4-6 міс.</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >група 6-8 людей</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >заняття 60/90 хв.</motion.p>
                          </div>
                          <button
                          className='z-[13] w-fit px-9 py-4 border-2 border-black shadow-brutalism bg-purpleLight text-2xl font-extrabold mt-12'
                          >Залишити заявку</button>
                        </div>
              }
              {activeTab === 1 &&     
                    <div className="flex flex-col md:flex-row justify-between">        
                       <div className="flex w-full md:w-[40%] flex-col">
                       <motion.h3 
                       className=" z-10 text-3xl font-black  text-black  leading-[0.9] tracking-tighter"
                       >Business English
                       </motion.h3>
                       <motion.h4
                        className="z-10 text-2xl font-bold h-fit w-fit p-4 border-2 border-black shadow-brutalism leading-[0.9] tracking-tighter text-black mt-8 bg-purpleLight">
                        від 400 грн/год.
                        </motion.h4>
                       <div
                          className='flex items-center gap-4 mt-24'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          > курс від 30 занять</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >від 3 міс.</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >група 6-8 людей</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >заняття 60/90 хв.</motion.p>
                          </div>
                     </div>
                     <div className="mt-8 md:mt-0 w-full md:w-[60%]">
                      <Accordian>
                          <AccordianItem value="1" trigger="Юридичний" image="police-badge.png">
                          <div>Ми пропонуємо різноманітні курси, адаптовані для різних вікових груп і рівнів знань. Наші програми включають курси загальної англійської, ділової англійської та підготовки до іспитів. Кожен курс призначений для ефективного вдосконалення ваших мовних навичок.</div>
                          </AccordianItem>
                          <AccordianItem value="2" trigger="Фінансовий" image="pie-chart.png">
                          Зареєструватися легко! Просто відвідайте наш веб-сайт і заповніть реєстраційну форму. Наша команда зв'яжеться з вами, щоб завершити вашу реєстрацію.
                          </AccordianItem>
                      </Accordian>
                      </div>
                     </div>
                     }
              {activeTab === 2 &&  
              <div className="flex flex-col md:flex-row justify-between">    
                <div className="flex w-full md:w-[40%] flex-col">
                <motion.h3 
                className=" z-10 text-3xl font-black  text-black  leading-[0.9] tracking-tighter"
                >Business for special purposes
                </motion.h3>
                <motion.h4
                        className="z-10 text-2xl font-bold h-fit w-fit p-4 border-2 border-black shadow-brutalism leading-[0.9] tracking-tighter text-black mt-8 bg-purpleLight">
                        від 400 грн/год.
                        </motion.h4>
                <div
                          className='flex items-center gap-4 mt-24'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          > курс від 40 занять</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >4-5 міс.</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >група 6-8 людей</motion.p>
                          </div>
                          <div
                          className='flex items-center gap-4 mt-4'
                          >
                          <MotionBoltIcon
                          className='z-10 w-8 h-8 p-2 border-2 border-black shadow-brutalism bg-purpleLight'
                          />
                          <motion.p 
                          className="z-10 font-extrabold text-black  max-w-md text-xl leading-[1.2] tracking-tight whitespace-pre-wrap"
                          >заняття 60/90 хв.</motion.p>
                          </div>
              </div>
              <div className="mt-8 md:mt-0 w-full md:w-[60%]">
                <Accordian>
                          <AccordianItem value="1" trigger="Маркетинг" image="target.png">
                          Ми пропонуємо різноманітні курси, адаптовані для різних вікових груп і рівнів знань. Наші програми включають курси загальної англійської, ділової англійської та підготовки до іспитів. Кожен курс призначений для ефективного вдосконалення ваших мовних навичок.
                          </AccordianItem>
                          <AccordianItem value="2" trigger="Медичний" image="insurance.png">
                          Зареєструватися легко! Просто відвідайте наш веб-сайт і заповніть реєстраційну форму. Наша команда зв'яжеться з вами, щоб завершити вашу реєстрацію.
                          </AccordianItem>
                          <AccordianItem value="3" trigger="Технічний" image="optimization.png">
                          Зареєструватися легко! Просто відвідайте наш веб-сайт і заповніть реєстраційну форму. Наша команда зв'яжеться з вами, щоб завершити вашу реєстрацію.
                          </AccordianItem>
                          <AccordianItem value="4" trigger="Нафтогазовий" image="oil.png">
                          Зареєструватися легко! Просто відвідайте наш веб-сайт і заповніть реєстраційну форму. Наша команда зв'яжеться з вами, щоб завершити вашу реєстрацію.
                          </AccordianItem>
                          <AccordianItem value="5" trigger="Сільське гос-во" image="botany.png">
                          Зареєструватися легко! Просто відвідайте наш веб-сайт і заповніть реєстраційну форму. Наша команда зв'яжеться з вами, щоб завершити вашу реєстрацію.
                          </AccordianItem>
                      </Accordian>
                  </div>
              </div>
          }
            </div>
           </div>
          <div
        className="z-[-1] absolute inset-0 h-full w-full bg-[#141516] bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
        ></div>
        </section>
    <section className="relative py-28 px-12">
    <div 
    className="z-[10] flex flex-col md:flex-row items-start justify-center gap-36"
    >
<form onSubmit={onSubmit} className="space-y-8">
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="name">Ім'я</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism px-3 py-2" id="name" name="Ім'я" placeholder="Введіть ім'я"></input>
    </div>
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="phone">Номер телефону</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism px-3 py-2" id="phone" name="Номер телефону" placeholder="Введіть номер телефону"></input>
    </div>
    <div className='flex flex-col gap-1.5'>
    <label className="text-2xl font-black leading-none mb-4" htmlFor="email">Email (опціонально)</label>
    <input className="flex h-10 w-full text-lg text-black border-2 border-black shadow-brutalism px-3 py-2" id="email" name="Email" placeholder="Введіть Email"></input>
    </div>
    <div className="grid w-fit gap-1.5">
    <Label htmlFor="message">Ваше звернення</Label>
    <Textarea placeholder="Що вас турбує?" id="message" name="Звернення" />
    <p className="text-lg font-extrabold text-black mt-2">
    Наш менеджер обов'язково зв'яжеться з вами протягом робочого дня
    </p>
</div>
<button className="z-[13] text-2xl font-extrabold px-9 py-4 border-2 border-black shadow-brutalism bg-roseLight" type="submit">
 {result}
</button>
</form> 
<div className='flex gap-48 flex-wrap'>
<div className="flex flex-col gap-4 p-4 border-2 border-black shadow-brutalism bg-greenLight">
<h4 className='text-2xl font-black text-black'>Номер телефону</h4>
  <div className="flex flex-col gap-2 border-2 border-black shadow-brutalism p-4">
    <p className='mt-1 text-xl font-bold text-black'>(099) 048-59-79</p>
    <p className='mt-1 text-xl font-bold text-black'>(093) 553-68-08</p>
  </div>
</div>
<div className="flex flex-col gap-4 p-4 border-2 border-black shadow-brutalism bg-greenLight">
    <h4 className='text-2xl font-black text-black'>Електронна пошта</h4>
  <p className='mt-1 text-xl font-bold text-black border-2 border-black shadow-brutalism p-4'>status.ed.pol@gmail.com</p>
</div>
<div className="flex flex-col gap-4 p-4 border-2 border-black shadow-brutalism bg-greenLight">
<h4 className='text-2xl font-black text-black'>Адреса</h4>
  <p className='mt-1 text-xl font-bold text-black border-2 border-black shadow-brutalism p-4'>м. Полтава, вул. Соборності, <br/>66, оф. 712, 36029, Україна</p>
</div>
<div className="flex flex-col gap-4 p-4 border-2 border-black shadow-brutalism bg-greenLight">
<h4 className='text-2xl font-black text-black'>Месенджери</h4>
  <div className="flex flex-col gap-2">
    <div className='border-2 border-black shadow-brutalism p-4'>
    <p className='mt-1 text-xl font-bold text-black'>Instagram Adults</p>
    <p className='mt-1 text-xl font-bold text-black'>Instagram Kids</p>
    <p className='mt-1 text-xl font-bold text-black'>Facebook</p>
    </div>
  </div>
</div>
</div>
</div>
    <div
    className="z-[-1] absolute inset-0 h-full w-full bg-purpleLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
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
  course: string;
}

const TypeCard = function Index({title, price, calendar, estimate, group, order, course}: TypeCardProps) {

  const MotionBoltIcon = motion(BoltIcon)
  const MotionArrowRightIcon = motion(ArrowRightIcon)
  const [isHover, setIsHover] = React.useState(false);
  
  return (
      <motion.div
  className="relative flex shrink-0 h-fit grid flex-col p-8 w-[49%] justify-between cursor-pointer border-2 border-black  shadow-brutalism overflow-clip"
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
      >{course}</motion.p></div>
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
      <motion.div 
      className="absolute z-10 top-8 right-8 flex justify-center items-center w-12 h-12 border-2 border-black  shadow-brutalism"
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
      className='absolute z-0 top-8 right-8 w-12 h-12 border-2 border-black  shadow-brutalism bg-purpleAccent'
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


// Типи пропсів для компонента Accordian
interface AccordianProps {
  children: ReactNode;
  value?: string | null; // Це поточне вибране значення
  [x: string]: any; // Додаткові пропси
}
function Accordian({ children, value, onChange, ...props }: AccordianProps) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

interface AccordianItemProps {
  children: ReactNode;
  value?: string; // Унікальне значення для кожного елементу
  trigger: string; // Текст або контент для тригера (заголовка)
  image: string; // Назва файлу для зображення
  [x: string]: any; // Додаткові пропси
}

function AccordianItem({ children, value, trigger, image, ...props }: AccordianItemProps) {
  const MotionArrowRightIcon = motion(ArrowRightIcon)
  const [isHover, setIsHover] = useState(false);
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value
  const size = 16;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className="border-2 bg-white border-black shadow-brutalism mb-4" {...props}
    >
      <motion.header
        role="button" 
        onClick={() => setSelected(open ? null : value)}
        className="relative flex justify-between items-center p-4 lg:p-6 text-copy text-xl lg:text-4xl font-black leading-[0.9] tracking-tighter overflow-clip"
        onMouseEnter={()=> setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        animate={{
           color: isHover || open ? "#fff" : "#0f172a",
        }}
        transition={{
          duration: 0.8,
          ease: 'backInOut'
        }}
      >
        <div className="flex gap-8  ">
        <div className="z-10">{trigger}</div>
        <img className="w-12 h-12 p-2 border-2 border-black shadow-brutalism bg-greenLight" src={`/images/${image}`} />
        </div>
              <motion.div 
        className="absolute z-10 top-2 right-2 lg:top-4 lg:right-4 flex justify-center items-center w-6 h-6 lg:w-12 lg:h-12 border-2 border-black shadow-brutalism"
        animate={{
            rotate: 
            isHover ? "45deg" : open ? "-90deg" : "90deg",
            backgroundColor: isHover || open ? "#fff" : "#5b21b6",
        }}
        transition={{
          duration: 0.8,
          ease: 'backInOut'
        }}
        >

        <MotionArrowRightIcon 
        className="w-8 h-8 stroke-2"
        animate={{
          color: isHover || open ? "#0f172a": "#fff",
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
        />
        </motion.div>
        <motion.div
        className='absolute z-0 top-2 right-2 w-6 h-6 lg:top-4 lg:right-4 lg:w-12 lg:h-12 bg-[#5b21b6]'
        animate={{
          scale: isHover || open ? 100 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeIn'
        }}
        ></motion.div>
      </motion.header>
      <motion.div
        className="overflow-y-hidden"
        animate={{ 
          height: open ? ref.current?.offsetHeight || 0 : 0 
        }}
        transition={{
          duration: 0.8,
          ease: 'backInOut'
        }}
      >
        <div className="text-md lg:text-2xl font-normal w-full lg:w-2/4 text-copy opacity-80 p-4 lg:p-8 leading-[1.2] tracking-tight" ref={ref}>
          {children}
        </div>
      </motion.div>
    </li>
  )
}