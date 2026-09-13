import React from 'react'
import SectionHeader from './SectionHeader'
import { Link } from 'react-router-dom'

const SignUpSection = () => {
  return (
    <div>
      <section id='signup' className="w-full bg-cover bg-center pt-16 pb-12 overflow-hidden" style={{ backgroundImage: "url('SignUp-bg.webp')" }}>
        <div className="w-full pt-16 pb-12 flex items-center flex-col gap-8 px-4">

          <SectionHeader
            badgeIcon={'SignUp-badge.svg'}
            badgeText={'Sign Up'}
            title={<>Optimize Your Operations<br /> with Smart Applications</>}
            subtitle={<>Integrate, automate, and optimize your workflows with <br />intelligent tools designed for efficiency.</>}
          />

          <div data-aos="fade-up" data-aos-delay="100">
            <Link to="/signup">
              <button className='px-8 py-3 md:px-12 md:py-4 cursor-pointer text-[16px] font-bold rounded-2xl bg-blue-500'>Sign Up</button>
            </Link>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="relative px-0 w-full flex justify-center items-center mx-auto">
            <img src="SignUp-center-img.webp" loading="lazy" className='w-full h-auto' alt="" />
            <div className="absolute w-full bottom-0 h-3/4 bg-linear-to-t from-black via-black/80 to-transparent" />
          </div>

        </div>
      </section>
    </div>
  )
}

export default SignUpSection