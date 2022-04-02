import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import PatientTable from "./PatientTable";

const Appointments = ({ date }) => {
  const [appointments, setAppointments] = useState([]);
  console.log(appointments, date.toDateString());

  useEffect(() => {
    const res = JSON.parse(localStorage["appointments"]);
    setAppointments(res);
  }, []);

  return (
    <div
      className="col-md-5 my-5 p-5"
      style={{ border: "none", boxShadow: "0px 0px 9px 1px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="d-flex justify-content-between">
        <h5>Appointments</h5>
        <p>{date.toDateString()}</p>
      </div>
      <Table className="mt-5" hover size="sm">
        <thead>
          <tr>
            <td>Name</td>
            <td>Schedule</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {appointments.length &&
            appointments.map(
              (item) =>
                item.date === date.toDateString() && <PatientTable key={item._id} data={item} />
            )}
        </tbody>
      </Table>
    </div>
  );
};

export default Appointments;
