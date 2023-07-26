import React from 'react'
import Button from 'react-bootstrap/Button';
import {
    Link
  } from "react-router-dom"; 

export default function Footer1() {
  return (
    <>
     <div className="section-introduction">
        <span className="header-2">
          <h1 style={{ fontSize: 50 }}>Let's work together</h1>
        </span>
        <span className="paragraph-2">
          <p>
          Let's create something beautiful together! At Norwood Interiors, we believe in collaboration to bring your unique vision to life. Whether you're a homeowner or business owner, let's work together to take your space to the next level. Get in touch and let's get started!
          </p>
        </span>
        <Button as={Link} to="/contact" variant="dark" className="rounded-pill mx-1">Contact Us</Button>
      </div>
    </>
  )
}
