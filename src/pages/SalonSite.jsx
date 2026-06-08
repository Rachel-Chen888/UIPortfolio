import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ServiceNavbar from '../components/ServiceNavbar';
import '../SalonSite.css';
import logo from '../assets/salon/TransparentHairHavenLogo.png';
import ServiceCard from '../components/ServiceCard';
import haircut from '../assets/salon/haircut.jpg';
import dye from '../assets/salon/dye.jpg';
import perms from '../assets/salon/perm.jpg';
import ServiceFooter from '../components/ServiceFooter';

function SalonSite() {
    return (
        <div className="salon-page">
        
            <ServiceNavbar />

            <div className="salon-spacer">
                <section id="about-salon"> 
                    <h1 className="salon-heading">Hair Haven</h1>
                    <p>Where Style Meets Perfection</p>
                </section>
            </div>

            <section id="booking" className="salon-section">
                <Container>
                    <img
                        src={logo}
                        alt="Hair Haven Logo"
                        className="bookingLogo"
                    />
                    <h2>Book an Appointment With Us!</h2>
                    <br/>  
                    <Button className="bookingButton" as={Link} to="/booking">
                        Check Availability
                    </Button>
                </Container>
            </section>

            
            <div className="service-spacer">
            <section id="services" className="salon-section">
                <Container>
                <h2>Services</h2>

                <div className="serviceContainer">
                    <ServiceCard
                    image={haircut}
                    title="Haircuts"
                    description="$20-50"
                    link="/salon"
                    />

                    <ServiceCard
                    image={dye}
                    title="Hair Dye"
                    description="$70-300"
                    link="/salon"
                    />

                    <ServiceCard
                    image={perms}
                    title="Perms"
                    description="$120-250"
                    link="/salon"
                    />
                </div>
                </Container>
            </section>
            </div>
            
            <section id="contact-service" className="service-footer">
            <ServiceFooter/>
            </section>

        </div>

    )
}

export default SalonSite