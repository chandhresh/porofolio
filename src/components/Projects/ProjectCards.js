import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="project-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            GitHub
          </a>
        )}
        {props.demoLink && (
          <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-success" style={{ marginLeft: "10px" }}>
            Live Demo
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
