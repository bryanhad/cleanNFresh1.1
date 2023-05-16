import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/home/Home'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/cleanNFresh1.1' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App