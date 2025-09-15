import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Chandhresh </span>
            from <span className="purple"> Puducherry, India.</span>
            <br />
            I recently completed my {" "}
            <span className="purple">M.Sc. in Computer Science at Pondicherry University</span>,
            after completing my{" "}
            <span className="purple">BCA at Indira Gandhi College of Arts and Science</span>.
            <br />
            <br />
            I am a passionate fresher with practical experience in{" "}
            <span className="purple">Full Stack Web Development</span> and{" "}
            <span className="purple">Deep Learning</span>.  
            I have built projects using ReactJS, Node.js, Express.js, and MongoDB, as well as 
            deployed deep learning models with Python, TensorFlow, and Keras.  
            <br />
            <br />
            Apart from coding and research, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket & Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Cultural Activities
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
