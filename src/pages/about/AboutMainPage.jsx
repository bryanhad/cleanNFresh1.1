import React from 'react'
import TopPageTitle from '../../components/TopPageTitle'
import EmployeeBackground from '../../components/EmployeeBackground'
import TopPageBackground from '../../components/TopPageBackground'

const AboutMainPage = () => {
  return (
    <div className="h-[100vh] relative">
      <EmployeeBackground />
      <TopPageBackground
        opacity="opacity-[92%]"
        direction="left"
      />
      <TopPageTitle
        direction="left"
        desc="Apakah Anda lelah melakukan pekerjaan rumah tangga? Apakah Anda merasa stres seperti tidak punya cukup waktu dalam sehari? Apakah rumah atau tempat kerja Anda terasa berantakan dan kotor? Jangan khawatir."
      >
        <p className="text-[14px] font-[300] py-2 text-green-200">
          About Us
        </p>
        KENALAN YUK
      </TopPageTitle>
    </div>
  )
}

export default AboutMainPage
