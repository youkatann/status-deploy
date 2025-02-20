'use client'
import * as React from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import Curve from "@/components/ui/curve"
import NavButton from '@/components/ui/nav-button';
import { examsInfo, examsTypes } from '@/data';
import { motion } from 'motion/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Cursor from '@/components/ui/cursor';
import Navbar from '@/components/sections/navbar/navbar';

export interface IExamsDrawerProps {
}


export default function ExamsDrawer (props: IExamsDrawerProps) {

  return (
    <>
    <Cursor/>
    <Navbar/>
    <section className="relative flex flex-col h-fit fixed bottom-0 left-0 right-0 outline-none border-t-2 border-black pt-20 p-8 lg:pt-48 lg:py-28 lg:px-12">
    <h1 className='hidden'>Іспити, які ми пропонуємо</h1>
                    <div className='z-[10] flex flex-col gap-12 lg:gap-12 mt-16'>
                    <div className="w-full lg:w-[50%] flex flex-col lg:flex-row gap-8 justify-between">
      {
                    examsTypes.map((examType, index) => {
                      return <TypeCard key={index} {...examType} />
                    })
                    }</div>
                    <div className="w-full flex flex-col lg:flex-row gap-4 justify-start">
       {
                    examsInfo.map((examInfo, index) => {
                      return <InfoCard key={index} {...examInfo} />
                    })
                    }</div>
                    </div>
                    <div
    className="z-0 absolute inset-0 h-full w-full bg-purpleLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
</section>
</>
  );
}

type InfoCardProps = {
  title: string;
  description: string;
  link: string;
}
const InfoCard = function Index({title, description, link}: InfoCardProps) {
    
    return (
        <div className='flex flex-col gap-12 border-black border-2 shadow-brutalism bg-[#eef2ff] p-4 gap-16 h-fit w-full'>
            <div className='flex w-full h-full justify-center items-center'>
            <Image src={link} width="125" height="125" alt='image'/>
            </div>
            <div className='flex flex-col gap-4 items-start justify-start'>
            <h3 className="text-2xl font-black text-pretty text-[#18181b]">{title}</h3>
            <p className='text-lg font-bold leading-[1.2] max-w-[300px] text-[#18181b]'>{description}</p>
            </div>
        </div>
    )
}

type TypeCardProps = {
  title: string;
  price: string;
  calendar: string;
  estimate: string;
  group: string;
  order: string;
}

const TypeCard = function Index({title, price, calendar, estimate, group, order}: TypeCardProps) {

    const MotionBoltIcon = motion(BoltIcon)
    const MotionArrowRightIcon = motion(ArrowRightIcon)
    const [isHover, setIsHover] = React.useState(false);
    
    return (
        <motion.div
    className="relative flex shrink-0 h-fit grid flex-col p-8 w-full justify-between cursor-pointer border-2 border-black  shadow-brutalism overflow-clip"
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
        className=" z-10 text-3xl font-black max-w-[80%] text-black  leading-[0.9] tracking-tighter"
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