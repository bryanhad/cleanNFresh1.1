import React from 'react'

const TitleCenterToLeft = ({ children, desc }) => {
  return (
    <div className='flex flex-col items-center lg:items-start'>
        <span className='max-lg:flex max-lg:flex-col max-lg:items-center'>
            <p className='text-primary-darker text-sm font-200'>{desc}</p>
            <h1 className="font-semibold text-primary-darker text-4xl mb-3 text-center">
                {children}
            </h1>
            <div className="w-[50%] h-[3px] bg-primary-darker mb-4"></div>
        </span>
    </div>
  )
}

export default TitleCenterToLeft
