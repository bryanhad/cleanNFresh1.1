import JasaCard from '../../components/JasaCard'
import TitleCenter from '../../components/TitleCenter'

const JasaMainPage = () => {
  return (
    <div className='w-full py-8 px-6'>
      <div className='max-w-[1240px] mx-auto'>
        <TitleCenter textColor='text-primary-darker' lineColor='bg-primary-darker'>Layanan Kami</TitleCenter>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi odit impedit, ea, vel omnis, suscipit facilis eius fugit eos necessitatibus in vitae.</p>
        <div>
          <JasaCard/>
        </div>
      </div>
    </div>
  )
}

export default JasaMainPage