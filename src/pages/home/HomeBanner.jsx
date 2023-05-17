import React from 'react'
import Banner from '../../components/Banner'
import CallIcon from '@mui/icons-material/Call'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const HomeBanner = () => {
  return (
    <Banner color="bg-primary-darker">
      <div className="flex flex-col items-center py-4 gap-4 lg:flex-row lg:px-8 lg:justify-between">
        <Item
          icon={
            <CallIcon className="text-[20px] md:text-[24px] lg:text-[30px]" />
          }
          title="INGIN LANGSUNG PESAN?"
          desc="0815 1105 7728"
        />
        <Line />
        <Item
          icon={
            <QueryBuilderIcon className="text-[20px] sm:max-lg:text-[24px] lg:text-[30px]" />
          }
          title="KAMI BEROPERASI SENIN-SABTU"
          desc="08:00 - 17:00"
        />
        <Line />

        <Item
          icon={
            <LocationOnIcon
              className="text-[20px] sm:max-lg:text-[24px] lg:text-[30px]"
              color="white"
            />
          }
          title="KAMI MELAYANI"
          desc="JABODETABEK"
        />
      </div>
    </Banner>
  )
}

const Item = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      {icon}
      <div className="sm:ml-8 sm:flex lg:block sm:items-center">
        <h1 className="font-bold text-[12px] sm:max-lg:text-[14px] tracking-wider max-sm:text-center">
          {title}
        </h1>
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
