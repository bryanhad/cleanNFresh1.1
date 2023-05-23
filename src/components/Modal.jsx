import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ children, color, show, setShowModal }) => {
  return (
    show && (
      <div className="fixed z-[99] top-[0px] left-0 w-[100%] h-screen bg-black/25 flex justify-center items-center">
        <div className={`relative w-[80%] max-w-[1000px] max-h-[75%] ${color}`}>
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
