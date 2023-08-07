import React from "react";
import Footer1 from "./Footer1";
import { Card, Col, Row, Container } from "react-bootstrap";
import data from "../Dataset/Appliances.json";
import "../Style/Item.css";
import { useParams } from "react-router-dom";

export default function Item(props) {
  const GTitle = useParams();
  const DispData = data.data.filter((data) => {
    return data.title === GTitle.itemId;
  });
  console.log(DispData[0].title);
  const itemsArray = DispData[0].items.map((item) => item.name);
  console.log(itemsArray);
  // console.log(DispData.items);
  return (
    <>
      <div className="post">
        <span className="header">
          <h1 style={{ fontSize: 50 }}>{DispData[0].title}</h1>
        </span>
      </div>
      <Container className="p-2">
        <Row>
          {DispData[0].items.map((items, index) => (
            <Col>
              <Card key={index} md={4} className="mb-3 mx-1">
                <Card.Body>
                  <Card.Title>{items.name}</Card.Title>
                  <Card.Text>{items.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxWidth: '1500px', 
        margin: '0 auto' 
      }}>
        {DispData[0].items.map((item, index) => (
          <div key={index} className="image-item" style={{ flex: '0 0 calc(50% - 10px)',
          marginBottom: '20px'}}>
            <img src={item.imageUrl} alt={item.name} style={{width: '100%',
    height: 'auto'}} />
          </div>
        ))}
      </div>
      {/* <Container className="">
        <Row>
          {DispData[0].items.map((item, index) => (
            <Col>
              <img src={item.imageUrl} alt={item.name} />
            </Col>
          ))}
        </Row>
      </Container> */}
      <Footer1 />
    </>
  );
}
