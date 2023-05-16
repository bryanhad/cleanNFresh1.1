import React from 'react'
import {BiHappyAlt} from 'react-icons/bi'
import {MdCleaningServices} from 'react-icons/md'
import {TbFaceMask} from 'react-icons/tb'
import {BsStars} from 'react-icons/bs'

const HomeSecondBanner = () => {
  return (
    <div className='w-full px-6 py-10 bg-primary-darker'>
        <div className='max-w-[1240px] mx-auto '>
            <h1 className='font-semibold text-white text-3xl sm:text-4xl text-center mb-8'>Kami Memberikan Yang Terbaik</h1>

            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                <Item icon={<BiHappyAlt/>} title='Ramah dan Terlatih' desc='Seluruh pegawai telah melewati training yang menekankan profesionalisme dan keramahan'/>
                <Item icon={<MdCleaningServices/>} title='Produk Berkualitas' desc='Seluruh pegawai telah melewati training yang menekankan profesionalisme dan keramahan'/>
                <Item icon={<TbFaceMask/>} title='COVID-19 Protocol' desc='Seluruh pegawai telah melewati training yang menekankan profesionalisme dan keramahan'/>
                <Item icon={<BsStars/>} title='Berpengalaman' desc='Seluruh pegawai telah melewati training yang menekankan profesionalisme dan keramahan'/>
            </div>
        </div>
    </div>
  )
}

const Item = ({icon, title, desc}) => {
    return (
        <div className='text-primary-dark flex flex-col items-center bg-white rounded-xl p-4'>
            <div className='text-[4rem]'>
                {icon}
            </div>
            <h1 className='font-[500] text-xl text-center'>{title}</h1>
            <div className='h-[3px] w-[60px] bg-moss-light my-2'></div>
            <p className='font-[300] text-slate-500 text-center text-sm'>{desc}</p>
        </div>
    )
}
export default HomeSecondBanner