import { Routes, Route } from 'react-router-dom'

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
import ApiTestPage from './pages/ApiTestPage'
import RegisterPage from './pages/RegisterPage'
import TopUpPage from './pages/TopUpPage'
import EventDetailPage from './pages/EventDetailPage'
import TransactionPage from './pages/TransactionPage'
import { useLocalStorage } from './data/useLocalStorage'

export default function App() {
  const { initializeItem } = useLocalStorage("User");
  initializeItem();
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/temanmabar' Component={TemanMabarPage} />
        <Route path='/coach' Component={CoachPage} />
        <Route path='/testimonial' Component={TestimonialPage} />
        <Route path='/faq' Component={FaqPage} />
        <Route path='/syaratketen' Component={SyaratKetenPage} />
        <Route path='/event' Component={EventPage} />
        <Route path='/detail' Component={DetailPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/topup' Component={TopUpPage} />
        <Route path='/eventdetail' Component={EventDetailPage} />
        <Route path='/transaction' Component={TransactionPage} />
        <Route path='/testAPI' Component={ApiTestPage} />
      </Routes>
      <Footer />
    </div>
  );
}



