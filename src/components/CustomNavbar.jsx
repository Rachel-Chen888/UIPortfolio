import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/entry/logo.png';

function CustomNavbar() {
    return (

        <Navbar expand="lg" className="customNavbar" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-center"
                >
                

                    <Nav className="align-items-center gap-5">

                    <Navbar.Brand href="#about"> 
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Rachel Luo Logo" 
                        />
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                        <Nav.Link href="#workflow">Workflow</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact-service">Contact Me</Nav.Link> 
                    </Nav>

                </Navbar.Collapse>
            </Container>
      </Navbar>
  );
}

export default CustomNavbar;