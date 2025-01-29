import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from './Navbar';
import "./Bikes.css";

const Bikes = () => {
  const [days, setDays] = useState({});
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const bikes = [
    { id: 1, name: "KTM", description: "Ready to Race,emphasizing high-performance and adventure.", image: "/images/ktm.jpg", dailyRent: 1200 },
    { id: 2, name: "HIMALAYAN", description: "Built for all roads. Built for no roads.", image: "/images/himalayan.webp", dailyRent: 1700 },
    { id: 3, name: "ROYAL ENFIELD", description: "Classic craftsmanship meets timeless adventure.", image: "/images/RE.jpg", dailyRent: 1500 },
    { id: 4, name: "YAMAHA R15", description: "Born to Race, Built to Thrill.", image: "/images/R15.webp", dailyRent: 1300 },
    { id: 5, name: "YAMAHA FZ", description: "Refined power, unmatched style.", image: "/images/FZ.jpg", dailyRent: 1000 },
    { id: 6, name: "HONDA UNICORN", description: "Smooth, Reliable, and Timeless Performance.", image: "/images/unicorn.jpg", dailyRent: 900 },
    { id: 7, name: "PULSAR 150", description: "Unleash the thrill, ride the legend.", image: "/images/Pulsar.png", dailyRent: 800 },
    { id: 8, name: "BAJAJ PLATINA", description: "Comfort and Mileage, Redefined.", image: "/images/platina.jpg", dailyRent: 700 },
    { id: 9, name: "TVS XL 100", description:  "The trusted companion for every journey.", image: "/images/tvsxl.png", dailyRent: 500 },
  ];

  const handleBook = (bike) => {
    const daysBooked = days[bike.id] || 1;
    const totalAmount = bike.dailyRent * daysBooked;

    // Navigate to the Booking page and pass the bike details and other data
    navigate("/booking", {
      state: {
        bike: bike,
        daysBooked: daysBooked,
        totalAmount: totalAmount,
      },
    });
  };

  return (
    
    <div>
      <Navbar />
      <div className="catalog-container">
        {bikes.map((bike) => (
          <div key={bike.id} className="bike-item">
            <img src={bike.image} alt={bike.name} className="bike-image" />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <p className="daily-rent">Daily Rent: Rs {bike.dailyRent}</p>
            <div className="days-container">
              <label htmlFor={`days-${bike.id}`} className="strong-label">No. of Days: </label>
              <input
                id={`days-${bike.id}`}
                type="number"
                min="1"
                value={days[bike.id] || ""}
                onChange={(e) => setDays({ ...days, [bike.id]: parseInt(e.target.value, 10) })}
                className="days-input"
              />
            </div>
            <button className="book-button" onClick={() => handleBook(bike)}>
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
