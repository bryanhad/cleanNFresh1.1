import OutboundIcon from '@mui/icons-material/Outbound'
import { Link } from 'react-router-dom'

const MyButton = ({children, size, to, hiddenAtMobile}) => {
  return (
    <Link to={to}>
      <button className={`button ${size}`}>
        {children}
        <OutboundIcon className={hiddenAtMobile && 'absolute-xy-center opacity-0'}/>
      </button>
    </Link>
  )
}

export default MyButton