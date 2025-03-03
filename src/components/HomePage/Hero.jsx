import React from 'react'
import HeroImg from "/assets/madhuram.png"

const Hero = () => {
  return (
    <section className="text-center md:py-0 py-8 ">
      <img src={HeroImg} alt='Madhuram' className='md:w-4/5 w-full h-auto mx-auto'/>
    </section>
  )
}

export default Hero;
