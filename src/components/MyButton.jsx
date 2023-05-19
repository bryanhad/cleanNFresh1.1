import OutboundIcon from '@mui/icons-material/Outbound'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MyButton = ({ children, size, to, hiddenAtMobile }) => {
  return (
    <Link to={to}>
      <button className={`button ${size}`}>
        {children}
        <OutboundIcon
          className={
            hiddenAtMobile &&
            'max-sm:absolute-xy-center opacity-0 sm:opacity-[100%]'
          }
        />
      </button>
    </Link>
  )
}

MyButton.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  to: PropTypes.string,
  hiddenAtMobile: PropTypes.any,
}

export default MyButton
