import handBackground from '../../assets/carousel/handCool.png'
import TopPageTitle from '../../components/TopPageTitle'
import bgCircleScatter from '../../assets/background/circleScatter.svg'
import JasaShowCase from './JasaShowCase'
import PatternBackground from '../../components/PatternBackground'
import TopPageBackground from '../../components/TopPageBackground'

const JasaMainPage = () => {
  return (
    <div className="relative">
      <TopPageBackground
        direction="right"
        background={handBackground}
        color="sm:bg-[#98dfeb]"
      />
      <TopPageTitle
        direction="right"
        desc="Apakah Anda lelah melakukan pekerjaan rumah tangga? Apakah Anda merasa stres seperti tidak punya cukup waktu dalam sehari? Apakah rumah atau tempat kerja Anda terasa berantakan dan kotor? Jangan khawatir."
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
