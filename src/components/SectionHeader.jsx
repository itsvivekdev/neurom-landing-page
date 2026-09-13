import React from 'react'

const SectionHeader = ({ badgeIcon, badgeText, title, subtitle }) => {
  return (
    <div className="pt-12 w-full flex items-center flex-col">

      <div data-aos="fade-up" data-aos-delay="50"
        className="px-4 py-2 bg-[#0B0A24] rounded-4xl flex items-center gap-2 border border-[#2E2D48]">
        <img src={badgeIcon} alt="setting-icon" />{badgeText}
      </div>

      <h3 data-aos="fade-up" data-aos-delay="100"
        className='text-2xl sm:text-4xl md:text-5xl pt-5 font-semibold text-center [&_br]:hidden sm:[&_br]:block'>
        {title}
      </h3>

      <p data-aos="fade-up" data-aos-delay="200"
        className='text-sm sm:text-base md:text-lg pt-5 text-[#9B9DA7] text-center [&_br]:hidden sm:[&_br]:block'>
        {subtitle}
      </p>

    </div>
  )
}

export default SectionHeader