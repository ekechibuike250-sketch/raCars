import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import HomePage from './page/homepage'
import AboutPageC from './page/AboutPage'
import ContactPage from './page/contact'
import SearchPagec from './page/searchPage'
import HowItWorksPagec from './page/howItworkspage'
import Fleetpage from './page/fleet'
import DetailsPage1 from './page/detail1'
import LoginPage from './page/login'
import HomePagec from './page/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='*' element={<HomePagec />} />
            <Route path='/about' element={<AboutPageC />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/search' element={<SearchPagec />} />
            <Route path='/how-it-works' element={<HowItWorksPagec />} />
            <Route path='/Fleet' element={<Fleetpage />} />
            <Route path='/details1' element={<DetailsPage1 />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
