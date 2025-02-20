import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { teamMates } from '@/data';
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Curve from '@/components/ui/curve';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/solid';
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from '../about/model';
import { Drawer } from 'vaul';

export interface ITeamProps {
  teamMembers?: React.RefObject<HTMLDivElement[]>
}


export default function Team (props: ITeamProps) {
 const container = useRef(null);
 const { scrollYProgress } = useScroll({
   target: container,
   offset: ['start end', 'end start']
 })
 
 scrollYProgress.onChange(latest => {console.log(latest)});

 const mouse = {
     x: useMotionValue(0),
     y: useMotionValue(0)
   }
 
   const smoothOptions = {damping: 100, stiffness: 75, mass: 3}
   const smoothMouse = {
     x: useSpring(mouse.x, smoothOptions),
     y: useSpring(mouse.y, smoothOptions),
   };

  const MotionArrowRightIcon = motion(ArrowRightIcon)
  const teamMembers = useRef<HTMLDivElement[]>([]);
  const addTeamMember = (el: HTMLDivElement | null) => {
		if (el && !teamMembers.current.includes(el)) {
			teamMembers.current.push(el);
			console.log('Added team member:', el);
		}
	};

  type Post = {
    text: string;
  };
  
  type Education = {
    text: string;
  };
  
  type Experience = {
    text: string;
  };
  
  type Certificate = {
    src: string;
  };
  
  type TeamMateProps = {
    name: string;
    posts: Post[];
    educations: Education[];
    experiences: Experience[];
    photo: string;
    alt?: string;
    id: string;
    certificates: Certificate[];
  };
    function TeamMate({ name, posts, educations, experiences, photo, alt, id, certificates }: TeamMateProps) {
      const [isHover, setIsHover] = useState(false);
      const Image = ({ src, alt }: {src: string; alt: string;}) => (
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
        ><Link href={`/teamMember/${id}`}>Детальніше</Link></motion.button>
        </motion.div>
      );
    
      return (
        <>
        <motion.div 
          className="relative p-4 flex flex-col w-full xl:w-[45%] 2xl:w-[30%] cursor-pointer bg-white border-2 border-black shadow-brutalism"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => window.location.href = `/teamMember/${id}`}
        >
          <div>
            <Image
            src={photo} alt="Фото викладача" />
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
        </>
      );
    }

    const scrollAnimationX = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.55], [-500, 0, 0, -500])
    const scrollAnimationX1 = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.55], [700, 0, 0, 700])
    const scrollAnimationY = useTransform(scrollYProgress, [0, 0.3], [500, 0])

  return (
    <section ref={container} id="team" className="flex flex-col p-4 lg:py-14 lg:px-16 h-fit justify-between bg-indigo-50 border-t-2 border-black">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
              <motion.div 
              className="w-full xl:w-2/4 flex gap-4"
              style={{
                  x: scrollAnimationX
              }}
              transition={{
                  duration: 2,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
                }}
              >
              <h2 className="text-4xl font-extrabold p-4 bg-white border-2 border-black w-fit shadow-brutalism h-fit">Наша команда</h2>
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
              className="w-full xl:w-2/4 flex justify-end items-start"
              style={{
                  x: scrollAnimationX1
              }}
              transition={{
                  duration: 2,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
                }}
              >
                <motion.p 
            className="relative text-xl lg:text-3xl font-semibold max-w-full lg:max-w-screen-lg tracking-tight font-blackleading-[1.2] border-2 border-black shadow-brutalism p-8 xl:p-4 bg-white">
                  Ми – команда професіоналів, які прагнуть зробити вивчення англійської мови ефективним та цікавим
                  <img className="z-[20] absolute top-[-60px] right-[-60px]" src='/images/star.svg'/>
                </motion.p>
              </motion.div>
            </div>
      <Curve curveColor="#000"/>
      <motion.div className="flex flex-col xl:flex-row flex-wrap gap-8 justify-between"
      style={{
        y: scrollAnimationY
      }}
      >
      {
                    teamMates.map((teamMate, index) => {
                      return <TeamMate key={index} {...teamMate} />
                    })
                    }</motion.div>
    </section>           
  );
}
