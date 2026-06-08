import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ProjectCard({ image, title, description, link }) {
  return (

    <Card className="projectCard">

      <Card.Img
        variant="top"
        src={image}
        className="projectImage"
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Button
          as={Link}
          to={link}
          className="projectButton"
        >
          View Project
        </Button>
      </Card.Body>

    </Card>
  );
}

export default ProjectCard;