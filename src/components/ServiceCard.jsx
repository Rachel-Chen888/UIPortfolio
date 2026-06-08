import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ServiceCard({ image, title, description, link }) {
  return (

    <Card className="serviceCard">

      <Card.Img
        variant="top"
        src={image}
        className="serviceImage"
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Button
          as={Link}
          to={link}
          className="serviceButton"
        >
          More Details
        </Button>
      </Card.Body>

    </Card>
  );
}

export default ServiceCard;