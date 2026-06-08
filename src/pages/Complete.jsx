import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceNavbar from '../components/ServiceNavbar';
import ServiceFooter from '../components/ServiceFooter';
import logo from '../assets/salon/TransparentHairHavenLogo.png';
import './Complete.css';

function Complete() {
  return (
    <div className="completePage">
      <ServiceNavbar />

      <main className="completeHero">
        <Container className="completeCard">
          <img src={logo} alt="Hair Haven logo" className="completeLogo" />

          <h1>Appointment Request Sent!</h1>

          <p>
            Thank you for choosing Hair Haven. Your appointment request has been received.
          </p>

          <p className="completeSubtext">
            We will contact you soon to confirm your selected time.
          </p>

          <div className="completeButtons">
            <Button as={Link} to="/salon" className="completeButton">
              Back to Home
            </Button>

            <Button as={Link} to="/booking" className="completeOutlineButton">
              Book Another Time
            </Button>
          </div>
        </Container>
      </main>

      <ServiceFooter />
    </div>
  );
}

export default Complete;