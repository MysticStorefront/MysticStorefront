import React from 'react';
import { Card, Button, Modal } from "react-bootstrap";

const CardWithModal = (props) => {
    const { title, text, index, email, setEmail, showModal, setShowModal, emailTitlePairs, setEmailTitlePairs, ntitle, setNtitle } = props;
    const handleOpenModal = () => {
        setNtitle(title);
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setNtitle('');
        setShowModal(false);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleSave = () => {
        if (email && ntitle) {
            const newPair = { email, ntitle };
            setEmailTitlePairs([...emailTitlePairs, newPair]);
            setEmail('');
            setShowModal(false);
        }
    };
    return (
        <>
            <Card key={index} md={4} className="mb-3 mx-1">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="dark" onClick={handleOpenModal}>
                        Open Modal
                    </Button>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default CardWithModal;
