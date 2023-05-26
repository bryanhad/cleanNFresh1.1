import TopPageTitle from '../../components/TopPageTitle'
import ContactUs from './ContactUs'
import HomeBanner from './HomeBanner'
import HomeCarousel from './HomeCarousel'
import HomeSecondBanner from './HomeSecondBanner'
import ServicesBanner from './ServicesBanner'
import Testimoni from './Testimoni'
import WhyChooseUs from './WhyChooseUs'

const Home = () => {
  return (
    <div className="relative">
      <HomeCarousel zIndex="z-[-1]" />
      <div className='pt-4'>
      <TopPageTitle
        minHeight="h-[340px] md:h-[490px]"
        direction="left"
        desc="Apakah anda yakin kasur anda tidak dihuni tungau? Apakah anda yakin perabotan dan ruangan anda bersih dari kotoran dan kuman? Jangan khawatir. Clean'n Fresh menggunakan alat teknologi terkini yang telah disertifikasi oleh AHAM dan AAFA, sehingga menjamin tingkat kebersihan dan keamanan dari prosedur kami."
      >
        <p className="text-[14px] font-[300] py-2 text-green-200">
          Clean The Unseen
        </p>
        Clean'n Fresh
      </TopPageTitle>

      </div>
      <ServicesBanner />
      <HomeBanner />
      <WhyChooseUs />
      <HomeSecondBanner />
      <Testimoni />
      <ContactUs />
    </div>
  )
}

export default Home
