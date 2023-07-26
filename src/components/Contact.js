import React, { useState } from "react";
import "../Style/Contact.css";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <>
      <div className="header-area">
        <span className="contact-header">
          <h1 style={{ fontSize: 50 }}>Contact</h1>
        </span>
        <span className="contact-paragraph">
          <p>
          Welcome to Norwood Interiors' contact page! We are delighted that you are considering our interior design agency to help you create your dream space. At Norwood Interiors, we believe that your space should reflect your personality and style, and we are committed to making that a reality. Our experienced designers are dedicated to providing you with exceptional service, and we take pride in creating custom designs that exceed your expectations. Whether you're looking to transform your home or office, we are here to help you every step of the way. Please fill out the form below to schedule a consultation with us, and let's bring your vision to life together!
          </p>
        </span>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 2, marginRight: "20px"}}>
          <ContactForm />
        </div>
        <div style={{ flex: 1}}className="my-2 mx-3">
          <div>
            <h2>Address</h2>
            <div>40 West 25th Street,</div>
            <div>New York</div>
            <div>NY 10010</div>
            <br></br>
            <div>info@norwood@gmail.com</div>
            <div>tel: 0000 000 000</div>
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
        </div>
      </div>
    </>
  );
}
const styles = {
  socialMedia: {
    justifyContent: 'flex-end',
  },
  icon: {
    fontSize: '24px',
    color: '#333',
    margin: '15px 10px',
  }
};
