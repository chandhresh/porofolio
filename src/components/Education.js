import React from "react";
import { Container } from "react-bootstrap";

function Education() {
  return (
    <Container
      fluid
      id="education"
      style={{
        paddingTop: "110px",
        paddingBottom: "30px",
        backgroundImage:
          "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Education
      </h1>

      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          borderLeft: "3px solid #9c88ff",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "10px",
          boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
          color: "#ddd",
        }}
      >
        <h3 style={{ color: "#9c88ff", marginBottom: "10px" }}>
          M.Sc. Computer Science
        </h3>
        <p>Pondicherry University (Nov 2023 – Apr 2025)</p>
        <p>
          <strong>CGPA:</strong> 8.23
        </p>
      </div>

      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          borderLeft: "3px solid #9c88ff",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "10px",
          boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
          color: "#ddd",
        }}
      >
        <h3 style={{ color: "#9c88ff", marginBottom: "10px" }}>
          BCA - Bachelor of Computer Applications
        </h3>
        <p>Indira Gandhi College of Arts and Science (Jul 2020 – Aug 2023)</p>
        <p>
          <strong>CGPA:</strong> 7.79
        </p>
      </div>

      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          borderLeft: "3px solid #9c88ff",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "10px",
          boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
          color: "#ddd",
        }}
      >
        <h3 style={{ color: "#9c88ff", marginBottom: "10px" }}>HSC</h3>
        <p>New Modern Vidhya Mandir HSS School (Jul 2018 – Mar 2020)</p>
        <p>
          <strong>Percentage:</strong> 97%
        </p>
      </div>
    </Container>
  );
}

export default Education;
