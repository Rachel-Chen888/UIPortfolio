import { Container } from 'react-bootstrap';

import ServiceNavbar from '../components/ServiceNavbar';
import ServiceFooter from '../components/ServiceFooter';
import ServiceCard from '../components/ServiceCard';

import perm from '../assets/salon/perm.jpg';

import './Perm.css';

function Perm() {
  return (
    <div className="permPage">
      <ServiceNavbar />

      <section className="permHero">
        <Container>
          <h1>Perm Services</h1>
          <p>Choose the type of perm that suits your style.</p>

          <div className="permCardContainer">
            <ServiceCard
              image={perm}
              title="Basic Perm"
              description="$120"
              link="/booking"
            />

            <ServiceCard
              image={perm}
              title="Digital Perm"
              description="$180"
              link="/booking"
            />

            <ServiceCard
              image={perm}
              title="Spiral Perm"
              description="$220"
              link="/booking"
            />

            <ServiceCard
              image={perm}
              title="Luxury Perm"
              description="$250"
              link="/booking"
            />
          </div>
        </Container>
      </section>

      <ServiceFooter />
    </div>
  );
}

export default Perm;