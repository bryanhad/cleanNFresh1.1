import { FiChevronDown } from 'react-icons/fi'
import { FiChevronUp } from 'react-icons/fi'
import PropTypes from 'prop-types'

const MyAccordion = ({
  array,
  activeItem: active,
  setActiveItem: setActive,
}) => {
  const toggle = (index) => {
    if (active === index) {
      return setActive(null)
    }
    setActive(index)
  }

  return (
    <div className="bg-white p-4 flex flex-col gap-2  mx-auto">
      {array.map((item, i) => (
        <div
          key={i}
          onClick={() => toggle(i)}
          className=" p-4 cursor-pointer border-b-2"
        >
          <div className="flex justify-between ">
            <h1 className="font-semibold text-lg text-slate-500">
              {item.title}
            </h1>
            <p className="font-semibold text-xl text-slate-500">
              {active === i ? <FiChevronUp /> : <FiChevronDown />}
            </p>
          </div>
          <div
            className={`text-sm mt-4 overflow-hidden duration-500 text-slate-500 ${
              active === i ? 'accordion-content show' : 'accordion-content'
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
MyAccordion.propTypes = {
  array: PropTypes.array,
  activeItem: PropTypes.any,
  setActiveItem: PropTypes.any,
}

export default MyAccordion
