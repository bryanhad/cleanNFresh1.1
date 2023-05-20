import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Instagram from '../assets/icons/instagram.png'
import PropTypes from 'prop-types'

const Sosmed = ({ sosmed, children, desc, to, color }) => {
  if (sosmed === 'whatsapp') {
    sosmed = <WhatsAppIcon />
    color = 'whatsapp-button'
  } else if (sosmed === 'instagram') {
    sosmed = <InstagramIcon />
    color = 'instagram-button'
  }

  return (
    <div className="flex flex-col items-center ">
      {sosmed}
      <h5 className="text-slate-400 text-sm py-1">{desc}</h5>
      <Link to={to} target="_blank">
        <button className={`${color} hover:brightness-[110%] duration-200`}>
          {children}
        </button>
      </Link>
    </div>
  )
}

Sosmed.propTypes = {
  sosmed: PropTypes.oneOf(['whatsapp', 'instagram']),
  children: PropTypes.any.isRequired,
  desc: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
}

const WhatsAppIcon = () => (
  <BsWhatsapp className="text-whatsapp text-[60px] p-[5px]" />
)

const InstagramIcon = () => (
  <img className="max-w-[60px] p-[5px]" src={Instagram} alt="Instagram logo" />
)

export default Sosmed
