import React from 'react'

const Button = ({ text = "Get Started", onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl cursor-pointer
        px-6 py-2.5 text-sm md:px-10 md:py-3.5 md:text-base transition-all ${className}`}
    >
      {text}
    </button>
  )
}

export default Button