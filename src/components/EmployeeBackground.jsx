import React from 'react'
import employeeBackgroundObj from '../data/employeeBackgroundData'
import waveSVG from '../assets/background/waves.svg'

const EmployeeBackground = () => {
    const imgStyle = 'w-[150px] md:w-[200px] lg:w-[260px]'

  return (
    <div className='absolute top-0 left-[50%] translate-x-[-50%] w-full z-[-1] opacity-[75%]'>
        <div className='bg-[#007cb1] w-full h-full absolute top-0 left-0 opacity-[75%]'></div>
        <div className='flex justify-center gap-3'>
            {employeeBackgroundObj.top.map(image => (
                <img className={imgStyle} src={image} alt='backgroundIMG' />
            ))}
        </div>
        <div className='flex justify-center gap-3 mt-3'>
            {employeeBackgroundObj.mid.map(image => (
                <img className={imgStyle} src={image} alt='backgroundIMG' />
            ))}
        </div>
        <div className='flex justify-center gap-3 mt-3'>
            {employeeBackgroundObj.bot.map(image => (
                <img className={imgStyle} src={image} alt='backgroundIMG' />
            ))}
        </div>
        <img className='min-w-[700px] absolute scale-y-[-1] bottom-0 left-0 h-[100px]' src={waveSVG} alt="" />

        
    </div>
  )
}

export default EmployeeBackground