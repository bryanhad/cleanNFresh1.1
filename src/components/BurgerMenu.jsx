import WindowIcon from '@mui/icons-material/Window'
import InfoIcon from '@mui/icons-material/Info'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import QuizIcon from '@mui/icons-material/Quiz'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'


const BurgerMenu = ({nav, setNav, zIndex}) => {
    const burgerNavLinkStyle = 'flex items-center py-2 gap-3 px-4'
    const burgerNavLinkDivStyle = 'bg-primary-medium p-2 rounded-full text-white'

  return (
    <div
      className={
        nav
          ? `fixed top-0 right-0  w-[70%] h-full bg-[#ffffffee] ease-in-out duration-500 ${zIndex} md:hidden`
          : `fixed top-0 right-[-100%] w-[60%] h-full bg-white opacity-0 ease-in-out duration-500 ${zIndex}`
      }
    >
      <main className="mt-[80px] pr-4 flex flex-col items-end gap-4">
        <Link className={burgerNavLinkStyle} to="/cleanNFresh1.1">
          <h5>Home</h5>
          <div className={burgerNavLinkDivStyle}>
            <WindowIcon />
          </div>
        </Link>
        <Link className={burgerNavLinkStyle} to="layanan">
          <h5>Layanan Kami</h5>
          <div className={burgerNavLinkDivStyle}>
            <CleaningServicesIcon />
          </div>
        </Link>
        <Link className={burgerNavLinkStyle} to="tentang">
          <h5>Tentang Kami</h5>
          <div className={burgerNavLinkDivStyle}>
            <InfoIcon />
          </div>
        </Link>
        <Link className={burgerNavLinkStyle} to="bantuan">
          <h5>Bantuan</h5>
          <div className={burgerNavLinkDivStyle}>
            <QuizIcon />
          </div>
        </Link>
        <Link
          className={burgerNavLinkStyle}
          to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan"
          target="_blank"
        >
          <h5>WhatsApp</h5>
          <button className="bg-whatsapp text-white p-2 rounded-full">
            <FaWhatsapp className="text-[25px]" />
          </button>
        </Link>
      </main>
    </div>
  )
}

export default BurgerMenu
