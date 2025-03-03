import React from 'react'
import HeroImg from "/assets/madhuram.png"

const Hero = () => {
  return (
    <section className="text-center pt-8 pb-14">
      <img src={HeroImg} alt='Madhuram' className='w-full h-auto'/>
    </section>
  )
}

export default Hero;
