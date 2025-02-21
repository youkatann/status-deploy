'use client';

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const SPRING_CONFIG = { damping: 100, stiffness: 400 };

export interface INavButtonProps {
  children: React.ReactNode;
  distance?: number;
}

export default function NavButton({ children, distance = 0.6 }: INavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <Link href="/lead">
    <div className="relative">
      <motion.div
        className="z-[2] relative flex gap-48 w-fit h-32 bg-purpleLight py-3 px-4 border-2 border-black shadow-brutalism"
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={isHovered ? handleMouseMove : undefined}
        onMouseLeave={handleMouseLeave}
        style={{
          x: springX,
          y: springY,
        }}
        transition={{
          duration: 0.6,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
        }}
      >
        <p className="self-end text-2xl text-black   font-extrabold uppercase leading-[1]">
          {children}
        </p>
        <div className="flex flex-col justify-start h-fit w-fit">
          <motion.p
            className="text-5xl font-extrabold uppercase text-zinc-50 text-stroke-2"
            animate={{
              rotate: isHovered ? "45deg" : "0deg",
            }}
            transition={{
              duration: 0.6,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}
          >
            +
          </motion.p>
        </div>
      </motion.div>
      <div className="z-[1] absolute top-0 left-0 h-full w-full bg-black"></div>
    </div>
    </Link>
  );
}
