import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ModalForm = ({ title, date }) => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    data.service = title;
    data.date = date;
    data.create = new Date();
    const existingAppointments = JSON.parse(localStorage["appointments"]);
    localStorage.setItem("appointments", JSON.stringify([...existingAppointments, data]));
    handleClose();
  };

  return (
    <>
      <Button className="button text-light" onClick={handleShow}>
        <span>APPOINTMENT</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex flex-column align-items-center">
          <Modal.Title style={{ color: "#1cc7c1", fontWeight: "700", letterSpacing: "1px" }}>
            {title}
          </Modal.Title>
          <p className="text-center text-secondary mb-5">Appoint On {date}</p>
        </Modal.Header>
        <Modal.Body>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                required
                placeholder="Name"
                {...register("name")}
                className="form-control p-3"
                style={{ fontSize: "20px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                {...register("email")}
                required
                placeholder="E-mail"
                className="form-control p-3"
                style={{ fontSize: "20px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                {...register("phone")}
                required
                placeholder="Phone Number"
                className="form-control p-3"
                style={{ fontSize: "20px" }}
              />
            </div>
            <div className="form-group d-flex">
              <input
                type="number"
                {...register("age")}
                required
                placeholder="Age"
                className="form-control"
                style={{ fontSize: "20px" }}
              />

              <input
                type="number"
                {...register("weight")}
                required
                placeholder="Weight"
                className="form-control"
                style={{ fontSize: "20px" }}
              />
            </div>
            <div className="form-group row">
              <select
                {...register("gender")}
                className="form-select p-1 mx-4"
                style={{ fontSize: "20px" }}
              >
                <option selected>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="button text-light">
                <span>SEND</span>
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;
