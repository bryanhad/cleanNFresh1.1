import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WhatsAppButton = () => {
  return (
    <Link
      to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan"
      target="_blank"
    >
      <button className="mx-auto mt-3 flex items-center rounded-full border-2 bg-[#24be5d] border-whatsapp group w-[50vw] sm:w-[220px] sm:h-[42px] relative">
        <div className="w-full h-full flex items-center justify-center rounded-full py-2 bg-whatsapp text-white flex-[8] relative z-[2]">
          <h1 className="text-[3.4vw] sm:text-base">Pesan Sekarang</h1>
        </div>

        <div className="flex-[2] duration-500  group-hover:flex-[0]"></div>

        <div className="duration-500 group-hover:right-[50%] absolute z-[1] right-[0] rounded-full text-white">
          <FaWhatsapp className="h-[10vw] w-[10vw] max-h-[38px]  max-w-[38px] p-1 " />
        </div>
      </button>
    </Link>
  )
}

export default WhatsAppButton
