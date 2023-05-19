import bestSellerIcon from '../../assets/icons/best-seller.png'
import { Link } from 'react-router-dom'


import vacuumPic from '../../assets/photos/vacuumOnly.png'
import generalPic from '../../assets/photos/generalCleaningGood.png'
import carPic from '../../assets/photos/carCleaningGood.png'
import MyButton from '../../components/MyButton'

const ServicesBanner = () => {

  return (
    <div className="w-full px-6">
      <div className="max-w-[1240px] translate-y-[-65px] mx-auto relative z-[5] flex flex-col lg:flex-row lg:justify-between gap-4">
        <ServiceCard
          title="Vacuum Hydro cleaning"
          desc="Memberantas kutu tungau pada kasur, sofa, segala furniture"
          image={vacuumPic}
        />
        <ServiceCard
          title="General Cleaning"
          desc="Pembersihan secara keseluruhan (Rumah, Kantor, Apartemen, dll)"
          image={generalPic}
        />
        <ServiceCard
          title="Interior Cleaning"
          desc="Membersihkan seluruh bagian dalam mobil. Mobil seperti baru "
          image={carPic}
        />
      </div>
      <div className="max-w-[1240px] mx-auto flex justify-center translate-y-[-35px]">
        <MyButton to='layanan' size='button-big'>Lihat Semua Jasa Kami</MyButton>

      </div>
    </div>
  )
}

const ServiceCard = ({title, desc, path, image}) => {
  return (
    <div
      className={`min-h-[130px] duration-300 shadow-md border-b-4 rounded-xl border-slate-300 bg-white group hover:bg-primary-dark hover:translate-y-[-10px] cursor-pointer relative grid grid-cols-5`}
    >
      {/* bestseller Icon */}
      <img
        className="h-[45px] absolute top-0 left-0 translate-x-[-30%] translate-y-[-30%] "
        src={bestSellerIcon}
        alt=""
      />

      {/* picture */}
      <div className="col-span-2 rounded-l-xl max-h-[200px] overflow-hidden">
        <img className="h-full w-full object-cover " src={image} alt="" />
      </div>

      {/* Title and description */}
      <div className="h-full p-4 col-span-3">
        <h1 className="font-semibold text-lg text-primary-dark group-hover:text-white">
          {title}
        </h1>
        <p className="text-slate-500 group-hover:text-white text-[12px] font-[300]">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default ServicesBanner
