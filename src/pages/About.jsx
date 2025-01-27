import Navbar from './Navbar';
import "./About.css";

const About = () => {
  return (
    <div>
    <Navbar />
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Bike Rental Service! We are committed to providing top-quality bikes for your travel, adventure, and daily needs. Our wide range of bikes is perfect for every terrain and occasion, ensuring a comfortable and reliable experience.
      </p>

      <h2>Documents Required</h2>
      <ul className="documents-list">
        <li>Government-issued Photo ID (e.g., Aadhar Card, Passport, Drivers License).</li>
        <li>Proof of Address (e.g., Utility Bill, Bank Statement).</li>
        <li>Security Deposit (refundable).</li>
        <li>Drives License (for electric bikes or where required).</li>
      </ul>

      <h2>Rules and Regulations</h2>
      <ol className="rules-list">
        <li>
          <strong>Age Limit:</strong> The minimum age for renting a bike is 18 years. Please carry valid age proof.
        </li>
        <li>
          <strong>Safety Gear:</strong> Helmets must be worn at all times during bike usage. Helmets will be provided if needed.
        </li>
        <li>
          <strong>Damage Responsibility:</strong> Any damage to the bike during the rental period is the renters responsibility.
        </li>
        <li>
          <strong>Usage Limitations:</strong> Bikes are to be used only within the permitted area specified at the time of rental.
        </li>
        <li>
          <strong>Timely Return:</strong> Bikes must be returned within the agreed rental period. Late returns will incur additional charges.
        </li>
        <li>
          <strong>Alcohol/Drug Prohibition:</strong> Bikes must not be used under the influence of alcohol or drugs.
        </li>
        <li>
          <strong>Security Deposit:</strong> A refundable deposit will be collected at the time of rental. It will be returned after the bike is inspected.
        </li>
        <li>
          <strong>Cancellation Policy:</strong> Cancellations must be made at least 24 hours in advance for a full refund.
        </li>
      </ol>

      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Feel free to reach out to us:
      </p>
      <p>Email: support@bikerental.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
  </div>
  );
};

export default About;
