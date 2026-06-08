import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SalonSite() {
    return (
        <div className="salon-page">
        
        <Navbar expand="lg" className="salon-navbar">
            <Container>
            <Navbar.Brand>Hair Haven</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ms-auto">
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#prices">Prices</Nav.Link>
                <Nav.Link href="#booking">Booking</Nav.Link> 
                <Nav.Link as={Link} to="/">Back to Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        <section className="salon-hero">
            <Container>
            <h1>Hair Haven</h1>
            <p>Where Style Meets Perfection</p>
            <Button href="#services">View Services</Button>
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

        <section id="booking" className="salon-section">
            <Container>
            <h2>Book an Appointment</h2>
            <p>Choose your service and contact us to confirm availability.</p>
            <Button>Submit Booking</Button>
            </Container>
        </section>
        </div>
    )
}

export default SalonSite