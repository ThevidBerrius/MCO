import {Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import TemanMabarPage from './pages/TemanMabarPage'
import TestimonialPage from './pages/TestimonialPage'
import SyaratKetenPage from './pages/SyaratKetenPage'
import FaqPage from './pages/FaqPage'
import EventPage from './pages/EventPage'
import CoachPage from './pages/CoachPage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <div>
      <NavBar />
       <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/temanmabar' Component={TemanMabarPage}/>
          <Route path='/coach' Component={CoachPage}/>
          <Route path='/testimonial' Component={TestimonialPage}/>
          <Route path='/faq' Component={FaqPage}/>
          <Route path='/syaratketen' Component={SyaratKetenPage}/>
          <Route path='/event' Component={EventPage}/>
          <Route path='/detail' Component={DetailPage}/>     
          <Route path='/login' Component={LoginPage}/>     
       </Routes>
      <Footer />
    </div>
  );
}



