import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import Instagram from '../../assets/icons/instagram.png'
import { Link } from 'react-router-dom'
import jabodetabek from '../../assets/photos/jabodetabek.png'
import TitleCenterToLeft from '../../components/TitleCenterToLeft'

const ContactUs = () => {
  return (
    <div className="w-full px-6 py-12 bg-slate-100/60">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-10">
        <div>
            <span className='flex flex-col items-center lg:items-start'>
              <TitleCenterToLeft desc='Contact'>Hubungi Kami</TitleCenterToLeft>
              <p className="text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aperiam
                facere totam corporis, iste necessitatibus nam magnam deserunt
                reiciendis culpa qui blanditiis quasi temporibus ullam. Iusto, eum!
              </p>
            </span>
            <span className='grid max-sm:mx-auto sm:grid-cols-2 mt-4'>
              <div className='flex flex-col items-center '>
                <WhatsAppIcon />
                    <h5 className='text-slate-400'>Chat lewat WhatsApp</h5>
                    <Link to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan" target="_blank">
                        <button className="py-2 px-7 bg-whatsapp rounded-xl break-words text-white text-[14px]">
                            +62-815-1105-7728
                        </button>
                    </Link>
              </div>
              <div className='flex flex-col items-center'>
                <InstagramIcon />
                    <h5 className='text-slate-400'>Cek Instagram Kami</h5>

                    <Link to="https://www.instagram.com/clean_n_freshh/" target="_blank">
                        <button className="py-2 px-8 instagram rounded-xl text-white break-all">
                            clean_n_freshh
                        </button>
                    </Link>
              </div>
            </span>
        </div>
        <div className='relative border-4 rounde-xl  border-slate-300'>
          <h5 className='absolute z-[1] top-0 left-0 bg-slate-300 text-white p-2 font-semibold'>Area Kami</h5>
          <h1 className='absolute z-[1] font-bold w-full text-center top-[50%] translate-y-[-50%] left-0 bg-primary-medium text-white text-xl sm:text-4xl'>JABODETABEK</h1>
          <img className='w-[70%] mx-auto max-h-[300px] object-cover brightness-[115%]' src={jabodetabek} alt="" />
        </div>
        {/* <div>
                <h1 className="font-semibold text-primary-darker text-4xl mb-3 max-lg:text-center">
                    Hubungi Kami
                </h1>
            <div className="w-[35%] h-[3px] bg-primary-dark mb-4"></div>
            <p className="mb-6 text-center lg:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
                maxime nihil velit minus, cumque libero sint sit, repellat odit
                error quis necessitatibus delectus voluptatem nam tempore?
            </p>
            <div className="grid md:grid-cols-2 gap-6 ">
                <div className="flex gap-4 mx-auto">
                <BsWhatsapp className="text-whatsapp text-[50px] my-auto" />

                <div className="flex flex-col  gap-2">
                    <p>Hubungi lewat WhatsApp</p>
                    <Link to="https://wa.me/6281511057728" target="_blank">
                    <button className="py-2 px-7 bg-whatsapp rounded-full text-white text-[14px]">
                        +62 815 1105 7728
                    </button>
                    </Link>
                </div>

                </div>

                <div className="flex gap-4 mx-auto">
                <div className="h-[60px] w-[60px] instagram flex items-center justify-center rounded-full my-auto">
                    <img
                    className=" object-contain w-[90%] h-[90%] rounded-full bg-white"
                    src={LOGO}
                    alt=""
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Cek Instagram Kami</p>
                    <Link to="https://www.instagram.com/clean_n_freshh/" target="_blank">
                    <button className="py-2 px-8 instagram rounded-full text-white break-all">
                        clean_n_freshh
                    </button>
                    </Link>
                </div>

                </div>

            </div>
        </div>

        <div></div> */}
      </div>
    </div>
  )
}

const WhatsAppIcon = () => (
    <BsWhatsapp className="text-whatsapp text-[60px] p-[5px]" />
)

const InstagramIcon = () => (
  <img className='max-w-[60px] p-[5px]' src={Instagram} alt="" />
)

export default ContactUs
