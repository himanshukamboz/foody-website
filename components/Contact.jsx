
import React, { useState } from 'react';
import"../contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.firstname.trim()) {
      errors.firstname = 'Firstname is required';
    }

    if (!formData.lastname.trim()) {
      errors.lastname = 'lastname is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Here, you would typically send the form data to a server
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
      });
      alert('Thank you for contacting us!');
    }
  };
  return (
    <div className='formparent'>
    <div className="contact-us-form">
      <h2>Contact Us</h2>
      <hr style={{ borderTop: "1px dotted #000" }} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" >Name:</label>
          <div id="name">
          <div className='name'>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder='firstname'
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p className=" error errorname">{errors.firstname}</p>}
          </div>
          <div className='name'>
          <input
            type="text"
            id="firstname"
            name="lastname"
            placeholder='lastname'
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p className=" error errorname">{errors.lastname}</p>}
          </div> 
          </div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='xxxx@gmail.com'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            className='no-scrollbar custom-placeholder'
            name="message"
            placeholder='Write Your Query'
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
