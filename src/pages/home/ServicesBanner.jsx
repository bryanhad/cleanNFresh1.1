import { useContext } from 'react'
import bestSellerIcon from '../../assets/icons/best-seller.png'
// import vacuumPic from '../../assets/photos/vacuumOnly.png'
// import generalPic from '../../assets/photos/generalCleaningGood.png'
// import carPic from '../../assets/photos/carCleaningGood.png'
import MyButton from '../../components/MyButton'

import services from '../../data/servicesData'
import { jasaContext } from '../../context/jasaContext'

const ServicesBanner = () => {
  const {setJasa} = useContext(jasaContext)

  const servicesArr = services.filter((service) => {
    if (
      service.title === 'Vacuum Hydro cleaning' ||
      service.title === 'General Cleaning' ||
      service.title === 'Cleaning Mobil' 
    )
      return service
  })

  const handleClick = (service) => {
    setJasa({clicked:true, content:service})
  }

  return (
    <div className="w-full px-6 pt-14">
      <div className="max-w-[1240px] mx-auto relative z-[5] flex flex-col lg:flex-row lg:justify-between gap-4">
        {servicesArr.map(service => (
          <ServiceCard
            key={service.title}
            onclick={() => handleClick(service)}
            title={service.title}
            desc={service.desc}
            image={service.image}
          />
        ))}

      </div>
      <div className="max-w-[1240px] mx-auto flex justify-center py-6">
        <MyButton to="layanan" size="button-big">
          Lihat Semua Jasa Kami
        </MyButton>
      </div>
    </div>
  )
}

const ServiceCard = ({ title, desc, image, onclick }) => {
  return (
    <div
      onClick={onclick}
      className={`min-h-[130px] duration-300 shadow-md border-b-4 rounded-xl border-slate-300 bg-white group hover:translate-y-[-10px] cursor-pointer relative grid grid-cols-5 flex-[1]`}
    >
      {/* bestseller Icon */}
      <img
        className="h-[45px] absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] "
        src={bestSellerIcon}
        alt=""
      />

      {/* Thumbnail */}
      <div className='col-span-2  rounded-l-xl max-h-[200px] overflow-hidden'>
        <img className="h-full w-full object-cover " src={image} alt="" />
      </div>

      {/* Title and Desc */}
      <div className="h-full p-4 col-span-3">
        <h1 className="font-semibold text-lg text-primary-dark">{title}</h1>
        <p className="text-slate-500 text-[12px] font-[300]">{desc}</p>
      </div>
    </div>
  )
}

export default ServicesBanner
