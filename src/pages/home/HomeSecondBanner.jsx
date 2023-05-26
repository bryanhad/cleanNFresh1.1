import React from 'react'
import { BiHappyAlt } from 'react-icons/bi'
import { MdCleaningServices } from 'react-icons/md'
import { TbFaceMask } from 'react-icons/tb'
import { BsStars } from 'react-icons/bs'
import arrowBot from '../../assets/background/arrowNegative.svg'
import TitleSection from '../../components/TitleSection'

const HomeSecondBanner = () => {
  return (
    <div className="w-full px-6 pt-12 pb-[calc(4rem+100px)] bg-primary-darker relative">

      <div className="max-w-[1240px] mx-auto ">
        <TitleSection direction='center-to-center'>Kami Memberikan Yang Terbaik</TitleSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Item
            icon={<BiHappyAlt />}
            title="Ramah dan Terlatih"
            desc="Seluruh pegawai telah melewati training yang menekankan profesionalisme dan keramahan"
          />
          <Item
            icon={<MdCleaningServices />}
            title="Produk Berkualitas"
            desc="Kami menggunakan Vacuum Hydrocleaner berteknologi tinggi yang telah tersertifikasi"
          />
          <Item
            icon={<TbFaceMask />}
            title="COVID-19 Protocol"
            desc="Semua pegawai kami sudah divaksin dan selalu kami pastikan dalam kondisi sehat pada saat bekerja"
          />
          <Item
            icon={<BsStars />}
            title="Berpengalaman"
            desc="Pegawai kami sudah berpengalaman lebih dari 3 tahun dan memiliki standar yang tinggi"
          />
        </div>
      </div>
      <div>
        <img className='min-w-[1600px] w-full absolute bottom-[-1px] left-[50%] translate-x-[-50%] h-[100px]' src={arrowBot} alt="" />
      </div>
    </div>
  )
}

const Item = ({ icon, title, desc }) => {
  return (
    <div className="text-primary-dark flex flex-col items-center bg-white rounded-xl p-4">
      <div className="text-[4rem]">{icon}</div>
      <h1 className="font-[500] text-xl text-center">{title}</h1>
      <div className="h-[3px] w-[60px] bg-moss-light my-2"></div>
      <p className="font-[300] text-slate-500 text-center text-sm">{desc}</p>
    </div>
  )
}
export default HomeSecondBanner
