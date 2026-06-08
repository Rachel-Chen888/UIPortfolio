import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ServiceNavbar from '../components/ServiceNavbar';
import '../SalonSite.css';
import logo from '../assets/salon/TransparentHairHavenLogo.png';

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
                <Button href="#booking" className="bookingButton">Check Availability</Button> 
            </Container>
        </section>

        <section id="services" className="salon-section">
            <Container>
            <h2>Services</h2>
            <Row>
                {[
                ['Haircuts', '$20 - $50'],
                ['Perms', '$120 - $250'],
                ['Dye', '$70 - $300'],
                ].map(([name, price]) => (
                <Col md={4} key={name}>
                    <Card className="salon-card">
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Button href="#prices">See Details</Button>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Container>
        </section>

        <section id="prices" className="salon-section salon-light">
            <Container>
            <h2>Price Specification</h2>
            <Row>
                <Col md={3}>Short Cut: $20</Col>
                <Col md={3}>Medium Cut: $30</Col>
                <Col md={3}>Long Cut: $50</Col>
                <Col md={3}>Kids Cut: $25</Col>
            </Row>
            </Container>
        </section>

        
        </div>
    )
}

export default SalonSite