import React from 'react'
import SectionHeader from './SectionHeader'

const FeatureSection = () => {
  return (
    <section id='features' className="px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex items-center justify-center pt-12 w-full flex-col">

        <SectionHeader badgeIcon='feature-badge.svg' badgeText='Features' title={<>The Smartest Way to <br />Simplify Your Workflow</>} subtitle={<>Integrate your tools, automate tasks, and keep your team <br />aligned effortlessly.</>} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full mx-auto mt-8">

          <div data-aos="fade-right" data-aos-delay="0"
            className="relative md:row-span-2 bg-[#0d1117] rounded-2xl p-6 border border-slate-800 flex flex-col justify-between overflow-hidden
            before:absolute before:-top-10 before:-left-10 before:w-full before:h-20 before:bg-blue-600/25 before:blur-2xl before:rounded-full before:pointer-events-none
            after:absolute after:-bottom-10 after:-right-10 after:w-full after:h-20 after:bg-blue-700/35 after:blur-2xl after:rounded-full after:pointer-events-none">
            <img src="bento-research-assistant.png" alt="" className="w-full h-auto max-h-64 md:max-h-none object-contain mb-6" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Intelligent Research Assistant</h3>
              <p className="text-slate-400 text-[14px]">
                Create blogs, pages, and FAQs with one-click prompts. Generate high-quality, SEO-ready content—from articles to product descriptions—in seconds. AI adapts to your tone, goals, and audience for smarter content, instantly delivered.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="0"
            className="relative bg-[#0d1117] rounded-2xl p-6 border border-slate-800 flex flex-col justify-between overflow-hidden
            before:absolute before:-top-10 before:-left-10 before:w-full before:h-20 before:bg-blue-600/25 before:blur-2xl before:rounded-full before:pointer-events-none
            after:absolute after:-bottom-10 after:-right-10 after:w-full after:h-20 after:bg-blue-700/35 after:blur-2xl after:rounded-full after:pointer-events-none">
            <img src="bento-continual-improvement.png" alt="" className="w-full h-auto max-h-64 object-contain mb-4" />
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Continual Improvement</h3>
              <p className="text-slate-400 text-[14px]">AI constantly learns from user interactions and website data & this ongoing process.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150"
            className="relative bg-[#0d1117] rounded-2xl p-6 border border-slate-800 flex flex-col justify-between overflow-hidden
            before:absolute before:-top-10 before:-left-10 before:w-full before:h-20 before:bg-blue-600/25 before:blur-2xl before:rounded-full before:pointer-events-none
            after:absolute after:-bottom-10 after:-right-10 after:w-full after:h-20 after:bg-blue-700/35 after:blur-2xl after:rounded-full after:pointer-events-none">
            <img src="bento-scalable-interface.avif" alt="" className="w-full h-auto max-h-64 object-contain mb-4" />
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">Scalable Interface</h3>
              <p className="text-slate-400 text-[14px]">AI constantly learns from user interactions and website data & this ongoing process.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100"
            className="relative bg-[#0d1117] rounded-2xl p-6 border border-slate-800 flex flex-col justify-between overflow-hidden
            before:absolute before:-top-10 before:-left-10 before:w-full before:h-20 before:bg-blue-600/25 before:blur-2xl before:rounded-full before:pointer-events-none
            after:absolute after:-bottom-10 after:-right-10 after:w-full after:h-20 after:bg-blue-700/35 after:blur-2xl after:rounded-full after:pointer-events-none">
            <img src="bento-effortless-onboarding.png" alt="" className="w-full h-auto max-h-64 object-contain mb-4" />
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">Effortless Onboarding</h3>
              <p className="text-slate-400 text-[14px]">See how our platform connects buyers and sellers worldwide—instantly and seamlessly.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="250"
            className="relative bg-[#0d1117] rounded-2xl p-6 border border-slate-800 flex flex-col justify-between overflow-hidden
            before:absolute before:-top-10 before:-left-10 before:w-full before:h-20 before:bg-blue-600/25 before:blur-2xl before:rounded-full before:pointer-events-none
            after:absolute after:-bottom-10 after:-right-10 after:w-full after:h-20 after:bg-blue-700/35 after:blur-2xl after:rounded-full after:pointer-events-none">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">Actionable Insights</h3>
              <p className="text-slate-400 text-[14px] mb-4">Tracks user behavior and conversions to reveal what's driving results.</p>
            </div>
            <img src="bento-analytics-chart.png" alt="" className="w-full h-auto max-h-64 object-contain mt-2" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeatureSection