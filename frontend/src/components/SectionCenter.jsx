import React from 'react'
import { Link } from 'react-router-dom'
import mainImg from '../assets/hero-bcg-2.jpeg'
import Hero from '../assets/hero.png'
export const SectionCenter = () => {
  return (
    <div className='contain flex mt-32 justify-evenly relative'>

    <div className="info lg:w-fit flex flex-col gap-9 justify-center md:translate-x-12">

      <div className="title text-3xl md:text-5xl font-bold text-[#102a42]">
      Timeless Elegance,
        <br/>
      Exotic Journeys
      </div>

      <p className="text w-[100%] lg:w-96 text-[#535353] leading-7">
      Step into a realm where centuries converge, and elegance stands 
        the test of time. Embrace the exotic allure of Hanfu fashion as 
        we journey through eras of grace and splendor.
      </p>

        <Link to='/products'
          className='bg-[#71767b] text-white tracking-[0.15em] p-4 transition rounded-md w-40 text-center hover:bg-[#192a3a]'>SHOP NOW</Link>
    </div>

    <div className="images items-end relative hidden lg:flex">
      {/* <img src={mainImg} className='after h-44 absolute z-10 ' width={'800px'}alt="main img" /> */}
      <img src={Hero} className='rounded-md relative' width={'800px'} alt="second img" />
    </div>

  </div>
  )
}
