import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import hotSale from "../assets/icons/sales.png";

const PromoButton = ({
  children,
  zIndex,
  setShowModal,
  show,
  setShowButton,
}) => {
  const BUTTON_STYLE = "w-[100px] h-[100px]";

  return (
    <div
      onClick={show ? undefined : () => setShowButton(true)}
      className={`fixed ${zIndex} bottom-[50px] duration-200 ${
        show ? "right-[5%]" : "right-[0] translate-x-[50%]"
      }  rounded-full `}
    >
      <button
        onClick={show ? () => setShowModal(true) : undefined}
        type="button"
        className={`${BUTTON_STYLE}  rounded-full duration-500 p-2 font-bold flex items-center relative justify-center text-white ${
          show ? "myBounce" : "bg-amber-300 opacity-[50%]"
        }`}
      >
        <img src={hotSale} alt="" />
      </button>
      <button
        onClick={() => setShowButton(false)}
        type="button"
        className="absolute top-0 right-0 bg-slate-400/80 text-white rounded-full p-1"
      >
        <AiOutlineClose />
      </button>
      {children}
    </div>
  );
};

PromoButton.propTypes = {
  children: PropTypes.element,
  zIndex: PropTypes.string,
  setShowModal: PropTypes.func,
  show: PropTypes.bool,
  setShowButton: PropTypes.func,
};

export default PromoButton;
