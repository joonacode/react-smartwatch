import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IMGwristwatchDark, IMGwristwatchWhite } from '../../assets'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import WatchItem from '../WatchItem'
import './hero.css'

const Hero = () => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  const next = () => slider1.current.slickNext()
  const prev = () => slider1.current.slickPrev()

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '1px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='container mx-auto lg:px-20 px-5 min-h-screen flex items-center justify-center hero-container'>
      <div className='flex md:justify-around md:flex-row flex-col justify-center items-center'>
        <div className='md:block flex flex-col justify-center items-center md:mb-40 mb-0'>
          <h1 className='font-extrabold sm:text-6xl text-4xl mb-3 font-markh'>
            Smartwatch
          </h1>
          <span className='tracking-widest uppercase text-red-300 sm:text-2xl text-lg font-markr'>
            Element Series
          </span>
          <p className='mt-7 mb-8 text-gray-500 md:w-3/4 hero-desc md:text-left text-center font-markr'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            congue sed et leo, dignissim odio justo.
          </p>
        </div>
        <div className='img-hero relative'>
          <Slider {...settings2} asNavFor={nav1} ref={slider2}>
            <div>
              <img src={IMGwristwatchWhite} className='' alt='IMGwristwatch' />
            </div>
            <div>
              <img src={IMGwristwatchDark} className='' alt='IMGwristwatch' />
            </div>
            <div>
              <img src={IMGwristwatchWhite} className='' alt='IMGwristwatch' />
            </div>
            <div>
              <img src={IMGwristwatchDark} className='' alt='IMGwristwatch' />
            </div>
            <div>
              <img src={IMGwristwatchWhite} className='' alt='IMGwristwatch' />
            </div>
            <div>
              <img src={IMGwristwatchDark} className='' alt='IMGwristwatch' />
            </div>
          </Slider>
          <span
            className='text-3xl arrow-right text-gray-700 dark:text-white cursor-pointer'
            onClick={next}
          >
            <FaAngleRight />
          </span>
          <span
            className='text-3xl arrow-left text-gray-700 dark:text-white cursor-pointer'
            onClick={prev}
          >
            <FaAngleLeft />
          </span>
        </div>
        <div className='text-black watch-list w-40'>
          <Slider {...settings} asNavFor={nav2} ref={slider1}>
            <WatchItem />
            <WatchItem isDark={true} />
            <WatchItem />
            <WatchItem isDark={true} />
            <WatchItem />
            <WatchItem isDark={true} />
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero
