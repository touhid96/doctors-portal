import React from 'react';
import '../../../App.css'
import { Col, Container, Row } from 'react-bootstrap';
import doctor from '../../../images/5790-removebg.png'

const Appointment = () => {
    return (
        <section className="appointment">
            <Row>
                <Col md={5}>
                    <img src={doctor} alt="" />
                </Col>
                <Col md={6}>
                    <h5 style={{ color: '#1cc7c1', fontWeight: '700', letterSpacing: '2px' }} className="my-5">APPOINTMENT</h5>
                    <h1 className="text-light">Make an Appointment <br /> Today</h1>
                    <p className="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, quod. ipsum dolor sit amet consectetur adipisicing elit. Harum saepe, ea tempore dolores quo quae.</p><br/>
                    <button className="button text-light"><span>LEARN MORE</span></button>
                </Col>
            </Row>
        </section>
    );
};

export default Appointment;