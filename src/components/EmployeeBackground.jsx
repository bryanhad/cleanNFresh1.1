import React from 'react'
import employeeBackgroundObj from '../data/employeeBackgroundData'
import waveSVG from '../assets/background/waves.svg'

const EmployeeBackground = () => {
  const imgStyle = 'w-full object-cover '
  const divStyle = 'h-full overflow-hidden'

  return (
    <div className="absolute h-[500px] top-0 left-[50%] translate-x-[-50%] w-full z-[-1] opacity-[80%]  overflow-hidden">
      {/* <div className="bg-[#3cafe0] w-full h-full absolute top-0 left-0 opacity-[75%] brightness-[100%]"></div> */}

      <div className="absolute-xy-center z-[-2] h-full min-w-[1800px] w-full flex flex-col items-center brightness-[80%]">
        <div className=" grid grid-cols-7 gap-3">
          {employeeBackgroundObj.top.map((image) => (
            <div className={divStyle}>
              <img className={imgStyle} src={image} alt="backgroundIMG" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-8 gap-3 mt-3">
          {employeeBackgroundObj.mid.map((image) => (
            <div className={divStyle}>
              <img className={imgStyle} src={image} alt="backgroundIMG" />
            </div>
          ))}
        </div>
      </div>

      <img
        className="min-w-[700px] w-full absolute scale-y-[-1] bottom-[-2px] left-0 h-[100px]"
        src={waveSVG}
        alt=""
      />
    </div>
  )
}

export default EmployeeBackground
