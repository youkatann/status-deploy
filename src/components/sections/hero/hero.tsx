'use client';
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./model";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export interface IHeroProps {
    children?: React.ReactNode;
    distance?: number;
}

export default function Hero ({ children, distance = 0.6 }: IHeroProps) {

  const [cameraSettings, setCameraSettings] = useState<{
    position: [number, number, number];
    zoom: number;
  }>({
    position: [0, 0, 200], // Початкове значення для SSR
    zoom: 8, // Початкове значення для SSR
  });
  
  useEffect(() => {
    const handleResize = () => {
      setCameraSettings({
        position: [0, 0, 200],
        zoom:
          window.innerWidth < 1024
            ? 7
            : window.innerWidth < 1280
            ? 8
            : window.innerWidth < 1440
            ? 6
            : window.innerWidth < 1921
            ? 8
            : 10,
      });
    };
  
    handleResize(); // Викличемо один раз для установки початкових значень
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const canvasRef = useRef<HTMLDivElement>(null); // Указываем, что это div

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !canvasRef.current.parentElement) return;
      const { clientWidth, clientHeight } = canvasRef.current.parentElement;
      canvasRef.current.style.width = `${clientWidth}px`;
      canvasRef.current.style.height = `${clientHeight}px`;
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Вызываем один раз при монтировании

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [result, setResult] = React.useState<React.ReactNode>(
    <TypeAnimation
      sequence={[
        "Записатись на курс",
        2000,
        "Залишити заявку",
        2000,
        "Отримати шанс",
        2000,
        "Вивчити англійську",
        2000,
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
  );

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
        setResult('Відправлено');
        form.reset(); // Reset the form
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })

  const scrollAnimationY = useTransform(scrollYProgress, [0, 1], [0, 600])
  const scrollAnimationY1 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const scrollAnimationX = useTransform(scrollYProgress, [0, 1], [0, 800])
  const scrollAnimationScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const SPRING_CONFIG = { damping: 100, stiffness: 400 };

  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);
  
    const handleMouseMove = (e: React.MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
  
        x.set(distanceX * distance);
        y.set(distanceY * distance);
      }
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    };

  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove)
    return () => {window.removeEventListener("mousemove", manageMouseMove)  }
  }, [])
  
  return (
    <section ref={container} className="relative flex h-svh overflow-clip pt-12 lg:pt-0">
    <motion.div 
      style={{
        y: scrollAnimationY,
      }}
    className="hidden md:inline absolute z-[11] w-full h-full">
    <div ref={canvasRef} className="w-full h-full">
    <Canvas orthographic camera={{position: cameraSettings.position, zoom: cameraSettings.zoom }}>
    <Model mouse={smoothMouse}/>
    <Environment preset="dawn"/>
    </Canvas>
    </div>
    </motion.div>
    <div className="relative grid grid-cols-10 grid-rows-10 h-full w-full p-2 xl:px-12 xl:py-6">
    <motion.h1 
    style={{
      y: scrollAnimationY1
    }}
    className="initial z-[5] col-start-1 col-end-11 xl:col-end-10 2xl:col-end-5 row-start-2 xl:row-start-3 row-end-auto text-5xl md:text-[64px] xl:text-5xl 2xl:text-7xl leading-[0.8] tracking-tighter text-pretty font-medium xl:max-w-[40%] 2xl:max-w-[90%]">Англійська для всіх, <span className="font-extrabold">для бізнесу, дорослих та дітей</span></motion.h1>
    <motion.div 
    className="relative col-start-1 lg:col-start-6 2xl:col-start-6 col-end-11 row-span-4 row-end-11">
    <motion.div className="relative z-[13] flex flex-col shrink-1 h-full w-full justify-between p-4 border-2 border-black shadow-brutalism bg-greenLight"
    ref={ref}
    style={{
      x: isHovered ? springX : scrollAnimationX,
      y: springY,
    }}
    transition={{
      duration: 0.6,
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
    }}
    >
      <div className="z-[13] flex justify-between items-start border-b-2 pb-4 border-black xl:pr-24">
        <h2 className="z-[13] text-xl xl:text-2xl 2xl:text-2xl leading-[0.8] tracking-tighter text-pretty max-w-lg font-bold">Навчання мовам для компаній, дорослих і дітей – ефективно, гнучко, результативно</h2>
        <p className="z-[13] text-sm xl:text-xl font-extrabold">[Status]</p>
      </div>
      <div className="z-[13] flex flex-col gap-8">
        <form onSubmit={onSubmit} className="z-[13] flex flex-col xl:flex-row gap-4">
          <input className="z-[13] mt-2 xl:mt-0 px-4 py-2 xl:px-9 xl:py-4 border-2 border-black shadow-brutalism text-md xl:text-2xl" placeholder="Введіть ваш Email" name="Email"></input>
          <motion.button className="z-[13] px-9 py-4 border-2 border-black shadow-brutalism bg-purpleLight" type="submit"
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
          <p className="z-[13] text-md xl:text-2xl font-extrabold">
          {result}
          </p>
          </motion.button>
        </form>
        <div className="hidden 2xl:inline">
          <span className="z-[13] text-sm xl:text-xl font-bold text-black">Нам довіряють:</span>
          <div className="z-[13] mt-2 flex gap-x-4 *:w-[64px]">
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='https://www.jti.com/themes/investis_bootstrap/images/jti_logo.svg'/>
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='https://www.syngenta.ua/sites/g/files/kgtney1466/files/color/syn_global_theme-7edf2a19/logo.svg'/>
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='/images/ppclogo.svg'/>
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='https://upload.wikimedia.org/wikipedia/commons/b/bb/%D0%95%D0%BC%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0_%D0%94%D0%A1%D0%9D%D0%A1_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8.svg'/>
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='/images/ungslogo.svg'/>
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='https://cdn.worldvectorlogo.com/logos/pioneer-dupont-1.svg'/>
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzJ_T71HxwMoEGctQlsEv9qbdSd1qm0N12w&s'/>
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='https://vingudpss.gov.ua/sites/default/files/logo.png?v=1728551198'/>
            <img className="z-[13] bg-white p-2 border-2 border-black shadow-brutalism" src='https://static.tildacdn.one/tild6637-6233-4864-b631-623461343461/Unknown-removebg-pre.png'/>
      </div>
        </div>
      </div>
      <img className="scale-[0.4] xl:scale-[1] z-[20] absolute top-[-70px] right-[-75px] xl:top-[-60px] xl:right-[-60px]" src='/images/star.svg'/>
    </motion.div>
    </motion.div>
    </div>
    <motion.div style={{scale: scrollAnimationScale}} className="z-[5] absolute bottom-0 left-0 w-fit h-fit">
    <p className="relative uppercase text-8xl md:text-[200px] xl:text-[450px] 2xl:text-[450px] font-extrabold opacity-5 leading-[1]">Status</p>
    </motion.div>
    <div
    className="z-1 absolute inset-0 h-full w-full bg-beige bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
  );
}
