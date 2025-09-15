import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiLinux, SiWindows } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* Windows */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>

      {/* Linux */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
    </Row>
  );
}

export default Toolstack;
