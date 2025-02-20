import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
    { title: "Про нас", link: "#", subMenu: [
        { title: "Історія", link: "#" },
        { title: "Переваги", link: "#" },
        { title: "Наша команда", link: "#" },
    ]},
    { title: "Навчання", link: "#", subMenu: [
        { title: "Для дорослих", link: "#" },
        { title: "Для компаній", link: "#" },
        { title: "Для дітей", link: "#" },
    ]},
    { title: "Іспити", link: "#" },
    { title: "Контакти", link: "#" }
  ];
  
export default function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
       <div className="flex flex-col gap-[10px]">
       <ul className="flex flex-col">
          {menuItems.map((item) => (
            <li key={item.title} className="relative">
              <a
                href={item.link}
                className="block p-4 text-4xl font-extrabold uppercase text-black"
                onClick={() => item.subMenu && setOpenSubMenu(item.title === openSubMenu ? null : item.title)}
              >
                {item.title}
                {item.subMenu && <ChevronDown size={32} className="inline ml-4" />}
              </a>
              
              {item.subMenu && item.title === openSubMenu && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4"
                >
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.title}>
                      <a
                        href={subItem.link}
                        className="block text-xl uppercase font-bold p-4 text-black"
                      >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
       </div>
    </div>
  )
}

export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65, 
            delay: 0.5 + (i * 0.1), 
            ease: [.215,.61,.355,1],
            opacity: { duration: 0.35}
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
    }
}

export const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5,
            delay: 0.75 + (i * 0.1), 
            ease: [.215,.61,.355,1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut"}
    }
}