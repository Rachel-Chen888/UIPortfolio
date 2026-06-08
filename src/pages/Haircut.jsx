import { Container } from 'react-bootstrap';
import ServiceNavbar from '../components/ServiceNavbar';
import ServiceFooter from '../components/ServiceFooter';
import ServiceCard from '../components/ServiceCard';

import shortHair from '../assets/salon/short.jpg';
import mediumHair from '../assets/salon/medium.jpg';
import longHair from '../assets/salon/long.jpg'; 

import './Haircut.css';

function Haircut() {
  return (
    <div className="haircutPage">
      <ServiceNavbar />

      <section className="haircutHero">
        <Container>
          <h1>Haircut Services</h1>
          <p>Choose the haircut style that best fits your needs.</p>

          <div className="haircutCardContainer">
            <ServiceCard
              image={shortHair}
              title="Short Haircut"
              description="$30"
              link="/booking"
            />

            <ServiceCard
              image={mediumHair}
              title="Medium Haircut"
              description="$40"
              link="/booking"
            />

            <ServiceCard
              image={longHair}
              title="Long Haircut"
              description="$50"
              link="/booking"
            /> 
          </div>
        </Container>
      </section>

      <ServiceFooter />
    </div>
  );
}

export default Haircut;