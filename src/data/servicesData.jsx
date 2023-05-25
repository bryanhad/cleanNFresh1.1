import vacuumOnly_1 from '../assets/photos/vacuumOnlyGood.png'
import vacuumCuci from '../assets/photos/vacuumCuciGood-v2.png'
import fogging from '../assets/photos/foggingGood.png'
import general_1 from '../assets/photos/generalCleaning2.jpg'
// import general_2 from '../assets/photos/generalCleaning1.jpg'
// import general_3 from '../assets/photos/generalCleaning3.jpg'
import mobil_1 from '../assets/photos/carCleaning3.jpg'
// import mobil_2 from '../assets/photos/carCleaning1.jpg'
// import mobil_3 from '../assets/photos/carCleaning2.jpg'
import { VscBug } from 'react-icons/vsc'
import { BiBed } from 'react-icons/bi'
import { AiOutlineStop } from 'react-icons/ai'
import { IoMdFlower } from 'react-icons/io'
import { HiOutlineSparkles } from 'react-icons/hi'
import { RiVirusFill } from 'react-icons/ri'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { BsPersonCheckFill } from 'react-icons/bs'
import { FaCouch } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import WhatsAppButton from '../components/WhatsAppButton'


const UL_STYLE = 'flex flex-col gap-2 mt-3 mb-2'
const LIST_STYLE = 'flex items-center gap-2 border-b-2 border-slate-100 pb-3'
const ICON_STYLE = 'text-[30px] text-primary-medium flex-[1]'
const TEXT_STYLE = 'text-sm lg:text-base text-slate-600 flex-[10]'

const services = [
  {
    image: vacuumOnly_1,
    title: 'Vacuum Hydro cleaning',
    desc: 'Memberantas kutu tungau pada kasur, sofa, dll.',
    fulldesc: (
      <div>
        <ul className={UL_STYLE}>
          <li className={LIST_STYLE}>
            <div className={`${ICON_STYLE} flex justify-center`}>
              <div className='relative max-w-max'>
                <AiOutlineStop />
                <VscBug
                  className={`text-primary-medium text-[20px] absolute-xy-center`}
                />
              </div>
            </div>
            <h1 className={TEXT_STYLE}>Memberantas kutu tungau secara total</h1>
          </li>
          <li className={LIST_STYLE}>
            <BiBed className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>
              Membersihkan kasur serta perabotan dari debu dan kotoran
            </h1>
          </li>
          <WhatsAppButton/>
        </ul>
      </div>
    ),
  },
  {
    image: vacuumCuci,
    title: 'Vacuum dan Cuci',
    desc: 'Membersihkan noda serta bau tidak sedap dari kasur, sofa, karpet dll. ',
    fulldesc: (
      <div>
        <ul className={UL_STYLE}>
          <li className={LIST_STYLE}>
          <div className={`${ICON_STYLE} flex justify-center`}>
              <div className='relative max-w-max'>
                <AiOutlineStop />
                <VscBug
                  className={`text-primary-medium text-[20px] absolute-xy-center`}
                />
              </div>
            </div>
            <h1 className={TEXT_STYLE}>Memberantas kutu tungau secara total</h1>
          </li>
          <li className={LIST_STYLE}>
            <BiBed className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>
              Membersihkan kasur serta perabotan dari debu dan kotoran
            </h1>
          </li>
          <li className={LIST_STYLE}>
            <HiOutlineSparkles className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>
              Mencuci kasur serta perabotan sehingga menjadi seperti baru
            </h1>
          </li>
          <li className={LIST_STYLE}>
            <IoMdFlower className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>
              Mengharumkan kasur serta perabotan dari batu tidak sedap
            </h1>
          </li>
        </ul>
        <WhatsAppButton/>

      </div>
    ),
  },
  {
    image: fogging,
    title: 'Fogging',
    desc: 'Menyemprotkan disinfektan untuk memberantas virus covid-19.',
    fulldesc: (
      <div>
        <ul className={UL_STYLE}>
          <li className={LIST_STYLE}>
            <RiVirusFill className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>Memberantas virus Covid-19</h1>
          </li>
        </ul>
        <WhatsAppButton/>

      </div>
    ),
  },
  {
    image: general_1,
    title: 'General Cleaning',
    desc: 'Membersihkan secara keseluruhan untuk rumah, kantor, apartemen, dll.',
    fulldesc: (
      <div>
      <ul className={UL_STYLE}>
        <li className={LIST_STYLE}>
          <BsFillBoxSeamFill className={ICON_STYLE} />
          <h1 className={TEXT_STYLE}>Merapikan area agar tertata</h1>
        </li>
        <li className={LIST_STYLE}>
            <HiOutlineSparkles className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>
              Membersihkan area dari debu dan kotoran
            </h1>
          </li>
        <li className={LIST_STYLE}>
            <BsPersonCheckFill className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>
              Siap untuk menerima arahan kebersihan dari pemesan jasa
            </h1>
          </li>
        <li className={LIST_STYLE}>
            <FaCouch className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>
              membersihkan perabotan seperti sofa, karpet, dari debu dan kotoran
            </h1>
          </li>
      </ul>
      <WhatsAppButton/>

    </div>
    )
  },
  {
    image: mobil_1,
    title: 'Cleaning Mobil',
    desc: 'Membersihkan mobil dari debu, noda, dan bau tidak sedap.',
    fulldesc:
      (
        <div>
        <ul className={UL_STYLE}>
        <li className={LIST_STYLE}>

        <div className={`${ICON_STYLE} flex justify-center`}>
              <div className='relative max-w-max'>
                <AiOutlineStop />
                <VscBug
                  className={`text-primary-medium text-[20px] absolute-xy-center`}
                />
              </div>
            </div>
            <h1 className={TEXT_STYLE}>
                Memberantas tungau dari interior mobil
              </h1>
            </li>
          <li className={LIST_STYLE}>
              <HiOutlineSparkles className={ICON_STYLE} />
              <h1 className={TEXT_STYLE}>
                Membersihkan mobil dari debu dan kotoran
              </h1>
            </li>
          <li className={LIST_STYLE}>
              <BsPersonCheckFill className={ICON_STYLE} />
              <h1 className={TEXT_STYLE}>
                Siap untuk menerima arahan kebersihan dari pemesan jasa
              </h1>
            </li>
          <li className={LIST_STYLE}>
              <AiFillCar className={ICON_STYLE} />
              <h1 className={TEXT_STYLE}>
                Mobil menjadi bersih seperti baru
              </h1>
            </li>
            <li className={LIST_STYLE}>
            <IoMdFlower className={ICON_STYLE} />
            <h1 className={TEXT_STYLE}>
              Mengharumkan mobil dari batu tidak sedap
            </h1>
          </li>
        </ul>
        <WhatsAppButton/>

      </div>
      )
  },
]

export default services
