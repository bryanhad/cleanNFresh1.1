import React from 'react'
import LOGO from '../../assets/cleanNFreshLogo.png'
import vacuumImg from '../../assets/photos/vacuumOnlyGood.png'
import bedBug from '../../assets/photos/bed-bug.jpg'


const PromoKasur = () => {
  return (
    <div className="grid grid-cols-2 pl-4 items-center min-h-[400px]">
      <div>
        <h1 className="font-bold text-[200px] text-yellow-400">
          95
          <span className="text-[50px]">rb/kasur</span>
        </h1>
        <button type='button' className='button button-big'>LIHAT DETAIL</button>
      </div>
      <div className='relative'>
      <img src={vacuumImg} alt="" />
      {/* <img className='absolute top-0' src={bedBug} alt="" /> */}

      </div>
    </div>
  )
}

export default PromoKasur
