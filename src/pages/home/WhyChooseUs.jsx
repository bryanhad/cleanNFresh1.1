import React from 'react'
import MyButton from '../../components/MyButton'
import TitleSection from '../../components/TitleSection'

const WhyChooseUs = () => {
  return (
    <div className="w-full min-h-[90vh] lg:min-h-[70vh] flex items-center px-6 py-12">
      <div className="h-full max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-10 items-center  overflow-hidden">
        <img
          className="w-full max-lg:max-w-[600px] lg:max-w-[60%]"
          src="https://www.viccleaning.com.au/wp-content/uploads/2023/01/cleaning-crew-victoria.jpg"
          alt=""
        />
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <div className='mb-4'>
            <TitleSection
              direction="center-to-left"
              color="primary"
              desc="About Us"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              assumenda porro fuga consequatur ipsam nostrum maxime sed perspiciatis
              incidunt maiores quia Lorem ipsum dolor sit amet."
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
