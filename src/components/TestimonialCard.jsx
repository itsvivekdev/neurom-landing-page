import React from 'react'

const TestimonialCard = ({ text, author, role, avatar }) => {
  return (
    <div className='flex items-center rounded-2xl flex-col p-4 border border-[#373B4B]/30 bg-[#030614] w-full'>
      <div className="w-full bg-[#13172A] rounded-2xl p-4 text-sm md:text-base text-[#9B9DA7]">
        {text}
      </div>

      <div className="flex w-full items-center justify-between pb-4 pt-5 px-2">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col">
            <span className="text-[16px] text-[#FFFFFF] font-medium">{author}</span>
            <span className="text-[14px] text-[#9B9DA7]">{role}</span>
          </div>
        </div>

        <div className="shrink-0">
          <img className="w-8 h-auto" src="/quote-icon.svg" alt="Quote" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard