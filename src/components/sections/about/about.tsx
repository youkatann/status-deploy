'use client';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { aboutAdvantages } from "@/data";
import { useState, useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/solid';
import Curve from "@/components/ui/curve"
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from './model';

interface DescriptionProps {
  text: string;
}

interface AdvantageProps {
  title: string;
  descriptions: DescriptionProps[];
  link: string;
}
export default function Index() {
    
  function Advantage({ title, descriptions }: AdvantageProps) {
    
    const [isHover, setIsHover] = useState(false)
    const MotionArrowRightIcon = motion(ArrowRightIcon)

    return (
      <motion.div
        className="relative flex flex-col p-4 2xl:p-8 w-full 2xl:w-[30%] justify-between cursor-pointer border-2 border-black shadow-brutalism bg-white overflow-clip"
        onMouseEnter={()=> setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        transition={{ duration: 0.8, ease: "backInOut" }}
      >
        <motion.h3 
        className="z-10 text-3xl 2xl:text-3xl 2xl:text-5xl font-extrabold text-black leading-[1.1] w-[90%] text-wrap"
        animate={{
          color: isHover ? "#fafafa" : "#0f172a",
        }}
        transition={{
          duration: 0.8,
          ease: 'backInOut'
        }}
        >{title}</motion.h3>
        <div
        className='z-10'>
        <motion.div 
        className="z-10 font-bold text-black mt-16 2xl:mt-36 text-xl leading-[1] text-balance whitespace-pre-wrap flex flex-col gap-6 tracking-tight"
           animate={{
          color: isHover ? "#fafafa" : "#0f172a",
        }}
        transition={{
          duration: 0.8,
          ease: 'backInOut'
        }}
        >      {
                                     descriptions.map((description: { text: string }, index) => {
                                          const MotionBoltIcon = motion(BoltIcon)
                                      
                                        return (
                                          <motion.div
                                          key={index}
                                          className='flex gap-6 items-center'
                                          >
                                          <div
                                          className='relative min-w-8 min-h-8 xl:min-w-8 xl:min-h-8 flex items-center justify-center bg-purple-200 p-2 border-2 border-black shadow-brutalism'>
                                            <MotionBoltIcon
                                            className='z-10'
                                            animate={{
                                              color: isHover ? "#4c1d95" : "#272829",
                                            }}
                                          transition={{
                                            duration: 0.8,
                                            ease: 'backInOut'
                                          }}
                                            /> </div>
                                          <motion.p
                                          className='text-lg xl:text-2xl'
                                          >{description.text}</motion.p>
                                          </motion.div>
                                        )
                                      })
                                      }</motion.div>
                        <motion.div
                        className='z-40 flex justify-center h-fit mt-12 bg-violet-800 w-full px-8 py-6 border-2 border-black shadow-brutalism text-fuchsia-50 text-2xl font-extrabold'
                        animate={{
                          backgroundColor: isHover ? "#fdf4ff" : "#5b21b6",
                          color: isHover ? "#5b21b6" : "#fdf4ff",
                        }}
                        onClick={() => window.location.href = `/contacts`}
                        >Детальніше</motion.div>
        </div>
        <motion.div 
        className="absolute z-10 top-4 right-4 xl:top-8 xl:right-8 flex justify-center items-center w-8 xl:w-16 h-8 xl:h-16 border-2 border-black shadow-brutalism"
        animate={{
            rotate: isHover ? "45deg" : "0deg",
            backgroundColor: isHover ? "#fafafa" : "#5b21b6",
        }}
        transition={{
          duration: 0.8,
          ease: 'backInOut'
        }}
        >

        <MotionArrowRightIcon 
        className="w-4 h-4 xl:w-8 xl:h-8 stroke-2"
        animate={{
          color: isHover ? "#0f172a": "#fff",
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
        />
        </motion.div>
        <motion.div
        className='absolute z-0 top-4 right-4 xl:top-8 xl:right-8 w-8 xl:w-16 h-8 xl:h-16 bg-primary-color'
        animate={{
          scale: isHover ? 45 : 1,
          backgroundColor: isHover ? "#5b21b6" : "#9333ea"
        }}
        transition={{
          duration: 0.4,
          ease: 'easeIn'
        }}
        >
        
        </motion.div>
      </motion.div>
    );
  }

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const scrollAnimationX = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.55], [-500, 0, 0, -500])
  const scrollAnimationX1 = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.55], [700, 0, 0, 700])
  const scrollAnimationX2 = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [700, 0, 0, 900])
  const scrollAnimationScale = useTransform(scrollYProgress, [0, 0.3, 0.55, 1], [0.5, 1, 1, 0.5])

  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = {damping: 100, stiffness: 75, mass: 3}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const {clientX, clientY } = e
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  }

  return (
    <section ref={container} className="relative flex flex-col p-4 xl:px-12 xl:py-28 justify-between bg-[#E9EFF7] border-t-2 border-black">
      <div
      className='flex flex-col'
      >
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-20">
        <motion.div 
        className="w-full xl:w-2/4 flex justify-between xl:gap-4"
        style={{
            x: scrollAnimationX
        }}
        transition={{
            duration: 2,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
          }}
        >
        <h2 className="text-3xl font-extrabold p-2 xl:p-4 bg-white border-2 border-black shadow-brutalism h-fit">Ми дійсно круті</h2>
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
            <Canvas orthographic camera={{position:[0, 0, 200], zoom: 1}}>
                <Model mouse={smoothMouse}/>
            <Environment preset="dawn"/>
            </Canvas>
        </motion.div>
        </motion.div>
        <motion.div 
        className="w-full xl:w-2/4 flex justify-end items-end"
        style={{
            x: scrollAnimationX1
        }}
        transition={{
            duration: 2,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
          }}
        >
          <motion.p 
		className="relative text-xl xl:text-3xl font-semibold max-w-full xl:max-w-screen-lg tracking-tight font-blackleading-[1.2] border-2 border-black shadow-brutalism p-8 xl:p-4 bg-white text-pretty  ">
            Школа англійської мови — це ваш надійний партнер у досягненні мовних вершин. Ми пропонуємо навчання, яке
            поєднує сучасні технології, інтерактивні заняття та практичний підхід
            <img className="z-[20] absolute top-[-60px] right-[-60px] scale-[0.5] xl:scale-[1]" src='/images/rhombus.svg'/>
          </motion.p>
        </motion.div>
      </div>
      <Curve curveColor="#000"/>
      </div>
              <motion.div className='flex'
              style={{
                scale: scrollAnimationScale
              }}
              transition={{
                duration: 0.6,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
              }}
              >
                <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className='pr-12 m-0 text-5xl xl:text-9xl uppercase font-black text-[#5b21b6] leading-[0.9] tracking-tight flex flex-shrink-0'
                >
                  Чому ви маєте навчатись у нас? —</motion.div>
                  <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className='pr-12 m-0 text-5xl xl:text-9xl uppercase font-black text-[#5b21b6] leading-[0.9] tracking-tight flex flex-shrink-0'
                >
                  Чому ви маєте навчатись у нас? —</motion.div>
              </motion.div>
      <div>
      <Curve curveColor="#18181b"/>
        <motion.div className="flex flex-col 2xl:flex-row gap-8 2xl:justify-between"
        style={{
            x: scrollAnimationX2
        }}
        transition={{
            duration: 2,
            scale: { type: "spring", visualDuration: 1, bounce: 0.2 },
          }}
        >
          {aboutAdvantages.map((aboutAdvantage, index) => (
            <Advantage key={index} {...aboutAdvantage} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
