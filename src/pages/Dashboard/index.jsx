import { enGB } from "date-fns/locale";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import Appointments from "./Appointments";
import SideBar from "./SideBar";

const DashBoard = () => {
  const [selectDate, setSelectDate] = useState(new Date());

  //   useEffect(() => {
  //     const date = { date: selectDate.toDateString() };
  //     fetch("http://localhost:5050/appointmentsByDate", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify(date),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setAppointments(result);
  //       });
  //   }, [selectDate]);

  return (
    <div>
      <Row style={{ backgroundColor: "#f4fdfb", height: "100vh" }}>
        <SideBar />
        <div className="col-md-5 p-4">
          <h4>
            <strong>Appointment</strong>
          </h4>
          <div
            className="p-4 mt-5 bg-light"
            style={{ border: "none", boxShadow: "0px 0px 9px 1px rgba(0, 0, 0, 0.2)" }}
          >
            <DatePickerCalendar date={selectDate} onDateChange={setSelectDate} locale={enGB} />
          </div>
        </div>
        <Appointments date={selectDate} />
      </Row>
    </div>
  );
};

export default DashBoard;
