import TopPageBackground from '../../components/TopPageBackground'

import faqBG from '../../assets/carousel/faq.png'
import MultipleAccordions from '../../components/MultipleAccordions'
import TopPageTitle from '../../components/TopPageTitle'

const FaqMainPage = () => {
  return (
    <div className="relative">
      <TopPageBackground
        direction="right"
        background={faqBG}
        color="sm:bg-[#98dfeb]"
      />
      <TopPageTitle
        direction="right"
        desc="Tidak dapat menemukan jawaban yang anda cari? Berikut beberapa pertanyaan yang sering kami dapatkan. Semoga membantu! "
      >
        <p className="text-[14px] font-[300] py-2 text-green-200">
          Frequently Asked Questions
        </p>
        BUTUH BANTUAN?
      </TopPageTitle>
      <div className="px-4  mb-8">
        <MultipleAccordions />
      </div>
    </div>
  )
}

export default FaqMainPage
