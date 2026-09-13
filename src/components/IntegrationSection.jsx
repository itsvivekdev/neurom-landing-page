import React from 'react'
import SectionHeader from './SectionHeader'

const IntegrationSection = () => {
  return (
    <div>
      <section>
        <div className="w-full flex items-center flex-col">
          <SectionHeader
            badgeIcon='Integration-badge.svg'
            badgeText='Integration'
            title={<>Built to Work Perfectly<br /> With Your Existing Tools</>}
            subtitle={<>Connect, collaborate, and operate efficiently with the tools<br /> your team already depends on.</>}
          />
          <div data-aos="zoom-in" data-aos-delay="100">
            <img className='w-full h-auto' src="Integration-main-img.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntegrationSection