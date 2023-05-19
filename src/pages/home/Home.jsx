import ContactUs from "./ContactUs"
import HomeBanner from "./HomeBanner"
import HomeCarousel from "./HomeCarousel"
import HomeSecondBanner from "./HomeSecondBanner"
import ServicesBanner from "./ServicesBanner"
import Testimoni from "./Testimoni"
import WhyChooseUs from "./WhyChooseUs"

const Home = () => {
  return (
    <>
      <HomeCarousel/>
      <ServicesBanner/>
      <HomeBanner/>
      <WhyChooseUs/>
      <HomeSecondBanner/>
      <Testimoni/>
      <ContactUs/>
    </>
  )
}

export default Home