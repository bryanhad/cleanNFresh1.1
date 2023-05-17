import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import cleaning1 from '../../assets/carousel/cleaning1good.png'
import cleaning2 from '../../assets/carousel/cleaning2good.png'
import cleaning3 from '../../assets/carousel/cleaning3good.png'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import OutboundIcon from '@mui/icons-material/Outbound'
import MyButton from '../../components/MyButton'

const HomeCarousel = () => {
  const slides = [cleaning1, cleaning2, cleaning3]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        const newIndex = currentIndex + 1
        setCurrentIndex(newIndex)
      } else {
        setCurrentIndex(0)
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full h-[85vh] sm:h-[75vh] relative bg-primary-medium overflow-hidden">
      <main className="max-w-[1240px] relative top-[40%] translate-y-[-50%] mx-auto z-[2] ">
        <div className="text-white relative px-4 w-[85%] md:w-[70%] xl:w-[60%] ">
          <div className="relative z-[4] flex flex-col items-start">
            <h1 className="text-6xl font-semibold mb-2">CLEAN THE UNSEEN</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              dolor tenetur numquam, recusandae debitis illum corrupti laborum?
              Voluptatem aliquam. lorem12
            </p>
            <MyButton to='layanan' size='button-big'>Jasa Kami</MyButton>
          </div>

          <div className="hidden sm:block absolute top-[50%] translate-y-[-40%] left-[-10%]">
            <BubbleChartIcon style={{fontSize:'600px'}} className='  text-primary-light/20'/>
          </div>
        </div>
      </main>

      <div className="absolute z-[1] top-0 left-[-140%] sm:left-0 duration-500 sm:w-[40%] md:w-[30%] lg:w-[50%] xl:w-[58%] skewed"></div>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="absolute top-0 right-0  bg-no-repeat bg-cover h-[100%] w-[100%] sm:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[42%] duration-500  bg-center brightness-[70%] sm:brightness-[90%] md:brightness-100"
      ></div>

      {/* <div className='absolute right-0 rounded-full border-8 border-primary-light'> */}
      {/* </div> */}
    </div>
  )
}

export default HomeCarousel
