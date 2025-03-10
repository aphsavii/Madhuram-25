import React from 'react'
import MadhuramHero from "/assets/madhuramLogo2.png"

const Hero = () => {
  return (
    <section className="text-center md:py-0 py-8 ">
      <img src={MadhuramHero} alt='Madhuram' className='md:w-4/5 w-full h-auto mx-auto'/>
    </section>
  )
}

export default Hero;
