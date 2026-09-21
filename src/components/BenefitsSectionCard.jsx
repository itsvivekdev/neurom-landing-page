import React from 'react'

const BenefitsSectionCard = ({icon,title,description}) => {
  return (
    <div>
        <div className="flex items-center flex-col gap-2  p-2 lg:p-4">
            <img className='w-20' src={icon} alt="icon" />
            <h3 className='text-2xl text-center font-semibold'>{title}</h3>
            <p className='text-[14px] text-left text-[#9B9DA7]'>{description}</p>
        </div>
    </div>
  )
}

export default BenefitsSectionCard
