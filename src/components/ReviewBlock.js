import React from 'react'
import "../App.css";
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function ReviewBlock() {
    const reviews = [
        {
          name: 'John Doe',
          comment: 'Great product! I loved it.',
          socialMediaHandle:'@johndoe',
        },
        {
          name: 'Jane Smith',
          comment: 'Awesome service! Will buy again.',
          socialMediaHandle:'@janesmith',
        },
        {
          name: 'Jane Smith',
          comment: 'Awesome service! Will buy again.',
          socialMediaHandle:'@janesmith',
        },
        {
          name: 'Jane Smith',
          comment: 'Awesome service! Will buy again.',
          socialMediaHandle:'@janesmith',
        },
        {
          name: 'Jane Smith',
          comment: 'Awesome service! Will buy again.',
          socialMediaHandle:'@janesmith',
        },
        {
          name: 'Jane Smith',
          comment: 'Awesome service! Will buy again.',
          socialMediaHandle:'@janesmith',
        }
      ];
  return (
    <>
    <div className='section-testimonials'>
        <span className='header'>
        <h1 style={{ fontSize: 50 }}>What Our Clients Say</h1>
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
    <Container className='p-4'>
    <Row>
        {reviews.map((review, index) => (
          <Col>
            <Card key={index} md={4} className="mb-3 mx-1">
            <div className="profile-picture-container">
                <Card.Img src={"https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg"} className="profile-picture" />
              </div>
            <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>
                {review.socialMediaHandle}
                </Card.Text>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>          
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </>
  )
}

