import squad from '../../assets/photos/squad.png'

const Kenalan = () => {
  return (
    <>
    <div className='max-w-[1240px] mx-auto bg-white rounded-t-md text-center overflow-hidden md:grid md:grid-cols-2'>
      <div>
      <img className="w-full h-full object-cover" src={squad} alt="" />

      </div>
      <div className="flex flex-col p-6 gap-4">
        <p className="text-start text-slate-600 text-sm md:text-[14px] cool-text">
        Clean'n Fresh merupakan provider jasa kebersihan dengan harga yang sangat terjangkau. Selain layanan pembersihan yang memuaskan, Clean'n Fresh juga menggunakan mesin berteknologi tinggi yang sudah mendapat sertifikat internasional.
        </p>
        <p className='text-start text-slate-600 text-sm md:text-[14px] cool-text'>
        Prosedur pembersihan Clean'n Fresh juga telah distandardisasi sehingga selalu memberikan yang terbaik dan tentunya memuaskan. Kami juga sudah berpengalaman bertahun-tahun, terutama dalam pelayanan rumah, apartemen, kantor besar, gedung, sekolahan, tempat kursus, salon/spa, gedung reflexology/massage, bahkan Hotel bintang 4.
        </p>
      </div>
    </div>
    </>
  )
}

export default Kenalan