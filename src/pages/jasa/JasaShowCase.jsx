import services from '../../data/servicesData'
import JasaCard from '../../components/JasaCard'


const JasaShowCase = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-6 xl:mt-5">
      {services.map((service) => (
        <JasaCard
          key={service.title}
          image={service.image}
          desc={service.desc}
          service={service}
        >
          {service.title}
        </JasaCard>
      ))}
    </div>
  </div>
  )
}

export default JasaShowCase