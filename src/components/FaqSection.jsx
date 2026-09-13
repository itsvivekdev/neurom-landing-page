import React, { useState } from 'react'
import { faqData } from './Data/Faqdata'
import SectionHeader from './SectionHeader'

const FaqSection = () => {
  const [openid, setopenid] = useState(null)

  function toggle(id) {
    setopenid(openid === id ? null : id)
  }

  return (
    <div>
      <section id='faqs'>
        <div className="w-full flex items-center pt-12 flex-col pb-8">

          <SectionHeader
            badgeIcon={'Faq-badge.svg'}
            badgeText={'FAQs'}
            title={<>Here's What You Need <br /> to Know</>}
            subtitle={<>We simplify your workflow, so you can spend more time <br />growing your business.</>}
          />

          {faqData.map((faq, id) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={id * 60}
              onClick={() => toggle(id)}
              className='w-full max-w-4xl border border-blue-500/20 transition-all bg-[#090C1A] rounded-3xl px-4 py-2 md:py-4 mt-4 cursor-pointer'>
              <div className="flex items-center justify-between px-5">
                <h3 className='text-md md:text-lg'>{faq.question}</h3>
                {openid === id ? <span className='text-2xl'>−</span> : <span className='text-2xl'>+</span>}
              </div>
              {openid === id ? <p className='text-[#9B9DA7] text-sm md:text-base pt-6'>{faq.answer}</p> : null}
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}

export default FaqSection