import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SalonSite from './pages/SalonSite'
import PortfolioEntry from './pages/PortfolioEntry'
import ScrollToTop from './components/ScrollToTop'; 
import ComingSoon from './pages/ComingSoon';
import Booking from './pages/Booking';
import Complete from './pages/Complete';
import Haircut from './pages/Haircut'; 
import Perm from './pages/Perm';
import Dye from './pages/Dye';


export default function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioEntry />} />
        <Route path="/salon" element={<SalonSite />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/haircut" element={<Haircut />} />
        <Route path="/perm" element={<Perm />} />
        <Route path="/dye" element={<Dye />} />
      </Routes>
    </BrowserRouter>
  )
}
