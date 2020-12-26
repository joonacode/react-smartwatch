import React from 'react'
import { IMGwristwatchDark } from '../../assets'

const WatchItem = () => {
  return (
    <div className='w-52 py-3 px-3 watch-item hover:shadow-none'>
      <div className='flex flex-col items-center justify-center'>
        <h5 className='font-bold text-2xl'>Dark</h5>
        <img src={IMGwristwatchDark} alt='imgs' />
      </div>
    </div>
  )
}

export default WatchItem
