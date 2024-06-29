import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FiClock, FiCalendar } from "react-icons/fi"; // Importing icons from react-icons
import "./DateTimeDisplay.css"; // Custom CSS file for additional styling

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update the date and time every second

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <Container className="mt-3">
      <div className="text-center">
        <h5 className="mb-3 clock-text">
          <FiClock className="mr-2 clock-icon" />
          {currentDateTime.toLocaleTimeString()}
        </h5>
        <p className="calendar-text">
          <FiCalendar className="mr-2 calendar-icon" />
          {currentDateTime.toLocaleDateString()}
        </p>
      </div>
    </Container>
  );
};

export default DateTimeDisplay;
