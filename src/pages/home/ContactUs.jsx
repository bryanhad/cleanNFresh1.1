import mapImg from '../../assets/photos/jadetabek.png'
import Sosmed from '../../components/Sosmed'
import TitleSection from '../../components/TitleSection'

const ContactUs = () => {
  return (
    <div className="w-full px-6 py-[6rem] bg-slate-100/60">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <span className="flex flex-col items-center lg:items-start">
            {/* <TitleCenterToLeft desc="Contact">Hubungi Kami</TitleCenterToLeft> */}
            <TitleSection
              direction="center-to-left"
              color="primary"
              desc="Contact Us"
              text="Sudah yakin dengan Clean'n Fresh? Silahkan langsung hubungi admin kami melewati WhatsApp. Kami akan selalu siap membantu."
            >
              Hubungi Kami
            </TitleSection>
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
        <div className="relative flex items-center justify-center">
          <h5 className="absolute z-[1] top-0 left-0 bg-slate-300 text-white p-2 font-semibold">
            Area Kami
          </h5>
          <h1 className="absolute z-[1] font-bold w-full text-center top-[50%] translate-y-[-50%] left-0 bg-primary-medium text-white text-xl sm:text-4xl">
            JADETABEK
          </h1>
          <img
            className="w-[70%] max-h-[300px] object-contain brightness-[115%]"
            src={mapImg}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
