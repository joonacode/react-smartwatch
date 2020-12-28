import React from 'react'
import { IMGSwristwatchDark, IMGSwristwatchWhite } from '../../assets'

const WatchItem = ({ isDark }) => {
  if (isDark) {
    return (
      <div className='w-52 py-3 px-3 watch-item hover:shadow-none dark:bg-gray-800'>
        <div className='flex flex-col items-center justify-center'>
          <h5 className='font-bold text-black dark:text-white sm:text-2xl text-lg'>
            Dark
          </h5>
          <img src={IMGSwristwatchDark} alt='imgs' />
        </div>
      </div>
    )
  }
  return (
    <div className='w-52 py-3 px-3 watch-item hover:shadow-none dark:bg-gray-800'>
      <div className='flex flex-col items-center justify-center'>
        <h5 className='font-bold text-black dark:text-white sm:text-2xl text-lg'>
          White
        </h5>
        <img src={IMGSwristwatchWhite} alt='imgs' />
      </div>
    </div>
  )
}

export default WatchItem
