import { Container, Row, Col, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

import './Booking.css';
import logo from '../assets/salon/TransparentHairHavenLogo.png';
import ServiceNavbar from '../components/ServiceNavbar';
import ServiceFooter from '../components/ServiceFooter';

function Booking() {
  return (
    <div className="bookingPage">
        
        
        <ServiceNavbar />
        <div className="bookingspace">
        <div className="bookingHero">
            <Container> 
                <div className="stylistBox">
                    <br/>
                    <br/>
                    <h2>Stylists</h2>
                    <br/>
                    <p>Smith Seek</p>
                    <p>Bob Builder</p>
                    <p>Jenny James</p>
                </div> 
  
                <div className="calendarBox">
                    <br/>
                    <br/>
                    <Calendar />
                </div>  
                <br/>
            </Container>
        </div>

        <section className="timeSlots">
            <Button as={Link} to="/complete" className="timeButton">
                12:30 pm
            </Button>

            <Button as={Link} to="/complete" className="timeButton">
                2:30 pm
            </Button>

            <Button as={Link} to="/complete" className="timeButton">
                4:30 pm
            </Button>
            
        </section>
        <ServiceFooter />
    </div>
    </div>
  );
}

export default Booking;