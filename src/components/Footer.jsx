import React from "react"

const Footer = () => {
  return (
    <footer className="w-full pt-16">

      <div className="w-full px-6 md:px-12 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-04">

          <div data-aos="fade-up" data-aos-delay="0" className="lg:col-span-1">
            <div className="flex flex-col items-start gap-4">
              <img className="w-40 h-auto" src="logo.svg" alt="Neurom" />
              <p className="max-w-sm text-sm leading-6 text-[#9B9DA7]">
                Simplify your workflow and get more done, faster.
              </p>
            </div>
            <div className="mt-10">
              <p className="mb-4 text-sm text-[#9B9DA7]">Subscribe to get latest updates</p>
              <div className="flex w-full items-center gap-2 rounded-2xl border border-[#9B9DA7]/30 p-1.5">
                <input
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-[#6F717A]"
                  type="email"
                  placeholder="Enter your email..."
                />
                <button className="shrink-0 cursor-pointer rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold transition hover:bg-blue-600 md:px-7">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-[#9B9DA7]">
              <li className="cursor-pointer transition hover:text-white"><a href="#home">Home</a></li>
              <li className="cursor-pointer transition hover:text-white"><a href="#how-it-works">How It Works</a></li>
              <li className="cursor-pointer transition hover:text-white"><a href="#pricing">Pricing</a></li>
              <li className="cursor-pointer transition hover:text-white"><a href="#faqs">FAQs</a></li>
              <li className="cursor-pointer transition hover:text-white"><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-[#9B9DA7]">
              <li className="cursor-pointer transition hover:text-white">Style Guide</li>
              <li className="cursor-pointer transition hover:text-white">License</li>
              <li className="cursor-pointer transition hover:text-white">Changelog</li>
              <li className="cursor-pointer transition hover:text-white">404</li>
              <li className="cursor-pointer transition hover:text-white">Password</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm leading-6 text-[#9B9DA7]">
              <li>+1 (800) 123-4567</li>
              <li>support@Neurom.com</li>
              <li>4517 Washington Ave.<br />Manchester, Kentucky<br />39495</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="px-6 pt-8 border-t mt-6 border-[#9B9DA7]/10 md:px-12 lg:px-14">
        <p className='text-[#9B9DA7] text-lg'>Built in React by <u>Vivek</u></p>
      </div>

      <div className="mt-16 w-full overflow-hidden">
        <img className="block   w-full h-auto" src="footer-img.png" loading="lazy" alt="" />
      </div>

    </footer>
  )
}

export default Footer
