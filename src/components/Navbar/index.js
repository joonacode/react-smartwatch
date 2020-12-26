import React from 'react'
import { ICMenu, IMGLogo } from '../../assets'

const Navbar = () => {
  return (
    <div className='container mx-auto mt-5'>
      <div className='flex items-center justify-between'>
        <div>
          <img src={ICMenu} className='w-8 h-8' alt='menu' />
        </div>
        <div className='flex justify-between'>
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
          <img src={IMGLogo} className='h-9' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
