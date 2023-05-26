import React, { useEffect, useState } from 'react'
import cleaning1 from '../../assets/carousel/cleaning1good.png'
import cleaning2 from '../../assets/carousel/cleaning2good.png'
import cleaning3 from '../../assets/carousel/cleaning3good.png'
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
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

  return (
    <div className="w-full h-[80vh] sm:h-[65vh] relative bg-primary-medium overflow-hidden">
      <main className="max-w-[1240px] relative top-[45%] translate-y-[-50%] mx-auto z-[4] ">
        <div className="text-white relative px-4 w-[85%] md:w-[70%] xl:w-[60%] ">
          <div className="relative z-[4] flex flex-col items-start">
            <p className='font-[200]'>Clean The Unseen</p>
            <h1 className="text-6xl font-semibold mb-2">Clean&apos;n Fresh</h1>
            <p className="mb-4 text-sm">
            Apakah anda yakin kasur anda tidak dihuni tungau? Apakah anda yakin perabotan dan ruangan anda bersih dari kotoran dan kuman? Jangan khawatir. Clean'n Fresh menggunakan alat teknologi terkini yang telah disertifikasi oleh AHAM dan AAFA, sehingga menjamin tingkat kebersihan dan keamanan dari prosedur kami.
            </p>
            <MyButton to='layanan' size='button-big'>Jasa Kami</MyButton>
          </div>

          <div className="hidden sm:block absolute top-[50%] translate-y-[-40%] left-[-10%]">
            <BubbleChartIcon style={{fontSize:'600px'}} className='  text-primary-light/20'/>
          </div>
        </div>
      </main>

      {/* skew */}
      <div className="skewed skewed-left"></div>
      {/* Color Filter When Small */}
      <div className='w-full h-full duration-300 sm:hidden bg-[#3caedf] opacity-[40%] absolute top-0 z-[3] '></div>

      {/* Carousel Background Image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="absolute top-0 right-0  bg-no-repeat bg-cover h-[100%] w-[100%] sm:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[42%] duration-500  bg-center brightness-[50%] sm:brightness-[90%] md:brightness-100"
      ></div>
    </div>
  )
}

export default HomeCarousel
