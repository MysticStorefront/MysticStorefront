import React from "react";
import "../Style/About.css";
import { Card, Col, Row, Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import Footer1 from './Footer1'

export default function About() {
  const Employees = [
    {
      name: "John Doe",
      socialMediaHandle: "@johndoe",
    },
    {
      name: "Jane Smith",
      socialMediaHandle: "@janesmith",
    },
    {
      name: "Jane Smith",
      socialMediaHandle: "@janesmith",
    },
    {
      name: "Jane Smith",
      socialMediaHandle: "@janesmith",
    },
    {
      name: "Jane Smith",
      socialMediaHandle: "@janesmith",
    },
    {
      name: "Jane Smith",
      socialMediaHandle: "@janesmith",
    },
  ];
  return (
     <>
      <div className="section-hero-title">
        <span className="about-header">
          <h1 style={{ fontSize: 50 }}>About</h1>
        </span>
        <span className="paragraph">
          <p>
            LLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </span>
      </div>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Employees</Card.Title>
              <Card.Text>6</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Location</Card.Title>
              <Card.Text>New York, USA</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>80</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="section-hero-title">
        <span className="header2">
          <h1 style={{ fontSize: 50 }}>Our Team</h1>
        </span>
      </div>
      <Container className="p-4">
        <Row>
          {Employees.map((Employee, index) => (
            <Col>
              <Card key={index} md={4} className="mb-3 mx-1">
                <div className="profile-picture-container">
                  <Card.Img
                    src={
                      "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg"
                    }
                    className="profile-picture"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{Employee.name}</Card.Title>
                  <Card.Text>{Employee.socialMediaHandle}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <LandingPage header = {"feature-image"}/>
      <Footer1 />
    </>
  );
}
