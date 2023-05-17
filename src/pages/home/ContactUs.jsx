import React from 'react'
import { Link } from 'react-router-dom'
import jabodetabek from '../../assets/photos/jabodetabek.png'
import TitleCenterToLeft from '../../components/TitleCenterToLeft'
import Sosmed from '../../components/Sosmed'

const ContactUs = () => {
  return (
    <div className="w-full px-6 py-[6rem] bg-slate-100/60">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <span className="flex flex-col items-center lg:items-start">
            <TitleCenterToLeft desc="Contact">Hubungi Kami</TitleCenterToLeft>
            <p className="text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              aperiam facere totam corporis, iste necessitatibus nam magnam
              deserunt reiciendis culpa qui blanditiis quasi temporibus ullam.
              Iusto, eum!
            </p>
          </span>
          <span className="grid max-sm:mx-auto sm:grid-cols-2 mt-4">
            <Sosmed
              sosmed="whatsapp"
              desc="Chat lewat WhhatsApp"
              to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan"
            >
              +62-815-1105-7728
            </Sosmed>
            <Sosmed
              sosmed="instagram"
              desc="Cek Instagram Kami"
              to="https://www.instagram.com/clean_n_freshh/"
            >
              clean_n_freshh
            </Sosmed>
          </span>
        </div>
        <div className="relative border-4 rounde-xl  border-slate-300">
          <h5 className="absolute z-[1] top-0 left-0 bg-slate-300 text-white p-2 font-semibold">
            Area Kami
          </h5>
          <h1 className="absolute z-[1] font-bold w-full text-center top-[50%] translate-y-[-50%] left-0 bg-primary-medium text-white text-xl sm:text-4xl">
            JABODETABEK
          </h1>
          <img
            className="w-[70%] mx-auto max-h-[300px] object-cover brightness-[115%]"
            src={jabodetabek}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

const WhatsAppIcon = () => (
  <BsWhatsapp className="text-whatsapp text-[60px] p-[5px]" />
)

const InstagramIcon = () => (
  <img className="max-w-[60px] p-[5px]" src={Instagram} alt="" />
)

export default ContactUs
