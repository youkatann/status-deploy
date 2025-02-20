import React from 'react'
import { Reviews } from '@/data';
import Image from 'next/image';
import Navbar from '@/components/sections/navbar/navbar';
import Cursor from '@/components/ui/cursor';

const ReviewsPage = () => {
  return (
    <>
    <Navbar/>
    <Cursor/>
    <section className='relative w-full min-h-svh flex justify-center items-center px-12 py-28'>
    <div className='flex flex-col lg:flex-row lg:flex-wrap gap-4'>
        {
                          Reviews.map((review, index) => {
                            return (
                                <div key={index} className='w-full lg:w-[49%] p-4 flex flex-col lg:flex-row gap-8 border-2 border-black shadow-brutalism bg-white'>
                                 <div  className='relative min-w-[120px] min-h-[120px] max-w-[250px] lg:max-w-none'>
                                           <img src={review.logo} className="object-contain"alt="Лого компанії"/>
                                           </div>
                                <p className='whitespace-pre-wrap'>{review.text}</p>
                                </div>
                        )
                          })
                          }
    </div>
    <div
    className="z-[-1] absolute inset-0 h-full w-full bg-purpleLight bg-[radial-gradient(#5c5c5c_1px,transparent_1px)] [background-size:32px_32px]"
    ></div>
    </section>
    </>
  )
}

export default ReviewsPage
