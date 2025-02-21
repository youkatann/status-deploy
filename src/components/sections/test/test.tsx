import { useState, useRef } from 'react';
import Curve from '@/components/ui/curve';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface ITestProps {
}

export default function Test (props: ITestProps) {

  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const scrollAnimationY = useTransform(scrollYProgress, [0, 0.5], [500, 0])

  return (
    <section ref={container} className="relative flex flex-col gap-10 min-h-screen w-full p-4 lg:py-28 lg:px-16 z-2 justify-center bg-beige border-t-2 border-black">
      <motion.div
      style={{
        y: scrollAnimationY
      }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
      }}
      className='z-[10] bg-pinkLight p-4 md:p-16 border-2 border-black shadow-brutalism'>
      <div
      className='flex flex-col'
      >
      <div
      className='flex flex-col gap-8 justify-start md:flex-row md:justify-between items-start'
      >
        <h2 className="text-xl font-extrabold text-black top-48 bg-white p-8 border-2 border-black shadow-brutalism uppercase w-full">А як обрати курс?</h2>
        <p className="text-xl lg:text-3xl font-black  text-black leading-[1.2] text-balance tracking-tight w-fit">ПРОЙДІТЬ ТЕСТУВАННЯ ТА ОБЕРІТЬ ПРАВИЛЬНИЙ КУРС ДЛЯ ВАС АБО ВАШОЇ ДИТИНИ</p>
        </div>
        <Curve curveColor="#000"/>
        </div>
        <div
        className='flex flex-col md:flex-row justify-between items-center border-2 border-black shadow-brutalism p-4 md:p-8 bg-pinkBase'>
          <h3
          className='text-2xl lg:text-5xl font-black lg:max-w-lg w-2/4 lg:w-full text-black leading-[1.2] text-balance tracking-tight'
          >Обери саме те, що тобі потрібно</h3>
             <motion.button
      className="mt-8 lg:mt-16 bg-white w-fit p-8 lg:px-20 lg:py-16 text-lg lg:text-2xl font-bold text-black border-2 border-black shadow-brutalism"
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
      onClick={() => window.location.href = `/test`}
      animate={{
        backgroundColor: isButtonHovered ? "#C4A1FF" :  "#fff"  ,
      }}
      transition={{
        duration: 0.6,
        type: "spring", 
        visualDuration: 0.4, 
        bounce: 0.2,
      }}
      >
            <TypeAnimation
      sequence={[
        'Натискай, щоб',
        1000,
        'Пройти тестування',
        1000,
        'Дізнатись свій рівень',
        1000,
        'Обрати вірно',
        1000
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
      </motion.button>
        </div>
        </motion.div>
        <div
    className="z-[0] absolute inset-0 h-full w-full bg-beige bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
  );
}
