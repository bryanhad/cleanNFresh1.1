import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/home/Home'
import PageNotFound from './pages/PageNotFound'
import JasaMainPage from './pages/jasa/JasaMainPage'
import FaqMainPage from './pages/faq/FaqMainPage'
import AboutMainPage from './pages/about/AboutMainPage'
import KontakMainPage from './pages/kontak/KontakMainPage'
import { jasaContext } from './context/jasaContext'


const App = () => {
  const [jasa, setJasa] = useState({
    clicked: false,
    content: {}
  })

  return (
    <Routes>
      <Route
        path="/cleanNFresh1.1"
        element={
          <jasaContext.Provider value={{ jasa, setJasa }}>
              <RootLayout />
          </jasaContext.Provider>
        }
      >
        <Route index element={<Home />} />
        <Route path="layanan" element={<JasaMainPage />} />
        <Route path="tentang" element={<AboutMainPage />} />
        <Route path="bantuan" element={<FaqMainPage />} />
        {/* <Route path='kontak' element={<KontakMainPage/>}/> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App
