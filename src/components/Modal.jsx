import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ children, color, show, setShowModal, zIndex }) => {
  return (
    show && (
      <div
        onClick={() => setShowModal(!show)}
        className={`fixed ${zIndex} top-[0px] left-0 w-[100%] h-screen bg-black/30 flex justify-center items-center`}
      >
        <div
          onClick={e => {
            e.stopPropagation()
          }}
          className={`relative w-[80%] max-w-[1000px] max-h-[80%] ${color} overflow-hidden rounded-xl`}
        >
          {children}
          <button
            onClick={() => setShowModal(!show)}
            type="button"
            className="absolute right-5 top-5 text-[20px] text-slate-300 z-[5]"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    )
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string.isRequired,
  show: PropTypes.bool,
  setShowModal: PropTypes.func,
}

export default Modal
