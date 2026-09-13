import React, { useState } from 'react'

const Navbar = () => {
  const [opennav, setopennav] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 py-4 bg-transparent backdrop-blur-md'>
      <nav className='flex items-center justify-between'>
        <img className='w-24 md:w-32 lg:w-40 h-auto' src="logo.svg" alt="logo" />

        <ul className='hidden items-center lg:flex gap-16 text-[18px]'>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#home">Home</a></li>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#features">Features</a></li>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#how-it-works">How It Works</a></li>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#pricing">Pricing</a></li>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#faqs">FAQs</a></li>
        </ul>

        <a href="#signup" className='hidden lg:flex'>
          <button className=' flex items-center transition-all duration-300 hover:scale-105 cursor-pointer bg-white rounded-2xl px-5 py-3 text-black gap-2'>
            Get Template <img src="navbtnsvg.svg" alt="svg" />
          </button>
        </a>

        <button
          onClick={() => setopennav(!opennav)}
          className="flex flex-col items-center gap-1.5 lg:hidden"
        >
          <div className={`w-8 bg-white h-0.5 transition-all duration-300 ${opennav ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-8 bg-white h-0.5 transition-all duration-300 ${opennav ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 bg-white h-0.5 transition-all duration-300  ${opennav ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${opennav ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className='flex flex-col items-center gap-10 text-[18px] py-8'>
          
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#home" onClick={() => setopennav(false)}>Home</a></li>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#features" onClick={() => setopennav(false)}>Features</a></li>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#how-it-works" onClick={() => setopennav(false)}>How It Works</a></li>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#pricing" onClick={() => setopennav(false)}>Pricing</a></li>
          <li className='cursor-pointer transition-all hover:text-gray-400'><a href="#faqs" onClick={() => setopennav(false)}>FAQs</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar