import React from 'react'
import SectionHeader from './SectionHeader'
import PlanpriceCard from './PlanpriceCard'
import { planData } from './Data/PlanpriceData'

const PricingPlansSection = () => {
  return (
    <section id='pricing' className="px-4 md:px-6 lg:px-8">
      <div className="w-full pt-12 flex items-center flex-col">
        <SectionHeader
          badgeIcon='PricingPlan-badge.svg'
          badgeText='Pricing Plans'
          title={<>Plans Built to Scale With <br />Your Organization</>}
          subtitle={<>Simplify your workflow and keep your team focused on <br /> results — not complexity.</>}
        />

        <div className="grid w-full pt-18 gap-4 lg:gap-6 grid-cols-1 md:grid-cols-3">
          {planData.map((plan, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 120}>
              <PlanpriceCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                icon={plan.icon}
                features={plan.features}
                popular={plan.popular}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPlansSection