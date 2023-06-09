import PropTypes from 'prop-types'

const Banner = ({ children, color }) => {
  return (
    <div
      className={`w-full min-h-[120px] px-6 flex items-center justify-center text-white ${color}`}
    >
      <div className="max-w-[1240px] mx-auto w-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
}
export default Banner
