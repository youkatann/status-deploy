'use client'
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export interface ICursorProps {}

export default function Cursor(props: ICursorProps) {

  const [isOutside, setIsOutside] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  
  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  const handleMouseOver = () => {
    setIsOutside(false);
  };

  const handleMouseOut = () => {
    setIsOutside(true);
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsClicked(true);
  }

  const handleMouseUp = (e: MouseEvent) => {
    setIsClicked(false);
  }

  useEffect(() => { 
    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <motion.svg
      className="hidden lg:inline z-[80] cursor fixed drop-shadow-lg"
      style={{ top: smoothMouse.y, left: smoothMouse.x}}
      initial={{
        scale: 0,
        top: "50%",
        left: "50%"
      }}
      animate={{
        scale: isOutside ? 0 : isClicked ? 0.8 : 1,
        rotate: isClicked ? "35deg" : "-5deg",
      }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
    }}
      width="51" 
      height="56" 
      viewBox="0 0 51 56" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M13.449 53.0311L2.58729 2.0948L47.8327 28.2567L25.7978 34.9585C25.2313 35.1308 24.7444 35.4986 24.4237 35.9964L13.449 53.0311Z" fill="#333333" stroke="white" strokeWidth="3"/>
    </motion.svg>
  );
}
