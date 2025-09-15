import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am currently pursuing my{" "}
              <b className="purple">M.Sc. in Computer Science at Pondicherry University</b>, 
              after completing my{" "}
              <b className="purple">BCA at Indira Gandhi College of Arts and Science</b>.
              <br />
              <br />
              I am passionate about{" "}
              <b className="purple">Full Stack Web Development</b> and{" "}
              <b className="purple">Deep Learning</b>, 
              with hands-on experience in building{" "}
              <b className="purple">MERN applications</b> and 
              deploying <b className="purple">AI models</b>.
              <br />
              <br />
              I have strong skills in{" "}
              <i>
                <b className="purple"> Python, C, C++, Java, JavaScript </b>
              </i>{" "}
              along with{" "}
              <b className="purple">ReactJS, Node.js, Express.js, MongoDB, SQL, TensorFlow, Keras</b>.
              <br />
              <br />
              My areas of interest include{" "}
              <b className="purple">Web Technologies</b>,{" "}
              <b className="purple">Data Science</b>, and{" "}
              <b className="purple">Problem Solving</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chandhresh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chandhresh-b-20b564229/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
