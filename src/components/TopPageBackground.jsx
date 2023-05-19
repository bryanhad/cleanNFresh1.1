import PropTypes from 'prop-types'
import waveSVG from '../assets/background/waves.svg'

const TopPageBackground = ({ direction, background }) => {
  let skewed = ''

  if (direction === 'left') {
    direction = 'right-0'
    skewed = 'skewed-left'
  } else if (direction === 'right') {
    direction = 'left-0'
    skewed = 'skewed-right'
  }

  return (
    <div
      className={`w-full h-[500px] absolute top-0 left-0 sm:bg-[#98dfeb] overflow-hidden z-[-1]`}
    >
      {/* SKEW */}
      <div className={`skewed ${skewed}`}></div>

      {/* COLOR FILTER */}
      <div className="w-full h-full duration-300 sm:hidden bg-[#2da1d3] opacity-[30%] absolute top-0 z-[2] "></div>

      {/* IMAGE */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={`absolute top-0 ${direction}  bg-no-repeat bg-cover h-[100%] w-[110%] sm:w-[60%] md:w-[70%] lg:w-[50%] xl:w-[42%] duration-500  bg-center brightness-[55%] sm:brightness-[90%] md:brightness-100`}
      ></div>

      {/* BOTTOM SVG */}
      <img
        className="min-w-[700px] w-full absolute scale-y-[-1] bottom-[-1px] right-0 h-[50px] md:h-[100px] z-[3]"
        src={waveSVG}
        alt=""
      />
    </div>
  )
}

TopPageBackground.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  background: PropTypes.node,
}

export default TopPageBackground
