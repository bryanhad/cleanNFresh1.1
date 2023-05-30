import squad from '../../assets/photos/squad.png'
import MyButton from '../../components/MyButton'
import TitleSection from '../../components/TitleSection'

const WhyChooseUs = () => {
  return (
    <div className="w-full min-h-[90vh] lg:min-h-[70vh] flex items-center px-6 py-12">
      <div className="h-full max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-10 items-center  overflow-hidden">
        <img
          className="w-full max-lg:max-w-[600px] lg:max-w-[55%]  rounded-xl"
          src={squad}
          alt="Clean'nFreshTeam"
        />
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <div className='mb-4'>
            <TitleSection
              direction="center-to-left"
              color="primary"
              desc="About Us"
              text="Clean'n Fresh merupakan provider jasa kebersihan dengan harga yang sangat terjangkau. Selain layanan pembersihan yang memuaskan, Clean'n Fresh juga menggunakan mesin berteknologi tinggi yang sudah mendapat sertifikat internasional."
            >
              Kenapa Pilih Kami?
            </TitleSection>
          </div>
          <MyButton to="tentang" size="button-big">
            Tentang Kami
          </MyButton>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
