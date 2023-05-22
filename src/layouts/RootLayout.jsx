import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PromoButton from '../components/PromoButton'
import Modal from '../components/Modal'
import PromoKasur from '../components/PromoStuffs/PromoKasur'
import { useState } from 'react'

const RootLayout = () => {
  const [showButton, setShowButton] = useState(true)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar zIndex="z-[2]" />
      <main className="w-full overflow-hidden z-[1] relative">
        <Outlet />
      </main>
      <Footer />

      <PromoButton
        show={showButton}
        setShowButton={setShowButton}
        setShowModal={setShowModal}
        zIndex="z-[3]"
      >
        <Modal show={showModal} setShowModal={setShowModal} color="bg-white">
          <PromoKasur />
        </Modal>
      </PromoButton>
    </div>
  )
}

export default RootLayout
