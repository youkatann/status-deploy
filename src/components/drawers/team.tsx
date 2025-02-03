import { useState, useRef } from 'react';
import { Drawer } from 'vaul';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/solid';
import { teamMates } from '@/data';
import Image from 'next/image';

export interface ITeamDrawerProps {
}

export default function TeamDrawer (props: ITeamDrawerProps) {
    
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);

  function TeamMate({ name, posts, education, experience, photo, alt }) {

    const MotionArrowRightIcon = motion(ArrowRightIcon)
    const [isHover, setIsHover] = useState(false);
    const Image = ({ src, alt }) => (
      <img src={src} alt={alt} className="w-[100%] h-[100%]" />
    );
  
    const AdditionalInfo = () => (
      <motion.div
        className="absolute z-20 w-full left-0 top-full outline outline-2 outline-black shadow-brutalism px-8 py-8 z-10 bg-white"
        initial={{ scaleY: 0, y: -20, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
      <div
      className='flex flex-col gap-2'
      >
                    {posts.map((post, index) => {
                                        const MotionBoltIcon = motion(BoltIcon)
                                    
                                      return (
                                        <motion.div
                                        key={index}
                                        className='flex gap-4 items-center'
                                        >
                                          <div
                                          className='min-w-8 min-h-8 bg-purple-200 p-2 border-2 border-black shadow-brutalism'
                                          >
                                          <MotionBoltIcon
                                          className='z-10'
                                        transition={{
                                          duration: 0.8,
                                          ease: 'backInOut'
                                        }}
                                          />   
                                          </div>
                                        <motion.p className='text-xl font-semibold tracking-tight'
                                        >{post.text}</motion.p>
                                        </motion.div>
                                      )
                                    })
                                    }
        </div>
      <motion.button
      className='mt-6 px-9 py-4 border-2 border-black shadow-brutalism w-full bg-purpleLight text-2xl font-extrabold'
      >Детальніше</motion.button>
      </motion.div>
    );
  
    return (
      <motion.div
        className="relative shrink-0 p-4 flex flex-col w-1/5 cursor-pointer bg-white border-2 border-black shadow-brutalism"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div>
          <Image
          src={photo} alt={alt} />
        </div>
        <div 
        className='flex justify-between'
        >
        <h3 className="text-2xl pb-6 self-start text-black mt-8 leading-[0.9] tracking-tighter font-extrabold">{name}</h3>
        <motion.div 
      className="absolute z-10 bottom-6 right-4 flex justify-center items-center w-12 h-12 border-2 border-black shadow-brutalism"
      animate={{
          rotate: 
          isHover ? "-90deg" : "90deg",
          backgroundColor: isHover ? "#fff" : "#5b21b6",
      }}
      transition={{
        duration: 0.8,
        ease: 'backInOut'
      }}
      >
      <MotionArrowRightIcon 
      className="w-4 h-4"
      animate={{
        color: isHover ? "#0f172a": "#fff",
    }}
    transition={{
      duration: 0.8,
      ease: 'backInOut'
    }}
      />
      </motion.div>
        </div>
        <AnimatePresence mode="wait">{isHover && <AdditionalInfo />}</AnimatePresence>
      </motion.div>
    );
  }

  return (
    <Drawer.Content ref={targetRef} className="z-[60] flex flex-col mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none border-t-2 border-black p-8">
    <div aria-hidden className="z-[10] mx-auto w-12 h-1.5 flex-shrink-0 bg-black mb-8" />
    <Drawer.Title className='hidden'>Іспити, які ми пропонуємо</Drawer.Title>
    <motion.div className="z-[10] flex gap-8 justify-between" style={{x}}>
      {
                    teamMates.map((teamMate, index) => {
                      return <TeamMate key={index} {...teamMate} />
                    })
                    }</motion.div>
    <div
    className="z-0 absolute inset-0 h-full w-full bg-purpleLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </Drawer.Content>
  );
}
