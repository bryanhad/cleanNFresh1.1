import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'

const PromoButton = ({
  children,
  zIndex,
  setShowModal,
  show,
  setShowButton,
}) => {
  const BUTTON_STYLE = 'w-[150px] h-[150px]'

  return ( show &&
    <div className={`fixed ${zIndex} bottom-[50px] right-[5%]`}>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className={`${BUTTON_STYLE} bg-primary-darkest rounded-full font-bold flex items-center relative justify-center text-white`}
      >
        PROMO
        <button onClick={() => setShowButton(false)} type='button' className='absolute top-0 right-0 bg-slate-400/80 text-white rounded-full p-1'>
            <AiOutlineClose/>
        </button>
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
