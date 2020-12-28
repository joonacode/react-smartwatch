import React from 'react'
import { ICMenu, ICMenuWhite, IMGLogo, IMGLogoWhite } from '../../assets'

const Navbar = ({ toggleSidebar, isDarkMode }) => {
  return (
    <div className='container mx-auto px-5 pt-5'>
      <div className='flex items-center justify-between'>
        <div className='nav-btn'>
          <img
            src={isDarkMode ? ICMenuWhite : ICMenu}
            className='w-8 h-8 cursor-pointer'
            onClick={toggleSidebar}
            alt='menu'
          />
        </div>
        <div className='hidden justify-between lg:flex'>
          <div className='flex items-center'>
            <span className='no-underline cursor-pointer mr-7 font-markr'>
              Home
            </span>
            <span className='no-underline cursor-pointer mr-7 font-markr'>
              Smartphone
            </span>
            <span className='no-underline cursor-pointer mr-7 font-markr'>
              Store
            </span>
            <button className='px-3 py-2 bg-red-300 font-light hover:bg-red-400 text-white focus:outline-none font-markr'>
              Buy Now
            </button>
          </div>
        </div>
        <div className='logo-header cursor-pointer'>
          <img
            src={isDarkMode ? IMGLogoWhite : IMGLogo}
            className='h-9'
            alt='logo'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
