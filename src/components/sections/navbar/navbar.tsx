'use client'
import Link from "next/link"
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useLockBodyScroll } from "react-use";
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
// UI Components Imports
import NavButton from "@/components/ui/nav-button";
import MobileMenuButton from "@/components/ui/mobileMenuButton";
import MobileMenu from "@/components/ui/mobileMenu";
// shadCN Components Imports

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export interface INavbarProps {
      children?: React.ReactNode;
      distance?: number;
}

export default function Navbar ({ children, distance = 0.6 }: INavbarProps) {

  const [isActive, setIsActive] = useState(false);
  const [mobileMenuOptions, setMobileMenuOptions] = useState({
    open: { width: 0, height: 0, top: "0px", right: "0px", transition: {} },
    closed: { width: "0px", height: "0px", top: "0px", right: "0px", transition: {} },
  });
  
  useEffect(() => {
    setMobileMenuOptions({
      open: {
        width: window.innerWidth,
        height: window.innerHeight,
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
      },
      closed: {
        width: "0px",
        height: "0px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
      },
    });
  }, []);
  const [showTeamDrawer, setShowTeamDrawer] = React.useState(false);

  useLockBodyScroll(showTeamDrawer)
  
  const SPRING_CONFIG = { damping: 100, stiffness: 400 };
  
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
          setTimeout(() => {
          setIsHovered(false);
          x.set(0);
          y.set(0);
          }, 200);
        };

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  	const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Скрол вниз
        setIsScrollingUp(false);
      } else {
        // Скрол вгору
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
	const [open, setOpen] = useState(false);

	const [isHidden, setIsHidden] = useState(false);
	const lastYRef = useRef(0);

  return (
    <section className="z-[60] fixed top-0 left-0 ">
    <motion.div 
    animate={{ y: isScrollingUp ? 0 : "-100%" }}
    transition={{
      duration: 0.8,
      type: "spring", visualDuration: 0.6, bounce: 0.2,
    }}
    className="fixed z-40 top-0 left-0 w-full grid grid-cols-10 h-fit px-12 py-6">
      <div className="relative h-fit w-fit">
      <motion.div 
      className="relative z-[50]"
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
      <Link href="/">
      <Image 
      className="hidden lg:inline p-3 border-2 border-black shadow-brutalism bg-white min-w-[75px] min-h-[35px] lg:min-w-[150px] lg:min-h-[70px]" src='/images/logo-status.png' width='150' height='70' alt="Логотип мовного центру Статус"
      />
      </Link>
      </motion.div>
      <div className="z-[45] absolute top-0 left-0 w-full h-full bg-black"></div>
      </div>
      <div className="hidden xl:inline lg:col-start-3 2xl:col-start-5 ">
        <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Про Нас</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/history" title="Історія">
                Дізнайтеся більше про історію заснування та розвитку мовного центру
                </ListItem>
                <ListItem href="/advantages" title="Переваги">
                Коротенько про те, чому ми - ваш найкращий вибір
                </ListItem>
                <ListItem href="/#team" title="Наша команда">
                Професіонали, що будуть направляти вас на шляху до Native
                </ListItem>
                <ListItem href="/reviews" title="Відгуки">
                Професіонали, що будуть направляти вас на шляху до Native
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Навчання</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/forAdults" title="Для дорослих">
                  Аби стати справжніми дорослими у англійській.
                </ListItem>
                <ListItem href="/forAdults" title="Для компаній">
                  Для корпоративних клієнтів, що прагнуть виховати свій персонал.
                </ListItem>
                <ListItem href="/forKids" title="Для дітей">
                  Для дітей та підлітків, аби покращити навички у мові.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink href="/exams"className={navigationMenuTriggerStyle()}>
                Іспити
              </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
      <NavigationMenuLink href="/contacts"className={navigationMenuTriggerStyle()}>
                Контакти
              </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden xl:inline col-end-11 col-start-auto justify-self-end">
      <NavButton>Залишити<br/>заявку</NavButton>
      </div>
      <div className="inline xl:hidden col-end-10">
      <MobileMenuButton isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
      </div>
</motion.div>
<motion.div
                className="fixed top-0 left-0 w-[100vw] h-screen xl:hidden relative bg-purpleLight"
                variants={mobileMenuOptions}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <MobileMenu />}
                </AnimatePresence>
            </motion.div>
</section>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 p-3 leading-none bg-white outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border-2 border-black",
            className
          )}
          {...props}
        >
          <div className="text-lg font-bold leading-none underline">{title}</div>
          <span className="line-clamp-2 text-base font-semibold leading-snug text-black">
            {children}
          </span>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

