import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
