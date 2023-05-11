import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <main className="min-h-[calc(100vh-80px)]">
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default RootLayout