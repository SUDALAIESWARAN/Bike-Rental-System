import Navbar from './Navbar';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Wed love to hear from you! If you have any questions, concerns, or feedback, feel free to get in touch with us. Our team is always ready to assist you.
      </p>

      <h2>Contact Details</h2>
      <ul className="contact-list">
        <li><strong>Email:</strong> support@bikerental.com</li>
        <li><strong>Phone:</strong> +91 9876543210</li>
        <li><strong>Address:</strong> 123, Green Avenue, Bike City, Coimbatore</li>
        <li><strong>Working Hours:</strong> Monday to Saturday, 9:00 AM - 6:00 PM</li>
      </ul>

      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
