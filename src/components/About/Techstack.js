import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiVisualstudiocode,
  SiLinux,
  SiWindows,
  SiFlutter,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus size={50} title="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={50} title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size={50} title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava size={50} title="Java" />
      </Col>

      {/* Frameworks / Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs size={50} title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size={50} title="React.js" />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb size={50} title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql size={50} title="PostgreSQL" />
      </Col>

      {/* Tools / Platforms */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit size={50} title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter size={50} title="Flutter" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs size={50} title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={50} title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux size={50} title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows size={50} title="Windows" />
      </Col>
    </Row>
  );
}

export default Techstack;
