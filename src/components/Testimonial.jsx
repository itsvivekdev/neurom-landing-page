import React from 'react'
import SectionHeader from './SectionHeader'
import { testimonials } from './Data/TestimonialData'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 pt-6 md:pt-10 lg:pt-12 pb-12 md:pb-16">
      <div className="flex items-center flex-col">
        <SectionHeader
          badgeIcon={'Testimonial-badge.svg'}
          badgeText={'Testimonial'}
          title={<>Our User Stories</>}
          subtitle={<>Explore user stories that highlight how we made a significant <br />impact and transformed user experiences in meaningful ways.</>}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mx-auto pt-8">
          {testimonials.map((user, index) => (
            <div key={user.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <TestimonialCard
                text={user.text}
                author={user.name}
                role={user.role}
                avatar={user.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial