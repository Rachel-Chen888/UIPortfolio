import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


import logo from '../assets/salon/TransparentHairHavenLogo.png';

function ServiceNavbar() {
    return (
        <Navbar expand="lg" className="serviceNavbar" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                >
                

                    <Nav className="align-items-center gap-5">

                    <Navbar.Brand href="#about-salon"> 
                        {/* <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Hair Haven Logo" 
                        /> */}
                        
                        <Nav.Link href="#about-salon">Home</Nav.Link> 
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                        <Nav.Link href="#booking">Booking</Nav.Link> 
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#prices">Prices</Nav.Link>
                        {/* <Nav.Link as={Link} to="/">Back to Portfolio</Nav.Link> */}
                    </Nav>

                </Navbar.Collapse>
            </Container>
      </Navbar>
  );
}

export default ServiceNavbar;