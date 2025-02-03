'use client'
import Link from "next/link"
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useLockBodyScroll } from "react-use";
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
// UI Components Imports
import NavButton from "@/components/ui/nav-button";

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


// Drawers Components Imports
import { Drawer } from 'vaul';
import LeadDrawer from "@/components/drawers/lead";
import ExamsDrawer from "@/components/drawers/exams";
import HistoryDrawer from "@/components/drawers/history";
import AdvantagesDrawer from "@/components/drawers/advantages";
import TeamDrawer from "@/components/drawers/team";
import ContactsDrawer from "@/components/drawers/contacts";

export interface INavbarProps {
      children: React.ReactNode;
      distance?: number;
}

export default function Navbar ({ children, distance = 0.6 }: INavbarProps) {
  
  const [showHistoryDrawer, setShowHistoryDrawer] = React.useState(false);
  const [showAdvantagesDrawer, setShowAdvantagesDrawer] = React.useState(false);
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
          setIsHovered(false);
          x.set(0);
          y.set(0);
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
    <>
    <motion.section 
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
      className="p-3 border-2 border-black shadow-brutalism bg-white" src='/images/logo.svg' width='150' height='70' alt="Логотип мовного центру Статус"
      />
      </Link>
      </motion.div>
      <div className="z-[45] absolute top-0 left-0 w-full h-full bg-black"></div>
      </div>
      <div className="col-start-5">
        <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Про Нас</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Історія"  onClick={() => setShowHistoryDrawer(true)}>
                Дізнайтеся більше про історію заснування та розвитку мовного центру
                </ListItem>
                <ListItem href="/docs/installation" title="Переваги" onClick={() => setShowAdvantagesDrawer(true)}>
                Коротенько про те, чому ми - ваш найкращий вибір
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Наша команда" onClick={() => setShowTeamDrawer(true)}>
                Професіонали, що будуть направляти вас на шляху до Native
                </ListItem>
              </ul>
            </NavigationMenuContent>
              <Drawer.Root open={showHistoryDrawer} onOpenChange={setShowHistoryDrawer}>
                <Drawer.Overlay className="z-[50] fixed inset-0 bg-black/40" />
                <Drawer.Portal>
                  <HistoryDrawer/>
                </Drawer.Portal>
              </Drawer.Root>
              <Drawer.Root open={showAdvantagesDrawer} onOpenChange={setShowAdvantagesDrawer}>
                <Drawer.Overlay className="z-[50] fixed inset-0 bg-black/40" />
                <Drawer.Portal>
                  <AdvantagesDrawer/>
                </Drawer.Portal>
              </Drawer.Root>
              <Drawer.Root modal={true} open={showTeamDrawer} onOpenChange={setShowTeamDrawer}>
                <Drawer.Overlay className="z-[50] fixed inset-0 bg-black/40" />
                <Drawer.Portal>
                  <TeamDrawer/>
                </Drawer.Portal>
              </Drawer.Root>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Навчання</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div
                      className="flex h-full w-full select-none flex-col justify-end no-underline outline-none focus:shadow-md border-2 border-black"
                    >
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Для дорослих">
                  Аби стати справжніми дорослими у англійській.
                </ListItem>
                <ListItem href="/docs/installation" title="Для компаній">
                  Для корпоративних клієнтів, що прагнуть виховати свій персонал.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Для дітей">
                  Для дітей та підлітків, аби покращити навички у мові.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
            <Drawer.Root>
              <Drawer.Trigger>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Іспити
              </NavigationMenuLink>
              </Drawer.Trigger>
              <Drawer.Portal>
              <Drawer.Overlay className="z-[50] fixed inset-0 bg-black/40" />
                <ExamsDrawer/>
                </Drawer.Portal>
              </Drawer.Root>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Drawer.Root>
          <Drawer.Trigger>     
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Контакти
              </NavigationMenuLink>
              </Drawer.Trigger>
              <Drawer.Portal>
              <Drawer.Overlay className="z-[50] fixed inset-0 bg-black/40" />
                <ContactsDrawer/>
                </Drawer.Portal>
              </Drawer.Root>
          </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="col-end-11 col-start-auto justify-self-end">
      <NavButton>Залишити<br/>заявку</NavButton>
      </div>
</motion.section>
</>
  );
}

const ListItem = React.forwardRef<
  React.Ref<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {

  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none bg-white outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border-2 border-black",
            className
          )}
          {...props}
        >
          <div className="text-lg font-bold leading-none underline">{title}</div>
          <p className="line-clamp-2 text-base font-semibold leading-snug text-black">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

