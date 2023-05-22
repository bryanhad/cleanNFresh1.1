import React from 'react'
import LOGO from '../../assets/cleanNFreshLogo.png'
import vacuumImg from '../../assets/photos/vacuumOnlyGood.png'
import bedBug from '../../assets/photos/bed-bug.jpg'


const PromoKasur = () => {
  return (
    <div className="grid md:grid-cols-2 pl-4 items-center relative min-h-[400px]">
      <div className='relative z-[1]'>
        <h1 className="font-bold text-[100px] md:text-[200px] text-yellow-400">
          95
          <span className="text-[20px] md:text-[50px]">rb/kasur</span>
        </h1>
        <button type='button' className='button button-small md:button-big'>LIHAT DETAIL</button>
      </div>
      <div className='max-md:absolute left-0 top-0 max-md:max-h-[300px] md:h-full overflow-hidden'>
        <img src={vacuumImg} className='object-fill md:object-cover h-full w-full' alt="" />
        {/* <img className='absolute top-0' src={bedBug} alt="" /> */}

      </div>
    </div>
  )
}

export default PromoKasur
