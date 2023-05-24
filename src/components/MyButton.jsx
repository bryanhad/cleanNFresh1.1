import OutboundIcon from '@mui/icons-material/Outbound'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MyButton = ({ children, size, to, hiddenAtMobile, onclick }) => {
  return to ? (
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
  ) : (
    <button className={`button ${size}`} onClick={onclick}>
      {children}
      <OutboundIcon
        className={
          hiddenAtMobile &&
          'max-sm:absolute-xy-center opacity-0 sm:opacity-[100%]'
        }
      />
    </button>
  )
}

MyButton.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
  to: PropTypes.string,
  hiddenAtMobile: PropTypes.any,
  onclick: PropTypes.func,
}

export default MyButton
