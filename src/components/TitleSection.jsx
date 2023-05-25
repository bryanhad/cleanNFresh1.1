import PropTypes from 'prop-types'

const TitleSection = ({ direction, children, desc, text, color }) => {
  let overAll = ''
  let textColor = ''
  let lineColor = ''
  let linePosition = ''

  if (direction === 'center-to-left') {
    overAll = 'lg:items-start max-lg:text-center'
    linePosition = 'max-lg:mx-auto'
  } else if (direction === 'center-to-right') {
    overAll = 'lg:items-end max-lg:text-center'
    linePosition = 'max-lg:mx-auto'
  } else {
    overAll = 'text-center'
    linePosition = 'mx-auto'
  }

  if (color === 'white') {
    textColor = 'text-white'
    lineColor = 'bg-white'
  } else {
    textColor = 'text-primary-darker'
    lineColor = 'bg-primary-darker'
  }

  return (
    <div className={`flex flex-col items-center ${overAll}`}>
      <span className={textColor}>
        <p className="text-sm font-200">{desc}</p>
        <h1 className="font-semibold text-4xl mb-3 text-center">{children}</h1>
        <div
          className={`w-[50%] h-[3px] ${lineColor} ${linePosition} mb-4`}
        ></div>
      </span>
      <p className="text-slate-500">{text}</p>
    </div>
  )
}

TitleSection.propTypes = {
  direction: PropTypes.oneOf([
    'center-to-left',
    'center-to-center',
    'center-to-right',
  ]).isRequired,
  children: PropTypes.string,
  desc: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf(['white', 'primary']),
}

TitleSection.defaultProps = {
  color: 'white',
}

export default TitleSection
