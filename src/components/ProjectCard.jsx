import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
          variant="primary"
          href={link}
          target="_blank"
          className="projectButton"
        >
          View Project
        </Button>
      </Card.Body>

    </Card>
  );
}

export default ProjectCard;