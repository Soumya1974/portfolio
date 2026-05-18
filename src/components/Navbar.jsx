import React, { useState } from 'react'

const Navbar = ({ onConfirm }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (


    <nav className='z-50 w-full bg-white border-b border-gray-100 fixed top-0'>

      <div className='flex justify-between items-center h-16 sm:h-20 px-5 sm:px-8 md:px-17'>

        <p className='font-semibold text-base sm:text-lg md:text-xl cursor-pointer tracking-tight'>
          <a href="#hero">Soumya.dev</a>
        </p>

        <ul className='hidden md:flex items-center gap-8 lg:gap-10 font-semibold list-none text-sm lg:text-base'>
          <li className='cursor-pointer text-gray-500 hover:text-black transition-colors duration-300'
            onClick={onConfirm}
          >
            About
          </li>
          <li className='cursor-pointer text-gray-500 hover:text-black transition-colors duration-300'  >
            <a href="#work">Works</a>
          </li>
          <li className='cursor-pointer text-gray-500 hover:text-black transition-colors duration-300'>
            <a href="#footer">Contacts</a>
          </li>
        </ul>

        <button
          className='md:hidden flex flex-col justify-center items-center gap-1.5 cursor-pointer p-1'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          <span className={`block w-5 sm:w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 sm:w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 sm:w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      <ul className={`md:hidden w-full bg-white flex flex-col items-start font-semibold list-none overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 border-b border-gray-200' : 'max-h-0'}`}>
        <li className='cursor-pointer text-gray-500 hover:text-black px-5 sm:px-8 py-3.5 w-full hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base'
          onClick={() => {
            setIsOpen(false);
            onConfirm();
          }}
        >
          About
        </li>
        <li className='cursor-pointer text-gray-500 hover:text-black px-5 sm:px-8 py-3.5 w-full hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base' onClick={() => setIsOpen(false)}>
          <a href="#work">Works</a>
        </li>
        <li className='cursor-pointer text-gray-500 hover:text-black px-5 sm:px-8 py-3.5 w-full hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base' onClick={() => setIsOpen(false)}>
          <a href="#footer">Contacts</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar