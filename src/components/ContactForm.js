import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  return (
    <div>
      <form>
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className='my-3'>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <input
              type="text"
              name="name"
              placeholder={formData.name ? "":"Name"}
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ flex: 1 }}>
            <input
              type="email"
              name="email"
              placeholder={formData.email ? "":'Email'}
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        </div>
        <textarea
          name="message"
          placeholder={formData.message ? "":"Message"}
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, height: '100px'}}
        />
        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};
const buttonStyle = {
  backgroundColor: 'black',
  width: '100%',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  marginTop: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease-in-out'
};

export default ContactForm;
