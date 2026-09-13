import React from 'react'
import StepsectionCard from './StepsectionCard'
import SectionHeader from './SectionHeader'
import Button from './Button'

const StepsSection = () => {
  return (
    <section id='how-it-works' className="px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex items-center pt-12 justify-center w-full flex-col">

        <SectionHeader
          badgeIcon='settings-icon.svg'
          badgeText='How It Works'
          title={<>Get Started in Just Few <br />Simple Steps</>}
          subtitle={<>One platform to manage it all, so your team can focus on <br />progress, not process.</>}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full pt-16">
          <div data-aos="fade-up" data-aos-delay="0">
            <StepsectionCard
              icon='user-add-icon.svg' step='STEP 1' title='Creativity with Purpose'
              subtitle='Create your account in minutes. Customize your workspace to fit your needs — no technical skills required.'
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <StepsectionCard
              icon='percent-tag-icon.svg' step='STEP 2' title='Plug In & Set Up'
              subtitle='Sync your tools, set up workflows, and onboard your team with ease. Integrate, organize, and get everyone on the same page.'
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <StepsectionCard
              icon='rocket-icon.svg' step='STEP 3' title='Execute & Elevate'
              subtitle='Go live, monitor performance, and continuously improve with real-time insights. Deploy your system and let data guide your next big move.'
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="pt-12 w-full">
          <div className="px-4 py-4 rounded-2xl w-full flex flex-col sm:flex-row items-center gap-4 justify-between bg-[#070B19]">
            <span className="text-white text-sm md:text-base text-center sm:text-left">
              Setup So Simple, It Just Works — Let's Set Things Up!
            </span>
            <a href="#pricing"><Button text="Get Started" className="shrink-0" /></a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default StepsSection