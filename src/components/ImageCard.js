import React from "react";
import Card from "react-bootstrap/Card";
import {
    Link
  } from "react-router-dom"; 

export default function ImageCard() {
  return (
    <>
      <Card as={Link} to="/item">
        <Card.Img variant="top" src="https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg" />
      </Card>
    </>
  );
}
