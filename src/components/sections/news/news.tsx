'use client';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Home() {

  const [isButtonFirstHovered, setIsButtonFirstHovered] = useState(false)
  const [isButtonSecondHovered, setIsButtonSecondHovered] = useState(false)
  const [isButtonThirdHovered, setIsButtonThirdHovered] = useState(false)
  const [isButtonFourthHovered, setIsButtonFourthHovered] = useState(false)

  const plane1 = useRef(null);
  let requestAnimationFrameId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { movementX, movementY } = e.nativeEvent; // ✅ Extract native event
    xForce += movementX * speed;
    yForce += movementY * speed;
  
    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number): number =>
    start * (1 - amount) + target * amount;
  
  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
  
    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;
  
    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId!);
      requestAnimationFrameId = null;
    }
  };
  
  return (
    <section onMouseMove={(e) => {manageMouseMove(e)}} className="p-4 2xl:p-0 gap-8 2xl:gap-0 flex flex-col 2xl:flex-row h-full 2xl:h-[150vh] w-[100vw] overflow-visible 2xl:overflow-hidden relative justify-center items-center border-t-2 border-black">
            <div className='z-[10] p-4 2xl:p-8 border-2 border-black bg-white shadow-brutalism w-full 2xl:w-fit'>
        <h1 className='font-black text-black text-center text-xl 2xl:text-6xl'>Новини Status</h1>
        <p className='font-semibold text-black text-base 2xl:text-xl mt-3 text-center'>Актуально про нас</p>
      </div>
      <div ref={plane1} className="z-[10] flex flex-col gap-8 w-full h-full 2xl:absolute 2xl:*:absolute *:w-full 2xl:*:w-[400px]">
          <div className='bg-white flex flex-col p-2 2xl:p-4 border-2 border-black shadow-brutalism bg-pinkLight left-[75%] top-[45%]'>
            <div className='flex justify-center items-center'>
            <img className='w-[75px] h-[75px] 2xl:w-[150px] 2xl:h-[150px]' src='/images/bshape1.svg'/>
            </div>
            <h4 className='text-2xl font-extrabold'>Набір нових студентів у групу 101</h4>
            <p className='text-lg font-medium mt-2 2xl:mt-4'>Оголошуємо про набір нових студентів у групу 101, у зв'язку із випуском курсу</p>
            <motion.button className="z-[13] p-2 2xl:px-9 2xl:py-4 border-2 border-black shadow-brutalism bg-purpleLight mt-6" type="submit"
          onMouseEnter={() => setIsButtonFirstHovered(true)}
          onMouseLeave={() => setIsButtonFirstHovered(false)}
          animate={{
            backgroundColor: isButtonFirstHovered ? "#A388EE" : "#C4A1FF",
          }}
          transition={{
            duration: 0.6,
            type: "spring", 
            visualDuration: 0.4, 
            bounce: 0.2,
          }}
          > 
            <p className="z-[13] text-2xl font-extrabold">
            Детальніше
            </p>
          </motion.button>
            </div>
          <div className='bg-white flex flex-col p-2 2xl:p-4 border-2 border-black shadow-brutalism 2xl:left-[5%] left-[15%] top-[35%]'>
          <div className='flex justify-center items-center'>
            <img className='w-[75px] h-[75px] 2xl:w-[150px] 2xl:h-[150px]' src='/images/bshape2.svg'/>
            </div>
          <h4 className='text-2xl font-extrabold'>Набір нових студентів у групу 101</h4>
            <p className='text-lg font-medium mt-4'>Оголошуємо про набір нових студентів у групу 101, у зв'язку із випуском курсу</p>
            <motion.button className="z-[13] p-2 2xl:px-9 2xl:py-4 border-2 border-black shadow-brutalism bg-purpleLight mt-6" type="submit"
          onMouseEnter={() => setIsButtonSecondHovered(true)}
          onMouseLeave={() => setIsButtonSecondHovered(false)}
          animate={{
            backgroundColor: isButtonSecondHovered ? "#A388EE" : "#C4A1FF",
          }}
          transition={{
            duration: 0.6,
            type: "spring", 
            visualDuration: 0.4, 
            bounce: 0.2,
          }}
          > 
            <p className="z-[13] text-2xl font-extrabold">
            Детальніше
            </p>
          </motion.button>
            </div>
          <div className='bg-white flex flex-col p-2 2xl:p-4 border-2 border-black shadow-brutalism left-[45%] top-[0%]'>
          <div className='flex justify-center items-center'>
            <img className='w-[75px] h-[75px] 2xl:w-[150px] 2xl:h-[150px]' src='/images/bshape3.svg'/>
            </div>
          <h4 className='text-2xl font-extrabold'>Набір нових студентів у групу 101</h4>
            <p className='text-lg font-medium mt-4'>Оголошуємо про набір нових студентів у групу 101, у зв'язку із випуском курсу</p>
            <motion.button className="z-[13] p-2 2xl:px-9 2xl:py-4 border-2 border-black shadow-brutalism bg-purpleLight mt-6" type="submit"
          onMouseEnter={() => setIsButtonThirdHovered(true)}
          onMouseLeave={() => setIsButtonThirdHovered(false)}
          animate={{
            backgroundColor: isButtonThirdHovered ? "#A388EE" : "#C4A1FF",
          }}
          transition={{
            duration: 0.6,
            type: "spring", 
            visualDuration: 0.4, 
            bounce: 0.2,
          }}
          > 
            <p className="z-[13] text-2xl font-extrabold">
            Детальніше
            </p>
          </motion.button>
            </div>
            <div className='z-[10] bg-white flex flex-col p-2 2xl:p-4 border-2 border-black shadow-brutalism left-[45%] top-[60%]'>
      <div className='flex justify-center items-center'>
            <img className='w-[75px] h-[75px] 2xl:w-[150px] 2xl:h-[150px]' src='/images/bshape1.svg'/>
            </div>
      <h4 className='text-2xl font-extrabold'>Набір нових студентів у групу 101</h4>
            <p className='text-lg font-medium mt-4'>Оголошуємо про набір нових студентів у групу 101, у зв'язку із випуском курсу</p>
            <motion.button className="z-[13] p-2 2xl:px-9 2xl:py-4 border-2 border-black shadow-brutalism bg-purpleLight mt-6" type="submit"
          onMouseEnter={() => setIsButtonFourthHovered(true)}
          onMouseLeave={() => setIsButtonFourthHovered(false)}
          animate={{
            backgroundColor: isButtonFourthHovered ? "#A388EE" : "#C4A1FF",
          }}
          transition={{
            duration: 0.6,
            type: "spring", 
            visualDuration: 0.4, 
            bounce: 0.2,
          }}
          > 
            <p className="z-[13] text-lg 2xl:text-2xl font-extrabold">
            Детальніше
            </p>
          </motion.button>
            </div>
      </div>
      <div
    className="z-1 absolute inset-0 h-full w-full bg-purpleLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
  )
}