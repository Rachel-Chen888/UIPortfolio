import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SalonSite from './pages/SalonSite'
import PortfolioEntry from './pages/PortfolioEntry'
import ScrollToTop from './components/ScrollToTop'; 
import ComingSoon from './pages/ComingSoon';
import Booking from './pages/Booking';


export default function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioEntry />} />
        <Route path="/salon" element={<SalonSite />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}
