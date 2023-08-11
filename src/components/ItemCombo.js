import React, { useState } from 'react';
import Footer1 from "./Footer1";
import { Col, Row, Container } from "react-bootstrap";
import Combodata from "../Dataset/ComboDataset.json";
import { useParams } from "react-router-dom";
import CardWithModal from './CardModal';

export default function ItemCombo() {
  const [ntitle, setNtitle] = useState(''); 
  const [email, setEmail] = useState('');
  const [emailTitlePairs, setEmailTitlePairs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const info = useParams();
  const data = Combodata.data.filter((data) => {
    return data.name === info.itemId;
  });
  return (
    <>
      <div className="post">
        <span className="header">
          <h1 style={{ fontSize: 50 }}>{data[0].name}</h1>
        </span>
      </div>
      <Container className="p-2">
        <Row>
          {data[0].offers.map((items, index) => (
            <Col md={3}>
              <CardWithModal ntitle={ntitle} setNtitle={setNtitle} email={email} setEmail={setEmail} emailTitlePairs={emailTitlePairs} setEmailTitlePairs={setEmailTitlePairs} showModal={showModal} setShowModal={setShowModal} index={index} title={items.name} text={items.text} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer1 />
    </>
  );
}
