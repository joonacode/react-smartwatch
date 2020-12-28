import React from 'react'
import { IMGSwristwatchDark, IMGSwristwatchWhite } from '../../assets'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const WatchItem = ({ isDark }) => {
  if (isDark) {
    return (
      <div className='w-52 py-3 px-3 watch-item hover:shadow-none dark:bg-gray-800'>
        <div className='flex flex-col items-center justify-center'>
          <h5 className='font-bold text-black dark:text-white sm:text-2xl text-lg'>
            Dark
          </h5>
          <LazyLoadImage
            alt='IMGwristwatch'
            src={IMGSwristwatchDark} // use normal <img> attributes as props
          />
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
        <LazyLoadImage
          alt='IMGwristwatch'
          src={IMGSwristwatchWhite} // use normal <img> attributes as props
        />
      </div>
    </div>
  )
}

export default WatchItem
