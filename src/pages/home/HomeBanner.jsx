import React from 'react'
import Banner from '../../components/Banner'
import {IoCall} from 'react-icons/io5'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

const HomeBanner = () => {
  const iconStyle = 'text-[20px] md:text-[24px] lg:text-[30px] max-sm:mb-2'

  return (
    <Banner color="bg-primary-darker">
      <div className="flex flex-col items-center py-4 gap-4 lg:flex-row lg:px-8 lg:justify-between">
        <Item
          icon={
            <IoCall className={iconStyle} />
          }
          title="INGIN LANGSUNG PESAN?"
          desc="0815 1105 7728"
        />
        <Line />
        <Item
          icon={
            <AiOutlineClockCircle className={iconStyle} />
          }
          title="KAMI BEROPERASI SENIN-SABTU"
          extra="MINGGU SPECIAL APPOINTMENT"
          desc="08:00 - 17:00"
        />
        <Line />

        <Item
          icon={
            <MdLocationOn
              className={iconStyle} 
              color="white"
            />
          }
          title="KAMI MELAYANI"
          desc="JADETABEK"
        />
      </div>
    </Banner>
  )
}

const Item = ({ icon, title, desc, extra }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      {icon}
      <div className="sm:ml-8 sm:flex lg:block sm:items-center">
        <h1 className="font-bold text-[12px] sm:text-[14px] tracking-wider max-sm:text-center">
          {title}
        </h1>
        <h5 className='text-[10px] sm:text-[12px] max-sm:text-center text-[#3593bb] font-bold sm:max-lg:ml-4'>{extra}</h5>
        <p className="font-bold text-lg lg:text-3xl text-amber-200 sm:max-lg:ml-4 max-sm:text-center">
          {desc}
        </p>
      </div>
    </div>
  )
}

const Line = () => {
  return (
    <div className="w-[50px] h-[2px] lg:h-[50px] lg:w-[2px] rounded-md bg-amber-300"></div>
  )
}

export default HomeBanner
