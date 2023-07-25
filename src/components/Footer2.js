import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    Link
  } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div style={styles.companyInfo}>
              <h4>Norwood</h4>
              <p>Norwood Interiors  |  Interior Designer  |  New York, USA
                <br/>
              40 West 25th Street, New York, NY 10010
              <br/>
              000-000-0000  |  info@norwoodinteriors.com</p>
            </div>
            <div style={styles.socialMedia}>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
              </a>
              <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
              </a>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
              </a>
              <a href="https://www.whatsapp.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} style={styles.icon} />
              </a>
            </div>
          </div>
          <div className="col-md-6  d-flex flex-column align-items-md-end">
            <div style={styles.buttonWrapper}>
            <Button as={Link} to="/about" variant="outline-dark" className="rounded-pill mx-1">About</Button>
            </div>
            <div style={styles.buttonWrapper}>
            <Button as={Link} to="/contact" variant="dark" className="rounded-pill mx-1">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
  },
  companyInfo: {
    marginBottom: '10px',
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '24px',
    color: '#333',
    margin: '0 10px',
  },
  buttonWrapper: {
    margin: '5px 0',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default Footer;
