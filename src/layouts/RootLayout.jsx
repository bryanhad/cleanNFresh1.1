import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PromoButton from '../components/PromoButton'
import Modal from '../components/Modal'
import PromoKasur from '../components/PromoStuffs/PromoKasur'
import { useContext, useEffect, useState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import BurgerCloseButton from '../components/BurgerCloseButton'
import { jasaContext } from '../context/jasaContext'
import JasaModal from '../components/JasaModal'
import { promoModalContext } from '../context/promoModalContext'


const RootLayout = () => {
  const [showButton, setShowButton] = useState(true)
  const [nav, setNav] = useState(false)
  const {showPromoModal, setShowPromoModal} = useContext(promoModalContext)
  const {jasa, setJasa} = useContext(jasaContext)

  useEffect(() => {
    setTimeout(() => {
      setShowPromoModal(true)
    }, 3000)
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar zIndex="z-[2]" nav={nav} />
      <BurgerMenu nav={nav} zIndex="z-[3]" />
      <BurgerCloseButton nav={nav} setNav={setNav} zIndex="z-[4]"/>

      <main className="w-full overflow-hidden z-[1] relative">
        <Outlet />
      </main>
      <Footer />

      <PromoButton
        show={showButton}
        setShowButton={setShowButton}
        setShowModal={setShowPromoModal}
        zIndex="z-[2]"
      />
      <Modal show={showPromoModal} setShowModal={setShowPromoModal} color="bg-white" zIndex='z-[10]'>
        <PromoKasur />
      </Modal>
      {jasa.clicked && (
        <Modal show={jasa.clicked} setShowModal={setJasa} color='bg-white' zIndex='z-[8]'>
          <JasaModal/>
        </Modal>
      )}
    </div>
  )
}

export default RootLayout
