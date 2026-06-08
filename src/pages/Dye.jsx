import { Container } from 'react-bootstrap';

import ServiceNavbar from '../components/ServiceNavbar';
import ServiceFooter from '../components/ServiceFooter';
import ServiceCard from '../components/ServiceCard';

import dye from '../assets/salon/dye.jpg';

import './Dye.css';

function Dye() {
  return (
    <div className="dyePage">
      <ServiceNavbar />

      <section className="dyeHero">
        <Container>
          <h1>Hair Colour Services</h1>
          <p>Transform your look with our colouring services.</p>

          <div className="dyeCardContainer">
            <ServiceCard
              image={dye}
              title="Root Touch-Up"
              description="$70"
              link="/booking"
            />

            <ServiceCard
              image={dye}
              title="Full Colour"
              description="$120"
              link="/booking"
            />

            <ServiceCard
              image={dye}
              title="Highlights"
              description="$220"
              link="/booking"
            />

            <ServiceCard
              image={dye}
              title="Balayage"
              description="$300"
              link="/booking"
            />
          </div>
        </Container>
      </section>

      <ServiceFooter />
    </div>
  );
}

export default Dye;