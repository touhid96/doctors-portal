import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../../App.css";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/Header/NavBar";
import AppointmentItem from "./AppointmentItem";
import AppointmentMain from "./AppointmentMain";

const fakeData = [
  {
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHour: "8.00 AM - 12.00 PM",
    space: 50,
  },
  {
    id: 2,
    subject: "Cosmetic Dentistry",
    visitingHour: "12.00 PM - 4.00 PM",
    space: 50,
  },
  {
    id: 3,
    subject: "Teeth Cleaning",
    visitingHour: "9.00 AM - 1.00 PM",
    space: 50,
  },
  {
    id: 4,
    subject: "Cavity Protection",
    visitingHour: "11.00 AM - 3.00 PM",
    space: 50,
  },
  {
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHour: "10.00 AM - 2.00 PM",
    space: 50,
  },
  {
    id: 6,
    subject: "Teeth Orthodontics",
    visitingHour: "5.00 PM - 9.00 PM",
    space: 50,
  },
];

const Appointment = () => {
  const [date, setDate] = useState(new Date().toDateString());
  const datePicker = (date) => {
    setDate(date.toDateString());
  };

  return (
    <div>
      <div className="appointment-header">
        <NavBar />
        <AppointmentMain datePicker={datePicker} />
      </div>
      <h2
        className="text-center mt-5"
        style={{ color: "#1cc7c1", fontWeight: "700", letterSpacing: "1px" }}
      >
        Available Appointment On <span className="text-secondary">{date}</span>
      </h2>
      <Container>
        <Row className="mt-5">
          {fakeData.map((item) => (
            <AppointmentItem key={item.id} cardData={item} date={date} />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Appointment;
