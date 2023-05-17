import EmployeeBackground from '../../components/EmployeeBackground'
import JasaCard from '../../components/JasaCard'
import services from '../../data/servicesData.js'

const JasaMainPage = () => {
  return (
    <div className='w-full py-8 px-6 relative overflow-hidden'>
        <EmployeeBackground/>
      <div className='max-w-[1240px] mx-auto'>
        <div className='pt-4 pb-10  rounded-md'>
          <h1 className='text-4xl md:text-5xl xl:text-6xl font-semibold text-white text-center break-words'>LAYANAN KAMI</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 xl:mt-5'>
          {
            services.map(service => (
              <JasaCard key={service.title} image={service.image} desc={service.desc}>{service.title}</JasaCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default JasaMainPage