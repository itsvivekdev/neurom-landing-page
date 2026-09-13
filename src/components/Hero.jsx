import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
      <section id='home' className='relative w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('hero.webp')" }}>
        <div className="flex items-center flex-col pt-40 gap-5">

          <div data-aos="zoom-in" data-aos-delay="0" data-aos-offset="0"
            className="flex items-center px-3 py-2 text-[16px] md:text-[20px] rounded-2xl gap-2.5 border border-white/40 shadow-[inset_0_0_15px_rgba(255,255,255,0.08)] text-white">
            <img src="herofeature.svg" alt="" />Simplify your team workflow
          </div>

          <h2 data-aos="fade-up" data-aos-delay="150" data-aos-offset="0"
            className='text-4xl sm:text-[50px] md:text-6xl lg:text-[84px] leading-[1.1] font-medium text-center p-3'>
            Smarter Models Faster <br className='hidden sm:block' /><span>Moves Bigger Wins</span>
          </h2>

          <p data-aos="fade-up" data-aos-delay="250" data-aos-offset="0"
            className='text-[16px] md:text-[20px] lg:text-2xl text-center px-2 leading-[1.1] pb-8'>
            AI-optimized sales teams with human-grade decision-making
          </p>

          <div data-aos="fade-up" data-aos-delay="350" data-aos-offset="0">
            <a href="#pricing"><Button /></a>
          </div>

          <img data-aos="fade-up" data-aos-delay="60" data-aos-offset="0"
            className='h-auto w-full' src="heroimg.svg" alt="heroimage" />

        </div>
      </section>
    </div>
  )
}

export default Hero