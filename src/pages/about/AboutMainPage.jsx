import React from 'react'
import TopPageTitle from '../../components/TopPageTitle'
import employeeBg from '../../assets/carousel/employeeBackground.png'
import TopPageBackground from '../../components/TopPageBackground'
import Kenalan from './Kenalan'
import HomeSecondBanner from '../home/HomeSecondBanner'
import Testimoni from '../home/Testimoni'


const AboutMainPage = () => {
  return (
    <div className="relative">
      {/* <EmployeeBackground /> */}
      <TopPageBackground
        opacity="opacity-[62%]"
        direction="left"
        background={employeeBg}
      />
      <TopPageTitle
        direction="left"
        minHeight='min-h-[150px]'
      >
        <p className="text-[14px] font-[300] py-2 text-green-200">About Us</p>
        KENALAN YUK
      </TopPageTitle>
      <div className='px-6'>
      <Kenalan />
      </div>
      <HomeSecondBanner/>
      <Testimoni/>
    </div>
  )
}

export default AboutMainPage
