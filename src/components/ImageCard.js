import React from "react";
import Card from "react-bootstrap/Card";
import {
    Link
  } from "react-router-dom"; 

export default function ImageCard(props) {
  const{title, URL} = props;
  return (
    <>
      <Card as={Link} to={`/item/${title}`}>
        <Card.Img variant="top" src={URL} alt={title}/>
      </Card>
    </>
  );
}
