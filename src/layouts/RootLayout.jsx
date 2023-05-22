import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const RootLayout = () => {


  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar zIndex="z-[2]" />
      <main className="w-full overflow-hidden z-[1] relative">
        <Outlet />
      </main>
      <Footer />


    </div>
  )
}

export default RootLayout
