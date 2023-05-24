import { Link, NavLink } from 'react-router-dom'
import LOGO from '../assets/cleanNFreshLogo.png'


import { useState } from 'react'
import PropTypes from 'prop-types'
import { FaWhatsapp } from 'react-icons/fa'

const Navbar = ({ zIndex, nav }) => {



  const navButtonStyle = 'px-4 py-2 rounded-md'


  return (
    <>
      <nav
        className={`w-full h-[80px] px-4 border-b-2 bg-white sticky top-0 ${zIndex}`}
      >
        <main className="max-w-[1240px] mx-auto h-full flex items-center justify-between relative">
          <Link to="/cleanNFresh1.1">
            <img className="max-h-[50px]" src={LOGO} alt="" />
          </Link>

          
          <div className="hidden md:flex gap-4">
            <NavLink end className={navButtonStyle} to="/cleanNFresh1.1">
              Home
            </NavLink>
            <NavLink className={navButtonStyle} to="layanan">
              Layanan Kami
            </NavLink>
            <NavLink className={navButtonStyle} to="tentang">
              Tentang Kami
            </NavLink>
            <NavLink className={navButtonStyle} to="bantuan">
              Bantuan
            </NavLink>

            <Link
              to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan"
              target="_blank"
            >
              <button className="bg-whatsapp text-white p-2 rounded-full">
                <FaWhatsapp className="text-[25px]" />
              </button>
            </Link>
          </div>
        </main>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  zIndex: PropTypes.string,
}

export default Navbar
