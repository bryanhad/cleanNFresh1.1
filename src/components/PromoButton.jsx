import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'
import PromoImg from '../assets/icons/promo.png'

const PromoButton = ({
  children,
  zIndex,
  setShowModal,
  show,
  setShowButton,
}) => {
  const BUTTON_STYLE = 'w-[100px] h-[100px]'

  return ( show &&
    <div className={`fixed ${zIndex} bottom-[50px] right-[5%] rounded-full `}>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className={`${BUTTON_STYLE} bg-white/30 rounded-full p-3 font-bold flex items-center relative justify-center text-white myBounce`}
      >
        <img src={PromoImg} alt="" />
      </button>
        <button onClick={() => setShowButton(false)} type='button' className='absolute top-0 right-0 bg-slate-400/80 text-white rounded-full p-1'>
            <AiOutlineClose/>
        </button>
      {children}
    </div>
  )
}

PromoButton.propTypes = {
  children: PropTypes.element,
  zIndex: PropTypes.string,
  setShowModal: PropTypes.func,
}

export default PromoButton
