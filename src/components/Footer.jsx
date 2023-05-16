import LOGO from '../assets/cleanNFreshLogo.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Link } from 'react-router-dom'
import {BsTelephoneFill} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
    

    <footer className="w-full bg-[#2c87ad] mt-auto overflow-hidden">
      <div className="max-w-[1240px] text-white md:mx-auto px-4 h-full py-12 relative grid md:grid-cols-2">
        <ArrowUpwardIcon
          onClick={scrollUp}
          className="z-[1] hover:scale-[1.1] cursor-pointer duration-200 text-amber-300 bg-white p-1 rounded-full absolute top-0 translate-y-[-50%] right-[10%]"
          size={50}
        />

        <div className=" md:mr-4 ">
          <h5 className="font-bold text-3xl">Clean'n Fresh</h5>

          <p className="mt-2 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut
            minima pariatur tempore alias quod adipisci totam aliquam sed
            delectus.
          </p>
        </div>

        <div className="w-full flex max-md:flex-wrap justify-center sm:justify-evenly">
          <div className="my-2 mx-6 md:mx-2">
            <h5 className="text-lime-400 font-semibold text-xl max-md:text-center xl:text-center mb-3">Links</h5>
            <div className="flex flex-col max-md:items-center xl:grid xl:grid-cols-2 gap-2">
              <Link to="/">Home</Link>
              <Link to="tentang">Tentang Kami</Link>
              <Link to="jasa">Services</Link>
              <Link to="pertanyaan">Pertanyaan</Link>
              <Link to="/kontak">Kontak</Link>
            </div>
          </div>
          <div className="my-2 mx-6 md:mx-2">
            <h5 className="text-lime-400 font-semibold text-center text-xl mb-3">Penasaran?</h5>
            <div className="flex flex-col gap-4">
              <span className='flex items-center justify-center max-md:flex-wrap gap-2'>
                <BsTelephoneFill className='text-[25px]'/>
                <Link to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan" target="_blank"><button className='bg-white/30 text-white px-2 py-1 rounded-md'>+ 62 815-1105-7728</button></Link>
              </span>
              <span className='flex items-center justify-center max-md:flex-wrap gap-2'>
                <AiFillInstagram className='text-[25px]'/>
                <Link to="https://www.instagram.com/clean_n_freshh/" target="_blank"><button className='bg-white/30 text-white px-2 py-1 rounded-md'>clean_n_freshh</button></Link>
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
    <div className='py-2 bg-[#247192] text-slate-300'>
      <p className='text-center text-[14px]'>
      &#169; 2023 Copyright. All rights reserved. 

      </p>
    </div>
    </>
  )
}

export default Footer
