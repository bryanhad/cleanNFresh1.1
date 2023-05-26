import { Link } from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai'


const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <footer className="w-full bg-[#2c87ad] mt-auto">
        <div className="max-w-[1240px] text-white px-4 h-full py-8 relative md:grid md:grid-cols-3 mx-auto">
          <div className="absolute z-[2] top-0 translate-y-[-50%] right-[10%] group cursor-pointer">
            <AiOutlineArrowUp
              style={{ fontSize: '40px' }}
              onClick={scrollUp}
              className="group-hover:scale-[1.1] duration-200 text-[#2c87ad]  bg-white shadow-xl p-1 rounded-full"
            />
          </div>

          <div className="flex items-center justify-center w-full">
            <h5 className="font-bold text-3xl mb-6">Clean'n Fresh</h5>
          </div>

          <div className="w-full flex max-md:flex-wrap justify-center sm:justify-evenly col-span-2 gap-4">
            <div className="mx-6 md:mx-2">
              <h5 className="text-[#ffffff] font-semibold text-xl text-center xl:text-center mb-3">
                Links
              </h5>
              <div className="flex flex-col gap-2 items-center ">
                <Link to="/cleanNFresh1.1">Home</Link>
                <Link to="layanan">Layanan</Link>
                <Link to="tentang">Tentang Kami</Link>
                <Link to="bantuan">Bantuan</Link>
              </div>
            </div>
            <div className=" mx-6 md:mx-2">
              <h5 className="text-[#ffffff] font-semibold text-center text-xl mb-3">
                Penasaran?
              </h5>
              <div className="flex flex-col gap-4">
                <span className="flex items-center justify-center max-md:flex-wrap gap-2">
                  <FaWhatsapp className="text-[25px]" />
                  <Link
                    to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan"
                    target="_blank"
                  >
                    <button className="bg-white/30 text-white px-2 py-1 rounded-md">
                      + 62 815-1105-7728
                    </button>
                  </Link>
                </span>
                <span className="flex items-center justify-center max-md:flex-wrap gap-2">
                  <AiFillInstagram className="text-[25px]" />
                  <Link
                    to="https://www.instagram.com/clean_n_freshh/"
                    target="_blank"
                  >
                    <button className="bg-white/30 text-white px-2 py-1 rounded-md">
                      clean_n_freshh
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-2 bg-[#247192] text-slate-300">
        <p className="text-center text-[14px]">
          &#169; 2023 Copyright. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
