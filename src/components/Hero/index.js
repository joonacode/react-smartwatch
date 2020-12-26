import React from 'react'
import { IMGwristwatchWhite } from '../../assets'
import WatchList from '../WatchList'

const Hero = () => {
  return (
    <div className='container mx-auto px-20'>
      <div className='flex justify-around'>
        <div className='mt-20'>
          <h1 className='font-extrabold text-6xl mb-3 font-markh'>
            Smartwatch
          </h1>
          <span className='tracking-widest uppercase text-red-300 text-2xl font-markr'>
            Element Series
          </span>
          <p className='mt-7 text-gray-500 w-3/4 font-markr'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            congue sed et leo, dignissim odio justo.
          </p>
          <WatchList />
        </div>
        <div>
          <img
            src={IMGwristwatchWhite}
            className='max-h-full'
            alt='IMGwristwatchWhite'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
