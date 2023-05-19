import PropTypes from 'prop-types'

const PatternBackground = ({ svg }) => {
  return (
    <div
      className="absolute z-[-2] bottom-0 left-0 w-full opacity-[20%] h-full customBackground"
      style={{ backgroundImage: `url(${svg})` }}
    ></div>
  )
}

PatternBackground.propTypes = {
  svg: PropTypes.node.isRequired,
}

export default PatternBackground
