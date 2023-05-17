import React from 'react'
import { Link } from 'react-router-dom'
import OutboundIcon from '@mui/icons-material/Outbound'
import TitleCenterToLeft from '../../components/TitleCenterToLeft'

const WhyChooseUs = () => {
  return (
    <div className="w-full min-h-[90vh] lg:min-h-[65vh] flex items-center px-6">
      <div className="h-full max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-10 items-center  overflow-hidden">
        <img
          className="w-full max-lg:max-w-[600px] lg:max-w-[60%]"
          src="https://www.viccleaning.com.au/wp-content/uploads/2023/01/cleaning-crew-victoria.jpg"
          alt=""
        />
        <div className='max-lg:flex max-lg:flex-col max-lg:items-center'>
          <TitleCenterToLeft desc='About Us'>Kenapa Pilih Kami?</TitleCenterToLeft>
            <p className='text-slate-500 max-lg:text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            assumenda porro fuga consequatur ipsam nostrum maxime sed perspiciatis
            incidunt maiores quia Lorem ipsum dolor sit amet.
            </p>
            <Link to="about">
            <button className="px-6 py-4 bg-moss-light text-white rounded-full my-4 ">Tentang Kami
            <OutboundIcon className='ml-2'/>
            </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
