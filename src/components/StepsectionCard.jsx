import React from 'react'

const StepsectionCard = (props) => {
  return (
    <div className='relative flex flex-col gap-4 w-full p-6 rounded-3xl overflow-hidden
     bg-[#090d16] border border-slate-800/80
     before:absolute before:-top-10 before:-left-10
      before:w-full before:h-20 before:bg-blue-600/25 before:blur-2xl
       before:rounded-full before:pointer-events-none
     after:absolute after:-bottom-10 after:-right-10
      after:w-full after:h-20 after:bg-blue-700/35 after:blur-2xl
       after:rounded-full after:pointer-events-none'>

      <div className="flex items-center gap-3.5">
        <img
          className='bg-[#103FF1] p-3 rounded-full w-10 h-10 md:w-12 md:h-12 object-contain shrink-0'
          src={props.icon}
          alt="icon"
        />
        <h3 className='text-[#9B9DA7] text-base md:text-lg font-semibold'>{props.step}</h3>
      </div>

      <div>
        <h3 className='text-lg md:text-xl font-semibold text-white mb-1'>{props.title}</h3>
        <p className='text-sm text-[#9B9DA7]'>{props.subtitle}</p>
      </div>

    </div>
  )
}

export default StepsectionCard