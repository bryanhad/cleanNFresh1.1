import handBackground from '../../assets/carousel/handCool.png'
import TopPageTitle from '../../components/TopPageTitle'
import bgCircleScatter from '../../assets/background/circleScatter.svg'
import JasaShowCase from './JasaShowCase'
import PatternBackground from '../../components/PatternBackground'
import TopPageBackground from '../../components/TopPageBackground'

const JasaMainPage = () => {
  return (
    <div className="relative">
      <TopPageBackground direction="right" background={handBackground} />
      <TopPageTitle
        direction="right"
        desc="Apakah anda yakin kasur anda tidak dihuni tungau? Apakah anda yakin perabotan dan ruangan anda bersih dari kotoran dan kuman? Jangan khawatir. Clean'n Fresh menggunakan alat teknologi terkini yang telah disertifikasi oleh AHAM dan AAFA, sehingga menjamin tingkat kebersihan dan keamanan dari prosedur kami."
      >
        <p className="text-[14px] font-[300] py-2 text-green-200">
          Our Services
        </p>
        LAYANAN KAMI
      </TopPageTitle>
      <div className="w-full px-6 relative pb-12">
        <PatternBackground svg={bgCircleScatter} />
        <JasaShowCase />
      </div>
    </div>
  )
}

export default JasaMainPage
