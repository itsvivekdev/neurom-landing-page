import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#030614] flex items-center justify-center px-4">
      
      <div className="w-full max-w-sm">

        <Link to="/">
          <img src="/logo.svg" alt="Neurom" className="w-28 h-auto mb-8" />
        </Link>

        <h1 className="text-2xl font-semibold text-white mb-1">
          Create your account
        </h1>
        <p className="text-[#9B9DA7] text-sm mb-7">
          Free to start. No credit card needed.
        </p>

        <div className="flex flex-col gap-4">

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-white">Full Name</label>
            <input
              type="text"
              placeholder="Vivek Kumar"
              className="px-4 py-3 rounded-xl bg-[#13172A] border border-slate-800/60 text-white placeholder:text-[#9B9DA7] text-sm outline-none focus:border-blue-600 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-white">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-3 rounded-xl bg-[#13172A] border border-slate-800/60 text-white placeholder:text-[#9B9DA7] text-sm outline-none focus:border-blue-600 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-white">Password</label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="px-4 py-3 rounded-xl bg-[#13172A] border border-slate-800/60 text-white placeholder:text-[#9B9DA7] text-sm outline-none focus:border-blue-600 transition-all"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium px-6 py-3 rounded-xl text-sm cursor-pointer mt-1">
            Get Started
          </button>

        </div>

        <p className="text-[#9B9DA7] text-sm mt-6">
          Already have an account?{' '}
          <Link to="/" className="text-blue-500 hover:text-blue-400 transition-all">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Signup