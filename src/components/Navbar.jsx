import { NavLink } from "react-router-dom";
import LOGO from "../assets/cleanNFreshLogo.png";
import Burger from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="w-full h-[80px] px-4">
      <main className="max-w-[1240px] mx-auto h-full flex items-center justify-between">
        <img className="max-h-[50px]" src={LOGO} alt="" />

        <div className="bg-red-500 h-[50px] w-[50px] relative flex justify-center items-center">
          <Burger className="fixed z-[2]" onClick={() => setNav(!nav)} />
        </div>

        {/* burger menu */}
        <div className={`${nav ? 'flex' : 'hidden' } p-4 bg-slate-300/50 fixed top-0 right-0  w-[60%] h-screen`}>
          
        </div>

        <div className="hidden md:flex gap-4  ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/services">Contact</NavLink>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
