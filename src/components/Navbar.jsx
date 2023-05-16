import { Link, NavLink } from 'react-router-dom'
import LOGO from '../assets/cleanNFreshLogo.png'
import Burger from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import WindowIcon from '@mui/icons-material/Window'
import InfoIcon from '@mui/icons-material/Info'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import QuizIcon from '@mui/icons-material/Quiz'
import CallIcon from '@mui/icons-material/Call'
import { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const navButtonStyle = 'px-4 py-2 rounded-md'
  const burgerNavLinkStyle = 'flex items-center py-2 gap-3 px-4'
  const burgerNavLinkDivStyle = 'bg-primary-medium p-2 rounded-full text-white'

  return (
    <>
      <nav className="w-full h-[80px] px-4 border-b-2 bg-white sticky top-0 z-[10]">
        <main className="max-w-[1240px] mx-auto h-full flex items-center justify-between">
          <img className="max-h-[50px]" src={LOGO} alt="" />

          <div className="h-[50px] w-[50px] relative md:hidden">
            <div
              onClick={() => setNav(!nav)}
              className=" h-[50px] w-[50px] relative z-[10] flex justify-center items-center md:hidden"
            >
              {nav ? <CloseIcon /> : <Burger />}
            </div>
          </div>

          {/* burger menu */}
          <div
            className={
              nav
                ? 'fixed top-0 right-0  w-[60%] h-full bg-white ease-in-out duration-500 z-[9]'
                : 'fixed top-0 right-[-100%] w-[60%] h-full bg-white opacity-0 ease-in-out duration-500 z-[9]'
            }
          >
            <main className="mt-[80px] pr-4 flex flex-col items-end gap-4">
              <Link className={burgerNavLinkStyle} to="/">
                <h5>Home</h5>
                <div className={burgerNavLinkDivStyle}>
                  <WindowIcon />
                </div>
              </Link>
              <Link className={burgerNavLinkStyle} to="tentang">
                <h5>Tentang Kami</h5>
                <div className={burgerNavLinkDivStyle}>
                  <InfoIcon />
                </div>
              </Link>
              <Link className={burgerNavLinkStyle} to="jasa">
                <h5>Jasa kami</h5>
                <div className={burgerNavLinkDivStyle}>
                  <CleaningServicesIcon />
                </div>
              </Link>
              <Link className={burgerNavLinkStyle} to="pertanyaan">
                <h5>Pertanyaan</h5>
                <div className={burgerNavLinkDivStyle}>
                  <QuizIcon />
                </div>
              </Link>
              <Link className={burgerNavLinkStyle} to="kontak">
                <h5>Kontak</h5>
                <div className={burgerNavLinkDivStyle}>
                  <CallIcon />
                </div>
              </Link>
            </main>
          </div>

          <div className="hidden md:flex gap-4  ">
            <NavLink className={navButtonStyle} to="/">
              Home
            </NavLink>
            <NavLink className={navButtonStyle} to="tentang">
              Tentang Kami
            </NavLink>
            <NavLink className={navButtonStyle} to="jasa">
              Services
            </NavLink>
            <NavLink className={navButtonStyle} to="pertanyaan">
              Pertanyaan
            </NavLink>
            <NavLink className={navButtonStyle} to="/kontak">
              Kontak
            </NavLink>
          </div>
        </main>
      </nav>
    </>
  )
}

export default Navbar
