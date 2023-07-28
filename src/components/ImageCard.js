import React from "react";
import Card from "react-bootstrap/Card";
import {
    Link
  } from "react-router-dom"; 

export default function ImageCard(props) {
  const{title, URL, setData} = props;
  const handleClick=()=>{
    console.log("ImageCard", title)
    setData({title: title})
  }
  return (
    <>
      <Card as={Link} to={`/item/${title}`} onClick={handleClick}>
        <Card.Img variant="top" src={URL} alt={title}/>
      </Card>
    </>
  );
}
