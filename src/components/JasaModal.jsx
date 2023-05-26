import React, { useContext } from 'react'
import { jasaContext } from '../context/jasaContext'
import PropTypes from 'prop-types'

const JasaModal = () => {
    const {jasa} = useContext(jasaContext)

  return (
    <div className='relative '>
        <div className='h-[12vw] sm:h-[80px] lg:h-[120px] w-full duration-200 relative z-[1] flex items-center py-8 px-6 sm:px-8 border-b-2 border-slate-100'>
            <h1 className='text-primary-darkest relative z-[3] font-[500] text-[4.2vw] sm:text-xl lg:text-[30px]'>{jasa.content.title}</h1>
            {/* <div className='w-full h-full bg-primary-darkest opacity-[20%] absolute top-0 left-0 z-[2]'></div> */}
            {/* <img className='h-full w-full object-cover brightness-[50%] absolute top-0 left-0 z-[1]' src={jasa.content.image} alt="" /> */}
        </div>
        <div className='p-3 sm:py-3 sm:px-4'>
            {jasa.content.fulldesc}
        </div>
    </div>
  )
}

export default JasaModal