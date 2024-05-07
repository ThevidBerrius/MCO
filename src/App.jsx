import {Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'
import TestimonialPage from './pages/TestimonialPage'
import SyaratKetenPage from './pages/SyaratKetenPage'
import FaqPage from './pages/FaqPage'
import EventPage from './pages/EventPage'


export default function App() {
  return (
    <div>
      <NavBar />
       <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/kelas' Component={KelasPage}/>
          <Route path='/testimonial' Component={TestimonialPage}/>
          <Route path='/faq' Component={FaqPage}/>
          <Route path='/syaratketen' Component={SyaratKetenPage}/>
          <Route path='/event' Component={EventPage} />
       </Routes>
       <Footer />
    </div>
  );
}



