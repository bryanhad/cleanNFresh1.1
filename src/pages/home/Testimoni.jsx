import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import customers from '../../data/ReviewsData'
import {BiHappyAlt} from 'react-icons/bi'
import {RiDoubleQuotesR} from 'react-icons/ri'
import TitleSection from '../../components/TitleSection'

const Testimoni = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full px-6 pb-[5rem]'>
      <div className='max-w-[1240px] mx-auto '>
        <TitleSection direction='center-to-center' color='primary' desc='Reviews'>Komentar dari Customer</TitleSection>
        <div className='mt-4 px-4'>
          <Slider {...settings}>
            {customers.map((customer, index) => (
              <Review key={index}
                name={customer.name}
                review={customer.review}
                stars={customer.stars}
                color={customer.color}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

const Review = ({ name, review, stars, color }) => {
  return (
    <div className='bg-moss-lightest/30 p-4 rounded-xl mx-2 relative'>

      <RiDoubleQuotesR className='text-[100px] absolute  right-[50%] translate-x-[50%] text-moss-lightest/30'/>

      <span className='relative z-[3]'>
        <div className='flex items-center'>
          <div className={`text-white w-[40px] h-[40px] rounded-full flex items-center justify-center text-[30px] mr-4 ${color}`}>
            <BiHappyAlt/>
          </div>
          <div>
            <h1 className='font-semibold py-1'>{name}</h1>
            <div className="flex text-amber-300 py-1">{stars.map((star, index) => (
              <div key={index}>{star}</div>
            ))}</div>
          </div>

        </div>
        <h1 className='text-slate-600 text-[14px] mt-2'>{review}</h1>
      </span>
    </div>
  )
}

export default Testimoni
