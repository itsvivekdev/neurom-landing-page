import React from 'react'
import Button from './Button'

const PlanpriceCard = ({
  name,
  price,
  description,
  icon,
  features,
  popular,
}) => {
  return (
    <div className='relative bg-[#030614] flex flex-col justify-between p-5 md:p-6 lg:p-8 rounded-3xl overflow-hidden border border-slate-800/60'>

      {popular && (
        <div className='bg-blue-600 text-white font-medium py-1 absolute top-0 left-0 right-0 text-sm text-center'>
          Best Value For Price
        </div>
      )}

      <div className={`bg-[#13172A] rounded-2xl p-2 ${popular ? 'mt-4' : ''}`}>
        <div className="flex items-center gap-3">
          <img className='w-10 h-10 lg:w-12 lg:h-12 object-contain shrink-0' src={icon} alt="" />
          <h3 className='text-xl md:text-base lg:text-xl font-semibold text-white'>{name}</h3>
        </div>
        <p className='text-sm text-[#9B9DA7] pt-4 leading-relaxed'>
          {description}
        </p>
        <div className="pt-4">
          <h3 className='text-xl lg:text-2xl font-bold text-white'>
            {price} <span className='text-[#9B9DA7] text-sm font-normal'>/ Per monthly</span>
          </h3>
        </div>
      </div>

      <div className="border-t border-slate-800/80 mt-6 pt-4 flex-1">
        <h4 className="mb-4 font-medium text-white text-sm lg:text-base">
          What's Included:
        </h4>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className='flex items-center gap-3'>
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                  feature.included
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-500"
                }`}
              >
                ✓
              </span>
              <span className='text-sm text-[#9B9DA7]'>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 lg:pt-8 w-full">
       <a href="#signup"> {popular ? (
          <Button className='w-full' text='Choose Plan' />
        ) : (
          <Button className='w-full border border-blue-500 bg-transparent hover:bg-blue-500' text='Choose Plan' />
        )}</a>
      </div>

    </div>
  )
}

export default PlanpriceCard