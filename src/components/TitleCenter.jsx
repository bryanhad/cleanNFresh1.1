import React from 'react'

const TitleCenter = ({children, desc, textColor, lineColor}) => {
  return (
    <div className="flex flex-col items-center">
        <span className='flex flex-col items-center'>
            <p className={`${textColor} text-sm font-200`}>{desc}</p>
            <h1 className={`font-semibold ${textColor} text-4xl mb-3 text-center`}>
            {children}
            </h1>
            <div className={`w-[50%] h-[3px] ${lineColor} mb-4`}></div>
        </span>
    </div>
  )
}

export default TitleCenter
