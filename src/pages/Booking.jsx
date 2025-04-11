import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from './Navbar';
import "./Booking.css";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bike, daysBooked, totalAmount } = location.state || {};
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const message = `
    ✅ Booking Confirmed!
  
    🚲 Bike: ${bike.name}
    📝 Description: ${bike.description}
    📅 Days Booked: ${daysBooked}
    💰 Total Amount: Rs ${totalAmount}

    ✅ User Details !

    👤 Name: ${userDetails.name}
    📧 Email: ${userDetails.email}
    📞 Phone: ${userDetails.phone}
  
    Thank you for choosing us!
    `;
  
    console.log("Booking Confirmed:", {
      bike,
      daysBooked,
      totalAmount,
      userDetails,
    });
  
    alert(message);

    // Optional: reset form fields
    setUserDetails({
      name: "",
      email: "",
      phone: "",
    });

    // Optional: navigate to a confirmation page or home
    navigate("/bikes", { state: { bike, userDetails } });
  };

  if (!bike) {
    return <p>No booking details available. Please go back to the catalog page.</p>;
  }

  return (
    <div>
      <Navbar />
    <div className="booking-container">
      <h2>Booking Details</h2>
      <div className="bike-details">
        <img src={bike.image} alt={bike.name} className="bike-image" />
        <h3>{bike.name}</h3>
        <p>{bike.description}</p>
        <p><strong>Daily Rent:</strong> Rs {bike.dailyRent}</p>
        <p><strong>Number of Days:</strong> {daysBooked}</p>
        <p><strong>Total Amount:</strong> Rs {totalAmount}</p>
      </div>

      <form className="user-details-form" onSubmit={handleSubmit}>
        <h3>Your Details</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="confirm-button">
          Confirm Booking
        </button>
      </form>
    </div>
    </div>
  );
};

export default Booking;
