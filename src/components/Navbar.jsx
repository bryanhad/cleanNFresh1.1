import { NavLink } from 'react-router-dom'
import LOGO from '../assets/cleanNFreshLogo.png'

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] px-4">
        <main className="max-w-[1240px] mx-auto h-full flex items-center justify-between">
            <img className='max-h-[50px]' src={LOGO} alt="" />

            <div className='flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/faq'>FAQ</NavLink>
                <NavLink to='/services'>Contact</NavLink>
            </div>
        </main>

    </nav>
  )
}

export default Navbar