import React from 'react';
import "./style.css"


const Contact = () => {

  return (
    <div className='contact-cont'>
      <div className="for-sections-link">
        <h4>Home</h4>
        <span>/</span>
        <h4 id="shop-list">Contact</h4>
      </div>
      <div className='name-cont'>
        <h1>CONTACT US-------------------------------------------------------------------------------------------------</h1>
      </div>
      <div className='cont-for-inputs'>
        <label>
          <input name='Name' type="Name" placeholder='Your Name' />
        </label>
        <label>
          <input name='Email' type="Email" placeholder='Your Email' />
        </label>
        <label>
          <input type="text" placeholder='Subject' />
        </label>
        <label>
          <input id='message' type="text" placeholder='Message' />
        </label>
        <button>Send Message</button>
      </div>
      <div className='cont-for-lokation'>
        <div className='box-for-iframe'>
          <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d918.07650149806!2d-43.38914!3d-23.012534000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa62b20f8f46e46bd!2sQuiosque%20Sol%20Da%20Barra!5e0!3m2!1sen!2sth!4v1655650210755!5m2!1sen!2sth" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className='box-for-lokation'>
          <p>123 Street, New York, USA</p>
          <p>info@example.com</p>
          <p>+012 345 67890</p>
        </div>
      </div>
    </div>
  )
};

export default Contact;