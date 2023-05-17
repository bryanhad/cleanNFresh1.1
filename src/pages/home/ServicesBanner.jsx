import React from 'react'
import { GiVacuumCleaner } from 'react-icons/gi'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai'
import bestSellerIcon from '../../assets/icons/best-seller.png'
import { Link } from 'react-router-dom'
import OutboundIcon from '@mui/icons-material/Outbound'

import vacuumPic from '../../assets/photos/vacuumOnly.png'
import generalPic from '../../assets/photos/generalCleaningGood.png'
import carPic from '../../assets/photos/carCleaningGood.png'
import MyButton from '../../components/MyButton'

const ServicesBanner = () => {
  // const iconStyle = 'text-primary-dark group-hover:text-white text-3xl'

  return (
    <div className="w-full px-6">
      <div className="max-w-[1240px] translate-y-[-65px] mx-auto relative z-[5] flex flex-col lg:flex-row lg:justify-between gap-4">
        <ServiceCard
          // icon={<GiVacuumCleaner className={iconStyle} />}
          title="Vacuum Hydro cleaning"
          desc="Memberantas kutu tungau pada kasur, sofa, segala furniture"
          image={vacuumPic}
        />
        <ServiceCard
          // icon={<BsFillHouseDoorFill className={iconStyle} />}
          title="General Cleaning"
          desc="Pembersihan secara keseluruhan (Rumah, Kantor, Apartemen, dll)"
          image={generalPic}
        />
        <ServiceCard
          // icon={<AiFillCar className={iconStyle} />}
          title="Interior Cleaning"
          desc="Membersihkan seluruh bagian dalam mobil. Mobil seperti baru "
          image={carPic}
        />
      </div>
      <div className="max-w-[1240px] mx-auto flex justify-center translate-y-[-35px]">
        <MyButton to='layanan' size='button-big'>Lihat Semua Jasa Kami</MyButton>

      </div>
    </div>
  )
}

const ServiceCard = ({ icon, title, desc, path, image }) => {
  return (
    <div
      className={`min-h-[130px] duration-300 shadow-md border-b-4 rounded-xl border-slate-300 bg-white group hover:bg-primary-dark hover:translate-y-[-10px] cursor-pointer relative grid grid-cols-5`}
    >
      {/* bestseller Icon */}
      <img
        className="h-[45px] absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] "
        src={bestSellerIcon}
        alt=""
      />

      <div className="col-span-2 rounded-l-xl max-h-[200px] overflow-hidden">
        <img className="h-full w-full object-cover " src={image} alt="" />
      </div>

      {/* icon */}
      {/* <div className="p-4 rounded-full border-2 border-primary-dark group-hover:border-moss-lightest">
        {icon}
      </div> */}

      {/* picture */}
      <div className="h-full p-4 col-span-3">
        <h1 className="font-semibold text-lg text-primary-dark group-hover:text-white">
          {title}
        </h1>
        <p className="text-slate-500 group-hover:text-white text-[12px] font-[300]">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default ServicesBanner
