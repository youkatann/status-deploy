'use client'
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export interface ICoursesProps {
}
export default function Courses (props: ICoursesProps) {

  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const scrollAnimationY = useTransform(scrollYProgress, [0, 0.3, 0.4, 1], [200, 0, 0, 900])
  const scrollAnimationX1 = useTransform(scrollYProgress, [0, 0.3], [800, 0])
  const scrollAnimationX2 = useTransform(scrollYProgress, [0, 0.4], [800, 0])
  const scrollAnimationX3 = useTransform(scrollYProgress, [0, 0.5], [800, 0])

  return (
    <section ref={container} className="relative h-fit flex flex-col xl:flex-row p-4 xl:py-28 xl:px-16 justify-between border-t-2 border-black gap-16">
        <motion.div className="z-[10] flex flex-col gap-12 w-full xl:w-2/4"
        style={{
          y: scrollAnimationY
        }}
        transition={{
          duration: 0.6,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
        }}
        >
        <h2 className=" text-5xl xl:text-8xl xl:text-[110px] leading-[0.8] tracking-tighter text-pretty font-extrabold">Співпраця, <br/>яку ми пропонуємо</h2>
        <p className="text-2xl leading-[0.9] tracking-tighter text-pretty font-medium">Розкрийте свій потенціал разом із нами! Наші курси створені для тих, хто хоче отримати практичні знання та навички, що відкривають нові можливості. Обирайте з широкого спектра напрямків – від IT і маркетингу до особистісного розвитку. Пориньте у навчання, яке працює на вас! </p>
<motion.button className="z-[13] px-9 py-4 border-2 border-black shadow-brutalism bg-purpleLight w-fit" type="submit"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          animate={{
            backgroundColor: isButtonHovered ? "#A388EE" : "#C4A1FF",
          }}
          transition={{
            duration: 0.6,
            type: "spring", 
            visualDuration: 0.4, 
            bounce: 0.2,
          }}
          > 
            <p className="z-[13] text-2xl font-extrabold">
            <TypeAnimation
              sequence={[
                'Записатись на курс',
                2000,
                'Залишити заявку',
                2000,
                'Отримати шанс',
                2000,
                'Вивчити англійську',
                2000
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
            </p>
          </motion.button>
        </motion.div>
        <div className="z-[10] w-full xl:w-2/4 flex flex-col gap-12">
        <motion.div className="relative flex flex-col gap-8 w-full bg-blueLight border-2 border-black shadow-brutalism p-4 xl:p-8"
            style={{
              x: scrollAnimationX1
            }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
          >
          <div className="flex justify-between items-center border-b-2 border-black pb-8 pr-0 xl:pr-8">
            <h3 className="text-2xl xl:text-4xl leading-[0.9] tracking-tighter text-pretty font-black">Для компаній</h3>
            <p className="uppercase font-bold text-sm xl:text-base">online / offline</p>
          </div>
            <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Індивідуальні заняття</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 600 грн/год</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Групові заняття</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 230 грн/год</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Підготовка до НМТ</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 9000 грн/курс</p>
            </div>
            <img className="z-[20] scale-[0.4] absolute top-[-80px] right-[-80px]" src='/images/octangle.svg'/>
          </div>
          </motion.div>
          <motion.div className="relative flex flex-col gap-8 w-full bg-pinkLight border-2 border-black shadow-brutalism p-4 xl:p-8"
            style={{
              x: scrollAnimationX2
            }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
            >
          <div className="flex justify-between items-center border-b-2 border-black pb-8 pr-0 xl:pr-8"
          >
            <h3 className="text-2xl xl:text-4xl leading-[0.9] tracking-tighter text-pretty font-black">Для дорослих</h3>
            <p className="uppercase font-bold text-sm xl:text-base">online / offline</p>
          </div>
            <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Індивідуальні заняття</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 600 грн/год</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Групові заняття</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 230 грн/год</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Підготовка до НМТ</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 9000 грн/курс</p>
            </div>
            <img className="z-[20] scale-[0.5] absolute top-[-80px] right-[-80px]" src='/images/triangle.svg'/>
          </div>
          </motion.div>
          <motion.div className="relative flex flex-col gap-8 w-full bg-purpleLight border-2 border-black shadow-brutalism p-8"
            style={{
              x: scrollAnimationX3
            }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
            >
          <div className="flex justify-between items-center border-b-2 border-black pb-8 pr-0 xl:pr-8">
            <h3 className="text-2xl xl:text-4xl leading-[0.9] tracking-tighter text-pretty font-black">Для дітей</h3>
            <p className="uppercase font-bold text-sm xl:text-base">online / offline</p>
          </div>
            <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Індивідуальні заняття</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 600 грн/год</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Групові заняття</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 230 грн/год</p>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism">
            <h4 className="text-lg md:text-2xl leading-[0.9] tracking-tighter text-pretty font-bold">Підготовка до НМТ</h4>
            <p className="text-base xl:text-xl font-black mt-4 md:mt-0">від 9000 грн/курс</p>
            </div>
            <motion.img
            className="z-[20] scale-[0.4] absolute top-[-80px] right-[-80px]" src='/images/circle.svg'/>
          </div>
          </motion.div>
        </div>
        <div
    className="z-1 absolute inset-0 h-full w-full bg-beige bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>  
  );
}
