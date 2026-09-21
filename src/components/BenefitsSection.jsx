import React from 'react'
import SectionHeader from './SectionHeader'
import BenefitsSectionCard from './BenefitsSectionCard'

const BenefitsSection = () => {
  return (
    <div>
      <section className='w-full bg-cover bg-center overflow-hidden' style={{ backgroundImage: "url('Benefits-section-main.webp')" }}>
        <div className="flex items-center justify-center w-full bg-cover bg-center p-4 md:p-12 flex-col">

          <SectionHeader badgeIcon='Benefits-section-badge.svg' badgeText='Benefits' title={<>Top AI Advantages for <br />Your Business</>} subtitle={<>We simplify your workflow so you can focus on what <br />matters most: business growth.</>} />

          <div className="grid relative grid-cols-1 md:grid-cols-3 w-full overflow-hidden items-center pb-8 pt-8 gap-5">

            <div data-aos="fade-up" data-aos-delay="0">
              <BenefitsSectionCard icon={'icon-optimize-time.svg'} title={'Optimize Time & Effort'} description={<>Automate routine operations to free up time for <br />strategic, high-impact initiatives.</>} />
            </div>

            <div className="rounded-2xl hidden md:block bg-linear-to-b from-[#01040E] to-[#0A112B] w-full h-full"></div>

            <div data-aos="fade-up" data-aos-delay="150">
              <BenefitsSectionCard icon={'icon-boost-productivity.svg'} title={'Boost Productivity'} description={<>Eliminate process bottlenecks and ensure <br /> alignment across departments</>} />
            </div>

            <div className="rounded-2xl hidden md:block bg-linear-to-r from-[#01061B] to-[#0B1D4B] w-full h-full"></div>

            <div data-aos="zoom-in" data-aos-delay="100"
              className="rounded-2xl border border-blue-500/25 bg-[#0A112B] w-full flex items-center h-50">
              <img className='w-20 m-auto' src="brand-logo-badge.svg" alt="" />
            </div>

            <div className="rounded-2xl hidden md:block bg-linear-to-l from-[#010519] to-[#0A112B] w-full h-full"></div>

            <div data-aos="fade-up" data-aos-delay="0">
              <BenefitsSectionCard icon={'icon-data-driven.svg'} title={'Data-Driven Decisions'} description={<>Leverage real-time analytics to guide planning <br />and execution with greater clarity.</>} />
            </div>

            <div className="rounded-2xl hidden md:block bg-linear-to-t from-[#010924] to-[#0A112B] w-full h-full"></div>

            <div data-aos="fade-up" data-aos-delay="150">
              <BenefitsSectionCard icon={'icon-remote-productivity.svg'} title={'Remote Productivity'} description={<>Secure cloud access empowers teams to <br /> collaborate effectively from any location.</>} />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default BenefitsSection
