'use client'
import { createContext, useContext, useRef, useEffect, useState, ReactNode, Dispatch, SetStateAction } from "react"
import { motion, useScroll, useTransform } from 'framer-motion';
import Curve from "@/components/ui/curve"
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid"

const AccordianContext = createContext({
  selected: null as string | null | undefined,
  setSelected: (() => {}) as Dispatch<SetStateAction<string | null | undefined>>,
})

export default function FAQ() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const scrollAnimationX = useTransform(scrollYProgress, [0, 0.2, 0.55, 0.65], [-500, 0, 0, -500])
  const scrollAnimationX1 = useTransform(scrollYProgress, [0, 0.2, 0.55, 0.65], [700, 0, 0, 700])
  const scrollAnimationY = useTransform(scrollYProgress, [0.2, 0.5], [500, 0])
  const height = useTransform(scrollYProgress, [0, 0.8], [50, 0])

  const MotionQuestionMarkCircleIcon = motion(QuestionMarkCircleIcon)
    return (
        <section ref={container} className="relative flex flex-col p-4 lg:pt-28 lg:px-16 bg-indigo-50 border-t-2 gap-16 border-black">
        <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row gap-20">
                <motion.div 
                className="w-full lg:w-2/4 flex gap-4"
                style={{
                    x: scrollAnimationX
                }}
                transition={{
                    duration: 2,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
                  }}
                >
                <h2 className="text-4xl font-extrabold p-4 bg-white border-2 border-black w-fit shadow-brutalism h-fit">Не знайшли відповідь<br/>на своє запитання?</h2>
                <motion.div 
                className='h-full'
                style={{
                    x: -60,
                    y: -35,
                }}
                transition={{
                    duration: 0.6,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
                  }}
                >
                </motion.div>
                </motion.div>
                <motion.div 
                className="w-full lg:w-2/4 flex justify-end items-end"
                style={{
                    x: scrollAnimationX1
                }}
                transition={{
                    duration: 2,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
                  }}
                >
                  <motion.p 
                className="relative text-xl lg:text-3xl font-semibold max-w-full lg:max-w-screen-lg tracking-tight font-blackleading-[1.2] border-2 border-black shadow-brutalism p-8 lg:p-4 bg-white">
                   Знайдіть відповіді на поширені запитання про наші програми та послуги з вивчення англійської мови
                    <img className="z-[20] absolute scale-[0.5] top-[-80px] right-[-80px]" src='/images/octangle.svg'/>
                  </motion.p>
                </motion.div>
              </div>
        <Curve curveColor="#0f172a"/>
        </div>
        <div className='flex mb-10 z-[20]'>
                <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className='pr-12 m-0 text-5xl lg:text-9xl uppercase font-black text-[#5b21b6] leading-[0.9] tracking-tight flex flex-shrink-0'
                >
                  Не гадай, дізнайся у нас!  —</motion.div>
                  <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className='pr-12 m-0 text-5xl lg:text-9xl uppercase font-black text-[#5b21b6] leading-[0.9] tracking-tight flex flex-shrink-0'
                >
                  Не гадай, дізнайся у нас! —</motion.div>
              </div>
        <motion.div 
        style={{
            y: scrollAnimationY
          }}
          transition={{
            duration: 0.6,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
          }}
        >
        <Accordian>
            <AccordianItem value="1" trigger="01.  Які курси ви пропонуєте?">
            Ми пропонуємо різноманітні курси, адаптовані для різних вікових груп і рівнів знань. Наші програми включають курси загальної англійської, ділової англійської та підготовки до іспитів. Кожен курс призначений для ефективного вдосконалення ваших мовних навичок.
            </AccordianItem>
            <AccordianItem value="2" trigger="02.  Як мені зареєструватися?">
            Зареєструватися легко! Просто відвідайте наш веб-сайт і заповніть реєстраційну форму. Наша команда зв'яжеться з вами, щоб завершити вашу реєстрацію.
            </AccordianItem>
            <AccordianItem value="3" trigger="03.  Який розмір групи?">
            Ми підтримуємо невеликі розміри класів, щоб забезпечити індивідуальну увагу кожному студенту. Зазвичай у наших класах не більше 10 учнів. Це забезпечує кращу взаємодію та взаємодію під час уроків.
            </AccordianItem>
            <AccordianItem value="4" trigger="04.  Є іспити?">
            Так, ми пропонуємо курси підготовки до іспитів, щоб допомогти студентам підготуватися до різноманітних тестів на знання англійської мови. До них входять іспити IELTS, TOEFL і Cambridge. Наші досвідчені інструктори нададуть індивідуальні рекомендації, щоб максимізувати ваш успіх.
            </AccordianItem>
        </Accordian>
        </motion.div>
          <motion.div 
          className="relative mt-[100px]"
          style={{height
          }}>
            <div className="absolute h-[1550%] w-[120%] -left-[10%] bg-indigo-50 rounded-b-[50%] z-[1] shadow-circle"></div>
          </motion.div>
        </section>
    )
}

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