'use client'
import { useEffect } from 'react';
import Lenis from 'lenis'

// UI Elements
import Cursor from "@/components/ui/cursor";

//Sections
import Navbar from "@/components/sections/navbar/navbar";
import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Courses from '@/components/sections/courses/courses';
import Team from '@/components/sections/team/team';
import News from '@/components/sections/news/news'
import Test from '@/components/sections/test/test';
import FAQ from '@/components/sections/faq/faq';
import Footer from '@/components/sections/footer/footer';

export default function Home() {

  function easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
    }
  
  useEffect( () => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
      lerp: undefined,
      duration: 3,
      easing: easeOutCubic,
    });
  }, [])
  
  return (
    <main>
      <Cursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <Courses/>
      <Team/>
      <News/>
      <Test/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
