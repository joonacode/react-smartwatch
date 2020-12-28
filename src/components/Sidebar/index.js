import React, { useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import { IMGLogoWhite } from '../../assets'

const Sidebar = ({ toggleSidebar }) => {
  const node = useRef()
  useEffect(() => {
    const handleClick = (e) => {
      if (node.current.contains(e.target)) {
        return
      }
      toggleSidebar()
    }
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div className='text-white bg-sidebar h-full min-h-screen w-full absolute top-0 left-0 z-10'>
      <div className='lg:w-1/4 w-2/5 bg-black z-20 h-full p-10' ref={node}>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <div
              className=' float-right text-2xl cursor-pointer'
              onClick={toggleSidebar}
            >
              <FaTimes />
            </div>
            <div className='flex flex-col clear-right mt-20 space-y-7'>
              <a href='/' className='text-2xl'>
                Home
              </a>
              <a href='/' className='text-2xl'>
                Smartphone
              </a>
              <a href='/' className='text-2xl'>
                Store
              </a>
            </div>
          </div>
          <div>
            <img
              src={IMGLogoWhite}
              className='w-36 float-right'
              alt='logowhite'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
