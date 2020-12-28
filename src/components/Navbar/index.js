import React from 'react'
import { ICMenu, ICMenuWhite, IMGLogo, IMGLogoWhite } from '../../assets'

const Navbar = ({ toggleSidebar, isDarkMode }) => {
  return (
    <div className='container mx-auto px-5 pt-5'>
      <div className='flex items-center justify-between'>
        <div>
          <img
            src={isDarkMode ? ICMenuWhite : ICMenu}
            className='w-8 h-8 cursor-pointer'
            onClick={toggleSidebar}
            alt='menu'
          />
        </div>
        <div className='hidden justify-between lg:flex'>
          <div className='flex items-center'>
            <a href='/' className='no-underline mr-7 font-markr'>
              Home
            </a>
            <a href='/' className='no-underline mr-7 font-markr'>
              Smartphone
            </a>
            <a href='/' className='no-underline mr-7 font-markr'>
              Store
            </a>
            <button className='px-3 py-2 bg-red-300 font-light text-white focus:outline-none font-markr'>
              Buy Now
            </button>
          </div>
        </div>
        <div className='logo-header'>
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
