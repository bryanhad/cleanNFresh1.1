import React from 'react'
import TopPageTitle from '../../components/TopPageTitle'
import TopPageBackground from '../../components/TopPageBackground'

const KontakMainPage = () => {
  return (
    <div>
      <TopPageBackground
        direction="left"
        background=""
        color="sm:bg-[#98dfeb]"
      />
      <TopPageTitle direction='left' desc="Apakah Anda lelah melakukan pekerjaan rumah tangga? Apakah Anda merasa stres seperti tidak punya cukup waktu dalam sehari? Apakah rumah atau tempat kerja Anda terasa berantakan dan kotor? Jangan khawatir.">
        <p className="text-[14px] font-[300] py-2 text-green-200">
          Frequently Asked Questions
        </p>
        Kontak
      </TopPageTitle>
    </div>
  )
}

export default KontakMainPage
