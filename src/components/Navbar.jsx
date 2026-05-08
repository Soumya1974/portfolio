import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full h-25 flex justify-between items-center px-5 md:px-17 relative bg-gray-100'>

      <div>
        <p className='font-semibold text-[20px] cursor-pointer'>
          Soumya.dev
        </p>
      </div>

      {/* desktop menu if screen width is hifg */}
      <ul className='hidden md:flex items-center gap-10 font-semibold list-none'>
        <li className='cursor-pointer hover:text-gray-600'>About</li>
        <li className='cursor-pointer hover:text-gray-600'>Works</li>
        <li className='cursor-pointer hover:text-gray-600'>Contact</li>
      </ul>

      {/* Hamburger type render for mobile menu */}
      <button
        className='md:hidden flex flex-col justify-center items-center gap-1.5 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
      >
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      <ul className={`md:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-start gap-0 font-semibold list-none overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 border-b border-gray-200' : 'max-h-0'}`}>
        <li className='cursor-pointer hover:text-gray-600 px-5 py-4 w-full hover:bg-gray-50' onClick={() => setIsOpen(false)}>About</li>
        <li className='cursor-pointer hover:text-gray-600 px-5 py-4 w-full hover:bg-gray-50' onClick={() => setIsOpen(false)}>Works</li>
        <li className='cursor-pointer hover:text-gray-600 px-5 py-4 w-full hover:bg-gray-50' onClick={() => setIsOpen(false)}>Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar